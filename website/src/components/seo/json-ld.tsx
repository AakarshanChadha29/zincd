import { siteConfig } from "@/content/site-config";

/** Organization + WebSite JSON-LD for richer search results. */
export function OrganizationJsonLd() {
  const url = siteConfig.getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.brand.name,
        url,
        description: siteConfig.brand.description,
        slogan: siteConfig.brand.tagline,
        // The market this brand serves — helps US queries resolve to this site.
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        // Two named points so distributor enquiries and owner enquiries are
        // distinguishable in search results; both reach the same mailbox today.
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phone,
            areaServed: "US",
            availableLanguage: "English",
          },
          {
            "@type": "ContactPoint",
            contactType: "distributor relations",
            email: siteConfig.contact.email,
            telephone: siteConfig.contact.phone,
            areaServed: "US",
            availableLanguage: "English",
          },
        ],
      },
      {
        "@type": "WebSite",
        name: siteConfig.brand.name,
        url,
        description: siteConfig.brand.description,
        inLanguage: "en-US",
        // No SearchAction: there is no site-search endpoint. The previous entry
        // pointed at /faq with a query-input placeholder the URL never used,
        // which is an invalid action rather than a useful one.
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: readonly { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd() {
  const url = siteConfig.getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Zinc'd ionization system",
    description:
      "Complete copper–silver–zinc pool ionization system with battery-powered PWM control, water-flow sensor, LCD, and water-testing kit.",
    brand: {
      "@type": "Brand",
      name: siteConfig.brand.name,
    },
    url: `${url}/product`,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "5000",
      availability: "https://schema.org/PreOrder",
      url: `${url}/product`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HowToJsonLd({
  name,
  description,
  totalTime,
  steps,
}: {
  name: string;
  description: string;
  totalTime?: string;
  steps: readonly { name: string; text: string }[];
}) {
  const url = siteConfig.getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${url}/installation-maintenance`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
