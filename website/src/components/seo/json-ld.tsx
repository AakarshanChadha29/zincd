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
      "Complete copper–silver–zinc pool ionization system with microcontroller PWM control, monitoring, and water-testing kit.",
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
