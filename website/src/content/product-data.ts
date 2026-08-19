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
    title: "A lower-chemical program, honestly stated",
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
    volume: "5,300–18,500 gal",
    volumeMetric: "20,000–70,000 L",
    pipe: "2″",
    body: "Small to standard residential pools — from compact estate basins through typical private volumes on a 2″ circulation line.",
    audience: "Estate owners · residential builders",
    decisionNote: "Confirm volume band during assessment: 20–40k L (small) or 40–70k L (standard).",
  },
  {
    name: "Series-2",
    scope: "Large residential / club · 2–4″",
    volume: "18,500–26,400 gal",
    volumeMetric: "70,000–100,000 L",
    pipe: "2–4″",
    body: "Larger residential and club pools where flow and duty cycle sit above a single domestic install.",
    audience: "Clubs · HOAs · large estates",
    decisionNote: "Specify when volume and pipe size move past standard residential Series-1.",
  },
  {
    name: "Series-3",
    scope: "Luxury / small commercial · 4″",
    volume: "26,400–39,600 gal",
    volumeMetric: "100,000–150,000 L",
    pipe: "4″",
    body: "Luxury residential and small commercial basins on larger circulation — hospitality amenity scale with documented operating parameters.",
    audience: "Boutique hotels · luxury estates · facility leads",
    decisionNote: "Built for teams that need engineered control, monitoring, and clear maintenance cues.",
  },
  {
    name: "Custom",
    scope: "Commercial multi-unit",
    volume: "Above 39,600 gal",
    volumeMetric: "Above 150,000 L",
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
        title: "What we state",
        body: "Ionization reduces day-to-day chlorine dependency; a residual of free chlorine around 1.0 ppm remains part of responsible operation.",
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
    body: "Day-to-day clarity: PWM control, monitoring that signals anode care, and three chemistry targets to hold — copper 0.3–0.4 ppm, free chlorine ~1.0 ppm, pH 7.2–7.6.",
  },
  {
    title: "For partners & channel",
    body: "A defined product category for distributors, builders and installers: engineered ionization that fits existing circulation, with Series-1 through custom commercial reach.",
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
    body: "Fits the loop your customers already have — Series-1 through Series-3, plus custom multi-unit layouts on larger commercial inlets.",
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
 * site ships Series-1 (residential), /calculator sizes private pools, and
 * `directOffer` is a published direct-to-owner path linked from /distributors
 * itself. "Commercial" may scope the PROGRAM's emphasis, never the PRODUCT's
 * capability.
 */
export const partnerResidentialNote =
  "Series-1 covers private and estate pools on a 2″ line, so partners working residential books carry the same product into a different account. Owners buying a single system for their own pool don't need a partner agreement — that path is on the product page.";

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
    "Ionization works alongside the sanitizer program, not instead of it. Free chlorine is still tested and held in range — typically around 1.0 ppm — along with copper and pH.",
} as const;

/**
 * Performance fence for /distributors. The printed brochure's footnote stops
 * one sentence short: it never states that residual free chlorine is still
 * required, which leaves "reduced chemical dependency" unopposed and reads as
 * a step toward "chemical-free" (C-005, blocked and false as stated). The
 * middle two sentences here are that missing fence.
 */
export const partnerProgramFootnote =
  "Professional installation and ongoing water-quality management are required. Zinc'd ionization is designed to reduce chlorine dependency as part of a responsible water program — it is not a chemical-free system. Technical documentation recommends maintaining a residual of free chlorine, typically around 1.0 ppm, with copper and pH tested to stay in range. Performance depends on pool conditions, circulation, operation and applicable water-quality requirements. Published specifications are typical and subject to model; series is confirmed to your pool during assessment.";

/** Adopted verbatim from the brochure back cover — /distributors had no equivalent. */
export const partnerAgreementNote =
  "Distributor availability and commercial conditions are subject to written agreement.";

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
    a: "Sizing follows the installer handbook: Series-1 (2″, roughly 20,000–70,000 L), Series-2 (2–4″, 70,000–100,000 L), Series-3 (4″, 100,000–150,000 L), and custom multi-unit layouts above 150,000 L. Use the Pool Series Calculator for a first estimate, then confirm during a pool assessment.",
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

