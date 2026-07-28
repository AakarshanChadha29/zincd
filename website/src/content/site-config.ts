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
    distributor: {
      label: "Become a Distributor",
      href: "/distributors",
      shortLabel: "Distributors",
    },
    distributorContact: {
      label: "Start a Partner Conversation",
      href: "/contact?intent=partner",
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
   * Production site URL should be supplied via NEXT_PUBLIC_SITE_URL.
   * Local fallback avoids build failures; do not treat as confirmed domain.
   */
  getSiteUrl(): string {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "http://localhost:3000"
    );
  },
} as const;

export const primaryNavigation: NavItem[] = [
  { label: "Technology", href: "/technology" },
  { label: "Product", href: "/product" },
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
  { label: "Applications", href: "/applications" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

export const footerB2bLinks: NavLink[] = [
  { label: "Distributors & Partners", href: "/distributors" },
  { label: "Commercial Applications", href: "/applications/commercial" },
  { label: "Hotels & Resorts", href: "/applications/hotels-resorts" },
  {
    label: "Installation & Maintenance",
    href: "/installation-maintenance",
  },
];

export const footerB2cLinks: NavLink[] = [
  { label: "Residential Applications", href: "/applications/residential" },
  { label: "Fitness & Wellness", href: "/applications/fitness-wellness" },
  { label: "Request a Pool Assessment", href: "/contact?intent=assessment" },
  { label: "Talk to a Specialist", href: "/contact?intent=specialist" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Legal Center", href: "/legal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Product Disclaimer", href: "/product-disclaimer" },
  { label: "Warranty", href: "/warranty" },
];
