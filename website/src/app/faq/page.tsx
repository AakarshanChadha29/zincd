import Image from "next/image";

import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { FaqList } from "@/components/blocks/faq-list";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/content/site-config";
import { faqs, chlorineResidualNote } from "@/content/product-data";
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
        description="We publish claims only when we can stand behind them with documentation."
        actions={[
          { label: siteConfig.ctas.calculator.label, href: siteConfig.ctas.calculator.href },
          { label: siteConfig.ctas.assessment.label, href: siteConfig.ctas.assessment.href, variant: "outline" },
        ]}
        video={faqHeroClip}
      />

      <Section spacing="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-6">
              <TechnicalLabel>Common questions</TechnicalLabel>
              <h2 className="text-h1 text-foreground">
                What we can answer today
              </h2>
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
                  {chlorineResidualNote}
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
        src={motionGraphics.waterIons.src}
        poster={motionGraphics.waterIons.poster}
        eyebrow="Still unsure?"
        title="Ask about your pool, not a brochure"
        body="Every system is matched to volume and circulation. If the FAQ doesn't cover your case, talk to a specialist — or open a partner conversation."
      />

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
