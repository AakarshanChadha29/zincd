import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock3,
  Handshake,
  Home,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ContactForm } from "@/components/blocks/contact-form";
import { Button } from "@/components/ui/button";
import { contactHeroClip, lifestyleStills } from "@/content/media";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a pool assessment, talk to a specialist, or start a distributor conversation with Zinc'd.",
  path: "/contact",
});

const paths = [
  {
    icon: Home,
    title: "Homeowners & estates",
    body: "Request a pool assessment — volume, pipe size, and circulation so we can match the right series.",
    href: "/contact?intent=assessment",
    cta: "Start assessment",
  },
  {
    icon: Building2,
    title: "Operators & facilities",
    body: "Talk through commercial or hospitality pools with a specialist who knows the chemistry honesty rules.",
    href: "/contact?intent=specialist",
    cta: "Talk to a specialist",
  },
  {
    icon: Handshake,
    title: "Distributors & partners",
    body: "Explore carrying Zinc'd — high-ticket add-on for the customers you already service or supply.",
    href: "/contact?intent=partner",
    cta: "Partner conversation",
  },
];

const nextSteps = [
  {
    icon: MessageSquareText,
    title: "You tell us the intent",
    body: "Assessment, specialist question, or partner interest — pick one so the right conversation starts.",
  },
  {
    icon: Clock3,
    title: "We review the details",
    body: "Pool type, volume hints, and your note help us respond with something useful — not a generic brochure.",
  },
  {
    icon: ShieldCheck,
    title: "We reply with clarity",
    body: "Claims-safe guidance, series fit, or a partner follow-up. Official phone/email publish once confirmed.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about{" "}
            <span className="text-gradient-aqua">your water</span>
          </>
        }
        description="Whether you want a pool assessment, a specialist conversation, or a distributor path — choose your intent and share a few details. We'll get back to you."
        actions={[
          { label: "Request an assessment", href: "/contact?intent=assessment" },
          {
            label: siteConfig.ctas.distributor.label,
            href: "/contact?intent=partner",
            variant: "partner",
          },
        ]}
        video={contactHeroClip}
      />

      {/* Path cards */}
      <Section spacing="lg" background="default" className="relative">
        <AmbientIons density="sparse" />
        <Reveal>
          <SectionHeading
            as="h2"
            eyebrow="Choose your path"
            title="Three doors. One form."
            description="Pick the conversation that matches why you're here — the form below will follow."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {paths.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-[var(--radius-panel)] border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                  <div className="flex size-11 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface-elevated text-accent-aquatic">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="text-h3 mt-5 text-foreground">{p.title}</h3>
                  <p className="text-small mt-2 flex-1 text-muted-foreground">
                    {p.body}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-6 w-fit rounded-[var(--radius-control)]"
                    render={<Link href={p.href} />}
                  >
                    {p.cta}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Form + sticky context */}
      <Section spacing="lg" background="muted" id="form">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <Reveal>
            <div className="space-y-6 lg:sticky lg:top-28">
              <TechnicalLabel>What happens next</TechnicalLabel>
              <h2 className="text-h1 text-foreground">
                A short form. A real follow-up.
              </h2>
              <p className="text-body-large text-muted-foreground">
                No public phone or generic inbox yet — contact details publish
                once confirmed. Until then, this form is the front door.
              </p>
              <ol className="space-y-4">
                {nextSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <li
                      key={step.title}
                      className="flex gap-4 rounded-[var(--radius-panel)] border border-border bg-surface p-5"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-border bg-surface-elevated text-accent-aquatic">
                        <Icon className="size-4.5" strokeWidth={1.5} aria-hidden />
                      </div>
                      <div>
                        <p className="text-technical text-accent-aquatic">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className="text-body mt-1 font-medium text-foreground">
                          {step.title}
                        </p>
                        <p className="text-small mt-1 text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)] border border-border">
                <Image
                  src={lifestyleStills.commercialPool}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-[color:var(--teal-900)]/75 via-[color:var(--teal-900)]/20 to-transparent"
                />
                <p className="absolute inset-x-0 bottom-0 p-5 text-small text-white/90">
                  Estates, clubs, hotels, and commercial aquatics — same
                  engineered line, sized to the loop.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[var(--radius)] border border-border-strong bg-surface-elevated p-1 shadow-[var(--shadow-2)]">
              <div className="rounded-[calc(var(--radius)-2px)] border border-border bg-surface">
                <div className="border-b border-border px-6 py-5 md:px-8">
                  <TechnicalLabel className="text-accent-aquatic">
                    Enquiry form
                  </TechnicalLabel>
                  <h2 className="text-h3 mt-2 text-foreground">
                    Tell us what you need
                  </h2>
                  <p className="text-small mt-2 text-muted-foreground">
                    Intent switches with the buttons below — or arrive from a
                    page CTA with the right intent already selected.
                  </p>
                </div>
                <Suspense
                  fallback={
                    <div className="p-8 text-muted-foreground">Loading form…</div>
                  }
                >
                  <div className="p-2 md:p-3">
                    <ContactForm />
                  </div>
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
