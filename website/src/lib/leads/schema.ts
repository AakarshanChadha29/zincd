import { z } from "zod";

/**
 * Single source of truth for lead-form validation. Imported by both the client
 * form (`components/blocks/contact-form.tsx`) and the server route handler
 * (`app/api/leads/route.ts`) so the two can never drift apart. The server
 * re-validates independently — the client copy is a convenience, not a control.
 */

export const leadIntents = [
  { value: "assessment", label: "Pool assessment" },
  { value: "specialist", label: "Talk to a specialist" },
  { value: "partner", label: "Distributor / partner" },
] as const;

export const leadIntentValues = leadIntents.map((i) => i.value) as [
  "assessment",
  "specialist",
  "partner",
];

export const poolTypes = [
  "Residential / home",
  "Hotel / resort",
  "Commercial / community",
  "Fitness / wellness",
  "Other",
] as const;

export const leadSchema = z.object({
  intent: z.enum(leadIntentValues),
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address.").max(200),
  organization: z.string().trim().max(150).optional(),
  poolType: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail helps us respond well.")
    .max(4000, "Please keep your message under 4000 characters."),
  /**
   * Honeypot. Hidden from real users, so any non-empty value marks the
   * submission as automated.
   *
   * Deliberately NOT constrained to empty here. A `.max(0)` rule would make a
   * filled honeypot fail as an ordinary validation error, which returns a 400
   * naming `company_website` — telling the bot exactly which field is the trap.
   * Instead the value is allowed through validation and the route handler drops
   * it silently with a success-shaped response.
   */
  company_website: z.string().max(200).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadIntent = LeadInput["intent"];

/** Shape returned by `POST /api/leads`, consumed by the form's UI states. */
export type LeadResponse = {
  /** `true` only when the message was actually handed to the email provider. */
  delivered: boolean;
  /** `false` when the provider env vars are absent — delivery is not wired yet. */
  configured: boolean;
  message: string;
  /** Field-level errors, present only on a 400. */
  errors?: Partial<Record<keyof LeadInput, string[]>>;
};
