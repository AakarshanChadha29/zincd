import Image from "next/image";
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
import { distributorsHeroClip, productPhotos } from "@/content/media";
import {
  partnerEconomics,
  partnerProfitAngles,
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

      {/* Partner economics — profit shape without publishing wholesale/retail figures. */}
      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Partner economics"
            title="See the profit shape — rates stay private"
            description="Zinc'd is built as a high-ticket add-on for businesses that already sell into pools and hospitality. Exact partner rates are shared in conversation, not listed publicly."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {partnerEconomics.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface p-7">
                {i < partnerEconomics.length - 1 ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-8 hidden text-2xl text-accent-aquatic/40 lg:block"
                  >
                    →
                  </div>
                ) : null}
                <div className="text-technical text-accent-aquatic">{item.step}</div>
                <h3 className="text-h3 mt-3 text-foreground">{item.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {partnerProfitAngles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-[var(--radius-panel)] border border-border bg-muted/40 p-6">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-ecological" aria-hidden />
                <div>
                  <h3 className="text-h3 text-foreground">{p.title}</h3>
                  <p className="text-body mt-2 text-muted-foreground">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <StatusNote className="mt-8">
            Specific partner pricing, territory, and margin details are shared
            during partnership conversations — intentionally not published here.
          </StatusNote>
        </Reveal>
      </Section>

      {/* Why carry it — the dealership case, stated plainly. */}
      <Section spacing="lg" background="muted">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface">
              <Image
                src={productPhotos.systemStudio}
                alt="Zinc'd ionization system hardware — control electronics and stainless chamber."
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading
                as="h2"
                eyebrow="The case for carrying it"
                title="What you'd actually be selling"
                description="Not a chemical program to re-order, but an engineered system with a defined component list, documented operating parameters, and a service relationship after the install."
              />
            </Reveal>
            <div className="mt-8 grid gap-4">
              {partnerPropositions.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                    <div className="text-technical text-accent-aquatic">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-h3 mt-2 text-foreground">{p.title}</h3>
                    <p className="text-body mt-2 text-muted-foreground">{p.body}</p>
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
                  See the product
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
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
            title="One line, Series-1 through custom commercial"
            description="Handbook sizing lets you serve private pools through multi-unit commercial and hospitality facilities."
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
                <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                  {series.volume}
                </p>
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
