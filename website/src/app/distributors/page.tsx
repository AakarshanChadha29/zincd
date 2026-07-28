import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AudienceChip } from "@/components/ui/audience-chip";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { distributorsHeroClip } from "@/content/media";
import {
  partnerPropositions,
  partnerValue,
  productSeries,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Distributors & Partners — Carry Zinc'd",
  description:
    "Partner with Zinc'd: add an engineered copper–silver–zinc pool ionization system to your line — documented specifications, residential-to-commercial series range, and a clear partnership path.",
  path: "/distributors",
  keywords: [
    "pool equipment distributor",
    "become a pool ionization dealer",
    "commercial pool partner",
    "Zinc'd distributor",
  ],
});

const partnerTypes = [
  "Distributors & wholesalers",
  "Pool builders",
  "Installers & service pros",
  "Commercial & hospitality operators",
];

const partnerProcess = [
  { title: "Introduce your business", body: "Tell us about your market, the pools you serve, and the categories you carry today." },
  { title: "Review fit & specifications", body: "We share documented product specifications and confirm how the series range maps to your customers." },
  { title: "Plan the partnership", body: "We align on how Zinc'd fits your line and what support looks like as you bring it to market." },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributors & Partners"
        title={
          <>
            Add an engineered category to{" "}
            <span className="text-gradient-aqua">your line</span>
          </>
        }
        description="Zinc'd is an engineered ionization system for residential estates and commercial pools — a documented, specifiable product category for distributors, builders and installers. Built for channel partners who sell to ownership groups and the operators who take facilities forward."
        actions={[
          {
            label: siteConfig.ctas.distributorContact.label,
            href: siteConfig.ctas.distributorContact.href,
          },
          { label: "See the product", href: "/product", variant: "outline" },
        ]}
        video={distributorsHeroClip}
      />

      {/* Who it's for */}
      <Section spacing="md" background="default" className="relative">
        <AmbientIons tone="ecological" density="sparse" />
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <AudienceChip label="For partners" variant="partner" />
            {partnerTypes.map((type) => (
              <span
                key={type}
                className="text-small rounded-[var(--radius-control)] border border-border bg-surface px-3 py-1.5 text-muted-foreground"
              >
                {type}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Why carry it — the dealership case, stated plainly. Kept separate
          from the direct-purchase path on /product so the two audiences never
          compete for the same call to action. */}
      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The case for carrying it"
            title="What you'd actually be selling"
            description="Not a chemical program to re-order, but an engineered system with a defined component list, documented operating parameters, and a service relationship after the install."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerPropositions.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7 transition-colors hover:border-border-strong">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{p.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 rounded-[var(--radius-panel)] border border-border bg-surface p-6">
            <p className="text-body text-foreground">
              Buying a single system for your own pool?
            </p>
            <p className="text-small mt-2 text-muted-foreground">
              You don&rsquo;t need a partner agreement — the complete system is
              available direct.
            </p>
            <Link
              href="/product"
              className="text-small mt-4 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              See the product and pricing
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Value props */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Why partner"
            title="A category built on documentation, not hype"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerValue.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-7">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-ecological" aria-hidden />
                <div>
                  <h3 className="text-h3 text-foreground">{v.title}</h3>
                  <p className="text-body mt-2 text-muted-foreground">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Series range recap */}
      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Range"
            title="One line, domestic to Olympic-size"
            description="Four series let you serve private pools through large commercial and hospitality facilities."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{series.name}</h3>
                <p className="text-small mt-1 font-medium text-accent-steel">{series.scope}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="How it works"
                title="A straightforward partner path"
              />
              <StatusNote className="mt-6">
                Specific partner terms, pricing and territory arrangements are shared
                directly during conversations — not published here.
              </StatusNote>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={partnerProcess} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="For partners"
        title="Start a partnership conversation"
        body="Tell us about your business and market. We will follow up to discuss fit, specifications and next steps — for seasoned channel partners and new operators building a modern line."
        primary={siteConfig.ctas.distributorContact}
        secondary={siteConfig.ctas.technology}
      />
    </>
  );
}
