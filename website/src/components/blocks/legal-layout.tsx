import type { ReactNode } from "react";
import Link from "next/link";

import { Section } from "@/components/layout/section";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { StatusNote } from "@/components/ui/status-note";
import { Container } from "@/components/layout/container";
import { footerLegalLinks } from "@/content/site-config";

/**
 * Shared layout for legal / policy pages. Final legal wording is subject to
 * review; the status note makes the draft status explicit.
 */
export function LegalLayout({
  eyebrow = "Legal",
  title,
  intro,
  statusNote,
  currentPath,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  statusNote?: string;
  currentPath: string;
  children?: ReactNode;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div aria-hidden className="absolute inset-0 bg-grid" />
        <div aria-hidden className="absolute inset-0 hero-aura" />
        <Container className="relative py-12 md:py-16">
          <TechnicalLabel>{eyebrow}</TechnicalLabel>
          <h1 className="text-h1 mt-4 text-foreground">{title}</h1>
          <p className="text-body-large mt-3 max-w-2xl text-muted-foreground">{intro}</p>
        </Container>
      </section>

      <Section spacing="lg" background="default">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
          {/* Legal index */}
          <nav aria-label="Legal pages" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-technical text-muted-foreground">Legal center</p>
            <ul className="mt-4 space-y-1">
              {footerLegalLinks.map((link) => {
                const active = link.href === currentPath;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "text-small block rounded-[var(--radius-control)] bg-[color:var(--accent)] px-3 py-2 font-medium text-foreground"
                          : "text-small block rounded-[var(--radius-control)] px-3 py-2 text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Body */}
          <div className="max-w-2xl">
            {statusNote ? <StatusNote className="mb-8">{statusNote}</StatusNote> : null}
            <div className="space-y-8">{children}</div>
          </div>
        </div>
      </Section>
    </>
  );
}

export function LegalBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-h3 text-foreground">{heading}</h2>
      <div className="text-body mt-3 space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
