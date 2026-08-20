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
import { CtaBand } from "@/components/blocks/cta-band";
import { SeriesRange } from "@/components/blocks/series-range";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { DistributorApplyQr } from "@/components/blocks/distributor-apply-qr";
import { TreatmentLoop } from "@/components/graphics/treatment-loop";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { clientStills, distributorsHeroClip, motionGraphics } from "@/content/media";
import {
  partnerAgreementNote,
  partnerChamberPitch,
  partnerEndSegments,
  partnerMarketCloser,
  partnerMarketDurability,
  partnerPracticalOffer,
  partnerProfessionals,
  partnerProgramFootnote,
  partnerReasons,
  partnerResidentialNote,
  partnerSupport,
  partnerSupportClose,
  partnerSupportIntro,
  partnerTerritoryNote,
  partnerTypeLabels,
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

const applyHref = siteConfig.ctas.distributorContact.href;

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
  {
    label: "Address",
    value: siteConfig.contact.address,
    href: siteConfig.contact.addressHref,
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

function CausticField({
  src,
  position = "center",
}: {
  src: string;
  position?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
        style={{ objectPosition: position }}
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgb(10_61_66/0.78)_0%,rgb(10_61_66/0.48)_42%,rgb(10_61_66/0.62)_100%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 hero-scrim" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 hero-scrim-bottom"
      />
    </>
  );
}

function ApplyCta({
  label,
  className,
  size = "lg",
  inverted = false,
}: {
  label: string;
  className?: string;
  size?: "lg" | "default";
  inverted?: boolean;
}) {
  return (
    <Button
      size={size}
      className={
        inverted
          ? `rounded-[var(--radius-control)] bg-white text-[color:var(--teal-900)] hover:bg-white/90 ${className ?? ""}`
          : className
      }
      render={<Link href={applyHref} />}
    >
      {label}
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
            <span className="text-gradient-aqua">the pools you serve</span>
          </>
        }
        description="Advanced pool water treatment for hotels, commercial facilities and residential pools — offered through qualified distributors, service companies, builders and dealers."
        actions={[
          {
            label: "Become a Distributor",
            href: applyHref,
          },
          { label: "Explore the Program", href: "#support", variant: "outline" },
        ]}
        video={distributorsHeroClip}
      />

      <Section
        spacing="lg"
        background="muted"
        id="opportunity-market"
        className="relative overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
        <div aria-hidden className="absolute inset-0 hero-aura" />
        <div className="relative">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Market opportunity"
              title="Every pool already needs water treatment"
              description={partnerMarketDurability}
            />
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {partnerTypeLabels.map((label) => (
                <li key={label}>
                  <AudienceChip label={label} variant="partner" />
                </li>
              ))}
            </ul>
            <p className="text-h3 mt-10 max-w-2xl text-accent-aquatic">
              {partnerMarketCloser}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section
        spacing="lg"
        background="deep"
        id="support"
        className="relative overflow-hidden"
      >
        <CausticField src={clientStills.poolCausticsWide} position="center" />
        <AmbientIons tone="ecological" density="sparse" className="opacity-40" />
        <div className="relative">
          <Reveal>
            <TechnicalLabel className="text-[color:var(--aqua-400)]">
              Partner support
            </TechnicalLabel>
            <h2 className="text-h1 mt-4 text-[color:var(--band-deep-foreground)]">
              Support built around your growth
            </h2>
            <p className="text-body-large mt-4 max-w-2xl text-white/80">
              {partnerSupportIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {partnerSupport.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <div className="border-t border-white/20 pt-5">
                  <div className="flex items-start gap-3">
                    <Check
                      className="mt-1 size-5 shrink-0 text-[color:var(--aqua-400)]"
                      aria-hidden
                    />
                    <div>
                      <h3 className="text-h3 text-white">{item.title}</h3>
                      <p className="text-body mt-2 text-white/75">{item.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-h3 mt-12 max-w-2xl text-white">
              {partnerSupportClose}
            </p>
            <div className="mt-6">
              <ApplyCta label="Become a Distributor" inverted />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        spacing="lg"
        background="default"
        id="professionals"
        className="relative overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
        <div aria-hidden className="absolute inset-0 hero-aura" />
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <TechnicalLabel>Distributor program</TechnicalLabel>
            <h2 className="text-h1 mt-4 text-foreground">
              {partnerProfessionals.title}
            </h2>
            <p className="text-body-large mt-4 text-muted-foreground">
              {partnerProfessionals.body}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius-panel)] border border-[color:var(--aqua-400)]/35 bg-[color:var(--accent)]/40 p-7 md:p-8">
              <h3 className="text-h3 text-foreground">
                {partnerProfessionals.pathTitle}
              </h3>
              <p className="text-body mt-4 text-muted-foreground">
                {partnerProfessionals.pathBody}
              </p>
              <p className="text-body mt-5 font-medium text-foreground">
                {partnerProfessionals.close}
              </p>
              <div className="mt-7">
                <ApplyCta label="Explore the Distributor Program" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.chamber.src}
        poster={motionGraphics.chamber.poster}
        title={partnerChamberPitch.title}
        body={partnerChamberPitch.body}
        waterMotion
      />

      <Section
        spacing="lg"
        background="muted"
        id="treatment-loop"
        className="relative overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 bg-grid opacity-45" />
        <div aria-hidden className="absolute inset-0 hero-aura opacity-80" />
        <div className="relative">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow={treatmentLoop.eyebrow}
              title="Where Zinc'd fits"
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
                <ProcessSteps steps={treatmentLoop.steps} numbered={false} />
                <StatusNote className="mt-8">{treatmentLoop.companion}</StatusNote>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section
        spacing="lg"
        background="deep"
        id="practical-offer"
        className="relative overflow-hidden"
      >
        <CausticField src={clientStills.poolCausticsDeep} position="center top" />
        <AmbientIons tone="aquatic" density="sparse" className="opacity-40" />
        <div className="relative max-w-2xl">
          <Reveal>
            <h2 className="text-h1 text-[color:var(--band-deep-foreground)]">
              {partnerPracticalOffer.title}
            </h2>
            <p className="text-body-large mt-4 text-white/80">
              {partnerPracticalOffer.body}
            </p>
            <p className="text-h3 mt-8 text-white">
              {partnerPracticalOffer.close}
            </p>
            <div className="mt-8">
              <ApplyCta label="Discover Distributor Opportunities" inverted />
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

      <Section
        spacing="lg"
        background="default"
        id="opportunity"
        className="relative overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 hero-aura opacity-70" />
        <div className="relative">
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
                <div className="flex h-full flex-col border-t-2 border-accent-aquatic/50 bg-surface/80 pt-5 pr-2">
                  <h3 className="text-h3 text-foreground">{item.title}</h3>
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
        </div>
      </Section>

      <Section spacing="lg" background="muted" id="range">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title={`One line, ${seriesRangeLabel}`}
            description="From a private pool to a multi-unit commercial or hospitality facility, on one product line and one spec language. Series 3 and Series 4 are customized, indicative models — final specification is confirmed during assessment."
          />
        </Reveal>
        <SeriesRange />
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
        <CausticField src={clientStills.poolCausticsWide} position="bottom" />
        <AmbientIons tone="ecological" density="sparse" className="opacity-40" />
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
              <ApplyCta label="Become a Distributor" inverted />
            </div>
            <p className="text-small mt-4 text-white/60">
              A discussion, not a reservation. Nothing is committed until there
              is a written agreement.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-white/25 bg-[color:var(--pearl)] p-5 shadow-[var(--shadow-2)]">
              <Image
                src={clientStills.territoryMarkets}
                alt="Map of the United States — Zinc'd distributor territories are discussed by market, not reserved from this page."
                width={959}
                height={593}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
              <ul className="mt-6 grid grid-cols-3 gap-3">
                {(
                  [
                    { label: "Hotels", Icon: Building2 },
                    { label: "Spas", Icon: Waves },
                    { label: "Contractors", Icon: Hammer },
                    { label: "Maintenance", Icon: Wrench },
                    { label: "Gyms", Icon: Dumbbell },
                    { label: "Distributors", Icon: Store },
                  ] as const
                ).map(({ label, Icon }) => (
                  <li
                    key={label}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full border border-border bg-surface text-accent-aquatic">
                      <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    <span className="text-technical text-accent-aquatic">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
                  <p className="text-small mt-4 text-muted-foreground">
                    {partnerAgreementNote}
                  </p>
                  <dl className="mt-8 space-y-3">
                    {contactRail.map(({ label, value, href }) => (
                      <div
                        key={label}
                        className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-start gap-4"
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
        primary={{ label: "Become a Distributor", href: applyHref }}
        secondary={{ label: "View the Product Range", href: "/product" }}
        note="We reply by email or phone, whichever you prefer. Nothing is committed until there is a written agreement."
        image={clientStills.poolCausticsDeep}
      />
    </>
  );
}
