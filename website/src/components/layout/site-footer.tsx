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
      <h2 className="text-technical mb-3 !text-white/70">{title}</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-small text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
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
    <footer className="mt-auto border-t border-border bg-surface-elevated text-white">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1 space-y-4">
            <div className="inline-flex">
              <ZincdLogo href="/" className="h-7 sm:h-8" />
            </div>
            <p className="text-small text-white/80 max-w-xs">
              {siteConfig.brand.tagline}
            </p>
            <p className="text-small text-white/60">
              {siteConfig.contact.statusNote}
            </p>
          </div>
          <FooterLinkList title="Explore" links={footerExploreLinks} />
          <FooterLinkList title="B2B" links={footerB2bLinks} />
          <FooterLinkList title="Residential" links={footerB2cLinks} />
          <FooterLinkList title="Legal" links={footerLegalLinks} />
        </div>
        <Separator className="my-8 bg-[color:var(--surface-elevated)]/15" />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small text-white/60">
            © {year} {siteConfig.brand.name}. All rights reserved. Brand legal
            entity spelling remains pending confirmation.
          </p>
          <p className="text-technical text-white/45">
            Controlled Aquatic Engineering
          </p>
        </div>
      </Container>
    </footer>
  );
}
