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
import { siteConfig } from "@/content/site-config";
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

const heroChips = ["Cu · Ag · Zn", "24 V DC PWM", "Stainless housing", "Domestic → Olympic"];

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="absolute inset-0 bg-grid" />
        <div aria-hidden className="absolute inset-0 hero-aura" />
        <Container className="relative py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <Reveal>
              <div className="space-y-7">
                <TechnicalLabel>{heroContent.eyebrow}</TechnicalLabel>
                <h1 className="text-display max-w-xl text-[color:var(--blue-900)]">
                  Engineered water treatment for the{" "}
                  <span className="text-gradient-aqua">modern pool</span>.
                </h1>
                <p className="text-body-large max-w-xl text-muted-foreground">
                  {heroContent.subhead}
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    size="lg"
                    className="rounded-[var(--radius-control)]"
                    render={<Link href={heroContent.primaryCta.href} />}
                  >
                    {heroContent.primaryCta.label}
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-[var(--radius-control)]"
                    render={<Link href={heroContent.secondaryCta.href} />}
                  >
                    {heroContent.secondaryCta.label}
                  </Button>
                </div>
                <ul className="flex flex-wrap gap-2 pt-2">
                  {heroChips.map((chip) => (
                    <li
                      key={chip}
                      className="text-technical rounded-[var(--radius-control)] border border-border bg-[color:var(--steel-50)] px-3 py-1.5 text-muted-foreground normal-case tracking-normal"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative">
                <div className="rounded-[var(--radius)] border border-border bg-gradient-to-b from-white to-[color:var(--steel-50)] p-6 shadow-[var(--shadow-2)] md:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-technical text-accent-aquatic">Ionization cell</span>
                    <span className="text-technical text-accent-steel normal-case tracking-normal">
                      schematic
                    </span>
                  </div>
                  <IonizationCell />
                  <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
                    {[
                      { k: "Copper", v: "algae control" },
                      { k: "Silver", v: "ionization" },
                      { k: "Zinc", v: "biofilm control" },
                    ].map((m) => (
                      <div key={m.k}>
                        <div className="text-small font-medium text-[color:var(--blue-900)]">
                          {m.k}
                        </div>
                        <div className="text-small text-muted-foreground">{m.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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
              <div className="rounded-[var(--radius)] border border-border bg-[color:var(--steel-50)] p-7">
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
                      <dt className="text-body text-[color:var(--blue-900)]">{t.label}</dt>
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
                <h3 className="text-h3 mt-3 text-[color:var(--blue-900)]">{series.name}</h3>
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
              className="text-small inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
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
                className="group flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7 shadow-[var(--shadow-1)] transition-colors hover:border-border-strong"
              >
                <div className="flex items-center justify-between">
                  <AudienceChip
                    label={app.audience === "commercial" ? "Commercial" : "Residential"}
                    variant={app.audience}
                  />
                  <ArrowUpRight className="size-5 text-accent-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </div>
                <h3 className="text-h2 mt-5 text-[color:var(--blue-900)]">{app.title}</h3>
                <p className="text-small mt-1 font-medium text-accent-steel">{app.tagline}</p>
                <p className="text-body mt-3 text-muted-foreground">{app.body}</p>
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
              <h2 className="text-h1 mt-4 text-[color:var(--blue-900)]">
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
