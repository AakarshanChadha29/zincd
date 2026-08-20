import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site-config";

/**
 * Client brand mark from the approved raster candidate
 * (`public/brand/zincd-logo.jpg` — exact client artwork, not redrawn).
 *
 * Presentation only: light pearl plate, tight crop of the client raster
 * (`public/brand/zincd-logo.jpg` — baked padding removed, not redrawn).
 */
type ZincdLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
  /** Larger treatment for hero / feature moments. */
  size?: "nav" | "hero";
};

export function ZincdLogo({
  className,
  priority = false,
  href = "/",
  size = "nav",
}: ZincdLogoProps) {
  const image = (
    <span
      className={cn(
        "inline-flex items-center overflow-hidden rounded-[var(--radius-control)] bg-[color:var(--pearl)] ring-1 ring-[color:var(--teal-900)]/8",
        size === "nav" && "px-1 py-0.5 shadow-[var(--shadow-1)]",
        size === "hero" &&
          "px-1.5 py-1 shadow-[var(--shadow-2)] ring-[color:var(--aqua-400)]/25 md:px-2 md:py-1",
        className
      )}
    >
      <Image
        src="/brand/zincd-logo.jpg"
        alt={`${siteConfig.brand.name} logo`}
        width={1600}
        height={666}
        priority={priority}
        className={cn(
          "w-auto",
          size === "nav" && "h-7 sm:h-8",
          size === "hero" && "h-10 sm:h-12 md:h-14"
        )}
      />
    </span>
  );

  if (href === null) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-sm focus-visible:outline-none"
      aria-label={`${siteConfig.brand.name} home`}
    >
      {image}
    </Link>
  );
}
