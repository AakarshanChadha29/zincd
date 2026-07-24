import Link from "next/link";
import { Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { IonizationCell } from "@/components/graphics/ionization-cell";
import { siteConfig } from "@/content/site-config";
import {
  chemistryTargets,
  productSeries,
  systemComponents,
  technicalSpecs,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Product",
  description:
    "The Zinc'd pool ionization system — a stainless Cu–Ag–Zn cell, PWM control panel, monitoring and testing kit. Four series from domestic to Olympic-size.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={
          <>
            The Zinc'd{" "}
            <span className="text-gradient-aqua">ionization system</span>
          </>
        }
        description="A complete, engineered system: a stainless copper–silver–zinc ionization cell, a microcontroller PWM control panel with LCD, electronic monitoring, and a supplied water-testing kit — sized across four series."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "How it works", href: "/technology", variant: "outline" },
        ]}
        aside={
          <div className="rounded-[var(--radius)] border border-border bg-gradient-to-b from-white to-[color:var(--steel-50)] p-6 shadow-[var(--shadow-2)] md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-technical text-accent-aquatic">System core</span>
              <span className="text-technical text-accent-steel normal-case tracking-normal">
                Cu · Ag · Zn cell
              </span>
            </div>
            <IonizationCell />
          </div>
        }
      />

      {/* Series range */}
      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title="Four series, domestic to Olympic-size"
            description="Sized to suit the full spread of circulation flow rates. The right series is confirmed to your system during a pool assessment."
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
        <StatusNote className="mt-8 max-w-3xl">
          Model names, per-series specifications and product imagery are published
          here once confirmed. Descriptions above reflect documented series coverage.
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
                    <p className="text-body font-medium text-[color:var(--blue-900)]">
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
              <div className="rounded-[var(--radius)] border border-border bg-[color:var(--steel-50)] p-7">
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
                      <dt className="text-body text-[color:var(--blue-900)]">{t.label}</dt>
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
                  className="text-primary underline-offset-4 hover:underline"
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
        title="Find the right series for your pool"
        body="Share your pool volume and circulation details. We'll confirm the correct Zinc'd series and next steps."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
      />
    </>
  );
}
