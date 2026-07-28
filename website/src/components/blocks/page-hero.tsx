import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { HeroVideo, type HeroVideoClip } from "@/components/media/hero-video";
import { cn } from "@/lib/cn";

type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "outline" | "partner";
};

/**
 * Interior-page hero. Optional cinematic video background (Product /
 * Distributors) or classic engineered grid + aura with an aside slot.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  video,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: HeroAction[];
  aside?: ReactNode;
  /** When set, full-bleed video replaces grid/aura treatment. */
  video?: HeroVideoClip | HeroVideoClip[];
}) {
  const clips = video ? (Array.isArray(video) ? video : [video]) : null;
  const cinematic = Boolean(clips?.length);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border",
        cinematic ? "min-h-[min(72vh,40rem)]" : "bg-surface"
      )}
    >
      {cinematic && clips ? (
        <>
          <HeroVideo clips={clips} />
          <div aria-hidden className="absolute inset-0 hero-scrim" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-32 hero-scrim-bottom" />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div aria-hidden className="absolute inset-0 hero-aura" />
        </>
      )}
      <Container className="relative py-14 md:py-20">
        <div
          className={
            aside && !cinematic
              ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
              : "max-w-3xl"
          }
        >
          <Reveal>
            <div className="space-y-6">
              <TechnicalLabel className={cinematic ? "text-[color:var(--aqua-400)]" : undefined}>
                {eyebrow}
              </TechnicalLabel>
              <h1
                className={cn(
                  "text-display",
                  cinematic ? "text-white" : "text-foreground"
                )}
              >
                {title}
              </h1>
              <p
                className={cn(
                  "text-body-large max-w-2xl",
                  cinematic ? "text-white/80" : "text-muted-foreground"
                )}
              >
                {description}
              </p>
              {actions && actions.length > 0 ? (
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                  {actions.map((action, i) => {
                    const variant = action.variant ?? "default";
                    const isOutlineOnFilm = cinematic && variant === "outline";
                    const isPartnerOnFilm = cinematic && variant === "partner";
                    return (
                      <Button
                        key={action.href + action.label}
                        size="lg"
                        variant={variant === "partner" ? "partner" : variant}
                        className={cn(
                          "rounded-[var(--radius-control)]",
                          isOutlineOnFilm &&
                            "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
                          isPartnerOnFilm &&
                            "border-white/40 bg-white/15 text-white hover:bg-white hover:text-[color:var(--teal-900)]"
                        )}
                        render={<Link href={action.href} />}
                      >
                        {action.label}
                        {i === 0 && variant === "default" ? (
                          <ArrowRight className="size-4" aria-hidden />
                        ) : null}
                      </Button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </Reveal>
          {aside && !cinematic ? <Reveal delay={0.1}>{aside}</Reveal> : null}
        </div>
        {/* Product spin stays below cinematic text when both requested */}
        {aside && cinematic ? (
          <Reveal delay={0.1}>
            <div className="mt-10 max-w-lg">{aside}</div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
