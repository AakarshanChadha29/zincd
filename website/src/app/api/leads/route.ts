import { NextResponse } from "next/server";

import { getMailConfig, sendLeadEmail } from "@/lib/leads/email";
import { checkRateLimit, clientKey } from "@/lib/leads/rate-limit";
import { leadSchema, type LeadResponse } from "@/lib/leads/schema";

/**
 * Lead intake for the `/contact` form (all three intents, including the
 * distributor/partner path that `/distributors` links into).
 *
 * This route is a public, unauthenticated entry point — anyone can POST to it
 * without going through the UI — so every check here is server-side and none of
 * them trusts the client.
 */

// Reads request headers and secrets; must never be prerendered or cached.
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;

function json(body: LeadResponse, init?: ResponseInit) {
  return NextResponse.json(body, init);
}

export async function POST(request: Request) {
  // 1. Rate limit before doing any work.
  const { limited, retryAfter } = checkRateLimit(clientKey(request));
  if (limited) {
    return json(
      {
        delivered: false,
        configured: true,
        message:
          "Too many enquiries from this connection. Please try again shortly.",
      },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    );
  }

  // 2. Reject oversized or non-JSON payloads.
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json(
      {
        delivered: false,
        configured: true,
        message: "That message is too large to submit.",
      },
      { status: 413 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(
      {
        delivered: false,
        configured: true,
        message: "We couldn't read that submission.",
      },
      { status: 400 },
    );
  }

  // 3. Validate independently of the client.
  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      {
        delivered: false,
        configured: true,
        message: "Some details need attention before we can send this.",
        errors: fieldErrors(parsed.error),
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  // 4. Honeypot. Respond exactly as we do on success so a bot learns nothing,
  //    but send nothing.
  if (lead.company_website) {
    return json({
      delivered: true,
      configured: true,
      message: "Thanks — your enquiry is on its way.",
    });
  }

  // 5. Delivery config. Absent until the client confirms official contact
  //    details, so we say plainly that nothing was sent rather than implying
  //    a message went through.
  const config = getMailConfig(lead.intent);
  if (!config) {
    console.warn("[leads] delivery not configured; submission not sent");
    return json(
      {
        delivered: false,
        configured: false,
        message:
          "Message delivery isn't connected yet, so nothing was sent or stored.",
      },
      { status: 503 },
    );
  }

  // 6. Send.
  const result = await sendLeadEmail(lead, config);
  if (!result.ok) {
    console.error(`[leads] delivery failed: ${result.reason}`);
    return json(
      {
        delivered: false,
        configured: true,
        message:
          "We couldn't send your enquiry just now. Please try again in a moment.",
      },
      { status: 502 },
    );
  }

  return json({
    delivered: true,
    configured: true,
    message: "Thanks — your enquiry is on its way.",
  });
}

/**
 * Flatten zod issues to `{ field: [messages] }`, limited to the fields the form
 * actually renders so nothing unexpected is echoed back to the client.
 */
function fieldErrors(error: import("zod").ZodError) {
  const errors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key !== "string") continue;
    (errors[key] ??= []).push(issue.message);
  }
  return errors as LeadResponse["errors"];
}
