import type { NavItem, NavLink } from "@/types/navigation";

export const siteConfig = {
  brand: {
    name: "Zinc'd",
    legalNamePending: true,
    /**
     * Conservative public description — claims-safe, not final marketing copy.
     * Do not expand into efficacy, savings, or certification claims here.
     */
    description:
      "Zinc'd is a US swimming-pool water-treatment brand for residential estates and commercial aquatic facilities — ecological copper–silver–zinc ionization with precision PWM control. Designed to reduce chlorine dependency; residual free chlorine remains required.",
    tagline:
      "Ecological mineral ionization for discerning pools and professional partners.",
  },
  /**
   * C-017 resolved 2026-08-19: the client confirmed these as the live mailbox
   * and line, and they are the details printed on the US distributor brochure.
   * The site and the brochure must not drift apart — change both together.
   * Mailing address is still unconfirmed, so it stays null.
   */
  contact: {
    email: "info@zincd.net",
    emailHref: "mailto:info@zincd.net",
    /** Display form; `phoneHref` carries the E.164 dial string. */
    phone: "+1 (206) 690-4001",
    phoneHref: "tel:+12066904001",
    address: null as string | null,
    /**
     * Narrowed from the old contact-pending note: contact is now published,
     * but the legal entity name and brand spelling remain unconfirmed.
     */
    entityNote:
      "Legal entity name and registered address are being confirmed and will be published here.",
  },
  ctas: {
    assessment: {
      label: "Request a Pool Assessment",
      href: "/assess",
    },
    calculator: {
      label: "Pool Series Calculator",
      href: "/calculator",
      shortLabel: "Calculator",
    },
    distributor: {
      label: "Become a Distributor",
      href: "/distributors",
      shortLabel: "Distributors",
    },
    distributorContact: {
      label: "Discuss Your Territory",
      href: "/apply",
    },
    technology: {
      label: "Explore the Technology",
      href: "/technology",
    },
    specialist: {
      label: "Talk to a Specialist",
      href: "/contact?intent=specialist",
    },
    quote: {
      label: "Request a quote",
      href: "/contact?intent=specialist",
    },
    costSavings: {
      label: "Hotel planning model",
      href: "/cost-savings",
      shortLabel: "Planning model",
    },
  },
  /**
   * Production site URL, used for canonicals, OG URLs, sitemap and JSON-LD.
   *
   * NEXT_PUBLIC_SITE_URL wins. Falling straight through to localhost was a
   * silent SEO hazard: with the variable unset in production every canonical
   * tag, sitemap entry and JSON-LD url would have published as
   * http://localhost:3000. Vercel's own production hostname is used as a
   * safety net before that fallback — metadata is generated server-side, so
   * the unprefixed platform variable is readable here.
   */
  getSiteUrl(): string {
    const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
    if (explicit) return explicit.replace(/\/$/, "");

    const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (vercelHost) return `https://${vercelHost.replace(/\/$/, "")}`;

    return "http://localhost:3000";
  },
} as const;

export const primaryNavigation: NavItem[] = [
  { label: "Technology", href: "/technology" },
  {
    label: "Product",
    href: "/product",
    children: [
      {
        label: "Ionization system",
        href: "/product",
        description: "Series-01 through Series-04",
      },
      {
        label: "Catalytic Super Softener",
        href: "/product/softener",
        description: "Companion for high hardness",
      },
    ],
  },
  { label: "Calculator", href: "/calculator" },
  { label: "Planning model", href: "/cost-savings" },
  {
    label: "Applications",
    href: "/applications",
    children: [
      {
        label: "Residential",
        href: "/applications/residential",
        description: "Home and estate pools",
      },
      {
        label: "Hotels & Resorts",
        href: "/applications/hotels-resorts",
        description: "Hospitality aquatic facilities",
      },
      {
        label: "Commercial",
        href: "/applications/commercial",
        description: "Community and commercial pools",
      },
      {
        label: "Fitness & Wellness",
        href: "/applications/fitness-wellness",
        description: "Aquatic and wellness facilities",
      },
    ],
  },
  { label: "Distributors", href: "/distributors" },
  { label: "Installation & Maintenance", href: "/installation-maintenance" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Compact desktop primary strip — remaining items live in footer / mobile sheet */
export const desktopPrimaryNav: NavItem[] = [
  { label: "Technology", href: "/technology" },
  {
    label: "Product",
    href: "/product",
    children: primaryNavigation.find((item) => item.href === "/product")
      ?.children,
  },
  { label: "Calculator", href: "/calculator" },
  {
    label: "Applications",
    href: "/applications",
    children: primaryNavigation.find((item) => item.href === "/applications")
      ?.children,
  },
  { label: "Distributors", href: "/distributors" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerExploreLinks: NavLink[] = [
  { label: "Technology", href: "/technology" },
  { label: "Product", href: "/product" },
  { label: "Catalytic Super Softener", href: "/product/softener" },
  { label: "Pool Series Calculator", href: "/calculator" },
  { label: "Hotel planning model", href: "/cost-savings" },
  { label: "Applications", href: "/applications" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export const footerB2cLinks: NavLink[] = [
  { label: "Residential Applications", href: "/applications/residential" },
  { label: "Fitness & Wellness", href: "/applications/fitness-wellness" },
  { label: "Pool Series Calculator", href: "/calculator" },
  { label: "Request a Pool Assessment", href: "/assess" },
  { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
];

export const footerB2bLinks: NavLink[] = [
  { label: "Distributors & Partners", href: "/distributors" },
  { label: "Apply as a Distributor", href: "/apply" },
  { label: "Distributor QR", href: "/distributors/qr" },
  { label: "Brochure QR", href: "/distributors/brochure-qr" },
  { label: "Commercial Applications", href: "/applications/commercial" },
  { label: "Hotels & Resorts", href: "/applications/hotels-resorts" },
  { label: "Hotel planning model", href: "/cost-savings" },
  {
    label: "Installation & Maintenance",
    href: "/installation-maintenance",
  },
  { label: "Resources", href: "/resources" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Legal Center", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Product Disclaimer", href: "/product-disclaimer" },
  { label: "Warranty", href: "/warranty" },
];
