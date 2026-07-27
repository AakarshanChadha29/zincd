/**
 * Claims-safe product & messaging data for Zinc'd.
 *
 * Every string here is written to comply with docs/claims-register.md and
 * docs/content-tone-and-messaging.md. Rules enforced:
 *  - No efficacy percentages, savings figures, or cost numbers (C-004, C-010).
 *  - No "chemical-free" / "no chemicals" — residual chlorine remains required (C-005).
 *  - No "eliminates" absolutes — use "helps control" (C-006).
 *  - No EPA / certification / patent / lab / testimonial / rating claims (C-001/2/11/12/13).
 *  - NASA context is historical only, never an endorsement (C-003).
 *  - Technical specs from TECHNICAL SPECIFICATION 2.pdf, marked "typical / subject to model" (C-018).
 */

export const heroContent = {
  eyebrow: "Ecological mineral ionization",
  headline: "A quieter revolution in pool water.",
  subhead:
    "Zinc'd brings copper–silver–zinc ionization and precision PWM control to modern pools — designed for a lower-chemical, clearer water experience while a residual sanitizer remains part of responsible care.",
  primaryCta: { label: "Request a Pool Assessment", href: "/contact?intent=assessment" },
  secondaryCta: { label: "Explore the Technology", href: "/technology" },
} as const;

/** Three top-level value pillars — claims-aware, non-absolute. */
export const valuePillars = [
  {
    id: "ecological",
    label: "Ecological by design",
    title: "Lower-chemical pool care, without empty promises",
    body: "Mineral ionization is designed to reduce day-to-day chlorine dependency — for water many people find gentler to live with — while a residual of free chlorine remains part of responsible operation.",
    icon: "droplets",
  },
  {
    id: "engineered",
    label: "Engineered control",
    title: "Microcontroller PWM control and monitoring",
    body: "A microcontroller-based PWM system regulates ionization, with an LCD and electronic monitoring that signals when routine anode cleaning is due.",
    icon: "cpu",
  },
  {
    id: "built",
    label: "Built to last",
    title: "Stainless build, Cu–Ag–Zn alloy electrodes",
    body: "A stainless-steel housing carries copper, silver and zinc alloy anodes — engineered as a durable core component of the circulation system.",
    icon: "shield",
  },
] as const;

/** How-it-works process — claims-safe verbs ("helps control", "supports"). */
export const howItWorksSteps = [
  {
    step: "01",
    title: "Water enters the ionization cell",
    body: "Circulating pool water passes through the stainless housing, across copper, silver and zinc alloy electrodes.",
  },
  {
    step: "02",
    title: "PWM control releases mineral ions",
    body: "A microcontroller regulates a low-voltage current by PWM, introducing copper and silver ions at a controlled rate into the flow.",
  },
  {
    step: "03",
    title: "Minerals help control algae and biofilm",
    body: "Copper is used to help control algae; zinc contributes to biofilm control — working alongside, not replacing, your sanitizer program.",
  },
  {
    step: "04",
    title: "Monitoring keeps chemistry in range",
    body: "An LCD and electronic monitoring track the system and signal routine anode cleaning, while free chlorine and copper are tested to stay in range.",
  },
] as const;

/**
 * Technical specifications — from TECHNICAL SPECIFICATION 2.pdf.
 * Presented with a "typical / subject to model" qualifier (C-018).
 */
export const technicalSpecs = [
  { label: "Electrode alloy", value: "Copper · Silver · Zinc", note: "Cu–Ag–Zn anodes" },
  { label: "Input voltage", value: "AC 110–230 V", note: "Mains input" },
  { label: "Operating voltage", value: "24 V DC", note: "Cell operation" },
  { label: "Max power", value: "75 W", note: "Peak draw" },
  { label: "Max pressure", value: "30 psi", note: "System rating" },
  { label: "Electrode diameter", value: "100 mm", note: "Cell electrode" },
  { label: "Housing", value: "Stainless steel", note: "Corrosion-resistant" },
  { label: "Control", value: "Microcontroller PWM", note: "Ionization regulation" },
] as const;

/** Recommended water chemistry targets — from TS. Reinforces "chlorine still required". */
export const chemistryTargets = [
  { label: "Copper", value: "0.3–0.4 ppm" },
  { label: "Free residual chlorine", value: "~1.0 ppm" },
  { label: "pH", value: "7.2–7.6" },
] as const;

/** System components — from TS. */
export const systemComponents = [
  { name: "Cu–Ag–Zn ionization cell", detail: "Stainless housing with copper, silver and zinc alloy electrodes." },
  { name: "Control electronics", detail: "Microcontroller-based PWM control with LCD readout, integrated with the anode assembly." },
  { name: "Electronic monitoring", detail: "Signals status and when routine anode cleaning is due." },
  { name: "Rechargeable battery & charger", detail: "Supports controlled, consistent operation." },
  { name: "Water testing kit", detail: "For copper, free chlorine and pH — the metrics that keep chemistry in range." },
] as const;

/** Product series — described generically; model specifics pending confirmation. */
export const productSeries = [
  {
    name: "Domestic series",
    scope: "Home & residential pools",
    body: "Sized for private residential pools and smaller water volumes.",
  },
  {
    name: "Mid-range series",
    scope: "Community & light commercial",
    body: "For community, boutique-hospitality and light commercial circulation systems.",
  },
  {
    name: "Commercial series",
    scope: "Hotels, resorts & commercial",
    body: "For higher-volume commercial and hospitality aquatic facilities.",
  },
  {
    name: "Large / Olympic series",
    scope: "Large-format & Olympic-size",
    body: "Engineered for large-format and Olympic-size pools across the full flow-rate range.",
  },
] as const;

/** Applications — audience-tuned, claims-safe. */
export const applications = [
  {
    slug: "residential",
    title: "Residential",
    audience: "residential" as const,
    tagline: "Home & estate pools",
    body: "Clearer, easier-to-live-with water for private pools, with an assessment-led path rather than DIY complexity.",
  },
  {
    slug: "hotels-resorts",
    title: "Hotels & Resorts",
    audience: "commercial" as const,
    tagline: "Hospitality aquatic amenities",
    body: "A guest-facing water experience for hospitality pools, backed by monitored, engineered operation.",
  },
  {
    slug: "commercial",
    title: "Commercial",
    audience: "commercial" as const,
    tagline: "Community & commercial pools",
    body: "Engineered control and monitoring for community and commercial operators managing higher volumes.",
  },
  {
    slug: "fitness-wellness",
    title: "Fitness & Wellness",
    audience: "residential" as const,
    tagline: "Aquatic & wellness facilities",
    body: "A lower-chemical experience for fitness, wellness and aquatic-therapy environments.",
  },
] as const;

/** Per-application detail content for the four sector subpages. */
export const applicationDetails: Record<
  string,
  {
    intro: string;
    audienceLabel: string;
    audience: "residential" | "commercial";
    priorities: { title: string; body: string }[];
    cta: { label: string; href: string };
  }
> = {
  residential: {
    audience: "residential",
    audienceLabel: "Residential",
    intro:
      "For home and estate pools, Zinc'd is about a clearer, easier-to-live-with water experience — with an assessment-led path rather than a DIY complexity dump.",
    priorities: [
      { title: "A gentler day-to-day experience", body: "Ionization is designed to reduce chlorine dependency for water many homeowners find easier to live with, while a residual of free chlorine keeps the pool responsibly sanitized." },
      { title: "Understandable maintenance", body: "Routine care centers on periodic anode cleaning when monitoring signals it, plus simple testing for copper, free chlorine and pH." },
      { title: "Guidance, not guesswork", body: "A pool assessment confirms the right series for your pool and walks you through what to expect — no need to become a chemistry expert." },
    ],
    cta: { label: "Request a Pool Assessment", href: "/contact?intent=assessment" },
  },
  "hotels-resorts": {
    audience: "commercial",
    audienceLabel: "Hospitality",
    intro:
      "For hospitality pools and aquatic amenities, Zinc'd pairs a guest-facing water experience with monitored, engineered operation your team can rely on.",
    priorities: [
      { title: "A guest-facing water experience", body: "A lower-chemical program supports the kind of water experience guests notice, backed by consistent, controlled operation." },
      { title: "Monitored, engineered operation", body: "Microcontroller PWM control and electronic monitoring signal when routine anode cleaning is due, supporting predictable upkeep." },
      { title: "Sized for the property", body: "A series range spanning boutique pools to large commercial volumes, confirmed to each property's circulation system." },
    ],
    cta: { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
  },
  commercial: {
    audience: "commercial",
    audienceLabel: "Commercial",
    intro:
      "For community and commercial operators, Zinc'd brings engineered control and monitoring to higher-volume water — with documented specifications, not marketing hype.",
    priorities: [
      { title: "Engineered control at volume", body: "PWM-regulated ionization is designed to integrate with commercial circulation systems across the full flow-rate range." },
      { title: "Predictable maintenance", body: "Minimal routine maintenance centered on periodic anode cleaning, with monitoring that flags service needs before they escalate." },
      { title: "Documented specifications", body: "Voltage, power, pressure and build specs are published from technical documentation so operators can plan with confidence." },
    ],
    cta: { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
  },
  "fitness-wellness": {
    audience: "residential",
    audienceLabel: "Fitness & Wellness",
    intro:
      "For fitness, wellness and aquatic-therapy environments, Zinc'd supports a lower-chemical water experience within a responsible, monitored program.",
    priorities: [
      { title: "A lower-chemical experience", body: "Ionization is designed to reduce chlorine dependency for a water experience suited to frequent-use wellness settings." },
      { title: "Consistent, monitored operation", body: "Electronic monitoring and PWM control support steady day-in, day-out operation for facilities with demanding schedules." },
      { title: "Right-sized systems", body: "A series range that fits studio plunge pools through larger aquatic facilities, confirmed by assessment." },
    ],
    cta: { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
  },
};

/** Distributor / partner value — B2B vocabulary allowed here. */
export const partnerValue = [
  {
    title: "A defined equipment category",
    body: "Add an engineered ionization system to your line — documented specifications, not marketing hype.",
  },
  {
    title: "Installation that fits circulation systems",
    body: "Designed to integrate with existing pool circulation, across domestic to Olympic-size flow rates.",
  },
  {
    title: "Maintenance & support expectations",
    body: "Minimal routine maintenance centered on periodic anode cleaning, with monitoring that flags service needs.",
  },
  {
    title: "Residential and commercial reach",
    body: "A series range spanning private pools through hospitality and commercial aquatic facilities.",
  },
] as const;

/** FAQ — every answer claims-safe and source-anchored. */
export const faqs = [
  {
    q: "Does Zinc'd make my pool chemical-free?",
    a: "No. Ionization is designed to reduce chlorine dependency, but a residual of free chlorine — typically around 1.0 ppm — remains part of responsible operation. Zinc'd works alongside your sanitizer program, not instead of it.",
  },
  {
    q: "How does the technology work?",
    a: "Circulating water passes through a stainless cell holding copper, silver and zinc alloy electrodes. A microcontroller regulates a low-voltage current by PWM, releasing mineral ions that help control algae and support biofilm control.",
  },
  {
    q: "What maintenance does it need?",
    a: "Routine maintenance is minimal and centers on periodic cleaning of the copper–silver–zinc anode. The control panel's monitoring signals when cleaning is due. Water is tested for copper, free chlorine and pH to keep chemistry in range.",
  },
  {
    q: "What water chemistry should I maintain?",
    a: "Technical documentation recommends copper around 0.3–0.4 ppm, free residual chlorine around 1.0 ppm, and pH between 7.2 and 7.6. A supplied testing kit covers these metrics.",
  },
  {
    q: "What pool sizes are supported?",
    a: "The product line spans four series covering domestic pools up to Olympic-size, suitable across the full range of circulation flow rates. A pool assessment confirms the right series for your system.",
  },
  {
    q: "Is there a connection to NASA?",
    a: "Only a historical one. Silver-ion disinfection was used historically in spacecraft drinking-water systems; copper–silver ionization developed later. This is scientific lineage, not an endorsement of Zinc'd by NASA.",
  },
  {
    q: "Is Zinc'd certified?",
    a: "Certification and licensing details will be published here once confirmed. We publish regulatory information only when we can back it with documentation.",
  },
] as const;

/** Installation & maintenance expectations. */
export const installSteps = [
  {
    title: "Assessment",
    body: "A pool assessment reviews your circulation system, volume and flow rate to confirm the right Zinc'd series.",
  },
  {
    title: "Integration",
    body: "The ionization cell is fitted into the circulation loop; the control panel and monitoring are set up for your system.",
  },
  {
    title: "Balancing",
    body: "Water chemistry is brought into range — copper, free chlorine and pH — using the supplied testing kit.",
  },
  {
    title: "Ongoing care",
    body: "Routine care is periodic anode cleaning when monitoring signals it, plus regular testing to keep chemistry in range.",
  },
] as const;

/** Warranty summary — pending client confirmation (C-015); framed as documented, not promised. */
export const warrantySummary = [
  { part: "Cu–Ag–Zn anode", term: "5–10 years", note: "Model- and condition-dependent" },
  { part: "Electrical / electronic components", term: "3 years", note: "Against manufacturing defects" },
] as const;

/**
 * Direct purchase offer — the commercial path.
 *
 * Price CLIENT-CONFIRMED at $5,000 USD (2026-07). Included line items remain
 * the published commercial representation; treat changes as binding updates.
 * Checkout URL is supplied by env (`NEXT_PUBLIC_STRIPE_CHECKOUT_URL`) and the
 * buy button is hidden entirely when unset — never a dead payment link.
 */
export const directOffer = {
  priceUsd: 5000,
  priceDisplay: "$5,000",
  currency: "USD",
  /** Client-confirmed published direct price. */
  priceConfirmed: true,
  name: "Zinc'd ionization system",
  summary:
    "The complete system: stainless Cu–Ag–Zn ionization cell, control electronics with LCD and monitoring, rechargeable battery and charger, and the water-testing kit.",
  includes: [
    "Cu–Ag–Zn ionization cell in stainless housing",
    "Control electronics with LCD and status monitoring",
    "Rechargeable battery and charger",
    "Water-testing kit — copper, free chlorine and pH",
    "Installation handbook and water-chemistry maintenance chart",
  ],
  notes: [
    "Series is confirmed to your pool volume and circulation flow rate before dispatch.",
    "Installation is arranged separately with a qualified installer.",
    "Anode warranty 5–10 years by model; electrical and electronic components 3 years.",
  ],
} as const;

/** Why a partner would carry the line — the dealership path. */
export const partnerPropositions = [
  {
    title: "A defined product, not a chemistry program",
    body: "One engineered system with documented specifications, four series covering domestic through Olympic-size, and a fixed component list.",
  },
  {
    title: "Recurring service, not one-off supply",
    body: "Routine care centres on periodic anode cleaning and water testing — a predictable service relationship after the install.",
  },
  {
    title: "Documentation that supports the sale",
    body: "Installer handbook, capacity formulas, operating standards and a water-chemistry maintenance chart ship with every system.",
  },
  {
    title: "Backed hardware",
    body: "Anode warranty of 5–10 years by model and condition; electrical and electronic components carry 3 years against manufacturing defects. Replacement rather than repair.",
  },
] as const;
