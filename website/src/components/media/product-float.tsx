import Image from "next/image";

import { cn } from "@/lib/cn";

type ProductFloatProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  /** Aspect box for the still. */
  aspectClassName?: string;
  sizes?: string;
};

/**
 * Campaign photograph in a framed still — full scene, not a workshop cutout.
 */
export function ProductFloat({
  src,
  alt,
  priority = false,
  className,
  aspectClassName = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 75vw",
}: ProductFloatProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-panel)] shadow-[var(--shadow-2)]",
        aspectClassName,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
