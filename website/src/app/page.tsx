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
import { heroContent, productSeries } from "@/content/product-data";
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
const storyPoints = [
  {
    id: "chamber",
    eyebrow: "01 — The chamber",
    title: "Stainless cell, inline with your circulation",
    body: "Pool water passes through a stainless housing carrying copper, silver and zinc alloy electrodes, plumbed into the filtration return so every turnover is treated.",
    focus: 0,
  },
  {
    id: "control",
    eyebrow: "02 — The control",
    title: "PWM regulation, 24 V DC, monitored on an LCD",
    body: "A microcontroller meters the current by PWM, holding a steady ion release rate. The display reports output level and signals when routine anode cleaning is due.",
    focus: 0.5,
  },
  {
    id: "water",
    eyebrow: "03 — The water",
    title: "Copper 0.3–0.4 ppm. Chlorine ~1.0 ppm. pH 7.2–7.6.",
    body: "Minerals help control algae and support biofilm control, which lowers day-to-day chlorine demand. A residual of free chlorine stays in the program — three numbers, tested with the supplied kit.",
    focus: 1,
  },
] as const;

const hardwareBeats = [
  {
    id: "chamber",
    eyebrow: "The chamber",
    title: "Cu–Ag–Zn electrodes in a stainless housing",
    body: "A 100 mm electrode assembly in a corrosion-resistant stainless shell, rated to 30 psi and built to sit inline with filtration for the life of the plant room.",
    image: productPhotos.chamberStudio,
    imageAlt: "The Zinc'd stainless water chamber on a studio background",
  },
  {
    id: "control",
    eyebrow: "The control",
    title: "Microcontroller PWM, 110–230 V in, 75 W peak",
    body: "Wall-mounted control electronics regulate ionization by PWM and report status on an LCD, with cable glands for a tidy, permanent install.",
    image: productPhotos.control,
    imageAlt: "The Zinc'd control enclosure showing ionizer status on its LCD",
  },
  {
    id: "together",
    eyebrow: "The system",
    title: "Both pieces ship as one commissioned system",
    body: "Chamber, control electronics, rechargeable battery and charger, and the copper / chlorine / pH testing kit — series confirmed to your volume before dispatch.",
    image: productPhotos.system,
    imageAlt: "The Zinc'd chamber and control together as catalog products",
  },
] as const;

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
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[color:var(--pearl)]/90 via-[color:var(--pearl)]/25 to-transparent lg:h-36"
        />
        <Container className="relative flex flex-1 flex-col justify-end pb-4 pt-24 md:pb-6 md:pt-28 lg:justify-center lg:pb-8 lg:pt-32">
          <div className="grid items-end gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
            <Reveal>
              <div className="max-w-xl space-y-6 lg:max-w-2xl lg:space-y-7 lg:pb-10">
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
            <HeroParallax className="relative lg:self-end">
              <Reveal delay={0.08}>
                <div className="relative mx-auto w-full max-w-sm lg:max-w-md lg:translate-y-6 xl:max-w-lg xl:translate-y-8">
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

      {/* ============================ PROCESS FILM ============================ */}
      <MotionGraphicBand
        src={motionGraphics.ionsWater.src}
        poster={motionGraphics.ionsWater.poster}
        eyebrow="Mineral field"
        title="Clear water. Mineral intelligence."
        body="Abstract motion of ions in water — a lighter chemistry story for estates and hospitality pools, with residual chlorine still in the plan."
      />

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
                    alt="Zinc'd installed beside a residential pool equipment pad"
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
              <figure className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={productStills.flowDiagram}
                    alt="Flow diagram showing the Zinc'd chamber fitted into the pool circulation loop."
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <figcaption className="text-small border-t border-border px-5 py-3 text-muted-foreground">
                  Single-unit install — chamber inline on the filter return.
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-white">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={productStills.manifold}
                    alt="Manifold layout showing multiple Zinc'd chambers in parallel with a bypass."
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <figcaption className="text-small border-t border-border px-5 py-3 text-muted-foreground">
                  Multi-unit manifold with bypass — commercial volumes.
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================ SERIES ============================ */}
      <Section id="series" spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="US sizing guide"
            title="Series-1 to custom multi-unit"
            description="Volumes and pipe sizes from the installer handbook. Assessment confirms fit to your circulation — private estate or commercial manifold."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <Link
                href="/product#series"
                className="group block h-full border-t-2 border-accent-aquatic/50 pt-5 transition-colors hover:border-accent-aquatic"
              >
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-2 text-foreground group-hover:text-primary">
                  {series.name}
                </h3>
                <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                  {series.volume}
                </p>
                <p className="text-small mt-1 text-muted-foreground">
                  {series.scope}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

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
                  residential Series-1 through commercial multi-unit layouts.
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
