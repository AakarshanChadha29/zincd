import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ProcessSteps } from "@/components/blocks/process-steps";
import { CtaBand } from "@/components/blocks/cta-band";
import { Button } from "@/components/ui/button";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { siteConfig } from "@/content/site-config";
import { applications, applicationDetails } from "@/content/product-data";
import { applicationImages, applicationsHeroClip } from "@/content/media";

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
  const image = applicationImages[slug] ?? "/img/pool-residential.jpg";

  return (
    <>
      <PageHero
        eyebrow={`Applications · ${detail.audienceLabel}`}
        title={
          <>
            {app.title}
            <span className="mt-2 block text-gradient-aqua text-h2 font-semibold tracking-tight">
              {app.tagline}
            </span>
          </>
        }
        description={detail.intro}
        actions={[
          { label: detail.cta.label, href: detail.cta.href },
          {
            label: siteConfig.ctas.distributor.label,
            href: siteConfig.ctas.distributor.href,
            variant: "partner",
          },
        ]}
        video={applicationsHeroClip}
      />

      <Section spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <AudienceChip label={detail.audienceLabel} variant={detail.audience} />
              <SectionHeading
                as="h2"
                title="What matters in this environment"
                description="Priorities that shape how Zinc'd is specified — for ownership, operators, and the teams who take the facility forward."
                className="mt-5"
              />
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[var(--radius)] border border-border shadow-[var(--shadow-1)]">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} variant="right">
            <ProcessSteps steps={detail.priorities} numbered={false} />
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted" className="relative">
        <AmbientIons tone="ecological" density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="For decision-makers"
            title="How principals and operators evaluate the fit"
            description="Language that lands with both seasoned ownership and the next generation taking operational responsibility."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {detail.operatorNotes.map((note, i) => (
            <Reveal key={note.title} delay={i * 0.06}>
              <div className="h-full border-l-2 border-accent-aquatic/40 pl-5">
                <TechnicalLabel>{note.title}</TechnicalLabel>
                <p className="text-body mt-3 text-muted-foreground">{note.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          {/* The label captions the list, so it sits outside the <ul>. As a
              direct child it made a <div> a list item, which breaks the list
              semantics screen readers rely on to announce item counts. */}
          <div className="mt-12 rounded-[var(--radius)] border border-border bg-surface p-7 md:p-8">
            <TechnicalLabel>Decision checkpoints</TechnicalLabel>
            <ul className="mt-4 space-y-3">
              {detail.decisionPoints.map((point) => (
                <li key={point} className="text-small flex gap-3 text-foreground">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent-ecological"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section spacing="lg" background="default">
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
                <span className="text-body font-medium text-foreground">
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
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            size="lg"
            className="rounded-[var(--radius-control)]"
            render={<Link href={detail.cta.href} />}
          >
            {detail.cta.label}
            <ArrowRight className="size-4" aria-hidden />
          </Button>
          <Button
            size="lg"
            variant="partner"
            className="rounded-[var(--radius-control)]"
            render={<Link href={siteConfig.ctas.distributor.href} />}
          >
            {siteConfig.ctas.distributor.label}
          </Button>
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Confirm the right system for your water"
        body="A pool assessment matches circulation and volume to the correct Zinc'd series — whether you are specifying for an estate, a resort amenity, or a commercial basin."
        primary={{ label: detail.cta.label, href: detail.cta.href }}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
