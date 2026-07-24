import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { siteConfig } from "@/content/site-config";

type ZincdLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
};

/**
 * Development logo from approved raster candidate (asset register #1).
 * Vector master still pending final production approval.
 */
export function ZincdLogo({
  className,
  priority = false,
  href = "/",
}: ZincdLogoProps) {
  const image = (
    <Image
      src="/brand/zincd-logo.jpg"
      alt={`${siteConfig.brand.name} logo`}
      width={1600}
      height={666}
      priority={priority}
      className={cn("h-8 w-auto sm:h-9", className)}
    />
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
