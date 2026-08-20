import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Handshake,
  Home,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { AmbientIons } from "@/components/motion/ambient-ions";
import { PageHero } from "@/components/blocks/page-hero";
import { ContactForm } from "@/components/blocks/contact-form";
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
    href: "/assess",
    cta: "Start assessment",
  },
  {
    icon: Building2,
    title: "Operators & facilities",
    body: "Talk through commercial or hospitality pools with a specialist who knows the chemistry honesty rules.",
    href: "/contact?intent=specialist#form",
    cta: "Talk to a specialist",
  },
  {
    icon: Handshake,
    title: "Distributors & partners",
    body: "Explore carrying Zinc'd — high-ticket add-on for the customers you already service or supply.",
    href: "/apply",
    cta: "Apply as a distributor",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about
            <span className="block">your water.</span>
          </>
        }
        description="Whether you want a pool assessment, a specialist conversation, or a distributor path — choose your intent and share a few details. We'll get back to you."
        actions={[
          { label: "Request an assessment", href: "/assess" },
          {
            label: siteConfig.ctas.distributor.label,
            href: "/apply",
            variant: "partner",
          },
        ]}
        video={contactHeroClip}
      />

      <Section spacing="lg" background="default" className="relative overflow-hidden">
        <AmbientIons density="sparse" />
        <div className="grid gap-12 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <Reveal>
            <SectionHeading
              as="h2"
              eyebrow="Choose your path"
              title="One conversation. The right person."
              description="Choose the route that best matches what you need today."
            />
          </Reveal>
          <div className="border-t border-border-strong">
            {paths.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.05}>
                  <Link
                    href={p.href}
                    className="group grid gap-4 border-b border-border-strong py-7 transition-colors hover:bg-surface-elevated sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:px-4"
                  >
                    <Icon
                      className="size-6 text-accent-aquatic"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <div>
                      <h3 className="text-h3 text-foreground">{p.title}</h3>
                      <p className="text-body mt-2 max-w-xl text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-small font-semibold text-foreground">
                      {p.cta}
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section spacing="lg" background="deep" id="form" className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <Reveal>
            <div className="relative space-y-6 lg:sticky lg:top-28">
              <TechnicalLabel className="text-[color:var(--aqua-400)]">
                What happens next
              </TechnicalLabel>
              <h2 className="text-h1 text-white">
                A short form. A real follow-up.
              </h2>
              <p className="text-body-large text-white/70">
                The form routes your enquiry to the right person. Prefer email
                or a call? Both lines below are monitored.
              </p>
              <div className="divide-y divide-white/15 border-y border-white/15">
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-center gap-3 py-4 text-white transition-colors hover:text-[color:var(--aqua-400)]"
                >
                  <Mail className="size-4.5 shrink-0" strokeWidth={1.5} aria-hidden />
                  <span>
                    <span className="text-technical block text-[color:var(--aqua-400)]">Email</span>
                    <span className="text-small block">
                      {siteConfig.contact.email}
                    </span>
                  </span>
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 py-4 text-white transition-colors hover:text-[color:var(--aqua-400)]"
                >
                  <Phone className="size-4.5 shrink-0" strokeWidth={1.5} aria-hidden />
                  <span>
                    <span className="text-technical block text-[color:var(--aqua-400)]">Phone</span>
                    <span className="text-small block">
                      {siteConfig.contact.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={siteConfig.contact.addressHref}
                  className="flex items-start gap-3 py-4 text-white transition-colors hover:text-[color:var(--aqua-400)]"
                >
                  <MapPin className="mt-0.5 size-4.5 shrink-0" strokeWidth={1.5} aria-hidden />
                  <span>
                    <span className="text-technical block text-[color:var(--aqua-400)]">Mailing address</span>
                    <span className="text-small block">
                      {siteConfig.contact.address}
                    </span>
                  </span>
                </a>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
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
            <div className="relative rounded-[var(--radius)] border border-white/20 bg-surface-elevated p-1 shadow-[var(--shadow-2)]">
              <div className="rounded-[calc(var(--radius)-2px)] border border-border bg-surface">
                <div className="border-b border-border px-6 py-5 md:px-8">
                  <TechnicalLabel className="text-accent-aquatic">
                    Enquiry form
                  </TechnicalLabel>
                  <h2 className="text-h3 mt-2 text-foreground">
                    Tell us what you need
                  </h2>
                  <p className="text-small mt-2 text-muted-foreground">
                    Your chosen route is carried into this form, so you only
                    need to share the details that help us respond.
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
