import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  Dumbbell,
  Hammer,
  Home,
  Landmark,
  LifeBuoy,
  Store,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

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
  partnerCustomerPitch,
  partnerEndSegments,
  partnerMarketDurability,
  partnerPitchGuardrail,
  partnerProgramFootnote,
  partnerReasons,
  partnerResidentialNote,
  partnerSupport,
  partnerTerritoryNote,
  partnerTypeLabels,
  partnerValue,
  productSeries,
  seriesRangeLabel,
  treatmentLoop,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Equipment Distributors — Zinc'd Water Treatment Partners",
  description:
    "Zinc'd seeks qualified pool equipment distributors, dealers and service companies for its pool ionization system. Commercial pool water treatment technology, multiple customer segments, and territory discussions subject to availability and written agreement.",
  path: "/distributors",
  keywords: [
    "pool equipment distributor",
    "pool water treatment",
    "pool ionization system",
    "commercial pool water treatment",
    "pool technology",
    "pool equipment dealers",
    "pool water treatment distributors",
    "Zinc'd distributor program",
  ],
});

const territoryCta = siteConfig.ctas.distributorContact;

const partnerProcess = [
  {
    title: "Introduce your business",
    body: "A short form covering where you operate, the pools you serve, and what you carry today. About two minutes. It starts a conversation, not a contract.",
  },
  {
    title: "Review fit and commercial terms",
    body: "We walk through the product range, specifications, and how Zinc'd would sit in your market. Order profile and commercial terms are agreed in partnership review. Territory exclusivity may be available upon request, subject to territory availability, partner qualification, commercial agreement and performance requirements.",
  },
  {
    title: "Launch with support",
    body: "Product training, technical documentation and technical support — so your team can quote Zinc'd alongside the equipment you already sell.",
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

const segmentIcons: Record<string, LucideIcon> = {
  building: Building2,
  hammer: Hammer,
  wrench: Wrench,
  waves: Waves,
  dumbbell: Dumbbell,
  landmark: Landmark,
  lifebuoy: LifeBuoy,
  home: Home,
  store: Store,
};

function TerritoryCtaButton({
  className,
  size = "lg",
}: {
  className?: string;
  size?: "lg" | "default";
}) {
  return (
    <Button
      size={size}
      className={className}
      render={<Link href={territoryCta.href} />}
    >
      {territoryCta.label}
      <ArrowRight className="size-4" aria-hidden />
    </Button>
  );
}

export default function DistributorsPage() {
  return (
    <>
      <PageHero
        eyebrow="U.S. Distributor Program"
        title={
          <>
            Bring Zinc&apos;d pool technology to{" "}
            <span className="text-gradient-aqua">your territory</span>
          </>
        }
        description="Advanced pool water treatment for hotels, commercial facilities and residential pools — offered through qualified distributors, service companies, builders and dealers."
        actions={[
          {
            label: territoryCta.label,
            href: territoryCta.href,
          },
          { label: "Explore the System", href: "#why-zincd", variant: "outline" },
        ]}
        video={distributorsHeroClip}
      />

      <Section spacing="sm" background="default">
        <Reveal>
          <p className="text-body text-muted-foreground">
            About two minutes. Ten required fields, most of them tick-boxes.{" "}
            <span className="text-foreground">
              It starts a conversation, not a contract.
            </span>
          </p>
        </Reveal>
      </Section>

      <Section spacing="lg" background="muted" id="opportunity-market">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Market opportunity"
            title="Every pool already needs water treatment"
            description={partnerMarketDurability}
          />
        </Reveal>
        <Reveal delay={0.06}>
          <p className="text-small mt-8 text-muted-foreground">
            Built for businesses that already sell to, install for, or service
            pool owners.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {partnerTypeLabels.map((label) => (
              <li key={label}>
                <AudienceChip label={label} variant="partner" />
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section spacing="lg" background="default" id="why-zincd">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                as="h2"
                eyebrow="Why Zinc'd"
                title="Smart pool water treatment, simply explained"
                description="Zinc'd uses copper, silver and zinc ionization under electronic control. Minerals are released into circulating water, only while that water is moving, and the system signals when routine service is due."
              />
              <Link
                href="/technology"
                className="text-small mt-6 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
              >
                Explore Zinc&apos;d Technology
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <FeatureGrid features={partnerValue} columns={2} />
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted" id="benefits">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Customer benefits"
            title="Why pool owners and operators take the conversation"
            description="Lead with what the customer notices. The technology sits behind a calmer water program, more predictable plant-room care, and a documented equipment decision."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerCustomerPitch.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7 transition-colors hover:border-border-strong">
                <h3 className="text-h3 text-foreground">{item.title}</h3>
                <p className="text-body mt-3 flex-1 text-muted-foreground">
                  {item.body}
                </p>
                <p className="text-technical mt-5 normal-case tracking-normal text-accent-steel">
                  {item.saidTo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <StatusNote className="mt-8">{partnerPitchGuardrail}</StatusNote>
        </Reveal>
        <Reveal>
          <Link
            href="/cost-savings"
            className="text-small mt-6 inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            Open the hotel planning model — use a property&rsquo;s own numbers
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.chamber.src}
        poster={motionGraphics.chamber.poster}
        eyebrow="How the technology works"
        title="Engineered hardware in the circulation loop"
        body="A stainless ionization chamber and electronic control. The system only runs while water is circulating — a physical product, not a chemistry program you re-order every week."
      />

      <Section spacing="lg" background="default" id="treatment-loop">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="In the plant room"
            title="Where Zinc'd sits"
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
              <StatusNote className="mt-8">{treatmentLoop.companion}</StatusNote>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted" id="markets">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Who distributors can sell to"
            title="One system. Multiple attractive markets."
            description="Zinc'd can be offered across hospitality, commercial, fitness, residential and dealer channels. Series is sized to the pool during assessment — never assumed from the category."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerEndSegments.map((segment, i) => {
            const Icon = segmentIcons[segment.icon] ?? Building2;
            return (
              <Reveal key={segment.title} delay={i * 0.04}>
                <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                  <div className="flex size-11 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface-elevated text-accent-aquatic">
                    <Icon strokeWidth={1.5} className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-h3 mt-4 flex flex-wrap items-center gap-2 text-foreground">
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
                  </h3>
                  <p className="text-body mt-2 text-muted-foreground">
                    {segment.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <p className="text-body mt-8 text-muted-foreground">
            {partnerResidentialNote}{" "}
            <Link
              href="/product#buy"
              className="font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              See Buy now on the product page
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <Section spacing="lg" background="default" id="opportunity">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Distributor opportunity"
            title="Add Zinc'd to relationships you already have"
            description="A differentiated pool technology with several customer segments, product sales, and — where applicable — installation and maintenance revenue."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerReasons.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7 transition-colors hover:border-border-strong">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-2 text-foreground">{item.title}</h3>
                <p className="text-body mt-2 text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <StatusNote className="mt-8">
            Wholesale rates, discounts and commercial terms are discussed
            individually — they are not published here.
          </StatusNote>
        </Reveal>
      </Section>

      <Section spacing="lg" background="muted" id="range">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title={`One line, ${seriesRangeLabel}`}
            description="From a private pool to a multi-unit commercial or hospitality facility, on one product line and one spec language. Series-03 and Series-04 are customized, indicative models — final specification is confirmed during assessment."
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
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              variant="outline"
              className="rounded-[var(--radius-control)]"
              render={<Link href="/product" />}
            >
              View the Product Range
              <ArrowUpRight className="size-4" aria-hidden />
            </Button>
            <Link
              href="/calculator"
              className="text-small inline-flex items-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              Size a pool with the Series Calculator
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
          <p className="text-body mt-6 text-muted-foreground">
            Where calcium hardness runs high, the Catalytic Super Softener is a
            companion line designed to help reduce scale formation — a second
            thing to quote on the same site visit.{" "}
            <Link
              href="/product/softener"
              className="font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              See the softener line
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <Section
        spacing="lg"
        background="deep"
        id="territory"
        className="relative overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 deep-aura" />
        <div aria-hidden className="absolute inset-0 bg-grid-dark opacity-35" />
        <AmbientIons tone="ecological" density="sparse" className="opacity-70" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal>
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              Territory opportunity
            </TechnicalLabel>
            <h2 className="text-h1 mt-4 text-[color:var(--band-deep-foreground)]">
              Find out whether your market is open
            </h2>
            <p className="text-body-large mt-4 max-w-xl text-white/75">
              Qualified distributors may have the opportunity to develop Zinc&apos;d
              within their territory. Tell us where you operate and we will come
              back on what is available.
            </p>
            <blockquote className="mt-8 max-w-xl rounded-[var(--radius-panel)] border border-white/20 bg-white/10 p-6">
              <p className="text-body text-white">
                {partnerTerritoryNote}
              </p>
            </blockquote>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="rounded-[var(--radius-control)] bg-white text-[color:var(--teal-900)] hover:bg-white/90"
                render={<Link href={territoryCta.href} />}
              >
                {territoryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
            <p className="text-small mt-4 text-white/60">
              A discussion, not a reservation. Nothing is committed until there
              is a written agreement.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-white/15 bg-white/5 p-4">
              <Image
                src={clientStills.territoryMarkets}
                alt="U.S. territory map with hotel, spa, maintenance, gym, and distributor segments."
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="default" id="support">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Partner support"
            title="Training, documentation and technical backup"
            description="Qualified distributors receive product training, technical documentation and technical support. You are not expected to become a water chemist to sell this."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {partnerSupport.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="flex h-full gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-6">
                <Check
                  className="mt-0.5 size-5 shrink-0 text-accent-ecological"
                  aria-hidden
                />
                <div>
                  <h3 className="text-h3 text-foreground">{item.title}</h3>
                  <p className="text-body mt-2 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="lg" background="muted" id="process">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-6">
              <SectionHeading
                as="h2"
                eyebrow="Partnership process"
                title="A straightforward path to a first conversation"
                description="Three steps. The first is a short form — the only thing asked of you before we have spoken."
              />
              <StatusNote>{partnerAgreementNote}</StatusNote>
              <TerritoryCtaButton className="rounded-[var(--radius-control)]" />
              <p className="text-small text-muted-foreground">
                No minimum order to start the conversation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessSteps steps={partnerProcess} />
          </Reveal>
        </div>
      </Section>

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
                    Prefer to write or call first?
                  </h2>
                  <p className="text-body mt-4 max-w-xl text-muted-foreground">
                    Email or phone is welcome. The form simply saves a round of
                    questions about your market, customers and coverage.
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
                <Link
                  href="/distributors/brochure-qr"
                  className="text-small mt-4 inline-flex w-full items-center justify-center gap-1.5 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
                >
                  Brochure QR — distributors page
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        <Separator className="mt-12" />
        <p
          id="install-note"
          className="text-small mt-6 max-w-3xl scroll-mt-28 text-muted-foreground"
        >
          {partnerProgramFootnote}
        </p>
      </Section>

      <CtaBand
        eyebrow="Discuss your territory"
        title="See whether Zinc'd is open in your market"
        body="Tell us about your service book, builds, hospitality accounts or dealer network. We will follow up on fit, specifications, partner support, and what is available in the markets you cover."
        primary={territoryCta}
        secondary={{ label: "View the Product Range", href: "/product" }}
        note="We reply by email or phone, whichever you prefer. Nothing is committed until there is a written agreement."
      />
    </>
  );
}
