import type { ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusNote } from "@/components/ui/status-note";
import { contentPendingNotice } from "@/content/route-placeholders";

type PageShellProps = {
  title: string;
  description: string;
  eyebrow?: string;
  actions?: { label: string; href: string; variant?: "default" | "outline" }[];
  related?: { label: string; href: string }[];
  children?: ReactNode;
  showPendingNotice?: boolean;
};

export function PageShell({
  title,
  description,
  eyebrow = "Route shell",
  actions,
  related,
  children,
  showPendingNotice = true,
}: PageShellProps) {
  return (
    <Section spacing="md" background="default">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="left"
        className="max-w-3xl"
      />

      {actions && actions.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-3">
          {actions.map((action) => (
            <Button
              key={action.href + action.label}
              variant={action.variant ?? "default"}
              size="lg"
              render={<Link href={action.href} />}
              className="rounded-[var(--radius-control)] text-button"
            >
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}

      {showPendingNotice ? (
        <div className="mt-8 max-w-3xl">
          <StatusNote>{contentPendingNotice}</StatusNote>
        </div>
      ) : null}

      {related && related.length > 0 ? (
        <nav aria-label="Related pages" className="mt-10">
          <p className="text-technical text-muted-foreground mb-3">Related</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small text-primary underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {children ? <div className="mt-12">{children}</div> : null}
    </Section>
  );
}
