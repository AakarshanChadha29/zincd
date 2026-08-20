import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site-config";

/**
 * Client brand mark from the approved raster candidate
 * (`public/brand/zincd-logo.jpg` — exact client artwork, not redrawn).
 *
 * Presentation only: thin white plate with a hairline teal ring so the
 * client raster stays readable on film and on mineral chrome.
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
        "inline-flex items-center overflow-hidden rounded-[var(--radius-control)] bg-white/95 ring-1 ring-[color:var(--teal-700)]/30",
        size === "nav" && "px-0.5 py-px",
        size === "hero" && "px-1 py-0.5 ring-[color:var(--aqua-400)]/35"
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
          size === "hero" && "h-9 sm:h-10 md:h-11",
          className
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
