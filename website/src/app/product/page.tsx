import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { BuyPanel } from "@/components/blocks/buy-panel";
import { SeriesRange } from "@/components/blocks/series-range";
import { ProductJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site-config";
import {
  chamberCutawayFilm,
  productHeroClip,
  productPhotos,
} from "@/content/media";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { ProductGallery } from "@/components/media/product-gallery";
import {
  chemistryTargets,
  seriesRangeLabel,
  systemComponents,
  technicalSpecs,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Ionizer System — Specs, Series & What's Included",
  description:
    "Buy the Zinc'd copper–silver–zinc pool ionization system: stainless chamber, battery-powered PWM control, flow sensor, and testing kit. Series 1 to Series 4. $5,000 complete system.",
  path: "/product",
  keywords: [
    "Zinc'd product",
    "pool ionization system buy USA",
    "Cu Ag Zn ionization cell",
    "commercial pool ionizer",
    "residential pool ionizer",
  ],
});

const productGallery = [
  {
    src: productPhotos.install,
    alt: "Zinc'd chamber plumbed into a designed equipment gallery",
    label: "Complete plant-room installation",
  },
  {
    src: productPhotos.controlAngled,
    alt: "Zinc'd control and chamber beside an indoor spa pool",
    label: "Control and chamber",
  },
  {
    src: productPhotos.commercial,
    alt: "Parallel Zinc'd chambers in a sunlit resort mechanical gallery",
    label: "Commercial configuration",
  },
  {
    src: productPhotos.waterHero,
    alt: "Zinc'd stainless chamber beside moving pool water",
    label: "The chamber by the water it treats",
  },
] as const;

export default function ProductPage() {
  return (
    <>
      <ProductJsonLd />
      <PageHero
        eyebrow="Product"
        title={
          <>
            The Zinc&apos;d
            <span className="block">ionization system</span>
          </>
        }
        description="A complete, engineered system for US pools: a stainless copper–silver–zinc water chamber, battery-powered PWM control with LCD, water-flow sensor and AC/DC switch, and a water-testing kit — sized Series 1 through Series 4. Series 3 and Series 4 are customized, indicative models."
        actions={[
          { label: "Buy now", href: "/product#buy" },
          { label: siteConfig.ctas.calculator.shortLabel, href: siteConfig.ctas.calculator.href, variant: "outline" },
        ]}
        video={productHeroClip}
        mediaPosition="68% center"
      />

      <section className="relative min-h-[38rem] overflow-hidden bg-[color:var(--teal-900)]">
        <Image
          src="/img/product/manifold-zincd-transparent.png"
          alt=""
          fill
          sizes="100vw"
          aria-hidden
          className="object-contain object-[78%_center] opacity-70 max-lg:scale-125 max-lg:object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,transparent_0%,rgb(4_32_38/0.42)_35%,rgb(4_32_38/0.98)_78%)]"
        />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
        <Container className="relative flex min-h-[38rem] items-center py-20 md:py-28">
          <Reveal>
            <div className="max-w-xl">
              <TechnicalLabel className="text-[color:var(--aqua-400)]">
                Assembly architecture
              </TechnicalLabel>
              <h2 className="text-h1 mt-5 text-white">
                One controlled loop. Built to scale.
              </h2>
              <p className="text-body-large mt-5 text-white/85">
                The system sits after filtration and before the return. Larger
                commercial configurations can run chambers in parallel while
                preserving the same controlled flow path.
              </p>
              <p className="text-small mt-6 text-white/60">
                Ionization is designed to reduce chlorine dependency. A
                residual of free chlorine remains part of responsible
                operation.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section id="series" spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title={seriesRangeLabel}
            description="Two engineered pieces — stainless chamber and battery PWM control — sized to the pool. Rated volumes from the current product manual. Typical values, subject to model. Assessment confirms the fit to your circulation."
          />
        </Reveal>
        <SeriesRange showSpecs />
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <TechnicalLabel className="text-accent-aquatic">
                Not sure which series?
              </TechnicalLabel>
              <p className="text-body-large mt-3 max-w-xl text-muted-foreground">
                Estimate pool volume and see the handbook match in under a minute.
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              className="shrink-0 rounded-[var(--radius-control)]"
              render={<Link href="/calculator" />}
            >
              Open calculator
              <ArrowUpRight className="size-4" aria-hidden />
            </Button>
          </div>
        </Reveal>
        <StatusNote className="mt-10 max-w-3xl">
          Series volumes are rated capacities in litres, shown here in US gallons.
          Typical values, subject to model. Final selection is confirmed against
          your pool volume and circulation during assessment. High hardness? See the{" "}
          <Link
            href="/product/softener"
            className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Catalytic Conditioner
          </Link>
          .
        </StatusNote>
      </Section>

      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="In place"
            title="One gallery. Four real contexts."
            description="Move through the installed system, its control, and commercial configurations without turning the page into a wall of images."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <ProductGallery images={productGallery} />
        </Reveal>
      </Section>

      <MotionGraphicBand
        src={chamberCutawayFilm.src}
        poster={chamberCutawayFilm.poster}
        eyebrow="Inside the chamber"
        title="Flow becomes controlled ionization."
        body="The original chamber film, now placed where it belongs: alongside the product. Water crosses the copper–silver–zinc anodes while PWM control regulates the release."
      />

      <Section
        spacing="lg"
        background="deep"
        className="relative overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-20" />
        <div className="relative grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="What's in the system"
                title="Every component, accounted for"
                description="The Zinc'd system ships as a set of engineered components that work together."
                className="[&_.text-technical]:text-[color:var(--aqua-400)] [&>h2]:text-white [&>p]:text-white/70"
              />
              <ul className="mt-10 space-y-8">
                {systemComponents.map((c) => (
                  <li key={c.name} className="flex gap-4">
                    <Check
                      className="mt-1 size-5 shrink-0 text-[color:var(--aqua-400)]"
                      aria-hidden
                    />
                    <div>
                      <p className="text-h3 text-white">{c.name}</p>
                      <p className="text-body mt-2 text-white/65">{c.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Own one"
                title="Buy the system outright"
                description="For a single pool, the complete Zinc'd system is available direct at $5,000 — cell, control electronics, battery and charger, and the water-testing kit. Start with an assessment and we'll match the series to your circulation first."
                className="[&_.text-technical]:text-[color:var(--aqua-400)] [&>h2]:text-white [&>p]:text-white/70"
              />
              <div className="mt-8">
                <BuyPanel />
              </div>
              <p className="text-body mt-8 text-white">
                Buying for more than one site?
              </p>
              <p className="text-body mt-2 text-white/65">
                Operators running multiple pools, and businesses that want to
                install and service Zinc'd for their own customers, are better
                served by the partner route.
              </p>
              <Link
                href="/distributors"
                className="text-body mt-4 inline-flex items-center gap-1.5 font-medium text-[color:var(--aqua-400)] underline underline-offset-4 decoration-[color:var(--aqua-400)]/40 hover:decoration-[color:var(--aqua-400)]"
              >
                See distributor &amp; partner terms
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="default">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Specifications"
                title="Documented specifications"
                description="From the Zinc'd technical documentation. Typical values, subject to model."
              />
              <div className="mt-8">
                <SpecTable
                  rows={technicalSpecs}
                  className="border-[color:var(--teal-700)]/20 shadow-[var(--shadow-1)]"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-panel)] bg-surface-muted p-7 md:p-9">
              <SectionHeading
                as="h2"
                eyebrow="Responsible operation"
                title="Chemistry to hold"
                description="The supplied testing kit covers copper, free chlorine and pH."
              />
              <dl className="mt-8 space-y-4">
                {chemistryTargets.map((t) => (
                  <div
                    key={t.label}
                    className="flex items-baseline justify-between gap-6 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-body text-foreground">{t.label}</dt>
                    <dd className="text-right text-small text-accent-aquatic">
                      {t.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-small mt-8 text-muted-foreground">
                For installation fit and routine care, see{" "}
                <Link
                  href="/installation-maintenance"
                  className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                >
                  Installation &amp; Maintenance
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Find the right series — or become a distributor"
        body="Share your pool volume and circulation details, or explore carrying Zinc'd as a documented category in your line. Both paths are first-class."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
        image={productPhotos.waterHero}
      />
    </>
  );
}
