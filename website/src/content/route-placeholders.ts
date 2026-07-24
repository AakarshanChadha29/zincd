export type RoutePlaceholder = {
  path: string;
  title: string;
  description: string;
  related?: { label: string; href: string }[];
};

/**
 * Safe, claims-free placeholder copy for route shells.
 * Final marketing content is pending source approval.
 */
export const routePlaceholders: Record<string, RoutePlaceholder> = {
  "/": {
    path: "/",
    title: "Zinc'd",
    description:
      "Public website foundation for Zinc'd — engineered pool water technology for US residential and commercial markets.",
  },
  "/technology": {
    path: "/technology",
    title: "Technology",
    description:
      "Overview of how Zinc'd copper–silver–zinc ionization is intended to work within a responsible pool chemistry program. Detailed public explanations remain pending source approval.",
    related: [
      { label: "Product", href: "/product" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  "/product": {
    path: "/product",
    title: "Product",
    description:
      "Product overview shell for the Zinc'd pool ionization system. Model list, specifications, and imagery will be published after client confirmation.",
    related: [
      { label: "Technology", href: "/technology" },
      { label: "Installation & Maintenance", href: "/installation-maintenance" },
    ],
  },
  "/applications": {
    path: "/applications",
    title: "Applications",
    description:
      "Sector overview for residential, hospitality, commercial, and fitness or wellness pool environments. Segment messaging is provisional until market confirmation.",
    related: [
      { label: "Residential", href: "/applications/residential" },
      { label: "Hotels & Resorts", href: "/applications/hotels-resorts" },
      { label: "Commercial", href: "/applications/commercial" },
      { label: "Fitness & Wellness", href: "/applications/fitness-wellness" },
    ],
  },
  "/applications/residential": {
    path: "/applications/residential",
    title: "Residential Applications",
    description:
      "Guidance path for homeowners and estate pools seeking clearer, assessment-led information about Zinc'd systems. Final residential copy is pending approval.",
    related: [
      { label: "Request Assessment", href: "/contact?intent=assessment" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  "/applications/hotels-resorts": {
    path: "/applications/hotels-resorts",
    title: "Hotels & Resorts",
    description:
      "Application shell for hospitality pools and aquatic amenities. Operational messaging will be finalized with approved sources.",
    related: [
      { label: "Distributors", href: "/distributors" },
      { label: "Contact", href: "/contact" },
    ],
  },
  "/applications/commercial": {
    path: "/applications/commercial",
    title: "Commercial Applications",
    description:
      "Application shell for community and commercial pool operators. Specs and suitability guidance will follow confirmed product documentation.",
    related: [
      { label: "Product", href: "/product" },
      { label: "Installation & Maintenance", href: "/installation-maintenance" },
    ],
  },
  "/applications/fitness-wellness": {
    path: "/applications/fitness-wellness",
    title: "Fitness & Wellness",
    description:
      "Application shell for fitness, wellness, and aquatic facilities. Content remains claims-safe and pending approval.",
    related: [
      { label: "Applications", href: "/applications" },
      { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
    ],
  },
  "/distributors": {
    path: "/distributors",
    title: "Distributors & Partners",
    description:
      "Wholesale and partner enquiry path for pool-equipment distributors, builders, and installation partners. Partner terms are not published until confirmed.",
    related: [
      { label: "Product", href: "/product" },
      { label: "Contact", href: "/contact?intent=partner" },
    ],
  },
  "/installation-maintenance": {
    path: "/installation-maintenance",
    title: "Installation & Maintenance",
    description:
      "High-level expectations for installation fit and routine maintenance. Detailed procedures and warranty language publish after client confirmation.",
    related: [
      { label: "Product", href: "/product" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
  "/faq": {
    path: "/faq",
    title: "FAQ",
    description:
      "Frequently asked questions shell. Answers will be limited to claims-safe, source-backed wording once the approved FAQ set is ready.",
    related: [
      { label: "Technology", href: "/technology" },
      { label: "Contact", href: "/contact" },
    ],
  },
  "/about": {
    path: "/about",
    title: "About Zinc'd",
    description:
      "Zinc'd is positioned as an independent US company and brand. Full company narrative, legal entity details, and contact identity remain pending confirmation.",
    related: [
      { label: "Contact", href: "/contact" },
      { label: "Legal", href: "/legal" },
    ],
  },
  "/contact": {
    path: "/contact",
    title: "Contact",
    description:
      "Assessment, specialist, and partner enquiry entry point. Form submission and official contact channels will be connected in a later phase. No placeholder phone or email is shown.",
    related: [
      { label: "Distributors", href: "/distributors" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  "/legal": {
    path: "/legal",
    title: "Legal Center",
    description:
      "Index of Zinc'd legal pages. Policy text will be drafted for the applicable US jurisdiction and reviewed before publication.",
    related: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Product Disclaimer", href: "/product-disclaimer" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "Privacy policy placeholder. Final language will address data collection for lead forms and analytics once those systems are defined.",
    related: [{ label: "Legal Center", href: "/legal" }],
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Use",
    description:
      "Website terms of use placeholder pending legal draft and review.",
    related: [{ label: "Legal Center", href: "/legal" }],
  },
  "/product-disclaimer": {
    path: "/product-disclaimer",
    title: "Product Disclaimer",
    description:
      "Product and performance disclaimer shell. Public claims remain gated by the claims register until evidence and legal sign-off are complete.",
    related: [
      { label: "Legal Center", href: "/legal" },
      { label: "Warranty", href: "/warranty" },
    ],
  },
  "/warranty": {
    path: "/warranty",
    title: "Warranty",
    description:
      "Warranty summary shell. Specific term lengths and exclusions publish only after client confirmation of current warranty documentation.",
    related: [
      { label: "Installation & Maintenance", href: "/installation-maintenance" },
      { label: "Product Disclaimer", href: "/product-disclaimer" },
    ],
  },
};

export const contentPendingNotice =
  "Development notice: final public content for this page is pending source approval. Placeholder text is intentionally conservative and claims-safe.";
