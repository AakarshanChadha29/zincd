import { NextResponse } from "next/server";

import { getMailConfig, sendDistributorLeadEmail } from "@/lib/leads/email";
import { checkRateLimit, clientKey } from "@/lib/leads/rate-limit";
import {
  distributorLeadSchema,
  type DistributorLeadResponse,
} from "@/lib/leads/distributor-schema";

/**
 * Lead intake for the short QR distributor form at `/apply`.
 *
 * Public and unauthenticated — every check is server-side.
 */

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;

function json(body: DistributorLeadResponse, init?: ResponseInit) {
  return NextResponse.json(body, init);
}

export async function POST(request: Request) {
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

  const parsed = distributorLeadSchema.safeParse(normalizeCheckboxArrays(payload));
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

  if (lead.company_website) {
    return json({
      delivered: true,
      configured: true,
      message: "Thanks — your enquiry is on its way.",
    });
  }

  const config = getMailConfig("partner");
  if (!config) {
    console.warn("[distributor-leads] delivery not configured; submission not sent");
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

  const result = await sendDistributorLeadEmail(lead, config);
  if (!result.ok) {
    console.error(`[distributor-leads] delivery failed: ${result.reason}`);
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

function normalizeCheckboxArrays(payload: unknown) {
  if (!payload || typeof payload !== "object") return payload;
  const next = { ...(payload as Record<string, unknown>) };
  for (const key of ["customerCategories", "interests"] as const) {
    const value = next[key];
    if (value == null || value === false || value === "") next[key] = [];
    else if (!Array.isArray(value)) next[key] = [value];
  }
  return next;
}

function fieldErrors(error: import("zod").ZodError) {
  const errors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key !== "string") continue;
    (errors[key] ??= []).push(issue.message);
  }
  return errors as DistributorLeadResponse["errors"];
}
