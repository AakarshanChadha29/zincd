import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Beaker, Droplets, Ruler, Shield } from "lucide-react";

import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { faqs } from "@/content/product-data";
import { faqHeroClip, lifestyleStills, motionGraphics } from "@/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FAQ — Pool Ionization Questions Answered",
  description:
    "Straight, source-backed answers about Zinc'd copper–silver–zinc ionization, maintenance, chemistry, pool sizing, and residual chlorine — for owners and commercial operators.",
  path: "/faq",
  keywords: [
    "pool ionization FAQ",
    "copper silver zinc ionization questions",
    "pool chlorine residual",
  ],
});

const topics = [
  {
    icon: Droplets,
    title: "Chemistry & chlorine",
    body: "Residual free chlorine stays in the plan. Ionization is designed to reduce dependency — not erase sanitizer.",
  },
  {
    icon: Beaker,
    title: "How it works",
    body: "Stainless cell, Cu–Ag–Zn electrodes, microcontroller PWM. Engineered release into the circulation loop.",
  },
  {
    icon: Ruler,
    title: "Sizing & series",
    body: "Series-1 through Series-3 plus custom multi-unit — start with the Pool Series Calculator, then confirm in assessment.",
  },
  {
    icon: Shield,
    title: "Claims we publish",
    body: "Certification and performance claims appear only when documentation is ready. No fog, no filler.",
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Straight answers,{" "}
            <span className="text-gradient-aqua">source-backed</span>
          </>
        }
        description="We publish claims only when we can stand behind them with documentation. Clear answers for principals evaluating CapEx and for operators running the water day to day."
        actions={[
          { label: siteConfig.ctas.calculator.label, href: siteConfig.ctas.calculator.href },
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href, variant: "outline" },
        ]}
        video={faqHeroClip}
      />

      {/* Topic cards */}
      <Section spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Browse by theme"
            title="What people ask before they specify"
            description="Four themes that come up in almost every assessment and partner conversation."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <Reveal key={topic.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                  <div className="flex size-11 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface-elevated text-accent-aquatic">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="text-h3 mt-5 text-foreground">{topic.title}</h3>
                  <p className="text-small mt-2 text-muted-foreground">
                    {topic.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Accordion + aside */}
      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-6">
              <TechnicalLabel>Common questions</TechnicalLabel>
              <h2 className="text-h1 text-foreground">
                What we can answer today
              </h2>
              <p className="text-body-large text-muted-foreground">
                Honest chemistry, sizing, maintenance, and what we will not
                claim until documentation is ready.
              </p>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-border">
                <Image
                  src={lifestyleStills.wellnessPool}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--teal-900)]/70 via-transparent to-transparent"
                />
                <p className="absolute inset-x-0 bottom-0 p-5 text-small text-white/85">
                  Residual free chlorine (~1.0 ppm) remains part of responsible
                  operation — we say so on every major page.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqList faqs={faqs} />
          </Reveal>
        </div>
      </Section>

      <MotionGraphicBand
        src={motionGraphics.ionsWater.src}
        poster={motionGraphics.ionsWater.poster}
        eyebrow="Still unsure?"
        title="Ask about your pool, not a brochure"
        body="Every system is matched to volume and circulation. If the FAQ doesn't cover your case, talk to a specialist — or open a partner conversation."
      />

      <section className="border-b border-border bg-surface">
        <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center md:py-14">
          <Reveal>
            <div>
              <TechnicalLabel>Next step</TechnicalLabel>
              <h2 className="text-h2 mt-3 text-foreground">
                Prefer a human answer?
              </h2>
              <p className="text-body mt-2 max-w-xl text-muted-foreground">
                Share your pool details or partnership interest and we&apos;ll
                come back with a series recommendation and the specifications
                behind it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-[var(--radius-control)]"
                render={<Link href={siteConfig.ctas.specialist.href} />}
              >
                {siteConfig.ctas.specialist.label}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[var(--radius-control)]"
                render={<Link href="/technology" />}
              >
                Explore the technology
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Still have questions?"
        title="Talk to a specialist — or explore partnership"
        body="Ask about your specific pool, chemistry program or installation. Distributors and builders can start a dedicated partner conversation."
        primary={siteConfig.ctas.specialist}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
