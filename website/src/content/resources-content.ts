/**
 * Gated resources. The draft Gen-2 manual is not distributed until finalized.
 * Hotel planning model + handbooks are requestable via lead capture.
 */

export const resourcesPage = {
  eyebrow: "Resources",
  title: "Technical documents, on request",
  description:
    "Request the hotel planning model, plumber handbook, or maintenance chart. The draft user manual is not distributed until it is finalized.",
} as const;

export const resources = [
  {
    id: "hotel-planning-model",
    title: "Hotel pool planning model",
    summary:
      "A planning model for hospitality chemical spend — self-labeled as a model to validate against invoices, local code, and a controlled pilot. Not a savings guarantee.",
    available: true,
    cta: "Email me the planning model",
  },
  {
    id: "plumber-handbook",
    title: "Handbook for plumbers",
    summary:
      "Install orientation: circulation placement, multi-unit notes, and commissioning checks. For qualified installers.",
    available: true,
    cta: "Email me the plumber handbook",
  },
  {
    id: "maintenance-chart",
    title: "Water-chemistry maintenance chart",
    summary:
      "The chemistry panel used on Installation & Maintenance — copper, pH, alkalinity, hardness, and residual chlorine as a required residual.",
    available: true,
    cta: "Email me the maintenance chart",
  },
  {
    id: "user-manual",
    title: "User & installation manual",
    summary:
      "The current draft still contains placeholders. We will not send it until chlorine spec, warranty percentages, diagrams, and support contacts are complete. Join the waitlist if you want it when it is finalized.",
    available: false,
    cta: "Notify me when the manual is final",
  },
] as const;

export type ResourceId = (typeof resources)[number]["id"];

export const resourceIds = resources.map((r) => r.id) as [
  ResourceId,
  ...ResourceId[],
];
