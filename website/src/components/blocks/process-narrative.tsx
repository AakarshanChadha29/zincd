import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

type ProcessBeat = {
  step: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

/**
 * Editorial process — large type and photography, not a numbered flyer.
 */
export function ProcessNarrative({
  steps,
}: {
  steps: readonly ProcessBeat[];
}) {
  return (
    <ol className="mt-12 space-y-16 md:space-y-24">
      {steps.map((step, i) => {
        const imageLeft = i % 2 === 1;
        return (
          <li key={step.step}>
            <Reveal>
              <article
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                  imageLeft && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="max-w-xl">
                  <p className="text-technical text-accent-aquatic">{step.step}</p>
                  <h3 className="text-h1 mt-4 text-foreground">{step.title}</h3>
                  <p className="text-body-large mt-4 text-muted-foreground">
                    {step.body}
                  </p>
                </div>
                <figure className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
