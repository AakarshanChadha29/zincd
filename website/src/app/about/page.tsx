import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusNote } from "@/components/ui/status-note";
import { AudienceChip } from "@/components/ui/audience-chip";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { siteConfig } from "@/content/site-config";
import { evaluationFramework } from "@/content/product-data";
import { aboutHeroClip, motionGraphics } from "@/content/media";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About — Mineral Pool Ionization for US Pools",
  description:
    "Zinc'd is a US pool water-treatment brand built around engineered copper–silver–zinc ionization — publishing only what it can document for estates, hospitality and commercial operators.",
  path: "/about",
  keywords: ["Zinc'd company", "pool ionization brand", "ecological pool technology"],
});

const principles = [
  {
    title: "Engineered, not embellished",
    body: "We describe the product by what it is: a stainless copper–silver–zinc cell, PWM control and monitoring. Documented specifications lead; marketing follows.",
  },
  {
    title: "Honest about chemistry",
    body: "Ionization reduces chlorine dependency, but a residual of free chlorine stays part of responsible operation. We say so plainly, everywhere — for boards, guests, and the next generation of operators.",
  },
  {
    title: "Claims we can back",
    body: "Regulatory, performance and testing claims are published only when supported by documentation and review — not before. Trust is the brand.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A pool technology brand that{" "}
            <span className="text-gradient-aqua">shows its work</span>
          </>
        }
        description="Zinc'd is a US pool water-treatment brand focused on ecological mineral ionization for residential estates and commercial aquatic facilities — with a deliberate commitment to publishing only what it can stand behind."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          {
            label: siteConfig.ctas.distributor.label,
            href: siteConfig.ctas.distributor.href,
            variant: "partner",
          },
        ]}
        video={aboutHeroClip}
      />

      <MotionGraphicBand
        src={motionGraphics.chamberOrbit.src}
        poster={motionGraphics.chamberOrbit.poster}
        eyebrow="Living hardware"
        title="The chamber as a designed object"
        body="Earlier motion study of the ionization chamber — kept on About so every route carries a distinct film, not a repeat of Home or Technology."
      />

      <Section spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="How we operate"
            title="Principles we hold ourselves to"
            description="The posture behind every page: clarity for principals specifying CapEx, and clarity for operators who live with the water daily."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-7">
                <div className="text-technical text-accent-aquatic">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-h3 mt-3 text-foreground">{p.title}</h3>
                <p className="text-body mt-2 text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="lg" background="muted" className="relative">
        <AmbientIons tone="ecological" density="sparse" />
        <Reveal>
          <AudienceChip label="Dual audience" variant="partner" />
          <SectionHeading
            as="h2"
            title="Built for ownership and the next generation"
            description="Seasoned operators and younger leadership taking over facilities both need the same thing: a product story that is technical, calm, and claims-safe."
            className="mt-5"
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {evaluationFramework.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full border-l-2 border-accent-ecological/40 pl-5">
                <h3 className="text-h3 text-foreground">{item.title}</h3>
                <p className="text-body mt-3 text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section spacing="lg" background="default" containerWidth="narrow">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Company"
            title="Independent, US-based"
            description="Zinc'd is positioned as an independent US company and brand. Reach us at info@zincd.net or +1 (206) 690-4001; the full company narrative and legal entity details are being confirmed and will be published here."
          />
          <StatusNote className="mt-8">
            {siteConfig.contact.entityNote} The company&apos;s legal entity name and
            brand spelling are being finalized; you&apos;ll find confirmed details on
            this page and in the{" "}
            <a href="/legal" className="underline underline-offset-4">
              Legal Center
            </a>
            .
          </StatusNote>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Work with us"
        title="Start a conversation — assessment or partnership"
        body="Whether you are specifying for an estate, a hospitality amenity, or a distribution line, both paths are first-class."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
        highlightSecondary
      />
    </>
  );
}
