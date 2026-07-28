import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { SpecTable } from "@/components/blocks/spec-table";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { siteConfig } from "@/content/site-config";
import { motionGraphics } from "@/content/media";
import {
  chemistryTargets,
  howItWorksSteps,
  technicalSpecs,
  valuePillars,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Technology — Cu–Ag–Zn Pool Ionization",
  description:
    "How Zinc'd copper–silver–zinc ionization works within a responsible, monitored pool chemistry program — PWM control, mineral ions, and documented specifications for estates and commercial facilities.",
  path: "/technology",
  keywords: [
    "copper silver zinc ionization",
    "PWM pool ionization",
    "how pool ionization works",
  ],
});

const electrodes = [
  {
    metal: "Copper",
    symbol: "Cu",
    role: "Helps control algae in the circulating water.",
    color: "var(--teal-700)",
  },
  {
    metal: "Silver",
    symbol: "Ag",
    role: "The primary ionizing metal in copper–silver ionization.",
    color: "var(--teal-800)",
  },
  {
    metal: "Zinc",
    symbol: "Zn",
    role: "Contributes to biofilm control across the system.",
    color: "var(--eco-700)",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            Copper–silver–zinc ionization,{" "}
            <span className="text-gradient-aqua">under control</span>
          </>
        }
        description="Zinc'd introduces copper and silver ions into your circulation loop at a controlled rate — an ecological mineral approach designed to reduce chlorine dependency while a residual of free chlorine remains part of responsible operation."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "See the product", href: "/product", variant: "outline" },
        ]}
        aside={
          <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface-elevated p-6 shadow-[var(--shadow-2)] md:p-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-technical text-accent-aquatic">
                Ionization field
              </span>
              <span className="text-technical text-muted-foreground normal-case tracking-normal">
                Cu · Ag · Zn
              </span>
            </div>
            {/* Real product photography. The previous WebGL "ionization field"
                rendered three rectangular bars and a particle drift — it read
                as a toy and told a visitor nothing true about the hardware. */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/img/product-chamber.png"
                alt="The Zinc'd stainless water chamber with its copper, silver and zinc badges."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
              {[
                { k: "Copper", v: "algae control", c: "var(--teal-700)" },
                { k: "Silver", v: "ionization", c: "var(--teal-800)" },
                { k: "Zinc", v: "biofilm control", c: "var(--eco-700)" },
              ].map((m) => (
                <div key={m.k}>
                  <div className="text-small font-medium" style={{ color: m.c }}>
                    {m.k}
                  </div>
                  <div className="text-small text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Electrode metals */}
      <Section spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The electrodes"
            title="Three metals, one engineered cell"
            description="A stainless-steel housing carries copper, silver and zinc alloy anodes. Each plays a defined role in the water program."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {electrodes.map((e, i) => (
            <Reveal key={e.symbol} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7">
                <div
                  className="flex size-14 items-center justify-center rounded-[var(--radius-control)] text-technical text-lg font-semibold text-white normal-case tracking-normal"
                  style={{ background: e.color }}
                >
                  {e.symbol}
                </div>
                <h3 className="text-h3 mt-5 text-foreground">{e.metal}</h3>
                <p className="text-body mt-2 text-muted-foreground">{e.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.chamber.src}
        poster={motionGraphics.chamber.poster}
        eyebrow="Field visualization"
        title="Ionization as living light"
        body="Higgsfield motion graphics of the chamber field — abstract, claims-safe, and built to feel premium on scroll."
      />

      {/* How it works process */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="The process"
                title="From flow to controlled ionization"
                description="Four stages describe how treated water moves through the system."
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={howItWorksSteps} />
          </Reveal>
        </div>
      </Section>

      {/* Chemistry / chlorine honesty */}
      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Responsible operation"
                title="Why residual chlorine is still part of the program"
                description="Ionization is designed to reduce chlorine dependency — not to remove it. Technical documentation recommends maintaining a residual of free chlorine so the water stays reliably sanitized."
              />
              <div className="mt-8 rounded-[var(--radius)] border border-border bg-surface-elevated p-7">
                <TechnicalLabel>Recommended chemistry</TechnicalLabel>
                <dl className="mt-5 space-y-3">
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
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:pt-16 space-y-6">
              <StatusNote>
                Zinc'd is not a &ldquo;chemical-free&rdquo; system. A residual of free
                chlorine (typically ~1.0 ppm) remains part of responsible operation,
                and the water is tested regularly to stay in range.
              </StatusNote>
              <div className="rounded-[var(--radius)] border border-border bg-surface p-7">
                <TechnicalLabel>Historical note</TechnicalLabel>
                <p className="text-body mt-3 text-muted-foreground">
                  Silver-ion disinfection was used historically in spacecraft
                  drinking-water systems; copper–silver ionization developed later.
                  This is shared scientific lineage — not an endorsement of Zinc'd
                  by any space agency.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Value pillars */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="What it delivers"
            title="Engineered, monitored, built to last"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <FeatureGrid features={valuePillars} className="mt-10" />
        </Reveal>
      </Section>

      {/* Specs */}
      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Specifications"
            title="Core technical specifications"
            description="From the Zinc'd technical documentation. Values are typical and subject to model."
            className="max-w-2xl"
          />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <SpecTable rows={technicalSpecs.slice(0, 4)} />
            <SpecTable rows={technicalSpecs.slice(4)} />
          </div>
        </Reveal>
        <p className="text-small mt-6 text-muted-foreground">
          Looking for model-by-model details?{" "}
          <Link href="/product" className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">
            See the product range
          </Link>
          .
        </p>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="See how it fits your pool — or your line"
        body="A pool assessment confirms the right series. Distributors and builders can explore a documented channel path."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
