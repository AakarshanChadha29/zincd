import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
