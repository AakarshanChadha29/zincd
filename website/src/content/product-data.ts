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
  eyebrow: "Mineral ionization for US pools",
  headline: "A quieter revolution in pool water.",
  subhead:
    "Copper–silver–zinc ionization with precision PWM control — built for American estates, hotels, and commercial aquatic facilities. Designed to reduce day-to-day chlorine demand while residual sanitizer stays in the program.",
  primaryCta: { label: "Request a Pool Assessment", href: "/contact?intent=assessment" },
  secondaryCta: { label: "Become a Distributor", href: "/distributors" },
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

/**
 * Product series — from HANDBOOK FOR PLUMBER 2.pdf (install sizing).
 * Volumes are litres; pipe size is the circulation inlet guide. Commercial
 * volumes above 150,000 L use additional units in parallel with a bypass.
 */
export const productSeries = [
  {
    name: "Series-1",
    scope: "Residential · 2″ pipe",
    volume: "20,000–70,000 L",
    pipe: "2″",
    body: "Small to standard residential pools — from compact estate basins through typical private volumes on a 2″ circulation line.",
    audience: "Estate owners · residential builders",
    decisionNote: "Confirm volume band during assessment: 20–40k L (small) or 40–70k L (standard).",
  },
  {
    name: "Series-2",
    scope: "Large residential / club · 2–4″",
    volume: "70,000–100,000 L",
    pipe: "2–4″",
    body: "Larger residential and club pools where flow and duty cycle sit above a single domestic install.",
    audience: "Clubs · HOAs · large estates",
    decisionNote: "Specify when volume and pipe size move past standard residential Series-1.",
  },
  {
    name: "Series-3",
    scope: "Luxury / small commercial · 4″",
    volume: "100,000–150,000 L",
    pipe: "4″",
    body: "Luxury residential and small commercial basins on larger circulation — hospitality amenity scale with documented operating parameters.",
    audience: "Boutique hotels · luxury estates · facility leads",
    decisionNote: "Built for teams that need engineered control, monitoring, and clear maintenance cues.",
  },
  {
    name: "Custom",
    scope: "Commercial multi-unit",
    volume: "Above 150,000 L",
    pipe: "As required",
    body: "Commercial volumes use additional Zinc'd units in parallel on the inlet manifold, with a bypass branch — sized to the facility during assessment.",
    audience: "Resort · municipal · campus operators",
    decisionNote: "Selected when volume exceeds Series-3; multi-unit layouts follow the installer handbook.",
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
    operatorNotes: { title: string; body: string }[];
    decisionPoints: string[];
    cta: { label: string; href: string };
  }
> = {
  residential: {
    audience: "residential",
    audienceLabel: "Residential",
    intro:
      "For home and estate pools, Zinc'd delivers a calmer chemistry program — assessment-led sizing, monitored ionization, and clear maintenance cues for owners and the next generation taking over the property.",
    priorities: [
      {
        title: "A gentler day-to-day experience",
        body: "Ionization is designed to reduce chlorine dependency for water many homeowners find easier to live with, while a residual of free chlorine keeps the pool responsibly sanitized.",
      },
      {
        title: "Understandable maintenance",
        body: "Routine care centers on periodic anode cleaning when monitoring signals it, plus simple testing for copper, free chlorine and pH — suitable for owners and family operators alike.",
      },
      {
        title: "Guidance, not guesswork",
        body: "A pool assessment confirms the right series for your circulation system and walks you through expectations — no need to become a chemistry expert.",
      },
    ],
    operatorNotes: [
      {
        title: "Who specifies it",
        body: "Estate owners, residential pool builders, and family offices consolidating property systems.",
      },
      {
        title: "What you receive",
        body: "A complete Cu–Ag–Zn system with control electronics, monitoring, and a testing kit — series confirmed before dispatch.",
      },
      {
        title: "How decisions are made",
        body: "Volume, flow rate and existing circulation determine series. Assessment first; installation with a qualified professional.",
      },
    ],
    decisionPoints: [
      "Prefer lower day-to-day chlorine dependency without abandoning sanitizer residual",
      "Want monitored cues for anode care instead of reactive service calls",
      "Need a documented product path for builders and service partners",
    ],
    cta: { label: "Request a Pool Assessment", href: "/contact?intent=assessment" },
  },
  "hotels-resorts": {
    audience: "commercial",
    audienceLabel: "Hospitality",
    intro:
      "For hospitality pools and aquatic amenities, Zinc'd pairs a guest-facing water experience with engineered control — the vocabulary facility directors and ownership groups expect when specifying capital equipment.",
    priorities: [
      {
        title: "A guest-facing water experience",
        body: "A lower-chemical program supports the kind of water experience guests notice, backed by consistent, controlled operation across high-visibility amenities.",
      },
      {
        title: "Monitored, engineered operation",
        body: "Microcontroller PWM control and electronic monitoring signal when routine anode cleaning is due, supporting predictable upkeep for lean engineering teams.",
      },
      {
        title: "Sized for the property",
        body: "A series range spanning boutique pools to large commercial volumes, confirmed to each property's circulation system during assessment.",
      },
    ],
    operatorNotes: [
      {
        title: "Who specifies it",
        body: "Directors of engineering, F&B / amenity leads, owners' reps, and procurement for resort groups.",
      },
      {
        title: "Procurement posture",
        body: "Documented specifications — voltage, power, pressure, build — so CapEx conversations stay technical, not promotional.",
      },
      {
        title: "Operations impact",
        body: "Maintenance centers on periodic anode cleaning with monitoring flags; chemistry targets remain copper, free chlorine and pH.",
      },
    ],
    decisionPoints: [
      "Guest comfort and amenity reputation are strategic priorities",
      "Engineering needs predictable monitoring rather than ad-hoc chemistry swings",
      "Multi-property groups want a repeatable series language across sites",
    ],
    cta: { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
  },
  commercial: {
    audience: "commercial",
    audienceLabel: "Commercial",
    intro:
      "For community and commercial operators, Zinc'd brings engineered ionization to higher-volume water — specifications first, so boards, GMs and next-generation operators can evaluate with confidence.",
    priorities: [
      {
        title: "Engineered control at volume",
        body: "PWM-regulated ionization is designed to integrate with commercial circulation systems across the full flow-rate range.",
      },
      {
        title: "Predictable maintenance",
        body: "Minimal routine maintenance centered on periodic anode cleaning, with monitoring that flags service needs before they escalate.",
      },
      {
        title: "Documented specifications",
        body: "Voltage, power, pressure and build specs are published from technical documentation so operators can plan with confidence.",
      },
    ],
    operatorNotes: [
      {
        title: "Who specifies it",
        body: "Facility managers, municipal aquatics leads, campus operators, and commercial service contractors.",
      },
      {
        title: "Risk posture",
        body: "Claims stay conservative: ionization reduces chlorine dependency; residual free chlorine remains part of responsible operation.",
      },
      {
        title: "Partner channel",
        body: "Distributors and installers can carry Zinc'd as a defined equipment category with residential-to-commercial series coverage.",
      },
    ],
    decisionPoints: [
      "Board or ownership asks for documented equipment — not brochure claims",
      "Staffing models favor monitoring-led care over intensive chemistry labor",
      "Circulation volumes span light commercial through large-format pools",
    ],
    cta: { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
  },
  "fitness-wellness": {
    audience: "residential",
    audienceLabel: "Fitness & Wellness",
    intro:
      "For fitness, wellness and aquatic-therapy environments, Zinc'd supports a lower-chemical water experience within a responsible, monitored program — suited to frequent-use spaces and brand-conscious studios.",
    priorities: [
      {
        title: "A lower-chemical experience",
        body: "Ionization is designed to reduce chlorine dependency for a water experience suited to frequent-use wellness settings.",
      },
      {
        title: "Consistent, monitored operation",
        body: "Electronic monitoring and PWM control support steady day-in, day-out operation for facilities with demanding schedules.",
      },
      {
        title: "Right-sized systems",
        body: "A series range that fits studio plunge pools through larger aquatic facilities, confirmed by assessment.",
      },
    ],
    operatorNotes: [
      {
        title: "Who specifies it",
        body: "Wellness brand operators, club GMs, therapists, and design-build partners for aquatic studios.",
      },
      {
        title: "Member experience",
        body: "Lower-chemical framing must stay honest: residual sanitizer remains; the goal is a quieter chemistry program, not chemical-free claims.",
      },
      {
        title: "Scale path",
        body: "Start with assessment for the primary basin; expand series language as the facility adds plunge, therapy, or outdoor water.",
      },
    ],
    decisionPoints: [
      "Members notice water feel and scent as part of brand experience",
      "Operators need consistent chemistry with lean staffing",
      "Design partners want a clean, documentable equipment story",
    ],
    cta: { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
  },
};

/** How ownership and operators evaluate Zinc'd — dual-audience language. */
export const evaluationFramework = [
  {
    title: "For ownership & principals",
    body: "A capital decision framed around documented specifications, handbook series sizing from residential through commercial multi-unit, and a claims-safe ecological story you can stand behind with guests, boards, or family stakeholders.",
  },
  {
    title: "For operators & the next generation",
    body: "Day-to-day clarity: PWM control, monitoring that signals anode care, and simple chemistry targets — copper, free chlorine, pH — without a marketing fog of unverifiable percentages.",
  },
  {
    title: "For partners & channel",
    body: "A defined product category for distributors, builders and installers: engineered ionization that fits existing circulation, with Series-1 through custom commercial reach.",
  },
] as const;

/** Distributor / partner value — B2B vocabulary allowed here. */
export const partnerValue = [
  {
    title: "A defined equipment category",
    body: "Add an engineered ionization system to your line — documented specifications, not marketing hype.",
  },
  {
    title: "Installation that fits circulation systems",
    body: "Designed to integrate with existing pool circulation — Series-1 through Series-3, plus custom multi-unit layouts for larger commercial inlets.",
  },
  {
    title: "Maintenance & support expectations",
    body: "Minimal routine maintenance centered on periodic anode cleaning, with monitoring that flags service needs.",
  },
  {
    title: "Residential and commercial reach",
    body: "A series range spanning private pools through hospitality and commercial multi-unit layouts.",
  },
] as const;

/**
 * Partner economics framing — profit opportunity without publishing
 * distributor acquisition / suggested-retail dollar figures on-page.
 * Specific partner rates are shared in conversation.
 */
export const partnerEconomics = [
  {
    step: "01",
    title: "Partner acquisition",
    body: "Authorized partners receive a structured wholesale path on the complete Zinc'd system — details shared during partnership review.",
  },
  {
    step: "02",
    title: "Suggested retail",
    body: "A clear retail positioning for estate and commercial buyers, so your team can quote with confidence.",
  },
  {
    step: "03",
    title: "Your product spread",
    body: "Meaningful gross product margin per installed system — a high-ticket add-on to the customers you already service or supply.",
  },
] as const;

export const partnerProfitAngles = [
  {
    title: "Sell into your existing book",
    body: "Pool service companies, builders, and hospitality suppliers already have the hard part — trusted relationships. Zinc'd rides those conversations.",
  },
  {
    title: "One sale, recurring service",
    body: "After install, routine anode care and water testing create a predictable service relationship — not a one-and-done chemical drop.",
  },
  {
    title: "Hospitality multiplies the account",
    body: "Hotel and resort groups can mean multiple systems across a portfolio. Treat engineering and procurement as enterprise conversations.",
  },
  {
    title: "Rates stay in the room",
    body: "Exact partner pricing and territory terms are shared directly — this page shows the economics shape, not a public price list.",
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
    a: "Sizing follows the installer handbook: Series-1 (2″, roughly 20,000–70,000 L), Series-2 (2–4″, 70,000–100,000 L), Series-3 (4″, 100,000–150,000 L), and custom multi-unit layouts above 150,000 L. A pool assessment confirms the right series for your system.",
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
    body: "One engineered system with documented specifications, Series-1 through Series-3 plus custom multi-unit commercial layouts, and a fixed component list.",
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
