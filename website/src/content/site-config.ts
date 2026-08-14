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
   * Contact details are intentionally null until client confirmation (C-017).
   * Do not publish placeholder phone, email, or address values.
   */
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    statusNote:
      "Official contact details are pending client confirmation and are not published yet.",
  },
  ctas: {
    assessment: {
      label: "Request a Pool Assessment",
      href: "/contact?intent=assessment",
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
      label: "Apply as a Distributor",
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
  { label: "Product", href: "/product" },
  { label: "Calculator", href: "/calculator" },
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
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Compact desktop primary strip — remaining items live in footer / mobile sheet */
export const desktopPrimaryNav: NavItem[] = [
  { label: "Technology", href: "/technology" },
  { label: "Product", href: "/product" },
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
  { label: "Pool Series Calculator", href: "/calculator" },
  { label: "Applications", href: "/applications" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export const footerB2cLinks: NavLink[] = [
  { label: "Residential Applications", href: "/applications/residential" },
  { label: "Fitness & Wellness", href: "/applications/fitness-wellness" },
  { label: "Pool Series Calculator", href: "/calculator" },
  { label: "Request a Pool Assessment", href: "/contact?intent=assessment" },
  { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
];

export const footerB2bLinks: NavLink[] = [
  { label: "Distributors & Partners", href: "/distributors" },
  { label: "Apply as a Distributor", href: "/apply" },
  { label: "Distributor QR", href: "/distributors/qr" },
  { label: "Commercial Applications", href: "/applications/commercial" },
  { label: "Hotels & Resorts", href: "/applications/hotels-resorts" },
  {
    label: "Installation & Maintenance",
    href: "/installation-maintenance",
  },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Legal Center", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Product Disclaimer", href: "/product-disclaimer" },
  { label: "Warranty", href: "/warranty" },
];
