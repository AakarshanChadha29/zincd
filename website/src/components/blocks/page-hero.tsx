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
 * Interior-page hero.
 *
 * Cinematic + product aside matches the target composition: full-bleed villa
 * film, copy on the left, real product photography large on the right /
 * bottom — not a tiny card stacked under the type.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  video,
  waterMotion = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: HeroAction[];
  aside?: ReactNode;
  video?: HeroVideoClip | HeroVideoClip[];
  waterMotion?: boolean;
}) {
  const clips = video ? (Array.isArray(video) ? video : [video]) : null;
  const cinematic = Boolean(clips?.length);
  const splitCinematic = Boolean(cinematic && aside);

  return (
    <section
      className={cn(
        "relative overflow-hidden",
        cinematic
          ? splitCinematic
            ? "min-h-[min(88vh,52rem)]"
            : "min-h-[min(72vh,40rem)]"
          : "bg-surface"
      )}
    >
      {cinematic && clips ? (
        <>
          <HeroVideo clips={clips} waterMotion={waterMotion} />
          <div aria-hidden className="absolute inset-0 hero-scrim" />
          <div
            aria-hidden
            className={cn(
              "absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_right,rgb(4_32_38/0.78)_0%,rgb(4_32_38/0.55)_36%,rgb(4_32_38/0.18)_62%,transparent_84%)]",
              splitCinematic ? "lg:w-[62%]" : "lg:w-[78%]"
            )}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[color:var(--pearl)]/25 to-transparent"
          />
        </>
      ) : (
        <>
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div aria-hidden className="absolute inset-0 hero-aura" />
        </>
      )}

      <Container
        className={cn(
          "relative",
          splitCinematic
            ? "flex min-h-[min(88vh,52rem)] flex-col justify-end pb-6 pt-20 md:pb-8 md:pt-24 lg:justify-center lg:pb-10 lg:pt-28"
            : "py-14 md:py-20"
        )}
      >
        {splitCinematic ? (
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.95fr)] lg:gap-10 xl:gap-12">
            <Reveal>
              <div className="max-w-xl space-y-6">
                <TechnicalLabel className="text-[color:var(--aqua-400)]">
                  {eyebrow}
                </TechnicalLabel>
                <h1 className="text-display text-white">{title}</h1>
                <p className="text-body-large max-w-xl text-white/85">
                  {description}
                </p>
                {actions && actions.length > 0 ? (
                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
                    {actions.map((action, i) => {
                      const variant = action.variant ?? "default";
                      const isOutlineOnFilm = variant === "outline";
                      const isPartnerOnFilm = variant === "partner";
                      return (
                        <Button
                          key={action.href + action.label}
                          size="lg"
                          variant={variant === "partner" ? "partner" : variant}
                          className={cn(
                            "rounded-[var(--radius-control)]",
                            isOutlineOnFilm &&
                              "border-white/35 bg-transparent text-white hover:bg-white/10 hover:text-white",
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
            <Reveal delay={0.08} className="relative z-[2] w-full max-lg:mx-auto max-lg:max-w-sm lg:justify-self-end">
              {aside}
            </Reveal>
          </div>
        ) : (
          <div
            className={
              aside
                ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
                : "max-w-3xl"
            }
          >
            <Reveal>
              <div className="space-y-6">
                <TechnicalLabel
                  className={cinematic ? "text-[color:var(--aqua-400)]" : undefined}
                >
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
            {aside ? <Reveal delay={0.1}>{aside}</Reveal> : null}
          </div>
        )}
      </Container>
    </section>
  );
}
