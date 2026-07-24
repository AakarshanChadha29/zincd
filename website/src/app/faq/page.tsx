import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { siteConfig } from "@/content/site-config";
import { faqs } from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Straight, source-backed answers about Zinc'd copper–silver–zinc ionization, maintenance, chemistry and pool sizing.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Straight answers,{" "}
            <span className="text-gradient-aqua">source-backed</span>
          </>
        }
        description="We publish claims only when we can stand behind them with documentation. Here's what we can say clearly today."
        actions={[
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href },
          { label: "Explore the technology", href: "/technology", variant: "outline" },
        ]}
      />

      <Section spacing="lg" background="default" containerWidth="narrow">
        <Reveal>
          <FaqList faqs={faqs} />
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Still have questions?"
        title="Talk to a pool specialist"
        body="Ask about your specific pool, chemistry program or installation. We'll give you a clear, documented answer."
        primary={siteConfig.ctas.specialist}
        secondary={siteConfig.ctas.assessment}
      />
    </>
  );
}
