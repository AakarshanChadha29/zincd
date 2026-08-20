import Link from "next/link";
import Image from "next/image";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { motionGraphics, productPhotos } from "@/content/media";
import { createPageMetadata } from "@/lib/metadata";
import { FaqJsonLd, HowToJsonLd } from "@/components/seo/json-ld";

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

      <section className="relative overflow-hidden">
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
                src={productPhotos.install}
                alt="Zinc'd chamber installed inline on the filter return, control mounted above"
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
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Handbook"
            title="Open the procedure you need"
            description="Formulas, sampling, shock, troubleshooting, and warranty — same data as the installer handbook, collapsed so the page stays scannable."
          />
        </Reveal>
        <Accordion multiple className="mt-10 overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
          <AccordionItem value="stages" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              Four stages, start to steady state
            </AccordionTrigger>
            <AccordionContent className="text-body pb-6 text-muted-foreground">
              <ProcessSteps steps={installSteps} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="formulas" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              {capacityFormulas.title}
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-small mb-4 text-muted-foreground">
                {capacityFormulas.description}
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {capacityFormulas.items.map((item) => (
                  <article
                    key={item.shape}
                    className="rounded-[var(--radius-panel)] border border-border bg-surface-muted/40 p-5"
                  >
                    <TechnicalLabel className="text-accent-aquatic">
                      {item.shape}
                    </TechnicalLabel>
                    <p className="text-technical mt-3 normal-case tracking-normal text-foreground">
                      {item.imperial}
                    </p>
                    <p className="text-small mt-2 text-muted-foreground">
                      {item.metric}
                    </p>
                  </article>
                ))}
              </div>
              <StatusNote className="mt-6">{capacityFormulas.note}</StatusNote>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sampling" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              {samplingSop.title}
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-small mb-4 text-muted-foreground">
                {samplingSop.description}
              </p>
              <ProcessSteps steps={samplingSop.steps} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="chemistry" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              Chemistry to hold
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-small mb-4 text-muted-foreground">
                {specQualifier} Residual free chlorine remains required; the
                specific ppm is pending the finalized manual.
              </p>
              <div className="overflow-hidden rounded-[var(--radius-panel)] border border-border">
                <table className="w-full text-left">
                  <thead className="border-b border-border bg-surface-muted/60">
                    <tr>
                      <th className="text-technical px-5 py-3 text-accent-steel">
                        Parameter
                      </th>
                      <th className="text-technical px-5 py-3 text-accent-steel">
                        Target
                      </th>
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
                  Catalytic Conditioner
                </Link>{" "}
                or a partial drain and refill.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shock" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              {shockSop.title}
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-small mb-4 text-muted-foreground">
                {shockSop.description}
              </p>
              <ProcessSteps steps={shockSop.steps} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="schedule" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              Daily through annual
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {maintenanceSchedule.map((block) => (
                  <article
                    key={block.cadence}
                    className="rounded-[var(--radius-panel)] border border-border bg-surface-muted/40 p-5"
                  >
                    <TechnicalLabel className="text-accent-aquatic">
                      {block.cadence}
                    </TechnicalLabel>
                    <ul className="mt-3 space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="text-small text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="troubleshooting" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              Troubleshooting
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="overflow-hidden rounded-[var(--radius-panel)] border border-border">
                <table className="w-full text-left">
                  <thead className="border-b border-border bg-surface-muted/60">
                    <tr>
                      <th className="text-technical px-5 py-3 text-accent-steel">
                        Symptom
                      </th>
                      <th className="text-technical px-5 py-3 text-accent-steel">
                        Check
                      </th>
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="care" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              Routine care and warranty
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[var(--radius)] border border-border p-6">
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
                <div className="rounded-[var(--radius)] border border-border p-6">
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
              </div>
              <StatusNote className="mt-6">
                Warranty terms and exclusions are summarized from product
                documentation and confirmed on the{" "}
                <Link href="/warranty" className="underline underline-offset-4">
                  Warranty
                </Link>{" "}
                page. The Gen-2 pro-rated schedule is not published until
                percentages are supplied.
              </StatusNote>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq" className="border-border px-5 md:px-6">
            <AccordionTrigger className="gap-4 py-5 text-left text-base font-medium text-foreground hover:no-underline md:py-6">
              Sampling, volume, shock
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <FaqList faqs={installFaqs} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
