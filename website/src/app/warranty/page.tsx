import { PageShell } from "@/components/layout/page-shell";
import { routePlaceholders } from "@/content/route-placeholders";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/warranty"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function WarrantyPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="Warranty"
      related={route.related}
    />
  );
}
