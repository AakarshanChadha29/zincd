import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IonMotif } from "@/components/graphics/ion-motif";
import { AmbientIons } from "@/components/motion/ambient-ions";

type CtaAction = { label: string; href: string };

/**
 * Mineral-teal conversion band — intentional deep accent on a light site.
 * Secondary can be highlighted (distributor path) so both audiences are served.
 */
export function CtaBand({
  eyebrow = "Get started",
  title,
  body,
  primary,
  secondary,
  note,
  highlightSecondary = false,
  image,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: CtaAction;
  secondary?: CtaAction;
  /**
   * Optional line beneath the buttons, for answering the last hesitation
   * ("then what happens to me?"). Kept quiet — white/60 against the deep band.
   */
  note?: string;
  /** When true, secondary (typically Distributors) gets equal visual weight. */
  highlightSecondary?: boolean;
  /** Optional pool-caustic still behind the teal scrim. */
  image?: string;
}) {
  return (
    <section className="band-deep relative overflow-hidden">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover"
          aria-hidden
        />
      ) : null}
      <div
        aria-hidden
        className={
          image
            ? "absolute inset-0 bg-[linear-gradient(105deg,rgb(10_61_66/0.82)_0%,rgb(10_61_66/0.55)_50%,rgb(10_61_66/0.72)_100%)]"
            : "absolute inset-0 deep-aura"
        }
      />
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-35" />
      <AmbientIons tone="ecological" density="sparse" className="opacity-70" />
      <IonMotif className="pointer-events-none absolute -right-10 top-1/2 hidden h-72 -translate-y-1/2 text-white/10 lg:block" />
      {/* Dissolves the band into the light footer below rather than ending on
          a hard dark-to-white edge. */}
      <div
        aria-hidden
        className="band-tideline pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-32"
      />
      <Container className="relative py-16 pb-24 md:py-20 md:pb-32">
        <div className="max-w-2xl">
          <TechnicalLabel className="text-[color:var(--aqua-400)]">
            {eyebrow}
          </TechnicalLabel>
          <h2 className="text-h1 mt-4 text-[color:var(--band-deep-foreground)]">
            {title}
          </h2>
          <p className="text-body-large mt-4 text-white/75">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-[var(--radius-control)] bg-white text-[color:var(--teal-900)] hover:bg-white/90"
              render={<Link href={primary.href} />}
            >
              {primary.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            {secondary ? (
              <Button
                size="lg"
                variant={highlightSecondary ? "partner" : "outline"}
                className={
                  highlightSecondary
                    ? "rounded-[var(--radius-control)] border-white/40 bg-white/15 text-white hover:bg-white hover:text-[color:var(--teal-900)]"
                    : "rounded-[var(--radius-control)] border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                }
                render={<Link href={secondary.href} />}
              >
                {secondary.label}
              </Button>
            ) : null}
          </div>
          {note ? (
            <p className="text-small mt-5 text-white/60">{note}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
