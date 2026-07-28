import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site-config";
import { faqs } from "@/content/product-data";
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
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          {
            label: siteConfig.ctas.distributor.label,
            href: siteConfig.ctas.distributor.href,
            variant: "partner",
          },
        ]}
      />

      <Section spacing="lg" background="default" containerWidth="narrow">
        <Reveal>
          {/* The accordion emits <h3> per question. Without an <h2> above it
              the document jumps h1 → h3, which fails heading order. */}
          <h2 className="text-h1 text-foreground">Common questions</h2>
          <p className="text-body-large mt-3 text-muted-foreground">
            What we can answer today, and what is still awaiting documentation.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8">
            <FaqList faqs={faqs} />
          </div>
        </Reveal>
      </Section>

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
