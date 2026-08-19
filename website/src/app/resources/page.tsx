import { ResourceRequestForm } from "@/components/resources/resource-request-form";
import { CtaBand } from "@/components/blocks/cta-band";
import { PageHero } from "@/components/blocks/page-hero";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { StatusNote } from "@/components/ui/status-note";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { siteConfig } from "@/content/site-config";
import { resources, resourcesPage } from "@/content/resources-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Resources — Handbooks & Planning Model",
  description:
    "Request the hotel planning model, plumber handbook, or maintenance chart. The draft user manual is not distributed until it is finalized.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow={resourcesPage.eyebrow}
        title={
          <>
            Technical documents,{" "}
            <span className="text-gradient-aqua">on request</span>
          </>
        }
        description={resourcesPage.description}
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "Installation guide", href: "/installation-maintenance", variant: "outline" },
        ]}
      />

      <Section spacing="lg" background="default">
        <div className="grid gap-6 lg:grid-cols-2">
          {resources.map((resource, i) => (
            <Reveal key={resource.id} delay={i * 0.04}>
              <article className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 md:p-8">
                <TechnicalLabel className="text-accent-aquatic">
                  {resource.available ? "Available" : "Waitlist"}
                </TechnicalLabel>
                <h2 className="text-h3 mt-3 text-foreground">{resource.title}</h2>
                <p className="text-body mt-3 flex-1 text-muted-foreground">
                  {resource.summary}
                </p>
                <div className="relative mt-6">
                  <ResourceRequestForm resourceId={resource.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <StatusNote className="mt-8 max-w-3xl">
          Documents are emailed by the Zinc&apos;d team after the request. Nothing
          is hosted as a public file. Distributor economics are never included.
        </StatusNote>
      </Section>

      <CtaBand
        eyebrow="Prefer a conversation"
        title="Match the series first"
        body="If you are sizing a pool rather than requesting a PDF, start with the assessment funnel."
        primary={siteConfig.ctas.assessment}
        secondary={{ label: "Pool series calculator", href: "/calculator" }}
      />
    </>
  );
}
