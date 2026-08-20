import { resources } from "@/content/resources-content";

import type { AssessLeadInput } from "./assess-schema";
import type { DistributorLeadInput } from "./distributor-schema";
import type { ResourceLeadInput } from "./resource-schema";
import type { LeadInput } from "./schema";

/**
 * Server-only. Delivers lead notifications via Resend's REST API.
 *
 * We call the HTTP API with `fetch` rather than installing the `resend` SDK:
 * it is a single POST, it adds no dependency to the project, and it keeps the
 * provider trivially swappable. Swap to the SDK if batching, attachments, or
 * webhooks are needed later.
 *
 * Never import this module from a Client Component — it reads secrets.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const REQUEST_TIMEOUT_MS = 10_000;

export type MailConfig = {
  apiKey: string;
  from: string;
  to: string;
};

/**
 * Reads the delivery configuration from the environment. Returns `null` when
 * delivery is not wired up yet, which is the expected state until the client
 * confirms official contact details (see `site-config.ts`, C-017). Callers must
 * degrade gracefully rather than pretending a message was sent.
 */
export function getMailConfig(
  intent: LeadInput["intent"] | "resource",
): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.LEAD_FROM_EMAIL?.trim();
  const generalTo = process.env.LEAD_TO_EMAIL?.trim();
  const partnerTo = process.env.LEAD_PARTNER_TO_EMAIL?.trim();

  // Distributor/partner enquiries can be routed to a different inbox; when the
  // partner address is unset they fall back to the general one.
  const to = intent === "partner" ? partnerTo || generalTo : generalTo;

  if (!apiKey || !from || !to) return null;

  return { apiKey, from, to };
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Lead content is untrusted input; escape before interpolating into HTML. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]!);
}

/**
 * Strip CR/LF (and other control characters) before putting user input into a
 * mail header. A newline in a header value is the classic email header
 * injection vector — it can append `Bcc:` or similar. The provider very likely
 * rejects this too, but the guarantee belongs here, not in their API.
 */
function headerSafe(value: string, maxLength = 120): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

const INTENT_LABELS: Record<LeadInput["intent"], string> = {
  assessment: "Pool assessment request",
  specialist: "Specialist enquiry",
  partner: "Distributor / partner enquiry",
};

function rowsToBodies(
  title: string,
  rows: Array<[string, string]>,
  notes?: Array<[string, string]>,
) {
  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    ...(notes ?? []).flatMap(([label, value]) => ["", `${label}:`, value]),
  ].join("\n");

  const html = [
    '<div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;color:#0f172a">',
    `<h2 style="margin:0 0 16px;font-size:16px">${escapeHtml(title)}</h2>`,
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">',
    ...rows.map(
      ([label, value]) =>
        `<tr><td style="padding:4px 16px 4px 0;vertical-align:top;color:#475569">${escapeHtml(label)}</td>` +
        `<td style="padding:4px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    ),
    "</table>",
    ...(notes ?? []).flatMap(([label, value]) => [
      `<p style="margin:16px 0 4px;color:#475569;font-size:14px">${escapeHtml(label)}</p>`,
      `<p style="margin:0;white-space:pre-wrap;font-size:14px">${escapeHtml(value)}</p>`,
    ]),
    "</div>",
  ].join("");

  return { text, html };
}

function buildBody(lead: LeadInput) {
  return rowsToBodies(
    INTENT_LABELS[lead.intent],
    [
      ["Intent", INTENT_LABELS[lead.intent]],
      ["Name", lead.name],
      ["Email", lead.email],
      ["Organization", lead.organization || "—"],
      ["Pool type", lead.poolType || "—"],
    ],
    [["Message", lead.message]],
  );
}

function buildDistributorBody(lead: DistributorLeadInput) {
  const title = "Distributor application (QR form)";
  return rowsToBodies(
    title,
    [
      ["Source", "QR /apply form"],
      ["Company", lead.company],
      ["Location", lead.location],
      ["Contact name", lead.name],
      ["Email", lead.email],
      ["Phone", lead.phone?.trim() || "—"],
      ["Preferred contact", lead.preferredContact],
      ["Customer categories", lead.customerCategories.join(", ")],
      ["Geographic coverage", lead.geographicCoverage],
      ["Interest", lead.interests.join(", ")],
      ["Estimated initial order", lead.orderRange],
      [
        "Territory exclusivity",
        lead.exclusivityInterest ? "Requested — discuss availability" : "Not requested",
      ],
    ],
    [["Current pool / water-treatment portfolio", lead.portfolio]],
  );
}

export type SendResult =
  | { ok: true; id: string | null }
  | { ok: false; reason: string };

async function deliverEmail(
  config: MailConfig,
  payload: {
    replyTo: string;
    subject: string;
    text: string;
    html: string;
  },
): Promise<SendResult> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        // Lets the team reply straight to the enquirer. The `from` address
        // stays on our verified domain so SPF/DKIM still pass.
        reply_to: headerSafe(payload.replyTo, 200),
        subject: headerSafe(payload.subject),
        text: payload.text,
        html: payload.html,
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      // Provider error bodies can echo submitted data; log status only.
      return { ok: false, reason: `provider responded ${response.status}` };
    }

    const data: unknown = await response.json().catch(() => null);
    const id =
      data && typeof data === "object" && "id" in data
        ? String((data as { id: unknown }).id)
        : null;

    return { ok: true, id };
  } catch (error) {
    const reason =
      error instanceof Error && error.name === "AbortError"
        ? "provider request timed out"
        : "provider request failed";
    return { ok: false, reason };
  } finally {
    clearTimeout(timeout);
  }
}

export async function sendLeadEmail(
  lead: LeadInput,
  config: MailConfig,
): Promise<SendResult> {
  const { text, html } = buildBody(lead);
  return deliverEmail(config, {
    replyTo: lead.email,
    subject: `[Zinc'd] ${INTENT_LABELS[lead.intent]} — ${lead.name}`,
    text,
    html,
  });
}

export async function sendDistributorLeadEmail(
  lead: DistributorLeadInput,
  config: MailConfig,
): Promise<SendResult> {
  const { text, html } = buildDistributorBody(lead);
  return deliverEmail(config, {
    replyTo: lead.email,
    subject: `[Zinc'd] Distributor application — ${lead.company}`,
    text,
    html,
  });
}

function buildAssessBody(lead: AssessLeadInput) {
  const title = "Pool assessment (structured funnel)";
  return rowsToBodies(
    title,
    [
      ["Source", "/assess funnel"],
      ["Name", lead.name],
      ["Email", lead.email],
      ["Organization", lead.organization || "—"],
      ["Phone", lead.phone?.trim() || "—"],
      ["Pool type", lead.poolType],
      ["Property type", lead.propertyType],
      ["Pain inventory", lead.pains.join("; ")],
      ["Current treatment", lead.currentTreatment],
      [
        "Estimated volume",
        [
          lead.volumeGallons
            ? `${Math.round(lead.volumeGallons).toLocaleString("en-US")} gal`
            : null,
          lead.volumeLitres
            ? `${Math.round(lead.volumeLitres).toLocaleString("en-US")} L`
            : null,
        ]
          .filter(Boolean)
          .join(" / ") || "—",
      ],
      ["Calculator series", lead.recommendedSeries || "—"],
      [
        "Dimensions",
        [lead.length, lead.width, lead.shallow, lead.deep]
          .filter(Boolean)
          .join(" × ") + (lead.dimensionUnit ? ` ${lead.dimensionUnit}` : "") ||
          "—",
      ],
      ["Pipe size", lead.pipeSize],
      ["Filtration", lead.filtration],
      ["Heater", lead.heater],
      ["Automation", lead.automation],
      ["Electrical nearby", lead.electricalNearby],
      ["Photos ready", lead.photosReady.join(", ") || "None selected"],
      ["pH", lead.ph || "—"],
      ["Total alkalinity", lead.alkalinity || "—"],
      ["Calcium hardness", lead.hardness || "—"],
      ["Free chlorine", lead.chlorine || "—"],
      ["Copper", lead.copper || "—"],
    ],
    [
      ["Pain notes", lead.painNotes || "—"],
      ["Additional notes", lead.notes || "—"],
    ],
  );
}

export async function sendAssessLeadEmail(
  lead: AssessLeadInput,
  config: MailConfig,
): Promise<SendResult> {
  const { text, html } = buildAssessBody(lead);
  return deliverEmail(config, {
    replyTo: lead.email,
    subject: `[Zinc'd] Pool assessment — ${lead.name}`,
    text,
    html,
  });
}

function buildResourceBody(lead: ResourceLeadInput) {
  const resource = resources.find((item) => item.id === lead.resourceId);
  const title = "Resource request";
  return rowsToBodies(
    title,
    [
      ["Source", "/resources"],
      ["Document", resource?.title ?? lead.resourceId],
      ["Resource id", lead.resourceId],
      ["Available to send now", resource?.available ? "Yes" : "No — waitlist"],
      ["Name", lead.name],
      ["Email", lead.email],
      ["Organization", lead.organization || "—"],
      ["Role", lead.role || "—"],
    ],
  );
}

export async function sendResourceLeadEmail(
  lead: ResourceLeadInput,
  config: MailConfig,
): Promise<SendResult> {
  const { text, html } = buildResourceBody(lead);
  const resource = resources.find((item) => item.id === lead.resourceId);
  return deliverEmail(config, {
    replyTo: lead.email,
    subject: `[Zinc'd] Resource request — ${resource?.title ?? lead.resourceId}`,
    text,
    html,
  });
}
