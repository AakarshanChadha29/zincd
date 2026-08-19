import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { siteConfig } from "@/content/site-config";
import {
  chemistryTargets,
  installSteps,
  seriesRangeLabel,
  specQualifier,
  warrantySummary,
} from "@/content/product-data";
import {
  capacityFormulas,
  installFaqs,
  installPage,
  maintenanceSchedule,
  operationalStandards,
  samplingHowTo,
  samplingSop,
  shockHowTo,
  shockSop,
  troubleshootingRows,
} from "@/content/install-content";
import { clientStills, motionGraphics } from "@/content/media";
import { createPageMetadata } from "@/lib/metadata";
import { FaqJsonLd, HowToJsonLd } from "@/components/seo/json-ld";
import Image from "next/image";
import { Container } from "@/components/layout/container";

export const metadata = createPageMetadata({
  title: "Installation & Maintenance",
  description:
    "How Zinc'd integrates with your circulation system — capacity formulas, sampling SOP, Gen-2 chemistry targets, post-storm shock, and a preventive-maintenance schedule.",
  path: "/installation-maintenance",
});

export default function InstallationMaintenancePage() {
  return (
    <>
      <FaqJsonLd faqs={installFaqs} />
      <HowToJsonLd {...samplingHowTo} />
      <HowToJsonLd {...shockHowTo} />

      <PageHero
        eyebrow={installPage.eyebrow}
        title={
          <>
            {installPage.titleLead}{" "}
            <span className="text-gradient-aqua">{installPage.titleAccent}</span>
          </>
        }
        description={installPage.description}
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "See the product", href: "/product", variant: "outline" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-border">
        <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-16">
          <Reveal>
            <div>
              <TechnicalLabel>In the plant room</TechnicalLabel>
              <h2 className="text-h2 mt-4 text-foreground">
                Designed to sit inline — not fight your existing loop
              </h2>
              <p className="text-body mt-4 text-muted-foreground">
                The stainless chamber plumbed on the filter return, battery-powered
                control on the wall, water-flow sensor in line. {seriesRangeLabel}.
                Do not bypass the flow sensor.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
              <Image
                src={clientStills.plantRoom}
                alt="A professional plant room with filtration ready for an inline ionization chamber"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <MotionGraphicBand
        src={motionGraphics.livingField.src}
        poster={motionGraphics.livingField.poster}
        eyebrow="After install"
        title="A quieter operating rhythm"
        body="Motion study of the living field around mineral ionization — kept here so Installation carries its own film, separate from Home and Technology."
      />

      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="From install to ongoing care"
                title="Four stages, start to steady state"
                description="What to expect from first assessment through routine operation."
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={installSteps} />
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow={capacityFormulas.eyebrow}
            title={capacityFormulas.title}
            description={capacityFormulas.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capacityFormulas.items.map((item, i) => (
            <Reveal key={item.shape} delay={i * 0.05}>
              <article className="h-full rounded-[var(--radius-panel)] border border-border bg-surface p-6">
                <TechnicalLabel className="text-accent-aquatic">
                  {item.shape}
                </TechnicalLabel>
                <p className="text-technical mt-4 normal-case tracking-normal text-foreground">
                  {item.imperial}
                </p>
                <p className="text-small mt-2 text-muted-foreground">{item.metric}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <StatusNote className="mt-8 max-w-3xl">{capacityFormulas.note}</StatusNote>
      </Section>

      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow={samplingSop.eyebrow}
                title={samplingSop.title}
                description={samplingSop.description}
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ProcessSteps steps={samplingSop.steps} />
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Operational standards"
            title="Chemistry to hold"
            description={`${specQualifier} Residual free chlorine remains required; the specific ppm is pending the finalized manual.`}
          />
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
          <table className="w-full text-left">
            <thead className="border-b border-border bg-surface-muted/60">
              <tr>
                <th className="text-technical px-5 py-3 text-accent-steel">Parameter</th>
                <th className="text-technical px-5 py-3 text-accent-steel">Target</th>
                <th className="text-technical hidden px-5 py-3 text-accent-steel md:table-cell">
                  Cadence
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {operationalStandards.map((row) => (
                <tr key={row.parameter}>
                  <td className="text-body px-5 py-4 font-medium text-foreground">
                    {row.parameter}
                  </td>
                  <td className="text-small px-5 py-4 text-muted-foreground">
                    {row.target}
                  </td>
                  <td className="text-small hidden px-5 py-4 text-muted-foreground md:table-cell">
                    {row.frequency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-small mt-4 text-muted-foreground">
          Hardness above about 300 ppm: see the{" "}
          <Link
            href="/product/softener"
            className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Catalytic Super Softener
          </Link>{" "}
          or a partial drain and refill.
        </p>
      </Section>

      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow={shockSop.eyebrow}
                title={shockSop.title}
                description={shockSop.description}
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ProcessSteps steps={shockSop.steps} />
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Preventive schedule"
            title="Daily through annual"
            description="Structure from the complete handbook. Anode replacement interval is not published until the client supplies it."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {maintenanceSchedule.map((block, i) => (
            <Reveal key={block.cadence} delay={i * 0.04}>
              <article className="h-full rounded-[var(--radius-panel)] border border-border bg-surface p-6">
                <TechnicalLabel className="text-accent-aquatic">
                  {block.cadence}
                </TechnicalLabel>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-small text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Troubleshooting"
            title="Claims-safe checks first"
            description="These rows help isolate circulation, chemistry, and power — they are not efficacy claims."
          />
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
          <table className="w-full text-left">
            <thead className="border-b border-border bg-surface-muted/60">
              <tr>
                <th className="text-technical px-5 py-3 text-accent-steel">Symptom</th>
                <th className="text-technical px-5 py-3 text-accent-steel">Check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {troubleshootingRows.map((row) => (
                <tr key={row.symptom}>
                  <td className="text-body px-5 py-4 align-top font-medium text-foreground">
                    {row.symptom}
                  </td>
                  <td className="text-small px-5 py-4 text-muted-foreground">
                    {row.check}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Routine care"
                title="What keeps the water in range"
                description="Test copper, pH and residual chlorine. The LCD reports status; the flow sensor must stay in the line."
              />
              <div className="mt-8 rounded-[var(--radius)] border border-border bg-surface p-7">
                <TechnicalLabel>Keep these in range</TechnicalLabel>
                <dl className="mt-5 space-y-3">
                  {chemistryTargets.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-baseline justify-between gap-4 border-b border-border pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-body text-foreground">{t.label}</dt>
                      <dd className="text-technical text-right normal-case tracking-normal text-accent-aquatic">
                        {t.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 lg:pt-16">
              <div className="rounded-[var(--radius)] border border-border bg-surface p-7">
                <TechnicalLabel>Warranty summary</TechnicalLabel>
                <dl className="mt-5 space-y-4">
                  {warrantySummary.map((w) => (
                    <div
                      key={w.part}
                      className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-border pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="text-body text-foreground">{w.part}</dt>
                      <dd className="text-technical normal-case tracking-normal text-accent-aquatic">
                        {w.term}
                        <span className="text-small mt-1 block font-sans normal-case tracking-normal text-muted-foreground">
                          {w.note}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <StatusNote>
                Warranty terms and exclusions are summarized from product
                documentation and confirmed on the{" "}
                <Link href="/warranty" className="underline underline-offset-4">
                  Warranty
                </Link>{" "}
                page. The Gen-2 pro-rated schedule is not published until
                percentages are supplied.
              </StatusNote>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Install FAQ"
            title="Sampling, volume, shock"
            description="The same answers are marked up as FAQ and HowTo structured data for this page."
          />
        </Reveal>
        <div className="mt-10">
          <FaqList faqs={installFaqs} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Plan your installation — or carry the line"
        body="A pool assessment confirms fit with your circulation system. Partners can explore distribution and install channels separately."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
