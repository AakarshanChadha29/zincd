import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AudienceChip } from "@/components/ui/audience-chip";
import { StatusNote } from "@/components/ui/status-note";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { DistributorApplyQr } from "@/components/blocks/distributor-apply-qr";
import { TreatmentLoop } from "@/components/graphics/treatment-loop";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { clientStills, distributorsHeroClip, motionGraphics } from "@/content/media";
import {
  partnerAgreementNote,
  partnerAudiences,
  partnerEconomics,
  partnerEndSegments,
  partnerProgramFootnote,
  partnerReasons,
  partnerResidentialNote,
  partnerSupport,
  partnerValue,
  productSeries,
  seriesRangeLabel,
  treatmentLoop,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "U.S. Distributor Program — Pool Equipment Distributors & Dealer Partners",
  description:
    "Zinc'd is seeking qualified U.S. distributors with established relationships in commercial pool, hospitality and wellness markets. Copper–silver–zinc ionization, with training, specs, and a clear partner path.",
  path: "/distributors",
  keywords: [
    "pool equipment distributor",
    "become a pool ionization dealer",
    "commercial pool partner",
    "Zinc'd distributor program",
    "US pool water treatment distribution",
  ],
});

const partnerProcess = [
  {
    title: "Introduce your business",
    body: "Tell us about your market, the pools you serve, and the categories you carry today — service routes, new builds, or hospitality accounts.",
  },
  {
    title: "Review fit & margin shape",
    body: "We walk through the documented specifications, the series range you would carry, and how the margin works on an installed system. Territory, order profile and commercial terms are agreed in your partnership review.",
  },
  {
    title: "Launch with support",
    body: "Product training, install guidance, and a clean sales story — so your team can quote Zinc'd alongside the equipment you already sell.",
  },
];

/**
 * Brochure back-cover address block. `www.zincd.net` is printed on the piece,
 * but the canonical domain is still C-016 `pending-client-confirmation` — the
 * 2026-08-19 confirmation covered the mailbox and phone line only. Linking it
 * relatively means the site never hardcodes an unconfirmed absolute domain.
 */
const contactRail = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  { label: "Web", value: "www.zincd.net", href: "/" },
];

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="U.S. Distributor Program"
        title={
          <>
            Already selling into pools?{" "}
            <span className="text-gradient-aqua">Add a high-ticket system</span>
          </>
        }
        description={`Zinc'd is looking for qualified distributors, pool service companies, builders, and hospitality suppliers who already hold the relationships. The program leads with commercial pools — hotels, clubs, wellness and leisure facilities — and the line runs ${seriesRangeLabel}, so a residential account is never off the table.`}
        actions={[
          {
            label: siteConfig.ctas.distributorContact.label,
            href: siteConfig.ctas.distributorContact.href,
          },
          { label: "See the product line", href: "/product", variant: "outline" },
        ]}
        video={distributorsHeroClip}
      />

      {/* Why Zinc'd — the brochure explains what the thing is before it pitches. */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="Why Zinc'd"
                title="A different approach to commercial pool water treatment"
                description="Controlled copper, silver and zinc ionization, designed for integration into existing circulation systems and ongoing professional operation."
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <FeatureGrid features={partnerValue} columns={2} />
          </Reveal>
        </div>
      </Section>

      {/* The treatment loop — the brochure's centre panel, and the one thing on
          it with no web equivalent. Answers "where does this go in my plant
          room?", which is the question a distributor fields on a site visit. */}
      <Section spacing="lg" background="default" id="treatment-loop">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="The treatment loop"
            title="Where it sits in the plant room"
            description={treatmentLoop.intro}
          />
          <p className="text-technical mt-6 text-accent-steel">
            {treatmentLoop.flowLabel}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <Reveal>
            <div className="flex flex-col items-center">
              <TreatmentLoop />
              <a
                href="#install-note"
                className="text-small mt-6 text-muted-foreground underline underline-offset-4 decoration-border hover:decoration-accent-steel"
              >
                Professional installation required
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <ProcessSteps steps={treatmentLoop.steps} />
              {/* Required companion (C-005): step 05's "treated water" is the
                  last thing the reader sees about chemistry. Never render the
                  loop without this line. */}
              <StatusNote className="mt-8">{treatmentLoop.companion}</StatusNote>
            </div>
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.chamber.src}
        poster={motionGraphics.chamber.poster}
        eyebrow="What you'd be selling"
        title="Engineered hardware your customers can see"
        body="A stainless ionization cell and PWM control — a physical product category, not a chemistry program you re-order every week."
      />

      {/* Audience axis 1 — who the partner IS. */}
      <Section spacing="lg" background="muted" className="relative">
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

      {/* Audience axis 2 — who the partner SELLS TO. A roster, deliberately not
          the card grid above: different axis, different layout. */}
      <Section spacing="lg" background="default">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="Where it fits"
                title="The accounts a Zinc'd line opens"
                description="Your customers, not ours. These are the segments partners bring Zinc'd into — sized to the pool during assessment, not assumed from the category."
              />
            </div>
          </Reveal>
          <div>
            <ul className="border-t border-border">
              {partnerEndSegments.map((segment, i) => (
                <Reveal key={segment.title} delay={i * 0.04}>
                  <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 border-b border-border py-4 transition-colors duration-[var(--duration-micro)] hover:bg-surface/70 sm:grid-cols-[2.5rem_minmax(0,15rem)_minmax(0,1fr)]">
                    <span className="text-technical text-accent-aquatic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-h3 flex flex-wrap items-center gap-2 text-foreground">
                      {segment.href ? (
                        <Link
                          href={segment.href}
                          className="underline-offset-4 hover:underline"
                        >
                          {segment.title}
                        </Link>
                      ) : (
                        segment.title
                      )}
                      {"priority" in segment && segment.priority ? (
                        <AudienceChip label="Priority" variant="commercial" />
                      ) : null}
                    </span>
                    <span className="text-small col-start-2 text-muted-foreground sm:col-start-3">
                      {segment.body}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            {/* Reinstates the residential lane the brochure never mentions —
                without it this page contradicts /product and /calculator. */}
            <Reveal>
              <p className="text-body mt-8 text-muted-foreground">
                {partnerResidentialNote}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Partner economics — one clean idea now that the profit angles have
          merged into "why partners carry it" below. */}
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
        <Reveal>
          <StatusNote className="mt-8">
            Territory, order profile and commercial terms are discussed
            individually — intentionally not published here.
          </StatusNote>
        </Reveal>
      </Section>

      {/* Why distributors care — the merged case. */}
      <Section spacing="lg" background="default">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface p-4">
              <Image
                src={clientStills.territoryMarkets}
                alt="U.S. territory map with hotel, spa, maintenance, gym, and distributor segments."
                width={1200}
                height={1600}
                className="h-full w-full object-contain"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading
                as="h2"
                eyebrow="Why distributors care"
                title="What the line is actually worth to you"
                description="Not a chemical program to re-order — an engineered system with a defined component list, documented operating parameters, and a service relationship after the install."
              />
            </Reveal>
            <div className="mt-8 grid gap-4">
              {partnerReasons.map((p, i) => (
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

      {/* Partner support. "Where you're set up for it" carries the brochure's
          "where applicable" qualifier and must survive any rewrite. */}
      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="How we back you"
            title="Training, specs, and a story that sells"
            description="Qualified distributors receive product training, technical support and product documentation. Where applicable, partners can combine product sales with installation, customer support and routine maintenance."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerSupport.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-6">
                <Check className="mt-0.5 size-5 shrink-0 text-accent-ecological" aria-hidden />
                <div>
                  <h3 className="text-h3 text-foreground">{s.title}</h3>
                  <p className="text-body mt-2 text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Range — a reference strip, not a fifth bordered-card grid. The sizing
          story itself belongs to /calculator and /product. */}
      <Section spacing="sm" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Range"
            title={`One line, ${seriesRangeLabel}`}
            description="Handbook sizing lets you serve private pools through multi-unit commercial and hospitality facilities."
          />
        </Reveal>
        <div className="mt-8 grid divide-y divide-border border-y border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {productSeries.map((series) => (
            <div key={series.name} className="px-6 py-5 first:pl-0 lg:last:pr-0">
              <h3 className="text-h3 text-foreground">{series.name}</h3>
              <p className="text-small mt-1 font-medium text-accent-steel">
                {series.scope}
              </p>
              <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                {series.volume}
              </p>
            </div>
          ))}
        </div>
        <Reveal>
          <Link
            href="/calculator"
            className="text-small mt-6 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Size a pool with the Series Calculator
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </Section>

      {/* Partner path */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-6">
              <SectionHeading
                as="h2"
                eyebrow="How it works"
                title="A straightforward partner path"
              />
              <StatusNote>{partnerAgreementNote}</StatusNote>
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

      {/* Brochure back cover: address block + apply route, side by side. Kept
          deliberately quiet — CtaBand below is the emotional close, this is the
          utility close, and two full-weight CTAs back to back would compete. */}
      <Section spacing="lg" background="default" id="qr">
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius)] border border-border-strong bg-surface-elevated">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
              <div className="relative p-8 md:p-10">
                <div aria-hidden className="absolute inset-0 hero-aura" />
                <div className="relative">
                  <TechnicalLabel>Partner with Zinc&apos;d</TechnicalLabel>
                  <h2 className="text-h2 mt-4 text-foreground">
                    Let&apos;s discuss your market
                  </h2>
                  <p className="text-body mt-4 max-w-xl text-muted-foreground">
                    Zinc&apos;d is seeking qualified distributors with established
                    relationships in the commercial pool, hospitality, wellness
                    and water-treatment markets. Territory, order profile and
                    commercial terms are discussed individually.
                  </p>
                  <dl className="mt-8 space-y-3">
                    {contactRail.map(({ label, value, href }) => (
                      <div
                        key={label}
                        className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4"
                      >
                        <dt className="text-technical text-accent-steel">{label}</dt>
                        <dd className="text-technical normal-case tracking-normal text-foreground">
                          <a
                            href={href}
                            className="underline underline-offset-4 decoration-border hover:decoration-accent-aquatic"
                          >
                            {value}
                          </a>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href={siteConfig.ctas.distributorContact.href}
                    className="text-small mt-8 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                  >
                    {siteConfig.ctas.distributorContact.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </div>
              <div className="border-t border-border p-8 lg:border-l lg:border-t-0">
                <DistributorApplyQr />
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-6 w-full rounded-[var(--radius-control)]"
                  render={<Link href="/distributors/qr" />}
                >
                  Open printable QR sheet
                  <ArrowUpRight className="size-4" aria-hidden />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The brochure's footnote, plus the residual-chlorine sentence it is
            missing. Quiet hairline rather than StatusNote: the component is
            already carrying the pricing-privacy message twice on this page. */}
        <Separator className="mt-12" />
        <p
          id="install-note"
          className="text-small mt-6 max-w-3xl scroll-mt-28 text-muted-foreground"
        >
          {partnerProgramFootnote}
        </p>
      </Section>

      <section className="relative overflow-hidden border-y border-border bg-[color:var(--teal-900)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-8 px-6 py-10 md:px-10">
          <Image
            src={clientStills.territoryCta}
            alt="Partner with Zinc'd — let's discuss your territory."
            width={1200}
            height={330}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>
      </section>

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
