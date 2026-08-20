import { z } from "zod";

/**
 * Short QR-form schema for distributor / wholesale / resale leads.
 * Separate from the general `/contact` enquiry so the two cannot drift into
 * each other — this form is filled on a phone after a scan.
 */

export const customerCategories = [
  "Pool service companies",
  "Builders & remodelers",
  "Dealers & wholesalers",
  "Hospitality / hotels & resorts",
  "Commercial / community pools",
  "Fitness & wellness",
  "Residential / estates",
  "Other",
] as const;

export const partnerInterests = [
  "Distribution",
  "Wholesale",
  "Resale",
] as const;

export const orderRanges = [
  "Exploring / not yet ordering",
  "Sample / 1–2 systems",
  "Opening stock (3–10 systems)",
  "Larger opening order (10+ systems)",
  "To be discussed",
] as const;

export const contactMethods = ["Email", "Phone", "Either"] as const;

const nonEmptyList = <T extends readonly [string, ...string[]]>(
  options: T,
  message: string,
) =>
  z
    .array(z.enum(options))
    .min(1, message)
    .max(options.length);

export const distributorLeadSchema = z
  .object({
    company: z.string().trim().min(2, "Please enter the company name.").max(150),
    location: z
      .string()
      .trim()
      .min(2, "Please enter city, region, or country.")
      .max(200),
    name: z.string().trim().min(2, "Please enter your name.").max(100),
    email: z.email("Please enter a valid email address.").max(200),
    phone: z.string().trim().max(40).optional(),
    customerCategories: nonEmptyList(
      customerCategories,
      "Select at least one customer category.",
    ),
    geographicCoverage: z
      .string()
      .trim()
      .min(2, "Please describe the territory you cover.")
      .max(500),
    portfolio: z
      .string()
      .trim()
      .min(8, "A short note on what you carry today helps us follow up.")
      .max(2000),
    orderRange: z.enum(orderRanges, {
      error: "Please choose an estimated opening-order range.",
    }),
    interests: nonEmptyList(
      partnerInterests,
      "Select distribution, wholesale, and/or resale.",
    ),
    preferredContact: z.enum(contactMethods, {
      error: "Please choose how you'd like us to reply.",
    }),
    /**
     * /distributors states three times that territory exclusivity is available
     * on request, subject to availability and written agreement. Without this
     * field the page makes an offer the funnel cannot accept, and the request
     * arrives — if at all — buried in free text. Optional on purpose: ticking
     * it is a request, never a reservation, and never a qualifying condition.
     */
    exclusivityInterest: z.boolean().optional(),
    /**
     * Honeypot. Same rationale as the contact form: do not constrain to empty
     * here — the route drops a filled value silently.
     */
    company_website: z.string().max(200).optional(),
  })
  .superRefine((value, ctx) => {
    if (value.preferredContact === "Phone" && !value.phone?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["phone"],
        message: "Please add a phone number so we can call you.",
      });
    }
  });

export type DistributorLeadInput = z.infer<typeof distributorLeadSchema>;

export type DistributorLeadResponse = {
  delivered: boolean;
  configured: boolean;
  message: string;
  errors?: Partial<Record<keyof DistributorLeadInput, string[]>>;
};
