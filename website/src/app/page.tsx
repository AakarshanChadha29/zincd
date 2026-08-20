import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { ScrollProgress } from "@/components/motion/scroll-progress";
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
  productStills,
} from "@/content/media";
import {
  heroContent,
  homepageHardwareCopy,
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

/**
 * Three points told across one continuous pool panorama. `focus` places each
 * point over its own stretch of the photograph for the reduced-motion fallback.
 */
const storyPoints = homepageStoryPoints;

const hardwareBeats = homepageHardwareCopy.map((beat) => ({
  ...beat,
  image: productPhotos[beat.imageKey],
}));

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
      <ScrollProgress />

      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-end overflow-hidden border-b border-border lg:min-h-[min(92vh,56rem)]">
        <HeroVideo clips={homepageHeroClips} />
        <div aria-hidden className="absolute inset-0 hero-scrim" />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_right,rgb(4_32_38/0.78)_0%,rgb(4_32_38/0.52)_38%,rgb(4_32_38/0.15)_65%,transparent_86%)] lg:w-[75%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[color:var(--pearl)]/50 to-transparent lg:h-10"
        />
        <Container className="relative flex flex-1 flex-col justify-end pb-4 pt-28 md:pb-6 md:pt-32 lg:justify-center lg:pb-8 lg:pt-36">
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:items-center lg:gap-16 xl:gap-24">
            <Reveal>
              <div className="max-w-xl space-y-6 lg:space-y-7 lg:pb-10 lg:pr-6">
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
                <p className="text-small text-white/55">
                  US estates · hotels &amp; resorts · commercial aquatics
                </p>
              </div>
            </Reveal>
            <HeroParallax className="relative lg:justify-self-end lg:self-end">
              <Reveal delay={0.08}>
                <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-md lg:translate-y-4 xl:max-w-lg">
                  <ProductFloat
                    src={productPhotos.chamber}
                    alt="The Zinc'd stainless ionization chamber, wordmark and Cu–Ag–Zn badges on the housing"
                    priority
                    // The branded chamber is a landscape object; the default 3/4
                    // box would letterbox it into a strip.
                    aspectClassName="aspect-[8/5]"
                    sizes="(min-width: 1280px) 32vw, (min-width: 1024px) 40vw, 78vw"
                  />
                </div>
              </Reveal>
            </HeroParallax>
          </div>
        </Container>
      </section>

      <PoolStoryPan
        points={[...storyPoints]}
        image={poolStoryPanorama.src}
        imageAlt={poolStoryPanorama.alt}
        label="How Zinc'd treats a pool — chamber, control, water chemistry"
      />

      {/* ============================ HARDWARE ============================ */}
      {/* A flat muted fill met the dark panorama with a hard edge. This carries
          the teal down out of the photograph and dissolves it into pearl, then
          sits the cards on a faint grid and aquatic glow so the band reads as a
          designed surface rather than an empty swatch. */}
      <section
        aria-label="Zinc'd hardware"
        className="relative overflow-hidden border-b border-border bg-[color:var(--pearl)]"
      >
        {/* Deep enough to carry the whole heading block. A shorter gradient put
            the description right on the fade boundary, where white type had
            almost no contrast left to sit on. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[27rem] bg-[linear-gradient(to_bottom,rgb(10_61_66/0.96)_0%,rgb(10_61_66/0.93)_42%,rgb(10_61_66/0.62)_64%,rgb(10_61_66/0.18)_85%,transparent_100%)]"
        />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-70" />
        <div aria-hidden className="absolute inset-0 hero-aura opacity-80" />
        <Container className="relative py-16 md:py-24">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The hardware"
            title="Two engineered pieces, one system"
            description="Specifications are typical and subject to model; final selection is confirmed against your circulation during assessment."
            className="[&_h2]:text-white [&_p]:text-white/75"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {hardwareBeats.map((beat, i) => (
            <Reveal key={beat.id} delay={i * 0.06}>
              <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
                {/* Landscape on phones so three stacked cards stay short; the
                    taller catalog crop only kicks in once they sit side by side. */}
                <div className="relative aspect-[16/9] border-b border-border bg-white md:aspect-[4/5]">
                  <Image
                    src={beat.image}
                    alt={beat.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <TechnicalLabel className="text-accent-aquatic">
                    {beat.eyebrow}
                  </TechnicalLabel>
                  <h3 className="text-h3 mt-3 text-foreground">{beat.title}</h3>
                  <p className="text-body mt-3 text-muted-foreground">
                    {beat.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        </Container>
      </section>

      {/* ============================ INSTALL ============================ */}
      <section className="relative overflow-hidden border-y border-border bg-[color:var(--pearl)]">
        <Container className="py-16 md:py-20">
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
                  water rejoins the pool on every turnover. Larger sites run
                  multiple units on a manifold with a bypass for service.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ScrollParallax offset={36}>
                <figure className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)] border border-border">
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
                src={productPhotos.system}
                alt="Zinc'd stainless chamber and wall control — the single-unit assembly"
                caption="Single-unit install — chamber inline on the filter return."
                contain
              />
              <ProductCaptionPanel
                src={productStills.manifold}
                alt="Manifold with three Zinc'd chambers in parallel and a bypass for service"
                caption="Multi-unit manifold with bypass — commercial volumes."
                contain
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================ SERIES ============================ */}
      <MotionGraphicBand
        id="series"
        src={motionGraphics.ionsWater.src}
        poster={motionGraphics.ionsWater.poster}
        className="border-t-0"
      >
        <Reveal>
          <TechnicalLabel className="text-[color:var(--aqua-400)]">
            US sizing guide
          </TechnicalLabel>
          <h2 className="text-h1 mt-4 text-white">{seriesRangeLabel}</h2>
          <p className="text-h3 mt-4 max-w-2xl font-medium text-white">
            Clear water. Mineral intelligence.
          </p>
          <p className="text-body-large mt-3 max-w-2xl text-white/75">
            Volumes from the current product manual. Assessment confirms fit to
            your circulation — private estate or commercial basin. Typical
            values, subject to model.
          </p>
        </Reveal>
        <SeriesRange
          href="/product#series"
          className="[&_article]:shadow-[var(--shadow-2)]"
        />
      </MotionGraphicBand>

      {/* ============================ PATHS ============================ */}
      <Section spacing="lg" background="default">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal variant="left">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-border p-8 md:min-h-[22rem] md:p-10">
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
                  residential Series-01 through Series-04.
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
