import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { CtaBand } from "@/components/blocks/cta-band";
import { SeriesRange } from "@/components/blocks/series-range";
import { PoolSeriesCalculator } from "@/components/calculator/pool-series-calculator";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Size Calculator — What Size Ionizer Do I Need?",
  description:
    "Free pool volume calculator in US gallons. Enter your pool's length, width, and average depth to see which Zinc'd copper–silver–zinc ionizer fits — Series 1 through Series 4.",
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
      <section className="relative overflow-hidden bg-[color:var(--teal-900)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 pool-caustics pool-caustics-motion mix-blend-screen opacity-40"
        />
        <div aria-hidden className="absolute inset-0 hero-aura opacity-50" />
        <AmbientIons tone="aquatic" density="sparse" className="opacity-40" />
        <Container className="relative py-14 md:py-20">
          <Reveal>
            <PoolSeriesCalculator tone="deep" />
          </Reveal>
        </Container>
      </section>

      <Section spacing="lg" background="default">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <SectionHeading
            as="h2"
            eyebrow="How sizing works"
            title="Two numbers decide the series."
            description="The calculator estimates volume. Final selection also checks the circulation line before anything ships."
          />
          <div className="grid gap-10 border-t border-border-strong pt-8 sm:grid-cols-2">
            <div>
              <p className="font-heading text-[clamp(3rem,6vw,5rem)] font-semibold leading-none text-[color:var(--teal-700)]">
                01
              </p>
              <h3 className="text-h2 mt-5">Pool volume</h3>
              <p className="text-body-large mt-3 text-muted-foreground">
                Length, width and average depth produce the capacity used for
                the initial match.
              </p>
            </div>
            <div>
              <p className="font-heading text-[clamp(3rem,6vw,5rem)] font-semibold leading-none text-[color:var(--teal-700)]">
                02
              </p>
              <h3 className="text-h2 mt-5">Circulation line</h3>
              <p className="text-body-large mt-3 text-muted-foreground">
                Pipe size and operating flow confirm that the selected chamber
                belongs in the loop.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="lg" background="muted">
        <SectionHeading
          as="h2"
          eyebrow="Series range"
          title="What each series covers"
          description="From a standard backyard pool through resort and municipal water. Series 3 and Series 4 are customized, indicative models — a specialist confirms circulation before install."
        />
        <SeriesRange />
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
