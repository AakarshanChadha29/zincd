import { CtaBand } from "@/components/blocks/cta-band";
import { PageHero } from "@/components/blocks/page-hero";
import { ResourceRequestForm } from "@/components/resources/resource-request-form";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusNote } from "@/components/ui/status-note";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { RoiCalculator } from "@/components/roi-calculator/roi-calculator";
import { siteConfig } from "@/content/site-config";
import { applicationHeroes } from "@/content/media";
import {
  roiAssumptions,
  roiChecklist,
  roiDisclaimers,
  roiPage,
} from "@/content/roi-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotel Pool Cost Planning Model",
  description:
    "An illustrative planning model for hotel pool chemical and service spend. Replace the example inputs with your invoices. Not a savings guarantee.",
  path: "/cost-savings",
});

export default function CostSavingsPage() {
  return (
    <>
      <PageHero
        eyebrow={roiPage.eyebrow}
        title={
          <>
            {roiPage.titleLead}
            <span className="block">{roiPage.titleAccent}</span>
          </>
        }
        description={roiPage.description}
        actions={[
          { label: "Open the model", href: "/cost-savings#model" },
          {
            label: siteConfig.ctas.assessment.label,
            href: siteConfig.ctas.assessment.href,
            variant: "outline",
          },
        ]}
        video={applicationHeroes["hotels-resorts"]}
        mediaPosition="center"
      />

      <Section
        id="model"
        spacing="lg"
        background="deep"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 pool-caustics pool-caustics-motion mix-blend-screen opacity-25"
        />
        <div aria-hidden className="absolute inset-0 hero-aura opacity-40" />
        <Reveal>
          <div className="relative max-w-3xl">
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              Interactive model
            </TechnicalLabel>
            <h2 className="text-h1 mt-4 text-white">
              Replace the example. Then read the modeled result.
            </h2>
            <p className="text-body-large mt-4 max-w-2xl text-white/70">
              Defaults match the hotel planning-model document&apos;s expected
              case ($1,500 all-in contract including $350 of chemistry). They
              are starting values, not Zinc&apos;d savings.
            </p>
          </div>
        </Reveal>
        <div className="relative mt-12 rounded-[var(--radius)] border border-white/20 bg-[color:var(--pearl)] p-6 shadow-[var(--shadow-2)] md:p-10">
          <RoiCalculator />
        </div>
        <StatusNote className="relative mt-8 max-w-3xl border-white/20 bg-white/10 text-white/75">
          Owner proposition in the source model: bring routine testing in-house
          with trained staff and a written operating guide; retain periodic
          specialist oversight; renegotiate the pool-company contract to remove
          visits no longer required. That only works if local code, staffing,
          and the contract actually change.
        </StatusNote>
      </Section>

      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="How to read it"
              title="Assumptions that must be proven"
              description="The model is only as honest as the invoices behind it."
            />
            <dl className="mt-8 space-y-4">
              {roiAssumptions.map((row) => (
                <div
                  key={row.label}
                  className="border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-small font-medium text-foreground">
                    {row.label}
                  </dt>
                  <dd className="text-body mt-1 text-muted-foreground">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.06}>
            <TechnicalLabel className="text-accent-aquatic">
              Before selling the savings
            </TechnicalLabel>
            <ol className="mt-4 space-y-3">
              {roiChecklist.map((item, i) => (
                <li key={item} className="flex gap-3 text-body text-muted-foreground">
                  <span className="text-technical mt-0.5 text-accent-aquatic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <ul className="mt-10 space-y-3">
          {roiDisclaimers.map((item) => (
            <li key={item}>
              <StatusNote>{item}</StatusNote>
            </li>
          ))}
        </ul>
      </Section>

      <Section spacing="lg" background="default">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Full document"
              title="Email me the planning model"
              description="We'll send the hotel planning-model PDF. It is labeled as a model to validate with site invoices, local code, and a controlled pilot."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="relative rounded-[var(--radius-panel)] border border-border bg-surface p-6 md:p-8">
              <ResourceRequestForm resourceId="hotel-planning-model" />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Size the hardware first"
        title="A model is not a specification"
        body="Match Series 1 through Series 4 to the pool, then run a pilot against your invoices."
        primary={siteConfig.ctas.assessment}
        secondary={{ label: "Pool series calculator", href: "/calculator" }}
      />
    </>
  );
}
