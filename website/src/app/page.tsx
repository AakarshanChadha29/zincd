import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqList } from "@/components/blocks/faq-list";
import { IonizationCell } from "@/components/graphics/ionization-cell";
import { HeroVideo } from "@/components/media/hero-video";
import { siteConfig } from "@/content/site-config";
import { homepageHeroClips } from "@/content/media";
import {
  applications,
  chemistryTargets,
  faqs,
  heroContent,
  howItWorksSteps,
  productSeries,
  technicalSpecs,
  valuePillars,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zinc'd | Engineered Pool Water Technology",
  description: siteConfig.brand.description,
  path: "/",
});

/** Which environment photograph fronts each application card. */
const IMAGE_BY_SLUG: Record<string, string> = {
  residential: "/img/pool-residential.jpg",
  "hotels-resorts": "/img/pool-resort.jpg",
  commercial: "/img/pool-commercial.jpg",
  "fitness-wellness": "/img/pool-wellness.jpg",
};

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================
          Full-bleed cinematic villa/pool video — WeAreBrand concepts
          (atmosphere, brand-first, sparse first viewport), not a clone. */}
      <section className="relative flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-end overflow-hidden border-b border-border">
        <HeroVideo clips={homepageHeroClips} />
        <div aria-hidden className="absolute inset-0 hero-scrim" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 hero-scrim-bottom" />
        <Container className="relative pb-16 pt-28 md:pb-24 md:pt-36">
          <Reveal>
            <div className="max-w-xl space-y-7">
              <TechnicalLabel>{heroContent.eyebrow}</TechnicalLabel>
              <h1 className="text-display text-white">
                Engineered water treatment for the{" "}
                <span className="text-gradient-aqua">modern pool</span>.
              </h1>
              <p className="text-body-large max-w-lg text-white/80">
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
                  variant="outline"
                  className="rounded-[var(--radius-control)] border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
                  render={<Link href={siteConfig.ctas.distributor.href} />}
                >
                  {siteConfig.ctas.distributor.label}
                </Button>
              </div>
              <p className="text-small text-white/55">
                <Link
                  href={siteConfig.ctas.technology.href}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {siteConfig.ctas.technology.label}
                </Link>
                <span className="mx-2" aria-hidden>
                  ·
                </span>
                Residential · Hospitality · Commercial
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================ VALUE PILLARS ============================ */}
      <Section id="value" spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Why Zinc'd"
            title="A quieter chemistry program, engineered end to end"
            description="Ionization is designed to reduce chlorine dependency — while a residual of free chlorine remains part of responsible, monitored operation."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <FeatureGrid features={valuePillars} className="mt-10" />
        </Reveal>
      </Section>

      {/* ============================ HOW IT WORKS ============================ */}
      <Section id="how-it-works" spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="How it works"
                title="Ions, released under control"
                description="A microcontroller regulates a low-voltage current across copper, silver and zinc electrodes — introducing mineral ions at a controlled rate into your circulation loop."
              />
              <div className="mt-8 rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
                <IonizationCell />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={howItWorksSteps} />
            <StatusNote className="mt-8">
              Zinc'd works alongside your sanitizer program, not instead of it.
              Technical documentation recommends maintaining a residual of free
              chlorine (~1.0 ppm) for responsible operation.
            </StatusNote>
          </Reveal>
        </div>
      </Section>

      {/* ============================ SPECS / CONFIDENCE ============================ */}
      <Section id="specifications" spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Technical confidence"
                title="Documented specifications, not marketing figures"
                description="Core specifications from the Zinc'd technical documentation. Values are typical and subject to model."
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
                  A supplied testing kit covers the three metrics that keep the
                  water in range.
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
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href="/product" />}
                >
                  See the product range
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href="/technology" />}
                >
                  How the technology works
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================ PRODUCT SERIES ============================ */}
      <Section id="series" spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title="Four series, domestic to Olympic-size"
            description="A sizing range engineered to suit the full spread of circulation flow rates — confirmed to your system during a pool assessment."
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
                <p className="text-small mt-3 text-muted-foreground">{series.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ APPLICATIONS ============================ */}
      <Section id="applications" spacing="lg" background="default">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Applications"
              title="Built for the water you operate"
              className="max-w-xl"
            />
          </Reveal>
          <Reveal>
            <Link
              href="/applications"
              className="text-small inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              All applications
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {applications.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.05}>
              <Link
                href={`/applications/${app.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface shadow-[var(--shadow-1)] transition-colors hover:border-border-strong"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={IMAGE_BY_SLUG[app.slug] ?? "/img/pool-residential.jpg"}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <AudienceChip
                      label={app.audience === "commercial" ? "Commercial" : "Residential"}
                      variant={app.audience}
                    />
                    <ArrowUpRight className="size-5 text-accent-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                  <h3 className="text-h2 mt-5 text-foreground">{app.title}</h3>
                  <p className="text-small mt-1 font-medium text-accent-steel">{app.tagline}</p>
                  <p className="text-body mt-3 text-muted-foreground">{app.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ DISTRIBUTOR ============================ */}
      <Section id="partners" spacing="lg" background="muted">
        <Reveal>
          <div className="grid gap-8 rounded-[var(--radius)] border border-border bg-surface p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10">
            <div>
              <AudienceChip label="For partners" variant="partner" />
              <h2 className="text-h1 mt-4 text-foreground">
                Add an engineered category to your line
              </h2>
              <p className="text-body-large mt-3 max-w-2xl text-muted-foreground">
                Distributors, builders and installers can offer a documented
                ionization system that fits existing circulation systems across
                residential and commercial pools.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Documented specifications",
                  "Fits existing circulation",
                  "Minimal routine maintenance",
                  "Residential → commercial reach",
                ].map((item) => (
                  <li key={item} className="text-small flex items-center gap-2 text-foreground">
                    <Check className="size-4 shrink-0 text-accent-ecological" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:flex-col md:items-stretch">
              <Button
                size="lg"
                className="w-full rounded-[var(--radius-control)]"
                render={<Link href="/distributors" />}
              >
                Become a Partner
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============================ FAQ ============================ */}
      <Section id="faq" spacing="lg" background="default">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="FAQ"
              title="Straight answers, source-backed"
              description="We publish claims only when we can stand behind them with documentation."
            />
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-[var(--radius-control)]"
              render={<Link href="/faq" />}
            >
              All questions
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList faqs={faqs.slice(0, 5)} />
          </Reveal>
        </div>
      </Section>

      {/* ============================ CTA ============================ */}
      <CtaBand
        eyebrow="Get started"
        title="Start with a pool assessment"
        body="Tell us about your pool and circulation system. We'll confirm the right Zinc'd series and walk you through what responsible, lower-chemical operation looks like."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
      />
    </>
  );
}
