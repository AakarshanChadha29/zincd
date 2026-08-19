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
  title: "Pool Size Calculator — What Size Ionizer Do I Need?",
  description:
    "Free pool volume calculator in US gallons. Enter your pool's length, width, and average depth to see which Zinc'd copper–silver–zinc ionizer fits — Series-01 through Series-04.",
  path: "/calculator",
  keywords: [
    "pool volume calculator gallons",
    "how many gallons is my pool",
    "what size pool ionizer do I need",
    "swimming pool size calculator",
    "pool ionizer sizing chart",
    "copper silver zinc ionizer size",
    "commercial pool ionizer sizing",
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
        src={motionGraphics.waterStory.src}
        poster={motionGraphics.waterStory.poster}
        eyebrow="How sizing works"
        title="Volume and pipe size decide the series"
        body="Two numbers drive the match: how much water your pool holds, and the size of your circulation line. The bands below come straight from the installer handbook — we confirm both against your equipment pad before anything ships."
        tone="soft"
      />

      <Section spacing="lg" background="muted">
        <SectionHeading
          as="h2"
          eyebrow="Series range"
          title="What each series covers"
          description="From a standard backyard pool through resort and municipal water. Your calculator result points to one of these four — Series-03 and Series-04 are customized, indicative models. A specialist confirms circulation before install."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {productSeries.map((series, i) => (
            <Reveal key={series.name} delay={i * 0.05}>
              <article className="h-full rounded-[var(--radius)] border border-border bg-surface p-6 shadow-[var(--shadow-1)]">
                <TechnicalLabel className="text-accent-aquatic">
                  {series.name}
                </TechnicalLabel>
                <p className="text-h3 mt-3 text-foreground">{series.volume}</p>
                <p className="text-small mt-0.5 tabular-nums text-accent-steel">
                  {series.volumeMetric}
                  {series.customized ? " · customized, indicative" : ""}
                </p>
                <p className="text-small mt-2 text-accent-steel">
                  {series.scope} · {series.power}
                </p>
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
        body="Send us your result and we'll verify it against your actual circulation system — volume, pipe size, and flow rate — before anything is dispatched."
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
