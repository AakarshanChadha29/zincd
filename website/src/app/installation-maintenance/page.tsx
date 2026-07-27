import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { chemistryTargets, installSteps, warrantySummary } from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

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
        description="Zinc'd is designed to integrate with existing pool circulation systems. Routine maintenance is minimal — centered on periodic cleaning of the copper–silver–zinc anode when monitoring signals it."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "See the product", href: "/product", variant: "outline" },
        ]}
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
        title="Plan your installation"
        body="A pool assessment confirms fit with your circulation system and the right series before anything is installed."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.specialist}
      />
    </>
  );
}
