import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { CtaBand } from "@/components/blocks/cta-band";
import { MotionGraphicBand } from "@/components/media/motion-graphic-band";
import { PoolSeriesCalculator } from "@/components/calculator/pool-series-calculator";
import { siteConfig } from "@/content/site-config";
import { motionGraphics } from "@/content/media";
import { productSeries } from "@/content/product-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Series Calculator — Zinc'd",
  description:
    "Estimate your swimming pool volume and see which Zinc'd series — Series-1, Series-2, Series-3, or custom multi-unit — matches your water. Confirm sizing during a pool assessment.",
  path: "/calculator",
  keywords: [
    "Zinc'd pool calculator",
    "pool series sizing",
    "swimming pool volume calculator",
    "pool ionizer size",
    "Series-1 Series-2 Series-3",
  ],
});

export default function CalculatorPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
        <div aria-hidden className="absolute inset-0 hero-aura" />
        <AmbientIons tone="aquatic" density="sparse" className="opacity-50" />
        <Container className="relative py-14 md:py-20">
          <Reveal>
            <PoolSeriesCalculator />
          </Reveal>
        </Container>
      </section>

      <MotionGraphicBand
        src={motionGraphics.ionsWater.src}
        poster={motionGraphics.ionsWater.poster}
        eyebrow="Handbook sizing"
        title="Volume and pipe size decide the series"
        body="The calculator follows installer handbook bands — from residential Series-1 through commercial multi-unit. Final selection is confirmed against your circulation system during assessment."
        tone="soft"
      />

      <Section spacing="lg" background="muted">
        <SectionHeading
          as="h2"
          eyebrow="Series range"
          title="What each recommendation means"
          description="Use the calculator for a first match, then confirm pipe size and duty cycle with a specialist before install."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <article className="h-full rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
                <TechnicalLabel className="text-accent-aquatic">
                  {series.name}
                </TechnicalLabel>
                <p className="text-h3 mt-3 text-foreground">{series.volume}</p>
                <p className="text-small mt-1 text-accent-steel">{series.scope}</p>
                <p className="text-body mt-4 text-muted-foreground">
                  {series.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Next step"
        title="Confirm the series for your pool"
        body="Share your calculator result in a pool assessment. We match volume, pipe size, and circulation before dispatch."
        primary={{
          label: siteConfig.ctas.assessment.label,
          href: siteConfig.ctas.assessment.href,
        }}
        secondary={{
          label: "View the product",
          href: "/product",
        }}
      />
    </>
  );
}
