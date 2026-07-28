import Image from "next/image";

import { cn } from "@/lib/cn";

type ProductFloatProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Aspect box for the float. */
  aspectClassName?: string;
  sizes?: string;
};

/**
 * Real product photography composited onto cinematic film — no studio plate.
 * Uses cutouts with true alpha (black bg removed).
 */
export function ProductFloat({
  src,
  alt,
  priority = false,
  className,
  aspectClassName = "aspect-[3/4]",
  sizes = "(min-width: 1024px) 40vw, 75vw",
}: ProductFloatProps) {
  return (
    <div className={cn("relative w-full", aspectClassName, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain drop-shadow-[0_28px_50px_rgba(4,24,32,0.55)]"
      />
    </div>
  );
}
