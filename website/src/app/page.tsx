import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/blocks/cta-band";
import { ZincdLogo } from "@/components/brand/zincd-logo";
import { ProductSpin } from "@/components/graphics/product-spin";
import { HeroVideo } from "@/components/media/hero-video";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { AmbientIons } from "@/components/motion/ambient-ions";
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
  title: "Zinc'd | Ecological Mineral Ionization for Pools",
  description:
    "Zinc'd — ecological copper–silver–zinc ionization with precision PWM control for estate, hospitality and commercial pools. Documented specifications. Distributor and assessment paths.",
  path: "/",
  keywords: [
    "pool ionization system",
    "copper silver zinc ionization",
    "ecological pool water treatment",
    "commercial pool ionization",
    "hotel pool water technology",
    "Zinc'd",
  ],
});

const storyStages = [
  {
    id: "before",
    eyebrow: "Before",
    title: "Chemistry that works hard on the water — and on you",
    body: "Routine chlorine programs keep pools safe, but day-to-day chemical load is what swimmers and operators feel.",
    image: "/img/pool-residential.jpg",
    imageAlt: "Residential pool water surface",
  },
  {
    id: "through",
    eyebrow: "Through Zinc'd",
    title: "Mineral ions, released under control",
    body: "Circulating water passes the stainless Cu–Ag–Zn chamber. PWM regulation introduces copper, silver and zinc ions into the loop.",
    image: productStills.flowDiagram,
    imageAlt: "Zinc'd unit between filtration and the pool",
  },
  {
    id: "after",
    eyebrow: "After",
    title: "Clearer water for people, place, and operations",
    body: "A quieter chemistry program — still with residual free chlorine ~1.0 ppm — designed to feel gentler for guests and easier for the teams who maintain it.",
    image: "/img/pool-resort.jpg",
    imageAlt: "Clear resort swimming pool",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-end overflow-hidden border-b border-border">
        <HeroVideo clips={homepageHeroClips} />
        <div aria-hidden className="absolute inset-0 hero-scrim" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-44 hero-scrim-bottom" />
        <Container className="relative pb-14 pt-24 md:pb-20 md:pt-32">
          <Reveal>
            <div className="max-w-xl space-y-6">
              <ZincdLogo size="hero" href={null} priority />
              <TechnicalLabel className="text-[color:var(--aqua-400)]">
                {heroContent.eyebrow}
              </TechnicalLabel>
              <h1 className="text-display text-white">
                A quieter{" "}
                <span className="text-gradient-aqua">revolution</span> in pool
                water.
              </h1>
              <p className="text-body-large max-w-md text-white/85">
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
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================ SCROLL STORY ============================ */}
      <ScrollFlipStory stages={[...storyStages]} />

      {/* ============================ 3D PRODUCT ============================ */}
      <Section
        id="experience"
        spacing="lg"
        background="default"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgb(45 212 191 / 0.14), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgb(16 185 129 / 0.1), transparent 55%)",
          }}
        />
        <AmbientIons density="medium" className="opacity-50" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal variant="left">
            <SectionHeading
              as="h2"
              eyebrow="The system"
              title="Turn the chamber. Feel the build."
              description="An interactive view of the stainless Cu–Ag–Zn cell — the engineered core of every Zinc'd install. Specs and series live on the product page."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-[var(--radius-control)]"
                render={<Link href="/product" />}
              >
                Explore the product
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[var(--radius-control)]"
                render={<Link href="/technology" />}
              >
                How it works
              </Button>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={0.08}>
            <div className="rounded-[var(--radius)] border border-border bg-surface/80 p-4 shadow-[var(--shadow-2)] backdrop-blur-sm md:p-6">
              <div className="mb-3 flex items-center justify-between px-1">
                <TechnicalLabel>Cu · Ag · Zn chamber</TechnicalLabel>
                <span className="text-technical normal-case tracking-normal text-accent-steel">
                  Drag · scroll into view
                </span>
              </div>
              <ProductSpin />
            </div>
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.waterStory.src}
        poster={motionGraphics.waterStory.poster}
        eyebrow="Living water"
        title="Through the chamber — clearer out"
        body="Mineral ionization visualized as film: water enters the Zinc'd cell and leaves ready for a quieter chemistry program."
      />

      {/* ============================ SERIES TEASER ============================ */}
      <Section id="series" spacing="lg" background="muted" className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(12 31 36 / 0.05) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Sized to the pool"
            title="Series-1 to custom multi-unit"
            description="Handbook volumes and pipe sizes — confirmed in assessment. Full detail on the product page."
          />
        </Reveal>
        <div className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <Link
                href="/product#series"
                className="block border-t-2 border-accent-aquatic/60 bg-transparent pt-5 transition-colors hover:border-accent-aquatic"
              >
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-2 text-foreground">{series.name}</h3>
                <p className="text-technical mt-2 normal-case tracking-normal text-accent-steel">
                  {series.volume}
                </p>
                <p className="text-small mt-1 text-muted-foreground">{series.scope}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <Button
              variant="outline"
              size="lg"
              className="rounded-[var(--radius-control)]"
              render={<Link href="/product" />}
            >
              Full product &amp; install layouts
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ============================ PATHS ============================ */}
      <Section spacing="lg" background="default" className="relative overflow-hidden">
        <AmbientIons tone="ecological" density="sparse" />
        <div className="relative grid gap-8 md:grid-cols-2">
          <Reveal variant="left">
            <div className="relative overflow-hidden rounded-[var(--radius)] border border-border p-8 md:p-10">
              <Image
                src="/img/pool-wellness.jpg"
                alt=""
                fill
                sizes="50vw"
                className="object-cover opacity-25"
                aria-hidden
              />
              <div className="relative">
                <TechnicalLabel>Owners &amp; operators</TechnicalLabel>
                <h2 className="text-h2 mt-3 text-foreground">Assess the pool</h2>
                <p className="text-body mt-3 max-w-sm text-muted-foreground">
                  Match volume, pipe size and circulation to the right Zinc&apos;d
                  series — then install with a qualified professional.
                </p>
                <Button
                  size="lg"
                  className="mt-6 rounded-[var(--radius-control)]"
                  render={<Link href={siteConfig.ctas.assessment.href} />}
                >
                  {siteConfig.ctas.assessment.label}
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={0.06}>
            <div className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-[color:var(--teal-900)] p-8 text-white md:p-10">
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgb(45 212 191 / 0.35), transparent 50%)",
                }}
              />
              <div className="relative">
                <TechnicalLabel className="text-[color:var(--aqua-400)]">
                  Partners
                </TechnicalLabel>
                <h2 className="text-h2 mt-3 text-white">Carry the line</h2>
                <p className="text-body mt-3 max-w-sm text-white/75">
                  A documented ionization category for distributors, builders and
                  installers — residential through commercial multi-unit.
                </p>
                <Button
                  size="lg"
                  variant="partner"
                  className="mt-6 rounded-[var(--radius-control)] border-white/40 bg-white/15 text-white hover:bg-white hover:text-[color:var(--teal-900)]"
                  render={<Link href="/distributors" />}
                >
                  {siteConfig.ctas.distributor.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Start with an assessment — or a partner conversation"
        body="Deep specs, install layouts, and FAQ live on the inner pages. The home page is the experience; the rest of the site is the detail."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
