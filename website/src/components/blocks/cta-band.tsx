import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { IonMotif } from "@/components/graphics/ion-motif";

type CtaAction = { label: string; href: string };

/**
 * Deep, atmospheric conversion band. One primary + one secondary action.
 */
export function CtaBand({
  eyebrow = "Get started",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: CtaAction;
  secondary?: CtaAction;
}) {
  return (
    <section className="relative overflow-hidden bg-surface-elevated text-white">
      <div aria-hidden className="absolute inset-0 deep-aura" />
      <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-40" />
      <IonMotif className="pointer-events-none absolute -right-10 top-1/2 hidden h-72 -translate-y-1/2 text-white/10 lg:block" />
      <Container className="relative py-16 md:py-20">
        <div className="max-w-2xl">
          <TechnicalLabel className="text-accent-aquatic">{eyebrow}</TechnicalLabel>
          <h2 className="text-h1 mt-4 text-white">{title}</h2>
          <p className="text-body-large mt-4 text-white/75">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-[var(--radius-control)] bg-primary text-primary-foreground hover:bg-[color:var(--primary-hover)]"
              render={<Link href={primary.href} />}
            >
              {primary.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            {secondary ? (
              <Button
                size="lg"
                variant="outline"
                className="rounded-[var(--radius-control)] border-white/25 bg-transparent text-white hover:bg-[color:var(--surface-elevated)]/10 hover:text-white"
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
