import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { applications } from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Applications",
  description:
    "Zinc'd ionization across residential, hotels & resorts, commercial, and fitness & wellness pool environments.",
  path: "/applications",
});

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title={
          <>
            Built for the water{" "}
            <span className="text-gradient-aqua">you operate</span>
          </>
        }
        description="From private pools to commercial aquatic facilities, Zinc'd is sized and specified for the environment it serves. Explore the sector that fits you."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: siteConfig.ctas.distributor.label, href: siteConfig.ctas.distributor.href, variant: "outline" },
        ]}
      />

      <Section spacing="lg" background="default">
        <div className="grid gap-4 md:grid-cols-2">
          {applications.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.05}>
              <Link
                href={`/applications/${app.slug}`}
                className="group flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7 shadow-[var(--shadow-1)] transition-colors hover:border-border-strong"
              >
                <div className="flex items-center justify-between">
                  <AudienceChip
                    label={app.audience === "commercial" ? "Commercial" : "Residential"}
                    variant={app.audience}
                  />
                  <ArrowUpRight
                    className="size-5 text-accent-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
                <h2 className="text-h2 mt-5 text-foreground">{app.title}</h2>
                <p className="text-small mt-1 font-medium text-accent-steel">{app.tagline}</p>
                <p className="text-body mt-3 text-muted-foreground">{app.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Not sure which fits?"
        title="Start with a pool assessment"
        body="Tell us about your pool and we'll point you to the right series and sector guidance."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.specialist}
      />
    </>
  );
}
