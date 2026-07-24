import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { GlassPanel } from "@/components/ui/glass-panel";
import { routePlaceholders } from "@/content/route-placeholders";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/applications"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ApplicationsPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="Applications"
      related={route.related}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {route.related?.map((item) => (
          <Link key={item.href} href={item.href}>
            <GlassPanel className="h-full transition-colors hover:border-border-strong">
              <p className="text-h3">{item.label}</p>
              <p className="text-small mt-2 text-muted-foreground">
                Open application shell
              </p>
            </GlassPanel>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
