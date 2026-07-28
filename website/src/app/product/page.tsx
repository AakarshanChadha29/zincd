import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { BuyPanel } from "@/components/blocks/buy-panel";
import { ProductJsonLd } from "@/components/seo/json-ld";
import { ProductFloat } from "@/components/media/product-float";
import { siteConfig } from "@/content/site-config";
import { productHeroClip, productPhotos, productStills } from "@/content/media";
import {
  chemistryTargets,
  productSeries,
  systemComponents,
  technicalSpecs,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Product — Zinc'd Pool Ionization System (US)",
  description:
    "Buy the Zinc'd copper–silver–zinc pool ionization system: stainless cell, PWM control, monitoring, and testing kit. Series-1 to Series-3 plus custom multi-unit. $5,000 complete system.",
  path: "/product",
  keywords: [
    "Zinc'd product",
    "pool ionization system buy USA",
    "Cu Ag Zn ionization cell",
    "commercial pool ionizer",
    "residential pool ionizer",
  ],
});

export default function ProductPage() {
  return (
    <>
      <ProductJsonLd />
      <PageHero
        eyebrow="Product"
        title={
          <>
            The Zinc&apos;d{" "}
            <span className="text-gradient-aqua">ionization system</span>
          </>
        }
        description="A complete, engineered system for US pools: a stainless copper–silver–zinc ionization cell, microcontroller PWM control with LCD and monitoring, and a water-testing kit — sized Series-1 through Series-3, with custom multi-unit layouts for larger commercial volumes."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "How it works", href: "/technology", variant: "outline" },
        ]}
        video={productHeroClip}
        aside={
          <ProductFloat
            src={productPhotos.system}
            alt="The Zinc'd ionization system: the stainless water chamber alongside the ionization cell tube."
            priority
            sizes="(min-width: 1024px) 40vw, 80vw"
          />
        }
      />

      {/* Full-bleed context band. This replaces a centred generated render
          floating in a muted field — the page dropped into a void straight
          after a cinematic hero. Real environment film + the real unit keeps
          the atmosphere continuous. */}
      <section className="relative overflow-hidden border-y border-border">
        <Image
          src="/img/pool-resort.jpg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--teal-900)]/92 via-[color:var(--teal-900)]/70 to-[color:var(--teal-900)]/35"
        />
        <Container className="relative py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <Reveal variant="left">
              <div className="max-w-xl">
                <TechnicalLabel className="text-[color:var(--aqua-400)]">
                  Built for the loop
                </TechnicalLabel>
                <h2 className="text-h1 mt-4 text-white">
                  Engineered to sit in the plant room, not on a shelf
                </h2>
                <p className="text-body-large mt-4 text-white/85">
                  A stainless chamber rated to 30&nbsp;psi, 24&nbsp;V DC
                  operation, and a 100&nbsp;mm electrode assembly — specified to
                  run continuously alongside the filtration you already have.
                </p>
                <p className="text-small mt-5 text-white/60">
                  Ionization is designed to reduce chlorine dependency. A
                  residual of free chlorine (~1.0&nbsp;ppm) remains part of
                  responsible operation.
                </p>
              </div>
            </Reveal>
            <Reveal variant="scale" delay={0.08}>
              <div className="relative aspect-[4/3] w-full">
                <ProductFloat
                  src={productPhotos.chamber}
                  alt="The Zinc'd stainless water chamber with copper, silver and zinc badges."
                  aspectClassName="aspect-[4/3]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Series range */}
      <Section id="series" spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title="Handbook series sizing"
            description="Volumes and pipe sizes from the Zinc'd plumber handbook. Assessment confirms the fit to your circulation system."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{series.name}</h3>
                <p className="text-small mt-1 font-medium text-accent-steel">{series.scope}</p>
                <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                  {series.volume}
                  <span className="text-muted-foreground"> · </span>
                  {series.pipe} inlet
                </p>
                <p className="text-small mt-3 text-muted-foreground">{series.body}</p>
                <p className="text-technical mt-4 normal-case tracking-normal text-accent-ecological">
                  {series.audience}
                </p>
                <p className="text-small mt-2 text-muted-foreground">{series.decisionNote}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <figure className="mt-12 overflow-hidden rounded-[var(--radius)] border border-border bg-surface shadow-[var(--shadow-1)]">
            <Image
              src={productStills.manifold}
              alt="Zinc'd three-chamber manifold with bypass for larger commercial inlets"
              width={1200}
              height={896}
              className="h-auto w-full bg-white object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <figcaption className="border-t border-border px-5 py-4 text-small text-muted-foreground md:px-6">
              Custom / commercial multi-unit layout: parallel Zinc&apos;d chambers
              with bypass — as specified in the installer handbook for larger inlets.
            </figcaption>
          </figure>
        </Reveal>
        <StatusNote className="mt-8 max-w-3xl">
          Series volumes are handbook guides in litres. Final selection is confirmed
          against your pool volume, pipe size and circulation flow during assessment.
        </StatusNote>
      </Section>

      {/* What's in the system */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="What's in the system"
                title="Every component, accounted for"
                description="The Zinc'd system ships as a set of engineered components that work together."
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {systemComponents.map((c) => (
                <li
                  key={c.name}
                  className="flex gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-5"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-accent-ecological" aria-hidden />
                  <div>
                    <p className="text-body font-medium text-foreground">
                      {c.name}
                    </p>
                    <p className="text-small mt-1 text-muted-foreground">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Buy direct — the commercial path. The dealership path lives on
          /distributors and is signposted from here so the two audiences
          separate cleanly instead of competing in one CTA. */}
      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Own one"
                title="Buy the system outright"
                description="For a single pool, the complete Zinc'd system is available direct. The series is matched to your pool volume and circulation flow rate before anything ships."
              />
              <div className="mt-8 rounded-[var(--radius-panel)] border border-border bg-surface p-6">
                <p className="text-body text-foreground">
                  Buying for more than one site?
                </p>
                <p className="text-small mt-2 text-muted-foreground">
                  Operators running multiple pools, and businesses that want to
                  install and service Zinc'd for their own customers, are better
                  served by the partner route.
                </p>
                <Link
                  href="/distributors"
                  className="text-small mt-4 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                >
                  See distributor &amp; partner terms
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <BuyPanel />
          </Reveal>
        </div>
      </Section>

      {/* Specs + chemistry */}
      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Specifications"
                title="Documented specifications"
                description="From the Zinc'd technical documentation. Typical values, subject to model."
              />
              <div className="mt-8">
                <SpecTable rows={technicalSpecs} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:pt-16">
              <div className="rounded-[var(--radius)] border border-border bg-surface-elevated p-7">
                <TechnicalLabel>Recommended chemistry</TechnicalLabel>
                <p className="text-small mt-3 text-muted-foreground">
                  The supplied testing kit covers copper, free chlorine and pH.
                </p>
                <dl className="mt-6 space-y-3">
                  {chemistryTargets.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-baseline justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-body text-foreground">{t.label}</dt>
                      <dd className="text-technical normal-case tracking-normal text-accent-aquatic">
                        {t.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <p className="text-small mt-6 text-muted-foreground">
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
      />
    </>
  );
}
