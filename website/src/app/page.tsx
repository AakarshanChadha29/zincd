import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/blocks/cta-band";
import { ZincdLogo } from "@/components/brand/zincd-logo";
import { ChamberStage } from "@/components/graphics/chamber-stage";
import { HeroVideo } from "@/components/media/hero-video";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { AmbientCinema } from "@/components/motion/ambient-cinema";
import { LivingField } from "@/components/motion/living-field";
import { ScrollFlipStory } from "@/components/motion/scroll-flip-story";
import { siteConfig } from "@/content/site-config";
import {
  homepageHeroClips,
  motionGraphics,
  productStills,
} from "@/content/media";
import { heroContent, productSeries } from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zinc'd | Mineral Ionization Systems for US Pools",
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

const storyStages = [
  {
    id: "before",
    eyebrow: "01 — The problem",
    title: "Chlorine keeps pools safe — operators still feel the load",
    body: "US estates, clubs, and hospitality pools need reliable sanitation. Day-to-day chemical intensity is what guests notice and facility teams manage.",
    image: "/img/pool-residential.jpg",
    imageAlt: "Clear residential swimming pool in the United States",
  },
  {
    id: "through",
    eyebrow: "02 — Through Zinc'd",
    title: "Mineral ions, metered into the circulation loop",
    body: "Pool water passes a stainless copper–silver–zinc chamber. Microcontroller PWM releases mineral ions at a controlled rate — engineered hardware, not a chemistry guess.",
    image: productStills.flowDiagram,
    imageAlt: "Zinc'd ionization chamber installed between filtration and the pool",
  },
  {
    id: "after",
    eyebrow: "03 — The outcome",
    title: "A quieter chemistry program — still responsibly sanitized",
    body: "Designed to reduce chlorine dependency for water many owners and guests find easier to live with. Residual free chlorine (~1.0 ppm) remains part of responsible operation.",
    image: "/img/pool-resort.jpg",
    imageAlt: "Resort swimming pool with clear water",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-end overflow-hidden border-b border-border">
        <HeroVideo clips={homepageHeroClips} />
        <div aria-hidden className="absolute inset-0 hero-scrim" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-44 hero-scrim-bottom lg:h-56" />
        <LivingField density="sparse" tone="deep" className="opacity-40 mix-blend-screen" />
        <Container className="relative pb-14 pt-24 md:pb-20 md:pt-28 lg:grid lg:min-h-[calc(100svh-var(--nav-height))] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-end lg:gap-10 lg:pb-24 lg:pt-32">
          <Reveal>
            <div className="max-w-xl space-y-6 lg:max-w-2xl lg:space-y-7">
              <ZincdLogo size="hero" href={null} priority />
              <TechnicalLabel className="text-[color:var(--aqua-400)]">
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
          <Reveal delay={0.1} className="mt-10 hidden lg:mt-0 lg:block">
            <div className="overflow-hidden rounded-[var(--radius)] border border-white/20 bg-white/10 p-2 shadow-[var(--shadow-2)] backdrop-blur-md">
              <ChamberStage />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================ SCROLL STORY ============================ */}
      <ScrollFlipStory stages={[...storyStages]} />

      {/* ============================ INTERACTIVE CHAMBER ============================ */}
      <Section
        id="experience"
        spacing="lg"
        background="default"
        className="relative overflow-hidden"
      >
        <AmbientCinema
          src={motionGraphics.livingField.src}
          poster={motionGraphics.livingField.poster}
          density="rich"
          tone="pearl"
        />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal variant="left">
            <SectionHeading
              as="h2"
              eyebrow="Interactive system"
              title="Tilt the chamber. Watch the mineral field."
              description="A cinematic, pointer-reactive visualization of the stainless Cu–Ag–Zn ionization cell — built for desktop presence and mobile touch. Specs and series sizing live on the product page."
            />
            <ul className="mt-8 space-y-3 text-small text-muted-foreground">
              {[
                "Cu · Ag · Zn alloy electrodes in a stainless housing",
                "Microcontroller PWM regulation — not manual guesswork",
                "Works alongside your sanitizer program (residual free chlorine ~1.0 ppm)",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-aquatic"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-[var(--radius-control)]"
                render={<Link href="/product" />}
              >
                Product &amp; series sizing
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[var(--radius-control)]"
                render={<Link href="/technology" />}
              >
                How the technology works
              </Button>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={0.08}>
            <div className="rounded-[var(--radius)] border border-border bg-surface/75 p-3 shadow-[var(--shadow-2)] backdrop-blur-sm md:p-5">
              <ChamberStage />
            </div>
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.chamberOrbit.src}
        poster={motionGraphics.chamberOrbit.poster}
        eyebrow="Engineered presence"
        title="Polished stainless. Living light."
        body="Premium product cinema for the Zinc'd chamber — the classy counterpart to the interactive scene above."
      />

      <MotionGraphicBand
        src={motionGraphics.waterIons.src}
        poster={motionGraphics.waterIons.poster}
        eyebrow="For US pool water"
        title="Clear water. Mineral intelligence."
        body="Estate and hospitality pools deserve a quieter chemistry program — mineral ions under control, residual chlorine still in the plan."
      />

      {/* ============================ SERIES ============================ */}
      <Section id="series" spacing="lg" background="muted" className="relative">
        <LivingField density="sparse" className="opacity-55" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="US sizing guide"
            title="Series-1 to custom multi-unit"
            description="Volumes and pipe sizes from the installer handbook. Assessment confirms fit to your circulation — private estate or commercial manifold."
          />
        </Reveal>
        <div className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <p className="text-small mt-1 text-muted-foreground">{series.scope}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ PATHS ============================ */}
      <Section spacing="lg" background="default" className="relative overflow-hidden">
        <LivingField density="medium" className="opacity-45" />
        <div className="relative grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal variant="left">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-border p-8 md:min-h-[22rem] md:p-10">
              <Image
                src={productStills.chamberPremium}
                alt=""
                fill
                sizes="50vw"
                className="object-cover opacity-[0.18]"
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
              <AmbientCinema
                src={motionGraphics.livingField.src}
                poster={motionGraphics.livingField.poster}
                density="medium"
                tone="deep"
                className="opacity-80"
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
        body="Deep specs, install layouts, warranty, and FAQ live on the inner pages. This homepage is the experience; the rest of Zinc'd is the documentation US buyers and partners expect."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
