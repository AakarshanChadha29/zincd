import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";

const routes = [
  "/",
  "/technology",
  "/product",
  "/product/softener",
  "/calculator",
  "/cost-savings",
  "/assess",
  "/resources",
  "/distributors",
  "/apply",
  "/applications",
  "/applications/residential",
  "/applications/hotels-resorts",
  "/applications/commercial",
  "/applications/fitness-wellness",
  "/installation-maintenance",
  "/faq",
  "/about",
  "/contact",
  "/warranty",
  "/legal",
  "/privacy",
  "/terms",
  "/product-disclaimer",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.getSiteUrl();
  const lastModified = new Date();

  return routes.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path === "/product" ||
            path === "/calculator" ||
            path === "/distributors" ||
            path === "/technology"
          ? 0.9
          : 0.7,
  }));
}
