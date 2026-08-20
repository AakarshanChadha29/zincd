import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { productSeries } from "@/content/product-data";
import { cn } from "@/lib/cn";

type SeriesRangeProps = {
  /** When set, every card links to the same destination (usually `/product#series`). */
  href?: string;
  /** Product page only — power and chamber under the photo. */
  showSpecs?: boolean;
  className?: string;
};

export function SeriesRange({
  href,
  showSpecs = false,
  className,
}: SeriesRangeProps) {
  return (
    <div
      className={cn(
        "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {productSeries.map((series, i) => {
        const inner = (
          <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
            <div className="relative aspect-[4/5] border-b border-border bg-white">
              <Image
                src={series.image}
                alt={`${series.name} Zinc'd ionization chamber`}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                className="object-contain p-5"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-h3 text-foreground">{series.name}</h3>
              <p className="text-technical mt-2 normal-case tracking-normal text-accent-aquatic">
                {series.volume}
              </p>
              <p className="text-small mt-1 text-muted-foreground">
                {series.scope}
              </p>
              {showSpecs ? (
                <p className="text-small mt-3 text-accent-steel">
                  {series.power} · chamber {series.chamberLength}
                  {series.customized ? " · customized, indicative" : ""}
                </p>
              ) : null}
            </div>
          </article>
        );

        return (
          <Reveal key={series.name} delay={i * 0.05}>
            {href ? (
              <Link href={href} className="block h-full">
                {inner}
              </Link>
            ) : (
              inner
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
