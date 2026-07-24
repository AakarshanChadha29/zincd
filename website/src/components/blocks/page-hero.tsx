import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";

type HeroAction = { label: string; href: string; variant?: "default" | "outline" };

/**
 * Interior-page hero with the engineered grid + aquatic aura treatment.
 * Optional right-hand slot for a graphic or spec panel.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: HeroAction[];
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 hero-aura" />
      <Container className="relative py-14 md:py-20">
        <div
          className={
            aside
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
              : "max-w-3xl"
          }
        >
          <Reveal>
            <div className="space-y-6">
              <TechnicalLabel>{eyebrow}</TechnicalLabel>
              <h1 className="text-display text-[color:var(--blue-900)]">{title}</h1>
              <p className="text-body-large max-w-2xl text-muted-foreground">
                {description}
              </p>
              {actions && actions.length > 0 ? (
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                  {actions.map((action, i) => (
                    <Button
                      key={action.href + action.label}
                      size="lg"
                      variant={action.variant ?? "default"}
                      className="rounded-[var(--radius-control)]"
                      render={<Link href={action.href} />}
                    >
                      {action.label}
                      {i === 0 && (action.variant ?? "default") === "default" ? (
                        <ArrowRight className="size-4" aria-hidden />
                      ) : null}
                    </Button>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
          {aside ? <Reveal delay={0.1}>{aside}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
