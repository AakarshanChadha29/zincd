/**
 * Pool assessment funnel — mirrors ZincD Retail Customer form 2
 * (pain → capacity → plumbing → photos → water test). Claims-safe options only.
 */

export const assessPage = {
  eyebrow: "Pool assessment",
  title: "Tell us about the water — we'll match the series",
  description:
    "A structured qualification, not a brochure form. Pain, capacity, plumbing, a photo checklist, and a water-test snapshot. Prefills from the Pool Series Calculator when you arrive from there.",
} as const;

export const assessSteps = [
  { id: "site", label: "Site" },
  { id: "pain", label: "Pain" },
  { id: "capacity", label: "Capacity" },
  { id: "plant", label: "Plant room" },
  { id: "photos", label: "Photos" },
  { id: "water", label: "Water test" },
  { id: "contact", label: "Contact" },
] as const;

export const poolTypeOptions = [
  "In-ground",
  "Above-ground",
  "Spa / plunge",
  "Multiple basins",
  "Other",
] as const;

export const propertyTypeOptions = [
  "Residential / home",
  "Hotel / resort",
  "Commercial / community",
  "Fitness / wellness",
  "Other",
] as const;

/** Pain inventory — what the customer notices, not product promises. */
export const painOptions = [
  "High chlorine demand or strong chlorine smell",
  "Recurring algae",
  "Cloudy or dull water",
  "Scale or hardness deposits",
  "Time spent on weekly chemistry",
  "Unstable pH or alkalinity",
  "Other — I'll describe it",
] as const;

export const currentTreatmentOptions = [
  "Chlorine only",
  "Salt chlorine generator",
  "Mineral / ionization (another brand)",
  "Ozone or UV in the loop",
  "Not sure",
] as const;

export const pipeSizeOptions = [
  '1½"',
  '2"',
  '2½"',
  '3"',
  '4"',
  '6"',
  "Not sure",
] as const;

export const filtrationOptions = [
  "Sand",
  "Cartridge",
  "DE",
  "Other / not sure",
] as const;

export const heaterOptions = [
  "None",
  "Gas",
  "Heat pump",
  "Solar",
  "Not sure",
] as const;

export const automationOptions = [
  "None",
  "Existing pool controller",
  "Not sure",
] as const;

export const electricalOptions = [
  "Yes — outlet or circuit near the pad",
  "No — would need a run",
  "Not sure",
] as const;

export const photoChecklist = [
  {
    id: "pad",
    label: "Equipment pad / plant room",
    hint: "The pump, filter and available wall space.",
  },
  {
    id: "pipe",
    label: "Pipe at the filter return",
    hint: "Where the chamber would sit — include a tape or fitting for scale if you can.",
  },
  {
    id: "disinfection",
    label: "Existing disinfection equipment",
    hint: "Chlorinator, salt cell, or other treatment in the loop.",
  },
  {
    id: "basin",
    label: "Full pool view",
    hint: "Shape and surroundings, not a product shot.",
  },
] as const;

export const customerExplanation = [
  "Copper helps control algae; silver and zinc support the mineral program — ionization works with filtration, not instead of it.",
  "Zinc'd is not a chemical-free system. Residual free chlorine remains part of responsible operation.",
  "Chemistry is monitored: copper, pH, and residual chlorine, plus alkalinity and hardness at commissioning.",
] as const;

export const assessPrivacyNote =
  "We use these details only to match a series and follow up. Photos can be emailed after this form — do not upload files here.";
