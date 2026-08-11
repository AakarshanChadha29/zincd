import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AudienceChip } from "@/components/ui/audience-chip";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { distributorsHeroClip, motionGraphics, productPhotos } from "@/content/media";
import {
  partnerAudiences,
  partnerEconomics,
  partnerProfitAngles,
  partnerPropositions,
  partnerSupport,
  partnerValue,
  productSeries,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Equipment Distributors & Dealer Partners",
  description:
    "Become a Zinc'd distributor: add a high-ticket copper–silver–zinc ionization system to the pool and hospitality customers you already serve — with training, specs, and a clear partner path.",
  path: "/distributors",
  keywords: [
    "pool equipment distributor",
    "become a pool ionization dealer",
    "commercial pool partner",
    "Zinc'd distributor",
  ],
});

const partnerProcess = [
  {
    title: "Introduce your business",
    body: "Tell us about your market, the pools you serve, and the categories you carry today — service routes, new builds, or hospitality accounts.",
  },
  {
    title: "Review fit & margin shape",
    body: "We walk through the documented specifications, the series range you would carry, and how the margin works on an installed system. Exact rates are agreed in your partnership review.",
  },
  {
    title: "Launch with support",
    body: "Product training, install guidance, and a clean sales story — so your team can quote Zinc'd alongside the equipment you already sell.",
  },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Distributors & Partners"
        title={
          <>
            Already selling into pools?{" "}
            <span className="text-gradient-aqua">Add a high-ticket system</span>
          </>
        }
        description="Zinc'd is looking for pool service companies, builders, dealers, and hospitality suppliers who already have the relationships. Carry an engineered copper–silver–zinc ionization category — with meaningful product spread, recurring service, and documentation your team can sell."
        actions={[
          {
            label: siteConfig.ctas.distributorContact.label,
            href: siteConfig.ctas.distributorContact.href,
          },
          { label: "See the product line", href: "/product", variant: "outline" },
        ]}
        video={distributorsHeroClip}
      />

      {/* Audience lure */}
      <Section spacing="lg" background="default" className="relative">
        <AmbientIons tone="ecological" density="sparse" />
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <AudienceChip label="For partners" variant="partner" />
            <span className="text-small text-muted-foreground">
              Built for businesses that already sell to, install for, or service pool owners.
            </span>
          </div>
          <SectionHeading
            as="h2"
            className="mt-8"
            eyebrow="Who this is for"
            title="Four audiences. One product category."
            description="Don't mix every lead into one pitch. Zinc'd fits the partners who already own the customer relationship."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerAudiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7 transition-colors hover:border-border-strong">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{a.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.chamber.src}
        poster={motionGraphics.chamber.poster}
        eyebrow="What you'd be selling"
        title="Engineered hardware your customers can see"
        body="A stainless ionization chamber and PWM control — a physical product category, not a chemistry program you re-order every week."
      />

      {/* Partner economics */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Partner economics"
            title="See the profit shape — rates stay private"
            description="High-ticket add-on. Meaningful product spread. Exact partner acquisition and suggested retail numbers are shared in conversation — not listed publicly."
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
              <div className="flex h-full gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-6">
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

      {/* Case + distinct image */}
      <Section spacing="lg" background="default">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-[color:var(--teal-900)]">
              <Image
                src={productPhotos.controlAngled}
                alt="Zinc'd control enclosure — the partner-facing face of the system."
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
                description="Not a chemical program to re-order — an engineered system with a defined component list, documented operating parameters, and a service relationship after the install."
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
                  available direct on the product page.
                </p>
                <Link
                  href="/product#buy"
                  className="text-small mt-4 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                >
                  See Buy now on the product page
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Support lure */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="How we back you"
            title="Training, specs, and a story that sells"
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {partnerSupport.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{s.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerValue.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-6">
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

      {/* Series */}
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
                <p className="text-small mt-1 font-medium text-accent-steel">
                  {series.scope}
                </p>
                <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                  {series.volume}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process + CTA card */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-6">
              <SectionHeading
                as="h2"
                eyebrow="How it works"
                title="A straightforward partner path"
              />
              <StatusNote>
                Partner terms, pricing, and territory arrangements are shared
                directly during conversations — not published here.
              </StatusNote>
              <Button
                size="lg"
                variant="partner"
                className="rounded-[var(--radius-control)]"
                render={<Link href={siteConfig.ctas.distributorContact.href} />}
              >
                {siteConfig.ctas.distributorContact.label}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={partnerProcess} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="For partners"
        title="Apply to carry Zinc'd in your market"
        body="Tell us about your service book, builds, or hospitality accounts. We'll follow up with fit, specs, and the partner economics — for seasoned channel partners and operators building a modern line."
        primary={siteConfig.ctas.distributorContact}
        secondary={{ label: "See the product", href: "/product" }}
      />
    </>
  );
}
