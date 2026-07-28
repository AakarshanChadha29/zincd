import Link from "next/link";
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
  highlightSecondary = false,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: CtaAction;
  secondary?: CtaAction;
  /** When true, secondary (typically Distributors) gets equal visual weight. */
  highlightSecondary?: boolean;
}) {
  return (
    <section className="band-deep relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 deep-aura" />
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-35" />
      <AmbientIons tone="ecological" density="sparse" className="opacity-70" />
      <IonMotif className="pointer-events-none absolute -right-10 top-1/2 hidden h-72 -translate-y-1/2 text-white/10 lg:block" />
      <Container className="relative py-16 md:py-20">
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
        </div>
      </Container>
    </section>
  );
}
