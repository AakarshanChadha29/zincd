import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusNote } from "@/components/ui/status-note";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Zinc'd",
  description:
    "Zinc'd is a US pool water-treatment technology brand built around engineered copper–silver–zinc ionization — with a commitment to publishing only what it can document.",
  path: "/about",
});

const principles = [
  {
    title: "Engineered, not embellished",
    body: "We describe the product by what it is: a stainless copper–silver–zinc cell, PWM control and monitoring. Documented specifications lead; marketing follows.",
  },
  {
    title: "Honest about chemistry",
    body: "Ionization reduces chlorine dependency, but a residual of free chlorine stays part of responsible operation. We say so plainly, everywhere.",
  },
  {
    title: "Claims we can back",
    body: "Regulatory, performance and testing claims are published only when supported by documentation and review — not before.",
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
        description="Zinc'd is a US pool water-treatment technology brand focused on engineered ionization systems for residential and commercial pools — with a deliberate commitment to publishing only what it can stand behind."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "Explore the technology", href: "/technology", variant: "outline" },
        ]}
      />

      <Section spacing="lg" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="How we operate"
            title="Principles we hold ourselves to"
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

      <Section spacing="lg" background="muted" containerWidth="narrow">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Company"
            title="Independent, US-based"
            description="Zinc'd is positioned as an independent US company and brand. Full company narrative, legal entity details and official contact identity are being confirmed and will be published here."
          />
          <StatusNote className="mt-8">
            {siteConfig.contact.statusNote} The company's legal entity name and
            brand spelling are being finalized; you'll find confirmed details on
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
        title="Start a conversation"
        body="Whether you're a homeowner exploring options or a partner considering the line, we're glad to talk."
        primary={siteConfig.ctas.assessment}
        secondary={siteConfig.ctas.distributor}
      />
    </>
  );
}
