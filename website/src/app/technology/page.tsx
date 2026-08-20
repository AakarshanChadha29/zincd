import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { siteConfig } from "@/content/site-config";
import { clientStills, motionGraphics, productPhotos, technologyHeroClip } from "@/content/media";
import {
  chemistryTargets,
  technicalSpecs,
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
        video={technologyHeroClip}
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
                src={productPhotos.chamberLegacy}
                alt="Looking into the Zinc'd chamber bore, copper mineral core in the flow path."
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
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
        src={motionGraphics.chamberCutaway.src}
        poster={motionGraphics.chamberCutaway.poster}
        eyebrow="Chamber cutaway"
        title="Watch ions leave the alloy electrode"
        body="Owner chamber-cutaway film: circulating water, Cu²⁺ / Ag⁺ / Zn²⁺ release under low-voltage PWM. Illustrative — not a dosing calculator."
      />

      {/* How it works — visual, not a second numbered essay */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The process"
            title="From flow to controlled ionization"
            description="Installed after filtration and before the pool return line."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <figure className="mt-10 overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
            <Image
              src={clientStills.howItWorks}
              alt="Five-stage Zinc'd treatment path: pool, pump, filter, ionization chamber, treated-water return."
              width={1200}
              height={2545}
              className="h-auto w-full bg-[color:#EFF8F7] object-contain"
              sizes="(max-width: 1200px) 100vw, 720px"
            />
            <figcaption className="border-t border-border px-5 py-4 text-small text-muted-foreground md:px-6">
              Installed after filtration and before the pool return line.
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className="mt-6 overflow-hidden rounded-[var(--radius)] border border-border bg-white">
            <Image
              src={clientStills.technicalFlow}
              alt="Circulation diagram: pool intake, pump, filter, Zinc'd chamber, pool return."
              width={2400}
              height={1350}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
          </figure>
        </Reveal>
      </Section>

      {/* Chemistry + specs — residual chlorine is already stated in the hero */}
      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Responsible operation"
                title="Chemistry to hold"
                description="The supplied testing kit covers copper, free chlorine and pH. Historical silver-ion work in spacecraft drinking water is shared scientific lineage — not an endorsement of Zinc'd."
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
            <div className="lg:pt-16">
              <SectionHeading
                as="h2"
                eyebrow="Specifications"
                title="Core technical specifications"
                description="From the Zinc'd technical documentation. Values are typical and subject to model."
              />
              <div className="mt-8">
                <SpecTable rows={technicalSpecs.slice(0, 6)} />
              </div>
              <p className="text-small mt-6 text-muted-foreground">
                Looking for model-by-model details?{" "}
                <Link href="/product" className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary">
                  See the product range
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
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
