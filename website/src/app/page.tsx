import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { HeroParallax } from "@/components/motion/hero-parallax";
import { ScrollParallax } from "@/components/motion/scroll-parallax";
import { CtaBand } from "@/components/blocks/cta-band";
import { SeriesRange } from "@/components/blocks/series-range";
import { ZincdLogo } from "@/components/brand/zincd-logo";
import { HeroVideo } from "@/components/media/hero-video";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { ProductFloat } from "@/components/media/product-float";
import { PoolStoryPan } from "@/components/motion/pool-story-pan";
import { siteConfig } from "@/content/site-config";
import {
  homepageHeroClips,
  lifestyleStills,
  motionGraphics,
  poolStoryPanorama,
  productPhotos,
} from "@/content/media";
import {
  heroContent,
  homepageStoryPoints,
  seriesRangeLabel,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  // The root segment does not inherit the layout's "%s | Zinc'd" template —
  // that only applies to child segments — so the brand is written in here.
  title: "Copper–Silver–Zinc Pool Ionization Systems | Zinc'd",
  description:
    "Zinc'd delivers copper–silver–zinc pool ionization with precision PWM control for US estates, hotels, and commercial aquatic facilities. Lower day-to-day chlorine demand — residual sanitizer still required.",
  path: "/",
  keywords: [
    "pool ionization system USA",
    "copper silver zinc ionization",
    "mineral pool ionizer",
    "commercial pool water treatment",
    "hotel pool ionization system",
    "residential pool ionizer",
    "PWM pool ionization",
    "Zinc'd",
  ],
});

function ProductCaptionPanel({
  src,
  alt,
  caption,
  contain = false,
}: {
  src: string;
  alt: string;
  caption: string;
  contain?: boolean;
}) {
  return (
    <figure className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)] bg-[color:var(--teal-900)]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={contain ? "object-contain p-6 md:p-8" : "object-cover"}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(10_61_66/0.9)_0%,rgb(10_61_66/0.2)_45%,transparent_72%)]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-small text-white md:px-6 md:pb-6">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-center overflow-hidden lg:min-h-[min(92vh,56rem)]">
        <HeroVideo clips={homepageHeroClips} />
        <div aria-hidden className="absolute inset-0 hero-scrim" />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_right,rgb(4_32_38/0.78)_0%,rgb(4_32_38/0.52)_34%,rgb(4_32_38/0.12)_58%,transparent_78%)] lg:w-[62%]"
        />
        <Container className="relative flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-12 md:pt-32 lg:justify-center lg:pb-16 lg:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.95fr)] lg:gap-10 xl:gap-14">
            <Reveal>
              <div className="max-w-xl space-y-6 lg:space-y-7">
                <div>
                  <ZincdLogo size="hero" href={null} priority />
                </div>
                <TechnicalLabel className="block text-[color:var(--aqua-400)]">
                  {heroContent.eyebrow}
                </TechnicalLabel>
                <h1 className="text-display text-white">
                  A quieter{" "}
                  <span className="text-gradient-aqua">revolution</span> in pool
                  water.
                </h1>
                <p className="text-body-large max-w-lg text-white/85">
                  {heroContent.subhead}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    size="lg"
                    className="rounded-[var(--radius-control)]"
                    render={<Link href={siteConfig.ctas.assessment.href} />}
                  >
                    {siteConfig.ctas.assessment.label}
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                  <Button
                    size="lg"
                    variant="partner"
                    className="rounded-[var(--radius-control)] border-white/40 bg-white/15 text-white hover:bg-white hover:text-[color:var(--teal-900)]"
                    render={<Link href={siteConfig.ctas.distributor.href} />}
                  >
                    {siteConfig.ctas.distributor.label}
                  </Button>
                </div>
                <p className="text-small max-w-md text-white/70">
                  Built for US estate pools, hotels and resorts, and commercial
                  aquatic facilities.
                </p>
              </div>
            </Reveal>
            <HeroParallax className="relative z-[2] w-full max-lg:mx-auto max-lg:max-w-sm lg:justify-self-end">
              <Reveal delay={0.08}>
                <ProductFloat
                  src={productPhotos.chamber}
                  alt="The Zinc'd stainless ionization chamber at a private infinity pool at dusk"
                  priority
                  aspectClassName="aspect-[4/5]"
                  sizes="(min-width: 1280px) 38vw, (min-width: 1024px) 44vw, 82vw"
                />
              </Reveal>
            </HeroParallax>
          </div>
        </Container>
      </section>

      <PoolStoryPan
        points={[...homepageStoryPoints]}
        image={poolStoryPanorama.src}
        imageAlt={poolStoryPanorama.alt}
        label="How Zinc'd treats a pool — chamber, control, water chemistry"
      />

      <MotionGraphicBand
        id="series"
        src={motionGraphics.ionsWater.src}
        poster={motionGraphics.ionsWater.poster}
      >
        <Reveal>
          <TechnicalLabel className="text-[color:var(--aqua-400)]">
            Hardware and US sizing
          </TechnicalLabel>
          <h2 className="text-h1 mt-4 text-white">{seriesRangeLabel}</h2>
          <p className="text-h3 mt-4 max-w-2xl font-medium text-white">
            Clear water. Mineral intelligence.
          </p>
          <p className="text-body-large mt-3 max-w-2xl text-white/75">
            Two engineered pieces — a stainless copper–silver–zinc chamber and
            battery-powered PWM control with flow sensor and LCD — sized to the
            pool. Volumes from the current product manual. Assessment confirms
            fit to your circulation. Typical values, subject to model.
          </p>
        </Reveal>
        <SeriesRange
          href="/product#series"
          className="[&_article]:shadow-[var(--shadow-2)]"
        />
      </MotionGraphicBand>

      <section className="relative overflow-hidden bg-[color:var(--pearl)]">
        <Container className="py-16 md:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <div className="max-w-2xl">
                <TechnicalLabel className="text-accent-aquatic">
                  Where it sits
                </TechnicalLabel>
                <h2 className="text-h1 mt-4 text-foreground">
                  Inline with your existing circulation
                </h2>
                <p className="text-body-large mt-4 text-muted-foreground">
                  The chamber is plumbed into the filtration return so treated
                  water rejoins the pool on every turnover. The control mounts
                  nearby. Larger sites run multiple units on a manifold with a
                  bypass for service.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ScrollParallax offset={36}>
                <figure className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)]">
                  <Image
                    src={productPhotos.install}
                    alt="Zinc'd chamber installed inline on the filter return, with the control mounted above"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </ScrollParallax>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <ProductCaptionPanel
                src={productPhotos.install}
                alt="Zinc'd chamber plumbed into a designed equipment gallery"
                caption="Single-unit install — chamber on the filter return, control nearby."
              />
              <ProductCaptionPanel
                src={productPhotos.commercial}
                alt="Parallel Zinc'd chambers in a sunlit resort mechanical gallery"
                caption="Multi-unit gallery with bypass — commercial volumes."
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <Section spacing="lg" background="default">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal variant="left">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius)] p-8 md:min-h-[22rem] md:p-10">
              <Image
                src={lifestyleStills.residentialPool}
                alt=""
                fill
                sizes="50vw"
                className="object-cover opacity-[0.22]"
                aria-hidden
              />
              <div className="relative">
                <TechnicalLabel>Owners · operators · builders</TechnicalLabel>
                <h2 className="text-h2 mt-3 text-foreground">
                  Start with a pool assessment
                </h2>
                <p className="text-body mt-3 max-w-md text-muted-foreground">
                  Share volume, pipe size, and circulation details. We match the
                  Zinc&apos;d series before anything ships — then you install with
                  a qualified professional.
                </p>
              </div>
              <Button
                size="lg"
                className="relative mt-8 w-fit rounded-[var(--radius-control)]"
                render={<Link href={siteConfig.ctas.assessment.href} />}
              >
                {siteConfig.ctas.assessment.label}
              </Button>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.06}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius)] bg-[color:var(--teal-900)] p-8 text-white md:min-h-[22rem] md:p-10">
              <Image
                src={lifestyleStills.estate}
                alt=""
                fill
                sizes="50vw"
                className="object-cover opacity-30"
                aria-hidden
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[color:var(--teal-900)]/55"
              />
              <div className="relative">
                <TechnicalLabel className="text-[color:var(--aqua-400)]">
                  Distributors · dealers · installers
                </TechnicalLabel>
                <h2 className="text-h2 mt-3 text-white">
                  Carry Zinc&apos;d in your market
                </h2>
                <p className="text-body mt-3 max-w-md text-white/75">
                  A documented ionization category for US channel partners —
                  residential {seriesRangeLabel}.
                </p>
              </div>
              <Button
                size="lg"
                variant="partner"
                className="relative mt-8 w-fit rounded-[var(--radius-control)] border-white/40 bg-white/15 text-white hover:bg-white hover:text-[color:var(--teal-900)]"
                render={<Link href="/distributors" />}
              >
                {siteConfig.ctas.distributor.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Assess a pool — or open a partner conversation"
        body="Send your volume, pipe size, and circulation details and we confirm the series before anything ships. Full specifications, install layouts, and warranty terms are on the product and technology pages."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
