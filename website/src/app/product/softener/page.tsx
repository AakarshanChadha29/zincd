import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
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
            <span className="block">{softenerLine.headline}</span>
          </>
        }
        description={softenerLine.intro}
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "Ionization system", href: "/product", variant: "outline" },
        ]}
        video={{ poster: softenerPhotos.hero }}
        mediaPosition="68% center"
      />

      <Section spacing="lg" background="deep" className="relative overflow-hidden">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Range"
            title="Titan, Titan Pro, Custom"
            description="Flow bands from the complete handbook. Final selection is confirmed during assessment."
            className="[&_*]:text-white [&_p]:text-white/70"
          />
        </Reveal>
        <div className="mt-14 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3 md:gap-14">
          {softenerSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <article>
                <p className="font-heading text-[clamp(3rem,6vw,5rem)] font-semibold leading-none text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-h2 mt-5 text-white">{series.name}</h3>
                <p className="text-technical mt-3 normal-case tracking-normal text-[color:var(--aqua-400)]">
                  {series.flow}
                </p>
                <p className="text-body-large mt-4 text-white/70">{series.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <StatusNote className="mt-12 max-w-3xl border-white/20 bg-white/10 text-white/80">
          {softenerLine.hardnessNote} See{" "}
          <Link href="/installation-maintenance" className="text-white underline underline-offset-4">
            Installation &amp; Maintenance
          </Link>{" "}
          for the chemistry panel.
        </StatusNote>
      </Section>

      <section className="relative min-h-[38rem] overflow-hidden">
        <Image
          src={softenerPhotos.loop}
          alt="Zinc'd Catalytic Super Softener installed with its filter, gauges and copper flow path"
          fill
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--teal-900)]/92 via-[color:var(--teal-900)]/52 to-transparent"
        />
        <Container className="relative flex min-h-[38rem] items-center py-20">
          <Reveal>
            <div className="max-w-lg">
              <p className="text-technical text-[color:var(--aqua-400)]">
                One treatment line
              </p>
              <h2 className="text-h1 mt-5 text-white">
                The softener is the story here.
              </h2>
              <p className="text-body-large mt-5 text-white/80">
                Filter housing, copper bypass, pressure gauge, flow meter and
                catalytic chamber are shown as one installed path—without
                borrowing imagery from the ionization system.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section spacing="lg" background="default">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <Reveal>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)]">
              <Image
                src={softenerPhotos.macro}
                alt="Close view of the Zinc'd Catalytic Super Softener, flow meter and pressure gauge"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              as="h2"
              eyebrow="How we talk about it"
              title="Operational, not comparative"
              description={softenerLine.claimsFence}
            />
          </Reveal>
        </div>
      </Section>

      <Section spacing="lg" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Questions"
            title="What the conditioner is—and is not"
          />
        </Reveal>
        <div className="mt-10">
          <FaqList faqs={softenerFaqs} className="shadow-none" />
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
