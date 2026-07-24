import { Suspense } from "react";
import { Building2, Home, Handshake } from "lucide-react";

import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/blocks/page-hero";
import { ContactForm } from "@/components/blocks/contact-form";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a pool assessment, talk to a specialist, or start a distributor conversation with Zinc'd.",
  path: "/contact",
});

const paths = [
  { icon: Home, title: "Homeowners", body: "Request a pool assessment for clearer, lower-chemical water." },
  { icon: Building2, title: "Operators", body: "Talk to a specialist about commercial and hospitality pools." },
  { icon: Handshake, title: "Partners", body: "Explore adding Zinc'd to your distribution or install business." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's talk about{" "}
            <span className="text-gradient-aqua">your water</span>
          </>
        }
        description="Tell us about your pool or partnership interest and we'll get back to you. Choose what you're here for and share a few details."
      />

      <Section spacing="lg" background="default">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28 space-y-4">
              <TechnicalLabel>Who we help</TechnicalLabel>
              {paths.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="flex gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-5"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-border bg-[color:var(--steel-50)] text-accent-aquatic">
                      <Icon strokeWidth={1.5} className="size-5" aria-hidden />
                    </div>
                    <div>
                      <p className="text-body font-medium text-[color:var(--blue-900)]">{p.title}</p>
                      <p className="text-small mt-1 text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Suspense
              fallback={
                <div className="rounded-[var(--radius)] border border-border bg-surface p-8 text-muted-foreground">
                  Loading form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
