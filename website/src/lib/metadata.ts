import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";

const defaultDescription = siteConfig.brand.description;

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  noIndex = true,
}: {
  title: string;
  description?: string;
  path?: string;
  /** Development default: discourage indexing until launch readiness */
  noIndex?: boolean;
}): Metadata {
  const siteUrl = siteConfig.getSiteUrl();
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const fullTitle = title === siteConfig.brand.name ? title : title;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.brand.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

export function getRootMetadata(): Metadata {
  const siteUrl = siteConfig.getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.brand.name} | Pool Water Technology`,
      template: `%s | ${siteConfig.brand.name}`,
    },
    description: defaultDescription,
    applicationName: siteConfig.brand.name,
    openGraph: {
      siteName: siteConfig.brand.name,
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}
