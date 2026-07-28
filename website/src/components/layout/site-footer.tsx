import Link from "next/link";

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

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-technical mb-3 text-muted-foreground">{title}</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-small text-foreground/80 underline-offset-4 transition-colors hover:text-foreground hover:underline"
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
    <footer className="relative mt-auto bg-surface">
      {/* Texture only on the handoff; content below sits on solid surface. */}
      <div
        aria-hidden
        className="footer-tide-strip pointer-events-none absolute inset-x-0 top-0 h-24"
      />
      <Container className="relative py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-1">
            <div className="inline-flex">
              <ZincdLogo href="/" className="h-7 sm:h-8" />
            </div>
            <p className="text-small max-w-xs text-muted-foreground">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-small text-accent-steel">
              {siteConfig.contact.statusNote}
            </p>
          </div>
          <FooterLinkList title="Explore" links={footerExploreLinks} />
          <FooterLinkList title="B2B" links={footerB2bLinks} />
          <FooterLinkList title="Residential" links={footerB2cLinks} />
          <FooterLinkList title="Legal" links={footerLegalLinks} />
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-muted-foreground">
            © {year} {siteConfig.brand.name}. All rights reserved. Brand legal
            entity spelling remains pending confirmation.
          </p>
          <p className="text-technical text-accent-ecological">
            Ecological mineral ionization
          </p>
        </div>
      </Container>
    </footer>
  );
}
