import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { siteConfig } from "@/content/site-config";
import { chemistryTargets, installSteps, warrantySummary } from "@/content/product-data";
import { motionGraphics, productPhotos } from "@/content/media";
import { createPageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { Container } from "@/components/layout/container";

export const metadata = createPageMetadata({
  title: "Installation & Maintenance",
  description:
    "How Zinc'd integrates with your circulation system and what routine care looks like — minimal maintenance centered on periodic anode cleaning.",
  path: "/installation-maintenance",
});

export default function InstallationMaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Maintenance"
        title={
          <>
            Fits your circulation.{" "}
            <span className="text-gradient-aqua">Light on upkeep.</span>
          </>
        }
        description="Zinc'd is designed to integrate with existing pool circulation systems — Series-1 through Series-3, or custom multi-unit layouts for larger commercial inlets. Routine maintenance is minimal — centered on periodic cleaning of the copper–silver–zinc anode when monitoring signals it."
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
                The stainless chamber plumbed on the filter return, control on
                the wall, monitoring that signals anode care. Install once;
                maintain lightly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
              <Image
                src={productPhotos.install}
                alt="Zinc'd installed beside pool equipment plumbing"
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

      {/* Process */}
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

      {/* Maintenance detail + chemistry */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Routine care"
                title="What keeps the water in range"
                description="Monitoring signals when the anode needs cleaning; regular testing keeps chemistry on target."
              />
              <div className="mt-8 rounded-[var(--radius)] border border-border bg-surface p-7">
                <TechnicalLabel>Keep these in range</TechnicalLabel>
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
                page. Covered defects follow a replacement policy.
              </StatusNote>
            </div>
          </Reveal>
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
