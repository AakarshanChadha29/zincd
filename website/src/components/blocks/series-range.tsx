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
        "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {productSeries.map((series, i) => {
        const inner = (
          <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] bg-surface/95 shadow-[var(--shadow-1)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--teal-900)]">
              <Image
                src={series.image}
                alt={`${series.displayName} Zinc'd ionization hardware`}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-h3 text-foreground">{series.displayName}</h3>
              <p className="text-technical mt-2 normal-case tracking-normal text-accent-aquatic">
                {series.volume}
                <span className="text-muted-foreground"> · {series.volumeMetric}</span>
              </p>
              <p className="text-small mt-3 leading-relaxed text-muted-foreground">
                {series.fit}
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
