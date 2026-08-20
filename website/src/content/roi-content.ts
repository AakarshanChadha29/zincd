/**
 * Copy for `/cost-savings`. Every figure on the page is a planning-model
 * output from visitor inputs — never a Zinc'd savings guarantee (C-010, C-022).
 */

export const roiPage = {
  eyebrow: "Planning model",
  titleLead: "Hotel pool cost",
  titleAccent: "planning model",
  description:
    "An illustrative contract-repricing case for one year-round U.S. hotel pool. Replace every input with your invoices before anyone treats the result as a decision. This is a planning model — not a savings guarantee, certification, or EPA registration.",
} as const;

export const roiViews = [
  {
    id: "chemical" as const,
    label: "Chemicals only",
    blurb:
      "Use this when the hotel keeps its existing service arrangement. Isolates treatment-chemical purchasing.",
  },
  {
    id: "allIn" as const,
    label: "All-in (in-house routine)",
    blurb:
      "Models reduced specialist visits. Savings occur only if the contract price actually falls.",
  },
] as const;

export const roiDisclaimers = [
  "The 90% figure is a chlorine purchasing assumption to validate against invoices and bather-load records — not a measure of disinfection efficacy.",
  "CYA is modeled as avoided only where an unstabilized chlorine program is allowed and workable. Outdoor pools must verify that chlorine purchases still fall without CYA.",
  "Electricity defaults to a $3/month allowance. Replace it with measured kWh and the site tariff. Charging frequency is not stated in the draft manual.",
  "Anode replacement, installation, repairs, financing, and liner/surface-life benefits are excluded — no replacement interval or surface-life evidence is on file.",
  "Do not present outputs as actual savings, chlorine-free operation, maintenance-free operation, or a substitute for required residual disinfectant.",
] as const;

export const roiChecklist = [
  "Itemize whether the present service contract includes chemicals — do not add chemistry twice.",
  "Confirm pool volume, selected series, installation cost, charging frequency, and anode replacement terms.",
  "Establish a 60–90 day baseline of invoices, visits, test logs, occupancy, and corrective treatments.",
  "Obtain local approval and train the employees who will perform and document routine care.",
  "Pilot the system while preserving required disinfectant residuals and testing frequency.",
  "Reprice the pool-company contract and approve rollout only if measured payback remains acceptable.",
] as const;

export const roiAssumptions = [
  {
    label: "Pool profile",
    value: "One representative year-round hotel pool; correctly sized Zinc'd series",
  },
  {
    label: "Equipment",
    value: "$5,000 MRP spread over 60 months in the example defaults",
  },
  {
    label: "Chlorine purchases",
    value: "90% reduction assumption — prove against invoices, not against an efficacy test",
  },
  {
    label: "Retained oversight",
    value: "$500/month periodic specialist after implementation (example)",
  },
  {
    label: "Free chlorine residual",
    value: "Still required. The draft manual does not publish a ppm range.",
  },
] as const;
