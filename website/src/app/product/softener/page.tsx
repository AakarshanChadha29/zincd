import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site-config";
import { softenerPhotos } from "@/content/media";
import {
  softenerFaqs,
  softenerLine,
  softenerSeries,
} from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Catalytic Super Softener — Titan, Titan Pro, Custom",
  description:
    "Companion catalytic conditioner for high-hardness pools. Titan ≤100 LPM, Titan Pro ≤200 LPM, Custom. Designed to help reduce scale formation — not a salt or resin softener.",
  path: "/product/softener",
  keywords: [
    "pool scale conditioner",
    "catalytic pool softener",
    "high hardness pool treatment",
  ],
});

export default function SoftenerPage() {
  return (
    <>
      <FaqJsonLd faqs={softenerFaqs} />
      <PageHero
        eyebrow={softenerLine.eyebrow}
        title={
          <>
            {softenerLine.name}
            <span className="text-gradient-aqua"> — {softenerLine.headline}</span>
          </>
        }
        description={softenerLine.intro}
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "Ionization system", href: "/product", variant: "outline" },
        ]}
        video={{ poster: softenerPhotos.install }}
        waterMotion
      />

      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Range"
            title="Titan, Titan Pro, Custom"
            description="Flow bands from the complete handbook. Final selection is confirmed during assessment."
          />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {softenerSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <article>
                <h3 className="text-h2 text-foreground">{series.name}</h3>
                <p className="text-technical mt-3 normal-case tracking-normal text-accent-aquatic">
                  {series.flow}
                </p>
                <p className="text-body-large mt-4 text-muted-foreground">{series.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <StatusNote className="mt-10 max-w-3xl">
          {softenerLine.hardnessNote} See{" "}
          <Link href="/installation-maintenance" className="underline underline-offset-4">
            Installation &amp; Maintenance
          </Link>{" "}
          for the chemistry panel.
        </StatusNote>
      </Section>

      <section>
        <div className="grid md:grid-cols-2">
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={softenerPhotos.closeup}
              alt="Close view of the Zinc'd Catalytic Super Softener 1.5 on copper plant-room piping"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={softenerPhotos.family}
              alt="Zinc'd ionization system and catalytic conditioner together beside a pool"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="How we talk about it"
            title="Operational, not comparative"
            description={softenerLine.claimsFence}
          />
        </Reveal>
        <div className="mt-10">
          <FaqList faqs={softenerFaqs} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Not sure if you need it"
        title="Start with a hardness reading"
        body="The assessment funnel asks for calcium hardness. If the number is high, we'll talk through a conditioner or a partial drain — not a bigger ionizer."
        primary={siteConfig.ctas.assessment}
        secondary={{ label: "View the ionizer", href: "/product" }}
      />
    </>
  );
}
