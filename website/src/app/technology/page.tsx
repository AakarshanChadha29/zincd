import { PageShell } from "@/components/layout/page-shell";
import {
  routePlaceholders,
} from "@/content/route-placeholders";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/technology"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function TechnologyPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="Technology"
      related={route.related}
      actions={[
        {
          label: siteConfig.ctas.assessment.label,
          href: siteConfig.ctas.assessment.href,
        },
        {
          label: siteConfig.ctas.distributor.label,
          href: siteConfig.ctas.distributor.href,
          variant: "outline",
        },
      ]}
    />
  );
}
