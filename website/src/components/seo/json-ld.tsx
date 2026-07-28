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
      },
      {
        "@type": "WebSite",
        name: siteConfig.brand.name,
        url,
        description: siteConfig.brand.description,
        potentialAction: {
          "@type": "SearchAction",
          target: `${url}/faq`,
          "query-input": "required name=search_term_string",
        },
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
