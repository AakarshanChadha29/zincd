import Link from "next/link";

import { AudienceChip } from "@/components/ui/audience-chip";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusNote } from "@/components/ui/status-note";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Zinc'd | Pool Water Technology",
  description: siteConfig.brand.description,
  path: "/",
});

const storyboardSections = [
  "Core product value",
  "How the technology works",
  "Product / component visualization",
  "Application sectors",
  "Technical confidence / specifications",
  "Installation and maintenance",
  "Wholesale / distributor opportunity",
  "FAQ preview",
  "Conversion / contact",
] as const;

export default function HomePage() {
  return (
    <>
      <Section
        id="hero"
        spacing="lg"
        background="surface"
        className="border-b border-border"
      >
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
            <div className="space-y-6">
              <TechnicalLabel>Homepage foundation</TechnicalLabel>
              <h1 className="text-display max-w-xl text-[color:var(--blue-900)]">
                {siteConfig.brand.name}
              </h1>
              <p className="text-body-large max-w-xl text-muted-foreground">
                Temporary hero shell for architecture and visual rhythm. Final
                positioning copy, product imagery, and conversion design land in
                a later phase—without unsupported claims.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  size="lg"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href={siteConfig.ctas.assessment.href} />}
                >
                  {siteConfig.ctas.assessment.label}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href={siteConfig.ctas.distributor.href} />}
                >
                  {siteConfig.ctas.distributor.label}
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-[var(--radius-control)]"
                  render={<Link href={siteConfig.ctas.technology.href} />}
                >
                  {siteConfig.ctas.technology.label}
                </Button>
              </div>
            </div>
            <GlassPanel className="space-y-4">
              <TechnicalLabel>Shell status</TechnicalLabel>
              <p className="text-body text-muted-foreground">
                This homepage confirms navigation, tokens, CTA hierarchy, and
                section order. It is not the finished public design.
              </p>
              <StatusNote>
                No product performance claims, certifications, savings figures,
                testimonials, or 3D scenes are rendered in this phase.
              </StatusNote>
            </GlassPanel>
          </div>
        </Reveal>
      </Section>

      <Section id="audience-routing" spacing="md" background="muted">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Audience routing"
            title="Choose your path"
            description="Temporary dual-path shell separating wholesale partners from residential assessment seekers—without splitting the site."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Link
              href="/distributors"
              className="rounded-[var(--radius-panel)] border border-border bg-surface p-6 shadow-[var(--shadow-1)] transition-colors hover:border-border-strong focus-visible:outline-none"
            >
              <AudienceChip label="B2B / Partner" variant="partner" />
              <h3 className="text-h3 mt-4">Wholesale & partners</h3>
              <p className="text-small mt-2 text-muted-foreground">
                Distributors, builders, installers, and commercial operators.
              </p>
            </Link>
            <Link
              href="/applications/residential"
              className="rounded-[var(--radius-panel)] border border-border bg-surface p-6 shadow-[var(--shadow-1)] transition-colors hover:border-border-strong focus-visible:outline-none"
            >
              <AudienceChip label="B2C / Residential" variant="residential" />
              <h3 className="text-h3 mt-4">Home & residential</h3>
              <p className="text-small mt-2 text-muted-foreground">
                Homeowners seeking clearer guidance and a pool assessment path.
              </p>
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section id="storyboard" spacing="md" background="default">
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Storyboard placeholders"
            title="Remaining homepage sections"
            description="Labels match the approved Phase 2 storyboard order. Content and motion storytelling are intentionally deferred."
          />
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {storyboardSections.map((label, index) => (
              <li
                key={label}
                className="rounded-[var(--radius-panel)] border border-border bg-surface px-4 py-4"
              >
                <p className="text-technical text-muted-foreground">
                  Section {String(index + 4).padStart(2, "0")}
                </p>
                <p className="text-small mt-2 font-medium text-foreground">
                  {label}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>
    </>
  );
}
