import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { FeatureGrid } from "@/components/blocks/feature-grid";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { SpecTable } from "@/components/blocks/spec-table";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqList } from "@/components/blocks/faq-list";
import { EcoRipple } from "@/components/graphics/eco-ripple";
import { HeroVideo } from "@/components/media/hero-video";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { ScrollParallax } from "@/components/motion/scroll-parallax";
import { siteConfig } from "@/content/site-config";
import {
  applicationImages,
  homepageHeroClips,
  motionGraphics,
  productStills,
} from "@/content/media";
import {
  applications,
  chemistryTargets,
  evaluationFramework,
  faqs,
  heroContent,
  howItWorksSteps,
  productSeries,
  technicalSpecs,
  valuePillars,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zinc'd | Ecological Mineral Ionization for Pools",
  description:
    "Zinc'd — ecological copper–silver–zinc ionization with precision PWM control for estate, hospitality and commercial pools. Documented specifications. Distributor and assessment paths.",
  path: "/",
  keywords: [
    "pool ionization system",
    "copper silver zinc ionization",
    "ecological pool water treatment",
    "commercial pool ionization",
    "hotel pool water technology",
    "Zinc'd",
  ],
});

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-end overflow-hidden border-b border-border">
        <HeroVideo clips={homepageHeroClips} />
        <div aria-hidden className="absolute inset-0 hero-scrim" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 hero-scrim-bottom" />
        <Container className="relative pb-16 pt-28 md:pb-24 md:pt-36">
          <Reveal>
            <div className="max-w-xl space-y-7">
              <TechnicalLabel className="text-[color:var(--aqua-400)]">
                {heroContent.eyebrow}
              </TechnicalLabel>
              <h1 className="text-display text-white">
                A quieter{" "}
                <span className="text-gradient-aqua">revolution</span> in pool
                water.
              </h1>
              <p className="text-body-large max-w-lg text-white/85">
                {heroContent.subhead}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  size="lg"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href={siteConfig.ctas.assessment.href} />}
                >
                  {siteConfig.ctas.assessment.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
                <Button
                  size="lg"
                  variant="partner"
                  className="rounded-[var(--radius-control)] border-white/40 bg-white/15 text-white hover:bg-white hover:text-[color:var(--teal-900)]"
                  render={<Link href={siteConfig.ctas.distributor.href} />}
                >
                  {siteConfig.ctas.distributor.label}
                </Button>
              </div>
              <p className="text-small text-white/60">
                <Link
                  href={siteConfig.ctas.technology.href}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {siteConfig.ctas.technology.label}
                </Link>
                <span className="mx-2" aria-hidden>
                  ·
                </span>
                Estates · Hospitality · Commercial
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============================ VALUE PILLARS ============================ */}
      <Section id="value" spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Why Zinc'd"
            title="Ecological mineral ionization, engineered end to end"
            description="A modern approach to pool chemistry — designed to reduce chlorine dependency while a residual of free chlorine remains part of responsible, monitored operation."
          />
        </Reveal>
        <Reveal delay={0.05}>
          <FeatureGrid features={valuePillars} className="mt-10" />
        </Reveal>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.ionsWater.src}
        poster={motionGraphics.ionsWater.poster}
        eyebrow="Ecological clarity"
        title="Mineral ions, moving with the water"
        body="Copper, silver and zinc released under control — a quieter chemistry program visualized as living film, not brochure graphics."
      />

      {/* ============================ ECOLOGICAL STORY ============================ */}
      <Section id="ecological" spacing="lg" background="muted" className="relative overflow-hidden">
        <AmbientIons tone="ecological" density="sparse" />
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Reveal variant="left">
            <AudienceChip label="Ecological" variant="ecological" />
            <h2 className="text-h1 mt-4 text-foreground">
              Clearer water with a lighter chemical footprint
            </h2>
            <p className="text-body-large mt-4 max-w-xl text-muted-foreground">
              Zinc&apos;d uses copper, silver and zinc ions — minerals released
              under microcontroller control — so day-to-day chlorine demand can
              drop while sanitizer residual stays in the program. That is the
              quieter revolution: less harsh chemistry, not empty &ldquo;chemical-free&rdquo;
              claims.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Mineral ions help control algae and biofilm in the circulation loop",
                "PWM regulation keeps release precise — not guesswork dosing",
                "Residual free chlorine remains ~1.0 ppm for responsible care",
              ].map((item) => (
                <li key={item} className="text-small flex gap-3 text-foreground">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent-ecological"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="scale" delay={0.1}>
            <ScrollParallax offset={32} className="mx-auto max-w-md">
              <EcoRipple className="h-auto w-full" />
            </ScrollParallax>
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.mineralType.src}
        poster={motionGraphics.mineralType.poster}
        eyebrow="Kinetic story"
        title="Words that move with the system"
        body="Premium motion graphics for the mineral story — calm, cinematic, and built for the scroll without gimmicks."
      />

      {/* ============================ HOW IT WORKS ============================ */}
      <Section id="how-it-works" spacing="lg" background="default" className="relative">
        <AmbientIons density="medium" className="opacity-60" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="How it works"
            title="Through the Zinc'd unit — then clearer water"
            description="Filtration feeds the ionization chamber. Copper, silver and zinc ions enter the circulation loop under PWM control. The result is a quieter chemistry program for people, the environment, and the operators who manage it — with residual free chlorine still in the plan."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <figure className="mt-10 overflow-hidden rounded-[var(--radius)] border border-border bg-surface shadow-[var(--shadow-1)]">
            <Image
              src={productStills.flowDiagram}
              alt="Filtration plant feeding a Zinc'd copper–silver–zinc ionization chamber, then returning treated water to a swimming pool"
              width={1376}
              height={768}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1100px"
              priority={false}
            />
            <figcaption className="border-t border-border px-5 py-4 text-small text-muted-foreground md:px-6">
              Install path: filtration → Zinc&apos;d unit (Cu–Ag–Zn chamber) → pool.
              Inlet and outlet are fixed to the chamber on both sides.
            </figcaption>
          </figure>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <Reveal delay={0.08}>
            <ProcessSteps steps={howItWorksSteps} />
            <StatusNote className="mt-8">
              Zinc&apos;d works alongside your sanitizer program, not instead of it.
              Technical documentation recommends maintaining a residual of free
              chlorine (~1.0 ppm) for responsible operation.
            </StatusNote>
          </Reveal>
          <Reveal delay={0.12} variant="right">
            <div className="space-y-4 rounded-[var(--radius)] border border-border bg-surface-elevated p-6 md:p-7">
              <TechnicalLabel>Who benefits</TechnicalLabel>
              <ul className="space-y-4">
                {[
                  {
                    title: "People in the water",
                    body: "A lower day-to-day chemical load for a calmer swimming experience — still sanitized, not chemical-free.",
                  },
                  {
                    title: "The environment around the basin",
                    body: "Mineral ionization is designed to reduce chlorine dependency, easing the chemical footprint of routine care.",
                  },
                  {
                    title: "Facility & estate operators",
                    body: "PWM control, monitoring cues for anode care, and handbook-sized series make upkeep predictable.",
                  },
                ].map((item) => (
                  <li key={item.title} className="border-t border-border pt-4 first:border-0 first:pt-0">
                    <h3 className="text-h3 text-foreground">{item.title}</h3>
                    <p className="text-small mt-2 text-muted-foreground">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.waterStory.src}
        poster={motionGraphics.waterStory.poster}
        eyebrow="The water story"
        title="Chemicals in — minerals through — clearer out"
        body="A cinematic pass through the Zinc'd chamber: cloudy chemistry gives way to clearer, quieter water for the people who swim and the teams who maintain it."
      />

      <MotionGraphicBand
        src={motionGraphics.chamber.src}
        poster={motionGraphics.chamber.poster}
        eyebrow="Inside the system"
        title="An engineered chamber, illuminated"
        body="Abstract visualization of ionization energy across the stainless cell — the same Cu–Ag–Zn core that sits in the circulation loop."
      />

      {/* ============================ INSTALL LAYOUT ============================ */}
      <Section id="system" spacing="lg" background="default" className="relative">
        <AmbientIons density="medium" className="opacity-50" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Installation clarity"
            title="One unit — or three in parallel with a bypass"
            description="Residential installs use a single Zinc'd chamber on the filtration return. Larger commercial inlets use parallel chambers with a bypass branch — exactly as the plumber handbook specifies."
          />
        </Reveal>
        <Reveal delay={0.06}>
          <figure className="mt-10 overflow-hidden rounded-[var(--radius)] border border-border bg-surface shadow-[var(--shadow-1)]">
            <Image
              src={productStills.manifold}
              alt="Zinc'd multi-unit manifold with three water chambers, orange valves, and a bypass branch"
              width={1400}
              height={1050}
              className="h-auto w-full bg-white object-contain"
              sizes="(max-width: 1200px) 100vw, 1100px"
            />
            <figcaption className="border-t border-border px-5 py-4 text-small text-muted-foreground md:px-6">
              Multi-unit layout for larger inlets: three Zinc&apos;d chambers in
              parallel plus a bypass — inlet above, outlet below.
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {/* ============================ DUAL AUDIENCE ============================ */}
      <Section id="audiences" spacing="lg" background="muted" className="relative">
        <AmbientIons tone="ecological" density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Who this is for"
            title="Principals, operators, and partners"
            description="Whether you are specifying CapEx, running day-to-day chemistry, or building a channel — Zinc'd speaks in documented product language."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {evaluationFramework.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full border-t-2 border-accent-aquatic/50 pt-6">
                <h3 className="text-h3 text-foreground">{item.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ SPECS / CONFIDENCE ============================ */}
      <Section id="specifications" spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                as="h2"
                eyebrow="Technical confidence"
                title="Documented specifications, not marketing figures"
                description="Core specifications from the Zinc'd technical documentation. Values are typical and subject to model."
              />
              <div className="mt-8">
                <SpecTable rows={technicalSpecs} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="lg:pt-16">
              <div className="rounded-[var(--radius)] border border-border bg-surface-elevated p-7">
                <TechnicalLabel>Recommended chemistry</TechnicalLabel>
                <p className="text-small mt-3 text-muted-foreground">
                  A supplied testing kit covers the three metrics that keep the
                  water in range.
                </p>
                <dl className="mt-6 space-y-3">
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
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href="/product" />}
                >
                  See the product range
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href="/technology" />}
                >
                  How the technology works
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============================ PRODUCT SERIES ============================ */}
      <Section id="series" spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Product range"
            title="Series-1 to Series-3 — plus custom multi-unit"
            description="Sizing from the plumber handbook: pipe size and pool volume in litres. The right series is confirmed during a pool assessment."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{series.name}</h3>
                <p className="text-small mt-1 font-medium text-accent-steel">{series.scope}</p>
                <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                  {series.volume}
                  <span className="text-muted-foreground"> · </span>
                  {series.pipe} inlet
                </p>
                <p className="text-small mt-3 text-muted-foreground">{series.body}</p>
                <p className="text-technical mt-4 normal-case tracking-normal text-accent-ecological">
                  {series.audience}
                </p>
                <p className="text-small mt-2 text-muted-foreground">{series.decisionNote}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ APPLICATIONS ============================ */}
      <Section id="applications" spacing="lg" background="default">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Applications"
              title="Built for the water you operate"
              className="max-w-xl"
            />
          </Reveal>
          <Reveal>
            <Link
              href="/applications"
              className="text-small inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              All applications
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {applications.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.05}>
              <Link
                href={`/applications/${app.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface shadow-[var(--shadow-1)] transition-colors hover:border-border-strong"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <ScrollParallax offset={28} className="absolute inset-0">
                    <div className="relative h-[120%] w-full -translate-y-[8%]">
                      <Image
                        src={applicationImages[app.slug] ?? "/img/pool-residential.jpg"}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </ScrollParallax>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <AudienceChip
                      label={app.audience === "commercial" ? "Commercial" : "Residential"}
                      variant={app.audience}
                    />
                    <ArrowUpRight className="size-5 text-accent-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </div>
                  <h3 className="text-h2 mt-5 text-foreground">{app.title}</h3>
                  <p className="text-small mt-1 font-medium text-accent-steel">{app.tagline}</p>
                  <p className="text-body mt-3 text-muted-foreground">{app.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============================ DISTRIBUTOR ============================ */}
      <Section id="partners" spacing="lg" background="muted">
        <Reveal>
          <div className="grid gap-8 rounded-[var(--radius)] border border-border bg-surface p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10">
            <div>
              <AudienceChip label="For partners" variant="partner" />
              <h2 className="text-h1 mt-4 text-foreground">
                Add an engineered category to your line
              </h2>
              <p className="text-body-large mt-3 max-w-2xl text-muted-foreground">
                Distributors, builders and installers can offer a documented
                ionization system that fits existing circulation systems across
                residential and commercial pools.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Documented specifications",
                  "Fits existing circulation",
                  "Minimal routine maintenance",
                  "Residential → commercial reach",
                ].map((item) => (
                  <li key={item} className="text-small flex items-center gap-2 text-foreground">
                    <Check className="size-4 shrink-0 text-accent-ecological" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex md:flex-col md:items-stretch">
              <Button
                size="lg"
                variant="partner"
                className="w-full rounded-[var(--radius-control)]"
                render={<Link href="/distributors" />}
              >
                {siteConfig.ctas.distributor.label}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="mt-3 w-full rounded-[var(--radius-control)]"
                render={<Link href={siteConfig.ctas.distributorContact.href} />}
              >
                {siteConfig.ctas.distributorContact.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ============================ FAQ ============================ */}
      <Section id="faq" spacing="lg" background="default">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="FAQ"
              title="Straight answers, source-backed"
              description="We publish claims only when we can stand behind them with documentation."
            />
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-[var(--radius-control)]"
              render={<Link href="/faq" />}
            >
              All questions
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <FaqList faqs={faqs.slice(0, 5)} />
          </Reveal>
        </div>
      </Section>

      {/* ============================ CTA ============================ */}
      <CtaBand
        eyebrow="Get started"
        title="Start with a pool assessment — or a partner conversation"
        body="Tell us about your pool and circulation system, or explore how Zinc'd fits your distribution line. Both paths are first-class."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
