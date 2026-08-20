import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site-config";
import { faqs, chlorineResidualNote } from "@/content/product-data";
import { faqHeroClip } from "@/content/media";
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
            Straight answers.
            <span className="block">Source-backed.</span>
          </>
        }
        description="We publish claims only when we can stand behind them with documentation."
        actions={[
          { label: siteConfig.ctas.calculator.label, href: siteConfig.ctas.calculator.href },
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href, variant: "outline" },
        ]}
        video={faqHeroClip}
      />

      <Section spacing="lg" background="deep" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
        <div aria-hidden className="absolute inset-0 hero-aura opacity-40" />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="relative space-y-6 lg:sticky lg:top-28">
              <TechnicalLabel className="text-[color:var(--aqua-400)]">
                Common questions
              </TechnicalLabel>
              <h2 className="text-h1 text-white">
                Clear answers without the sales fog.
              </h2>
              <p className="text-body-large max-w-md text-white/70">
                Start with chemistry, installation and maintenance. If your
                pool falls outside the documented answer, ask a specialist.
              </p>
              <div className="border-l-2 border-[color:var(--aqua-400)] pl-5">
                <p className="text-small max-w-md text-white/75">
                  {chlorineResidualNote}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqList faqs={faqs} className="relative shadow-none" />
          </Reveal>
        </div>
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
