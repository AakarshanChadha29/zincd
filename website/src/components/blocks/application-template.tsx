import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { applications, applicationDetails } from "@/content/product-data";

const otherLabel: Record<string, string> = {
  residential: "Residential",
  "hotels-resorts": "Hotels & Resorts",
  commercial: "Commercial",
  "fitness-wellness": "Fitness & Wellness",
};

export function ApplicationTemplate({ slug }: { slug: string }) {
  const app = applications.find((a) => a.slug === slug);
  const detail = applicationDetails[slug];
  if (!app || !detail) return null;

  const others = applications.filter((a) => a.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`Applications · ${detail.audienceLabel}`}
        title={app.title}
        description={detail.intro}
        actions={[
          { label: detail.cta.label, href: detail.cta.href },
          { label: "Explore the technology", href: "/technology", variant: "outline" },
        ]}
      />

      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <AudienceChip label={detail.audienceLabel} variant={detail.audience} />
              <SectionHeading
                as="h2"
                title="What matters here"
                description="The priorities that shape how Zinc'd is specified for this environment."
                className="mt-5"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={detail.priorities} numbered={false} />
          </Reveal>
        </div>
      </Section>

      {/* Explore other sectors */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading as="h2" eyebrow="Other sectors" title="Explore more applications" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.05}>
              <Link
                href={`/applications/${o.slug}`}
                className="group flex items-center justify-between rounded-[var(--radius-panel)] border border-border bg-surface p-5 transition-colors hover:border-border-strong"
              >
                <span className="text-body font-medium text-[color:var(--blue-900)]">
                  {otherLabel[o.slug]}
                </span>
                <ArrowRight
                  className="size-4 text-accent-steel transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Confirm the right system for your pool"
        body="A pool assessment matches your circulation system and volume to the correct Zinc'd series."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.specialist}
      />
    </>
  );
}
