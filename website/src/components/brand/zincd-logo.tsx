import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site-config";

/**
 * Client brand mark from the approved raster candidate
 * (`public/brand/zincd-logo.jpg` — asset register #1).
 *
 * The JPEG has no alpha channel, so on dark surfaces it must sit on a light
 * brand plate. This is the exact client artwork — not a redrawn wordmark.
 * Swap to the vector master when it arrives (still outstanding).
 */
type ZincdLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
};

export function ZincdLogo({
  className,
  priority = false,
  href = "/",
}: ZincdLogoProps) {
  const image = (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-control)] bg-white px-2.5 py-1.5 shadow-[var(--shadow-1)]",
        className
      )}
    >
      <Image
        src="/brand/zincd-logo.jpg"
        alt={`${siteConfig.brand.name} logo`}
        width={1600}
        height={666}
        priority={priority}
        className="h-7 w-auto sm:h-8"
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
