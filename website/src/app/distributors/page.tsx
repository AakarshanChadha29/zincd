import { PageShell } from "@/components/layout/page-shell";
import { routePlaceholders } from "@/content/route-placeholders";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/distributors"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function DistributorsPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="B2B"
      related={route.related}
      actions={[
        {
          label: siteConfig.ctas.distributor.label,
          href: "/contact?intent=partner",
        },
        {
          label: siteConfig.ctas.specialist.label,
          href: siteConfig.ctas.specialist.href,
          variant: "outline",
        },
      ]}
    />
  );
}
