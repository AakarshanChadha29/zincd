import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessNarrative } from "@/components/blocks/process-narrative";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { siteConfig } from "@/content/site-config";
import {
  motionGraphics,
  productPhotos,
  technologyHeroClip,
} from "@/content/media";
import {
  chemistryTargets,
  howItWorksSteps,
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

const processBeats = [
  howItWorksSteps[0],
  howItWorksSteps[1],
  howItWorksSteps[2],
  howItWorksSteps[3],
  howItWorksSteps[4],
] as const;

const metals = [
  { symbol: "Cu", name: "Copper", role: "Helps control algae in the circulating water." },
  { symbol: "Ag", name: "Silver", role: "The primary ionizing metal in copper–silver ionization." },
  { symbol: "Zn", name: "Zinc", role: "Contributes to biofilm control across the system." },
] as const;

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            Copper–silver–zinc ionization,
            <span className="block">under control</span>
          </>
        }
        description="Zinc'd introduces copper and silver ions into your circulation loop at a controlled rate — an ecological mineral approach designed to reduce chlorine dependency while a residual of free chlorine remains part of responsible operation."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "See the product", href: "/product", variant: "outline" },
        ]}
        video={technologyHeroClip}
        mediaPosition="center"
      />

      <section className="relative overflow-hidden bg-[color:var(--teal-900)]">
        <Image
          src={productPhotos.waterHero}
          alt=""
          fill
          sizes="100vw"
          aria-hidden
          className="object-cover opacity-35"
        />
        <div aria-hidden className="absolute inset-0 bg-[color:var(--teal-900)]/55" />
        <div className="relative mx-auto grid max-w-[80rem] gap-10 px-[var(--page-gutter)] py-20 md:grid-cols-3 md:gap-12 md:py-28">
          {metals.map((metal, i) => (
            <Reveal key={metal.symbol} delay={i * 0.06}>
              <div>
                <p className="font-heading text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-none text-white">
                  {metal.symbol}
                </p>
                <h2 className="text-h2 mt-5 text-white">{metal.name}</h2>
                <p className="text-body-large mt-3 text-white/75">{metal.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The process"
            title="From flow to controlled ionization"
            description="Installed after filtration and before the pool return. Watch the chamber, then read the path."
          />
        </Reveal>
        <ProcessNarrative
          steps={processBeats}
          video="/video/process-ionization-motion.mp4"
          poster="/video/process-ionization.jpg"
        />
      </Section>

      <MotionGraphicBand
        src={motionGraphics.mineralType.src}
        poster={motionGraphics.mineralType.poster}
        waterMotion
        eyebrow="Mineral field"
        title="Ions in the return"
        body="Illustrative — circulating water and Cu²⁺ / Ag⁺ / Zn²⁺ release under low-voltage PWM. Not a dosing calculator."
      />

      <Section spacing="lg" background="muted">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Responsible operation"
                title="Chemistry to hold"
                description="The supplied testing kit covers copper, free chlorine and pH. Historical silver-ion work in spacecraft drinking water is shared scientific lineage — not an endorsement of Zinc'd."
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
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Specifications"
                title="Core technical specifications"
                description="From the Zinc'd technical documentation. Values are typical and subject to model."
              />
              <div className="mt-8">
                <SpecTable rows={technicalSpecs.slice(0, 6)} />
              </div>
              <p className="text-small mt-8 text-muted-foreground">
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
