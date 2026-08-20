import Link from "next/link";
import Image from "next/image";

import { ZincdLogo } from "@/components/brand/zincd-logo";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import {
  footerB2bLinks,
  footerB2cLinks,
  footerExploreLinks,
  footerLegalLinks,
  siteConfig,
} from "@/content/site-config";
import { clientStills } from "@/content/media";

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-technical mb-3 text-[color:var(--aqua-400)]">
        {title}
      </h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-small text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-[color:var(--teal-900)]">
      <Image
        src={clientStills.poolCausticsWide}
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-40"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgb(10_61_66/0.72)_0%,rgb(10_61_66/0.88)_55%,rgb(10_61_66/0.94)_100%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30" />
      <Container className="relative py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-1">
            <div className="inline-flex">
              <ZincdLogo href="/" />
            </div>
            <p className="text-small max-w-xs text-white/70">
              {siteConfig.brand.tagline}
            </p>
            <div className="text-small space-y-1">
              <a
                href={siteConfig.contact.emailHref}
                className="block text-white/75 underline-offset-4 hover:text-white hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className="block text-white/75 underline-offset-4 hover:text-white hover:underline"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
          <FooterLinkList title="Explore" links={footerExploreLinks} />
          <FooterLinkList title="B2B" links={footerB2bLinks} />
          <FooterLinkList title="Residential" links={footerB2cLinks} />
          <FooterLinkList title="Legal" links={footerLegalLinks} />
        </div>
        <Separator className="my-8 bg-white/15" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-white/60">
            © {year} {siteConfig.brand.name}. All rights reserved. Brand legal
            entity spelling remains pending confirmation.
          </p>
          <p className="text-technical text-[color:var(--aqua-400)]">
            Ecological mineral ionization
          </p>
        </div>
      </Container>
    </footer>
  );
}
