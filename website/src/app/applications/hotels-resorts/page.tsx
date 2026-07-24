import { PageShell } from "@/components/layout/page-shell";
import { routePlaceholders } from "@/content/route-placeholders";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/applications/hotels-resorts"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function HotelsResortsApplicationsPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="Hotels & Resorts"
      related={route.related}
    />
  );
}
