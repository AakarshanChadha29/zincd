import type { Metadata } from "next";

import { siteConfig } from "@/content/site-config";
import { defaultOgImage } from "@/content/media";

const defaultDescription = siteConfig.brand.description;

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  noIndex = false,
  keywords,
}: {
  title: string;
  description?: string;
  path?: string;
  /** Set true only for draft/legal stubs that should stay out of search. */
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const siteUrl = siteConfig.getSiteUrl();
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const ogImage = `${siteUrl}${defaultOgImage}`;

  return {
    title,
    description,
    keywords: keywords?.length ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1280,
          height: 720,
          alt: `${siteConfig.brand.name} — ecological mineral ionization for pools`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
  const ogImage = `${siteUrl}${defaultOgImage}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.brand.name} | Mineral Ionization Systems for US Pools`,
      template: `%s | ${siteConfig.brand.name}`,
    },
    description: defaultDescription,
    applicationName: siteConfig.brand.name,
    keywords: [
      "pool ionization system USA",
      "copper silver zinc ionization",
      "mineral pool ionizer",
      "ecological pool water treatment",
      "commercial pool equipment",
      "hotel pool ionization",
      "residential pool ionizer",
      "Zinc'd",
    ],
    openGraph: {
      siteName: siteConfig.brand.name,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImage, width: 1280, height: 720 }],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
