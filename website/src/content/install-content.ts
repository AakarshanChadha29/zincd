/**
 * Installation & maintenance copy — Gen-2 chemistry, handbook procedures.
 * Capacity formulas and SOPs from the complete handbook; chemistry targets
 * from the Gen-2 manual (client-confirmed 2026-08-19). Free chlorine ppm is
 * not invented.
 */

import { chlorineResidualNote } from "@/content/product-data";

export const installPage = {
  eyebrow: "Installation & Maintenance",
  titleLead: "Fits your circulation.",
  titleAccent: "Documented upkeep.",
  description:
    "Zinc'd is designed to integrate with existing pool circulation — Series 1 through Series 4. The stainless chamber sits on the filter return with a water-flow sensor in line. Residual free chlorine stays in the program.",
} as const;

export const capacityFormulas = {
  eyebrow: "Pool volume",
  title: "Capacity formulas used on this site",
  description:
    "US-gallon factors from the installer handbook. Irregular shapes are the sum of regular shapes, or a contractor-confirmed capacity.",
  items: [
    {
      shape: "Rectangular",
      imperial: "L × W × average depth × 7.5 = gallons",
      metric: "L × W × average depth × 1000 = litres",
    },
    {
      shape: "Circular",
      imperial: "D × D × average depth × 5.9 = gallons",
      metric: "D × D × average depth × 785 = litres",
    },
    {
      shape: "Oval",
      imperial: "L × W × average depth × 5.9 = gallons",
      metric: "L × W × average depth × 785 = litres",
    },
  ],
  note: "Average depth is shallow-end plus deep-end, divided by two. The Pool Series Calculator uses these same factors.",
} as const;

export const samplingSop = {
  eyebrow: "Water testing",
  title: "Filtration and sampling SOP",
  description:
    "Test sequence from the current product manual: pH first, then copper and the other parameters. Do not mix pool chemicals in the same container.",
  steps: [
    {
      title: "Run filtration first",
      body: "Run the circulation system for at least 30 minutes before sampling so the water is mixed.",
    },
    {
      title: "Sample below the surface",
      body: "Take the sample about 12 inches (30 cm) below the surface, away from inlets, outlets and edges.",
    },
    {
      title: "Test pH first",
      body: "Adjust pH into the acceptable window before reading copper. Copper test accuracy depends on pH being in range.",
    },
    {
      title: "Then copper, alkalinity and hardness",
      body: "Record copper, total alkalinity and calcium hardness with the supplied kit or a professional lab. Residual free chlorine is still part of the program.",
    },
  ],
} as const;

export const operationalStandards = [
  {
    parameter: "pH",
    target: "Ideal 7.2 · acceptable 7.0–7.8",
    frequency: "Check with the test kit; adjust before other readings",
  },
  {
    parameter: "Copper",
    target: "Ideal 0.5 ppm · acceptable 0.4–0.6 ppm",
    frequency: "Per operating program",
  },
  {
    parameter: "Total alkalinity",
    target: "50–80 ppm",
    frequency: "With the chemistry panel",
  },
  {
    parameter: "Calcium hardness",
    target: "150–200 ppm min (vinyl / fiberglass / painted) · ~300 ppm (plaster)",
    frequency: "At commissioning and periodically",
  },
  {
    parameter: "Free chlorine",
    target: "Residual required — specific ppm pending finalized manual",
    frequency: "Per operating program",
  },
] as const;

export const shockSop = {
  eyebrow: "After a storm",
  title: "Post-storm shock SOP",
  description:
    "Handbook procedure for heavy rain, debris, or contamination. Shock is a sanitizer action — it is not an ionization substitute.",
  steps: [
    {
      title: "Filtration for 24 hours",
      body: "Run circulation continuously for 24 hours.",
    },
    {
      title: "Skim and vacuum",
      body: "Remove debris from the surface and floor before adding sanitizer.",
    },
    {
      title: "Shock the water",
      body: "Shock per your sanitizer program. Handbook guidance for this step is 5.0–6.0 ppm free chlorine during the shock window.",
    },
    {
      title: "Stay out until residual returns",
      body: "No swimming until free chlorine has returned to the residual operating range and the water is clear. Residual chlorine remains required in normal operation.",
    },
  ],
} as const;

export const maintenanceSchedule = [
  {
    cadence: "Daily",
    items: [
      "Visual check of water clarity and the equipment pad",
      "Skim surface debris",
      "Confirm the control LCD is reporting and the flow sensor is not bypassed",
    ],
  },
  {
    cadence: "Weekly",
    items: [
      "Test pH, copper, and residual free chlorine",
      "Brush walls and waterline",
      "Check total alkalinity against 50–80 ppm",
    ],
  },
  {
    cadence: "Monthly",
    items: [
      "Inspect the stainless chamber and visible anodes",
      "Confirm charging cable and AC/DC switch operation",
      "Review calcium hardness; if above about 300 ppm, see the Catalytic Super Softener note",
    ],
  },
  {
    cadence: "Quarterly",
    items: [
      "Professional water test if the site program calls for it",
      "Inspect fittings, unions and the flow-sensor run",
    ],
  },
  {
    cadence: "Every 6 months",
    items: [
      "Deeper inspection of the chamber and control enclosure",
      "Review series output against bather load and season",
    ],
  },
  {
    cadence: "Annually",
    items: [
      "Commissioning-style chemistry panel (pH, copper, TA, CH, residual chlorine)",
      "Document operating notes for the next season",
    ],
  },
] as const;

export const troubleshootingRows = [
  {
    symptom: "Cloudy water",
    check: "Filtration runtime, filter condition, pH and residual chlorine. Shock SOP if debris or a storm preceded it.",
  },
  {
    symptom: "Copper reading low",
    check: "Confirm flow (do not bypass the sensor), pH in range before retesting copper, and that the unit is charged.",
  },
  {
    symptom: "Copper reading high",
    check: "Reduce ionization output; retest after a full turnover. Do not add copper compounds.",
  },
  {
    symptom: "Algae visible",
    check: "Brush, filter, and follow the shock SOP. Ionization helps control algae — it does not eliminate an existing bloom on its own.",
  },
  {
    symptom: "LCD dark or unit idle",
    check: "Battery charge, charging cable, AC/DC switch position, and that the flow sensor sees circulation.",
  },
  {
    symptom: "Scale on surfaces",
    check: "Calcium hardness vs the 150–300 ppm guidance. Hardness above about 300 ppm: consider the Catalytic Super Softener or a partial drain and refill.",
  },
] as const;

export const installFaqs = [
  {
    q: "How do I calculate pool volume?",
    a: "Rectangular: L × W × average depth × 7.5 = gallons. Circular: D × D × average depth × 5.9. Oval: L × W × average depth × 5.9. Irregular: sum of shapes, or a contractor-confirmed capacity.",
  },
  {
    q: "How should I sample the water?",
    a: "Run filtration at least 30 minutes. Sample about 12 inches (30 cm) below the surface, away from inlets and edges. Test pH first, then copper and the rest of the panel.",
  },
  {
    q: "What chemistry should I hold?",
    a: "Copper ideal 0.5 ppm (0.4–0.6 acceptable), pH ideal 7.2 (7.0–7.8 acceptable), total alkalinity 50–80 ppm, calcium hardness 150–200 ppm minimum for vinyl, fiberglass or painted finishes (~300 ppm plaster). Residual free chlorine remains required.",
  },
  {
    q: "What do I do after a storm?",
    a: "Run filtration 24 hours, skim and vacuum, shock per your sanitizer program, and keep swimmers out until residual chlorine is back in the operating range and the water is clear.",
  },
] as const;

export const samplingHowTo = {
  name: "How to sample Zinc'd pool water",
  description:
    "Run filtration, sample below the surface, test pH first, then copper and the rest of the chemistry panel.",
  totalTime: "PT40M",
  steps: samplingSop.steps.map((step) => ({
    name: step.title,
    text: step.body,
  })),
} as const;

export const shockHowTo = {
  name: "Post-storm pool shock procedure",
  description:
    "Filtration, debris removal, sanitizer shock, and return-to-service when residual chlorine is back in range.",
  totalTime: "PT24H",
  steps: shockSop.steps.map((step) => ({
    name: step.title,
    text: step.body,
  })),
} as const;

export { chlorineResidualNote };
