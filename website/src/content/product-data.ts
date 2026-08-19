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
 *  - Technical specs from the Gen-2 Pool Sanitizer manual + hotel planning
 *    model (client-confirmed 2026-08-19), marked "typical / subject to model"
 *    (C-018). Do not invent blanks the manual leaves open (free chlorine ppm,
 *    warranty %, charging frequency, anode interval, support contacts).
 */

/** Qualifier required on every published spec block (C-018). */
export const specQualifier =
  "Typical values, subject to model. Series is confirmed to your pool during assessment.";

/**
 * Residual-chlorine framing. The Gen-2 manual leaves the free-chlorine ppm
 * blank — do not publish a number until the client supplies it.
 */
export const chlorineResidualNote =
  "A residual of free chlorine remains part of responsible operation. The specific ppm target will be published when the operating manual is finalized.";

export const heroContent = {
  eyebrow: "Mineral ionization for US pools",
  headline: "A quieter revolution in pool water.",
  subhead:
    "Copper–silver–zinc ionization with precision PWM control — built for American estates, hotels, and commercial aquatic facilities. Designed to reduce day-to-day chlorine demand while residual sanitizer stays in the program.",
  primaryCta: { label: "Request a Pool Assessment", href: "/assess" },
  secondaryCta: { label: "Become a Distributor", href: "/distributors" },
} as const;

/** Three top-level value pillars — claims-aware, non-absolute. */
export const valuePillars = [
  {
    id: "ecological",
    label: "Ecological by design",
    title: "A lower-chemical program, honestly stated",
    body: "Mineral ionization is designed to reduce day-to-day chlorine dependency — for water many people find gentler to live with — while a residual of free chlorine remains part of responsible operation.",
    icon: "droplets",
  },
  {
    id: "engineered",
    label: "Engineered control",
    title: "Microcontroller PWM control and monitoring",
    body: "A battery-powered unit with LCD, water-flow sensor, and AC/DC switch regulates ionization by PWM — charging from AC 110–230 V, operating at 24 V DC.",
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
    title: "Water enters the stainless chamber",
    body: "Circulating pool water passes through the stainless water chamber, across copper, silver and zinc alloy anodes. Do not bypass the water-flow sensor.",
  },
  {
    step: "02",
    title: "Flow sensor confirms circulation",
    body: "A water-flow sensor detects flow before ionization runs, so the unit operates with the filtration loop — not against a dead line.",
  },
  {
    step: "03",
    title: "PWM control releases mineral ions",
    body: "The battery-powered control (24 V DC, charged from AC 110–230 V) regulates a low-voltage current by PWM, introducing copper and silver ions at a controlled rate into the flow.",
  },
  {
    step: "04",
    title: "Minerals help control algae and biofilm",
    body: "Copper is used to help control algae; zinc contributes to biofilm control — working alongside, not replacing, your sanitizer program.",
  },
  {
    step: "05",
    title: "LCD and testing keep chemistry in range",
    body: "An LCD reports status. Copper, pH, and residual free chlorine are tested to stay in range — ionization complements sanitation; it does not replace it.",
  },
] as const;

/**
 * Technical specifications — Gen-2 Pool Sanitizer manual + hotel planning
 * model (client-confirmed 2026-08-19). Typical / subject to model (C-018).
 */
export const technicalSpecs = [
  { label: "Electrode alloy", value: "Copper · Silver · Zinc", note: "Cu–Ag–Zn anodes" },
  { label: "Operating voltage", value: "24 V DC", note: "Battery operation" },
  { label: "Charging voltage", value: "AC 110–230 V", note: "Charger input" },
  { label: "Power", value: "170–230 W", note: "By series" },
  { label: "Battery", value: "24 V / 2200 mAh", note: "Rechargeable" },
  { label: "Charging time", value: "1.3–2.3 hr", note: "By series" },
  { label: "Water chamber", value: "28–56 cm", note: "Length, by series" },
  { label: "Chamber bore", value: "5.7–15.2 cm", note: "By series" },
  { label: "Max pressure", value: "30 psi", note: "System rating" },
  { label: "Housing", value: "Stainless steel", note: "Water chamber" },
  { label: "Control", value: "LCD · flow sensor · AC/DC switch", note: "Battery-powered" },
] as const;

/**
 * Recommended water chemistry — Gen-2 manual. Free chlorine ppm is blank in
 * the source and is not invented here.
 */
export const chemistryTargets = [
  { label: "Copper", value: "Ideal 0.5 ppm · acceptable 0.4–0.6 ppm" },
  { label: "pH", value: "Ideal 7.2 · acceptable 7.0–7.8" },
  { label: "Total alkalinity", value: "50–80 ppm" },
  {
    label: "Calcium hardness",
    value: "150–200 ppm min (vinyl / fiberglass / painted) · ~300 ppm (plaster)",
  },
  { label: "Free residual chlorine", value: "Required — ppm pending finalized manual" },
] as const;

/** System components — Gen-2 manual. */
export const systemComponents = [
  {
    name: "Stainless water chamber",
    detail: "Stainless chamber with copper, silver and zinc alloy anodes — dimensions vary by series.",
  },
  {
    name: "Battery-powered control",
    detail: "24 V DC operation with LCD readout, charged from AC 110–230 V via the supplied charging cable.",
  },
  {
    name: "Water-flow sensor",
    detail: "Confirms circulation before ionization runs. Do not bypass the sensor.",
  },
  {
    name: "AC/DC switch",
    detail: "Selects charging and operating modes on the control unit.",
  },
  {
    name: "Water testing kit",
    detail: "For copper, free chlorine and pH — the metrics that keep chemistry in range.",
  },
] as const;

/** Public label for the current catalogue range. */
export const seriesRangeLabel = "Series-01 through Series-04";

/**
 * Product series — Gen-2 Pool Sanitizer manual (client-confirmed 2026-08-19).
 * Capacities are rated volume. Series-03 and Series-04 are customized models
 * with indicative specifications. Typical / subject to model (C-018).
 */
export const productSeries = [
  {
    name: "Series-01",
    scope: "Residential",
    volume: "~13,200 gal",
    volumeMetric: "50,000 L",
    maxLitres: 50_000,
    power: "170 W",
    chamberLength: "28 cm",
    bore: "5.7 cm",
    chargeTime: "1.3 hr",
    customized: false,
    pipe: "Confirmed at assessment",
    body: "Rated for typical residential volumes around 50,000 L. Stainless chamber, battery-powered control, flow sensor, and LCD.",
    audience: "Estate owners · residential builders",
    decisionNote: "First match when estimated volume is at or below 50,000 L. Confirmed during assessment.",
  },
  {
    name: "Series-02",
    scope: "Large residential / club",
    volume: "~39,600 gal",
    volumeMetric: "150,000 L",
    maxLitres: 150_000,
    power: "190 W",
    chamberLength: "28 cm",
    bore: "5.7 cm",
    chargeTime: "2.0 hr",
    customized: false,
    pipe: "Confirmed at assessment",
    body: "Rated for larger residential and club volumes around 150,000 L — same chamber family as Series-01, higher power and charge time.",
    audience: "Clubs · HOAs · large estates",
    decisionNote: "Specify when volume moves past Series-01. Confirmed against circulation during assessment.",
  },
  {
    name: "Series-03",
    scope: "Commercial · customized, indicative",
    volume: "~79,300 gal",
    volumeMetric: "300,000 L",
    maxLitres: 300_000,
    power: "210 W",
    chamberLength: "37 cm",
    bore: "11.4 cm",
    chargeTime: "2.15 hr",
    customized: true,
    pipe: "Confirmed at assessment",
    body: "Customized model with indicative specifications for hospitality and commercial basins around 300,000 L.",
    audience: "Boutique hotels · luxury estates · facility leads",
    decisionNote: "Indicative catalogue point — final specification is confirmed during assessment.",
  },
  {
    name: "Series-04",
    scope: "Large commercial · customized, indicative",
    volume: "~105,700–132,100 gal",
    volumeMetric: "400,000–500,000 L",
    maxLitres: 500_000,
    power: "230 W",
    chamberLength: "56 cm",
    bore: "15.2 cm",
    chargeTime: "2.3 hr",
    customized: true,
    pipe: "Confirmed at assessment",
    body: "Customized model with indicative specifications for large commercial volumes in the 400,000–500,000 L band.",
    audience: "Resort · municipal · campus operators",
    decisionNote: "Indicative catalogue point — volumes above this band are sized during assessment.",
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
    cta: { label: "Request a Pool Assessment", href: "/assess" },
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
        title: "What we state",
        body: "Ionization reduces day-to-day chlorine dependency; a residual of free chlorine remains part of responsible operation.",
      },
      {
        title: "Partner channel",
        body: "Distributors and installers can carry Zinc'd as a defined equipment category with residential-to-commercial series coverage.",
      },
    ],
    decisionPoints: [
      "Board or ownership asks for documented equipment with published specifications",
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
    body: "Day-to-day clarity: battery-powered PWM control with a flow sensor and LCD, and chemistry targets to hold — copper ideal 0.5 ppm (0.4–0.6), pH ideal 7.2 (7.0–7.8), plus residual free chlorine.",
  },
  {
    title: "For partners & channel",
    body: "A defined product category for distributors, builders and installers: engineered ionization that fits existing circulation, with Series-01 through Series-04.",
  },
] as const;

/**
 * Distributor / partner value — B2B vocabulary allowed here.
 *
 * Mirrors the "Why Zinc'd / Key Benefits" panel of the printed US distributor
 * brochure, with two deliberate divergences the brochure must also adopt:
 * "chlorine dependency" never "chemical dependency" (C-005 — "chemical" is an
 * unbounded set the reader completes as *all of them*), and professional
 * management stated as a *condition* rather than a benefit, matching the
 * brochure's own footnote.
 */
export const partnerValue = [
  {
    id: "chlorine",
    label: "Chemistry",
    title: "Designed to reduce chlorine dependency",
    body: "Mineral ionization is designed to reduce day-to-day chlorine dependency. Residual sanitizer stays in the program — this is a quieter chemistry program, not a chemical-free one.",
    icon: "droplets",
  },
  {
    id: "managed",
    label: "Operation",
    title: "Works within a professionally managed program",
    body: "Copper, free chlorine and pH are tested to stay in range, using the kit that ships with every system. Professional operation is a condition of the product working as described, not a footnote to it.",
    icon: "flask",
  },
  {
    id: "circulation",
    label: "Integration",
    title: "Integrates with existing circulation",
    body: "Fits the loop your customers already have — Series-01 through Series-04, with Series-03 and Series-04 as customized, indicative models.",
    icon: "waypoints",
  },
  {
    id: "commercial",
    label: "Duty",
    title: "Built for commercial operation",
    body: "Stainless housing, Cu–Ag–Zn anodes, microcontroller PWM control, and monitoring that signals when routine anode cleaning is due.",
    icon: "building",
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

/**
 * "Why distributors care" — the merged case for carrying the line.
 *
 * Supersedes the former `partnerProfitAngles` + `partnerPropositions` pair,
 * which were two four-item arrays making the same argument in two adjacent
 * sections (fifteen bordered cards between them, counting partner economics).
 * The brochure's WHY DISTRIBUTORS CARE panel was a third version of it.
 *
 * "Flexible territory and commercial discussions" is deliberate brochure
 * language and is safe — it promises a *discussion*, not a territory. Never let
 * it drift toward "exclusive" or "protected", which would be an unbacked
 * commercial guarantee (see docs/claims-register.md and the tone doc).
 */
export const partnerReasons = [
  {
    title: "A product category, not another chemical program",
    body: "One engineered system with documented specifications and a fixed component list — something to put on the shelf beside pumps, filters and heaters.",
  },
  {
    title: "Accounts you already hold",
    body: "Hotels, clubs, builders, service routes and wellness facilities. The relationships are the hard part, and you already have them.",
  },
  {
    title: "Product, installation and service revenue",
    body: "Three lines off one sale, where you're set up to take them. After the install, periodic anode care and water testing keep the account open.",
  },
  {
    title: "Backed hardware",
    body: "Anode warranty of 5–10 years by model and condition; electrical and electronic components carry 3 years against manufacturing defects. Replacement rather than repair.",
  },
  {
    title: "Flexible territory and commercial discussions",
    body: "Territory, order profile and commercial terms are worked out individually, sized to the markets you already cover.",
  },
] as const;

/** Priority partner audiences — sharper lure copy for /distributors. */
export const partnerAudiences = [
  {
    title: "Pool service companies",
    body: "You already know which customers complain about algae, chlorine load, and cloudy water. Add a high-ticket system to the book you service every week.",
  },
  {
    title: "Builders & remodelers",
    body: "Differentiate new installs and renovations with engineered mineral ionization — a documented category, not another chemical program.",
  },
  {
    title: "Dealers & wholesalers",
    body: "Put Zinc'd on the shelf beside pumps, filters, and heaters. Clear series sizing and a partner path designed for repeat quotes.",
  },
  {
    title: "Hospitality suppliers",
    body: "One relationship can open hotels, resorts, clubs, and multi-property groups. Commercial and custom layouts are part of the line.",
  },
] as const;

export const partnerSupport = [
  {
    title: "Product training",
    body: "We walk your team through series sizing, install basics, and how to talk about residual chlorine honestly.",
  },
  {
    title: "Technical backup",
    body: "Specs, handbooks, and chemistry charts ship with every system — so your installers are not guessing in the field.",
  },
  {
    title: "A clean sales story",
    body: "Engineered hardware with PWM control and monitoring, documented down to voltage, power and pressure — easy to put in front of an owner or an engineering lead.",
  },
  {
    /**
     * The brochure's attach-revenue framing. "Where you're set up for it"
     * carries the brochure's "where applicable" qualifier and must survive any
     * rewrite — Zinc'd cannot warrant that a given partner is licensed or
     * staffed to install.
     */
    title: "Three revenue lines, not one",
    body: "Where you're set up for it, product sales combine with installation, customer support and routine maintenance — not just a box shipped and forgotten.",
  },
] as const;

/**
 * End-market segments — the *second* audience axis.
 *
 * `partnerAudiences` above sorts by who the partner IS; this sorts by who the
 * partner SELLS TO. Both are needed and they are not interchangeable: the
 * partner-type axis is the conversion axis ("does this program want me?"),
 * the segment axis is credibility ("are my accounts the right accounts?").
 * Keep this list in sync with `customerCategories` in
 * `src/lib/leads/distributor-schema.ts` — the /apply form asks the same
 * question one step later.
 *
 * Two deliberate edits against the printed brochure: "specialist distributors
 * and resellers" is dropped (it is a partner type, not an end segment — the
 * reader of the brochure *is* that item, and it is already covered by
 * `partnerAudiences`), and "water parks" is qualified as assessment-led so a
 * fit list can never be misread as an installed-base claim.
 */
export const partnerEndSegments = [
  {
    title: "Hotels and resorts",
    priority: true,
    body: "Guest-facing amenities where water experience is part of the brand.",
    href: "/applications/hotels-resorts",
  },
  {
    title: "Commercial pool builders and constructors",
    priority: true,
    body: "A documented equipment category to specify into new builds and renovations.",
    href: "/applications/commercial",
  },
  {
    title: "Pool maintenance and service providers",
    body: "The route book you already visit every week.",
    href: null,
  },
  {
    title: "Spas and wellness centers",
    body: "Frequent-use water where a lower-chlorine program is noticed.",
    href: "/applications/fitness-wellness",
  },
  {
    title: "Gym chains with pools",
    body: "Multi-site operators who want one repeatable specification.",
    href: "/applications/fitness-wellness",
  },
  {
    title: "Leisure and aquatic facilities",
    body: "Larger volumes, sized during assessment on multi-unit layouts.",
    href: "/applications/commercial",
  },
] as const;

/**
 * Reinstates the residential lane the brochure never mentions. Required: the
 * site ships Series-01 (residential), /calculator sizes private pools, and
 * `directOffer` is a published direct-to-owner path linked from /distributors
 * itself. "Commercial" may scope the PROGRAM's emphasis, never the PRODUCT's
 * capability.
 */
export const partnerResidentialNote =
  "Series-01 covers private and estate pools around 50,000 L, so partners working residential books carry the same product into a different account. Owners buying a single system for their own pool don't need a partner agreement — that path is on the product page.";

/**
 * The plumbing loop: POOL → PUMP → FILTER → ZINC'D → RETURN.
 *
 * Distinct from `howItWorksSteps`, which is the *chemistry* sequence. This one
 * answers "where does this go in my plant room?" — the question a distributor
 * has to field on a site visit. Do not merge the two.
 *
 * Verified against `source/client/documents/HANDBOOK FOR PLUMBER 2.pdf`, which
 * places the unit on the pool inlet pipe with the control panel mounted near
 * the filtration plant, and documents the multi-unit parallel layout with a
 * fourth bypass line for 4″/6″ inlets.
 */
export const treatmentLoop = {
  intro:
    "Zinc'd installs in the circulation line after the pool filter and before the treated-water return. No re-plumbing of the loop, no second system to explain.",
  flowLabel: "Pool → Pump → Filter → Zinc'd → Return",
  /**
   * Shaped for `ProcessSteps`. The `step` strings must stay identical to the
   * indices drawn inside `TreatmentLoop` — that pairing is what lets a reader
   * move between the diagram and the captions.
   */
  steps: [
    { step: "01", title: "Pool", body: "Water enters the circulation system." },
    {
      step: "02",
      title: "Pump",
      body: "The pump moves water through the treatment loop.",
    },
    {
      step: "03",
      title: "Filter",
      body: "The filter removes suspended debris.",
    },
    {
      step: "04",
      title: "Zinc'd",
      body: "Water passes through the ionization cell while PWM control regulates ionization output.",
    },
    { step: "05", title: "Return", body: "Treated water returns to the pool." },
  ],
  /**
   * Required companion (C-005). Step 5's "treated water" is the last thing the
   * reader sees about chemistry; without this line "treated" reads as "fully
   * sanitized". Never render the loop without it.
   */
  companion:
    "Ionization works alongside the sanitizer program, not instead of it. Free chlorine is still tested and held as a residual, along with copper and pH.",
} as const;

/**
 * Performance fence for /distributors. The printed brochure's footnote stops
 * one sentence short: it never states that residual free chlorine is still
 * required, which leaves "reduced chemical dependency" unopposed and reads as
 * a step toward "chemical-free" (C-005, blocked and false as stated). The
 * middle two sentences here are that missing fence.
 */
export const partnerProgramFootnote =
  "Professional installation and ongoing water-quality management are required. Zinc'd ionization is designed to reduce chlorine dependency as part of a responsible water program — it is not a chemical-free system. A residual of free chlorine remains required, with copper and pH tested to stay in range. Performance depends on pool conditions, circulation, operation and applicable water-quality requirements. Published specifications are typical and subject to model; series is confirmed to your pool during assessment.";

/** Adopted verbatim from the brochure back cover — /distributors had no equivalent. */
export const partnerAgreementNote =
  "Distributor availability and commercial conditions are subject to written agreement.";

/** FAQ — every answer claims-safe and source-anchored. */
export const faqs = [
  {
    q: "Does Zinc'd make my pool chemical-free?",
    a: "No. Ionization is designed to reduce chlorine dependency, but a residual of free chlorine remains part of responsible operation. Zinc'd works alongside your sanitizer program, not instead of it. The specific residual ppm will be published when the operating manual is finalized.",
  },
  {
    q: "How does the technology work?",
    a: "Circulating water passes through a stainless chamber holding copper, silver and zinc alloy anodes. A water-flow sensor confirms circulation; battery-powered PWM control releases mineral ions that help control algae and support biofilm control.",
  },
  {
    q: "What maintenance does it need?",
    a: "Routine maintenance centers on keeping chemistry in range and inspecting the stainless chamber and anodes on the published schedule. The LCD reports status. Water is tested for copper, free chlorine and pH. Anode replacement interval is not a published figure until the client supplies it.",
  },
  {
    q: "What water chemistry should I maintain?",
    a: "Technical documentation recommends copper at an ideal 0.5 ppm (acceptable 0.4–0.6), pH at an ideal 7.2 (acceptable 7.0–7.8), total alkalinity 50–80 ppm, and calcium hardness 150–200 ppm minimum for vinyl, fiberglass or painted finishes (~300 ppm for plaster). Residual free chlorine remains required; the specific ppm is pending the finalized manual. A supplied testing kit covers copper, free chlorine and pH.",
  },
  {
    q: "What pool sizes are supported?",
    a: "Sizing follows the current product manual: Series-01 around 50,000 L (~13,200 gal), Series-02 around 150,000 L (~39,600 gal), Series-03 around 300,000 L (~79,300 gal, customized/indicative), and Series-04 around 400,000–500,000 L (~105,700–132,100 gal, customized/indicative). Values are typical and subject to model. Use the Pool Series Calculator for a first estimate, then confirm during a pool assessment.",
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
    body: "The stainless chamber is fitted into the circulation loop with the water-flow sensor in line; the battery-powered control, LCD, and AC/DC switch are set up for your system.",
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
    "The complete system: stainless Cu–Ag–Zn water chamber, battery-powered control with LCD, water-flow sensor and AC/DC switch, charging cable, and the water-testing kit.",
  includes: [
    "Stainless water chamber with Cu–Ag–Zn alloy anodes",
    "Battery-powered control with LCD, flow sensor and AC/DC switch",
    "Charging cable (AC 110–230 V in / 24 V DC operation)",
    "Water-testing kit — copper, free chlorine and pH",
    "Installation handbook and water-chemistry maintenance chart",
  ],
  notes: [
    "Series is confirmed to your pool volume and circulation before dispatch. Published specs are typical and subject to model.",
    "Installation is arranged separately with a qualified installer. Do not bypass the water-flow sensor.",
    "Warranty terms remain pending client confirmation of the current pro-rated schedule.",
  ],
} as const;

/** Homepage story beats — numbers live here, not in the page. */
export const homepageStoryPoints = [
  {
    id: "chamber",
    eyebrow: "01 — The chamber",
    title: "Stainless cell, inline with your circulation",
    body: "Pool water passes through a stainless housing carrying copper, silver and zinc alloy anodes, plumbed into the filtration return so every turnover is treated. A water-flow sensor confirms circulation; do not bypass it.",
    focus: 0,
  },
  {
    id: "control",
    eyebrow: "02 — The control",
    title: "Battery-powered PWM, 24 V DC, LCD",
    body: "The unit operates at 24 V DC from a 2200 mAh battery, charged from AC 110–230 V. PWM meters the current. The LCD reports status; an AC/DC switch selects operating mode.",
    focus: 0.5,
  },
  {
    id: "water",
    eyebrow: "03 — The water",
    title: "Copper 0.5 ppm ideal. pH 7.2 ideal. Residual chlorine still required.",
    body: "Minerals help control algae and support biofilm control, which lowers day-to-day chlorine demand. Copper acceptable range 0.4–0.6 ppm; pH acceptable 7.0–7.8. A residual of free chlorine stays in the program.",
    focus: 1,
  },
] as const;

export const homepageHardwareCopy = [
  {
    id: "chamber",
    eyebrow: "The chamber",
    title: "Cu–Ag–Zn anodes in a stainless chamber",
    body: "A stainless water chamber — 28 to 56 cm by series, bore 5.7 to 15.2 cm — rated to 30 psi and built to sit inline with filtration.",
    imageKey: "chamberStudio" as const,
    imageAlt: "The Zinc'd stainless water chamber on a studio background",
  },
  {
    id: "control",
    eyebrow: "The control",
    title: "Battery PWM, 110–230 V charge, 170–230 W by series",
    body: "Battery-powered control regulates ionization by PWM, reports status on an LCD, and includes a water-flow sensor and AC/DC switch.",
    imageKey: "control" as const,
    imageAlt: "The Zinc'd control enclosure showing ionizer status on its LCD",
  },
  {
    id: "together",
    eyebrow: "The system",
    title: "Chamber, control, charger and test kit — one commissioned system",
    body: "Stainless chamber, battery-powered control, charging cable, and the copper / chlorine / pH testing kit — series confirmed to your volume before dispatch.",
    imageKey: "system" as const,
    imageAlt: "The Zinc'd chamber and control together as catalog products",
  },
] as const;

export const faqTopicSummaries = [
  {
    id: "chemistry",
    title: "Chemistry & chlorine",
    body: "Residual free chlorine stays in the plan. Ionization is designed to reduce dependency — not erase sanitizer.",
  },
  {
    id: "how",
    title: "How it works",
    body: "Stainless chamber, Cu–Ag–Zn anodes, battery-powered PWM, water-flow sensor and LCD.",
  },
  {
    id: "sizing",
    title: "Sizing & series",
    body: "Series-01 through Series-04 — start with the Pool Series Calculator, then confirm in assessment. Series-03 and Series-04 are customized, indicative models.",
  },
  {
    id: "claims",
    title: "Claims we publish",
    body: "Certification and performance claims appear only when documentation is ready. No fog, no filler.",
  },
] as const;

/**
 * Catalytic Super Softener companion line — complete handbook.
 * Claims-safe: designed to help reduce scale; no-salt / no-resin is a
 * factual operating point, not a superiority claim (C-020).
 */
export const softenerLine = {
  name: "Catalytic Super Softener",
  eyebrow: "Companion treatment",
  headline: "When hardness asks for a different tool",
  intro:
    "Where calcium hardness sits above about 300 ppm, the handbook points to a catalytic conditioner or a partial drain and refill — not more ionization. The Catalytic Super Softener is designed to help reduce scale formation in the circulation loop. It does not use salt, chemicals, or ion-exchange resin.",
  hardnessNote:
    "If calcium hardness is above about 300 ppm, consider the Catalytic Super Softener or a partial drain and refill before commissioning ionization.",
  claimsFence:
    "Wording is operational, not comparative. We do not claim that the softener extends equipment life, outperforms salt systems, or replaces professional water management.",
} as const;

export const softenerSeries = [
  {
    name: "Titan",
    flow: "≤ 100 LPM",
    body: "Catalytic conditioner sized for typical residential and light-commercial flow — designed to help reduce scale formation.",
  },
  {
    name: "Titan Pro",
    flow: "≤ 200 LPM",
    body: "Higher-flow catalytic conditioner for larger residential and commercial loops.",
  },
  {
    name: "Custom",
    flow: "Any flow — assessed",
    body: "Specified to the site when flow sits outside the Titan / Titan Pro bands.",
  },
] as const;

export const softenerFaqs = [
  {
    q: "Does the softener replace Zinc'd ionization?",
    a: "No. It is a companion for high-hardness sites. Ionization addresses mineral sanitation support; the softener is designed to help reduce scale formation when hardness is elevated.",
  },
  {
    q: "Is it a salt or resin softener?",
    a: "No. It is a catalytic conditioner. It does not use salt, added chemicals, or ion-exchange resin. That is how it operates — not a claim that it is superior to every other hardness treatment.",
  },
  {
    q: "When should I consider it?",
    a: "The installation handbook flags hardness above about 300 ppm as a reason to consider a catalytic conditioner or a partial drain and refill. Confirm with a water test during assessment.",
  },
] as const;

