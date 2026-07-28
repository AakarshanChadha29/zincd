import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { applications } from "@/content/product-data";
import { applicationImages, applicationsHeroClip } from "@/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Applications — Residential to Commercial",
  description:
    "Zinc'd ecological mineral ionization across residential estates, hotels & resorts, commercial aquatic facilities, and fitness & wellness environments.",
  path: "/applications",
  keywords: [
    "residential pool ionization",
    "hotel pool water treatment",
    "commercial pool equipment",
    "wellness pool chemistry",
  ],
});

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title={
          <>
            Built for the water{" "}
            <span className="text-gradient-aqua">you operate</span>
          </>
        }
        description="From private estates to hospitality amenities and commercial basins — Zinc'd is sized and specified for the environment it serves. Explore the sector that fits your ownership and operations model."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
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
        <div className="grid gap-4 md:grid-cols-2">
          {applications.map((app, i) => (
            <Reveal key={app.slug} delay={i * 0.05}>
              <Link
                href={`/applications/${app.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface shadow-[var(--shadow-1)] transition-colors hover:border-border-strong"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={applicationImages[app.slug] ?? "/img/pool-residential.jpg"}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <AudienceChip
                      label={app.audience === "commercial" ? "Commercial" : "Residential"}
                      variant={app.audience}
                    />
                    <ArrowUpRight
                      className="size-5 text-accent-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </div>
                  <h2 className="text-h2 mt-5 text-foreground">{app.title}</h2>
                  <p className="text-small mt-1 font-medium text-accent-steel">{app.tagline}</p>
                  <p className="text-body mt-3 text-muted-foreground">{app.body}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Not sure which fits?"
        title="Start with a pool assessment — or a partner conversation"
        body="Tell us about your water and we will point you to the right series and sector guidance. Distributors and builders are welcome on a dedicated path."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
