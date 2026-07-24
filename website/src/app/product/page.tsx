import { PageShell } from "@/components/layout/page-shell";
import { routePlaceholders } from "@/content/route-placeholders";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/product"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ProductPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="Product"
      related={route.related}
      actions={[
        {
          label: siteConfig.ctas.assessment.label,
          href: siteConfig.ctas.assessment.href,
        },
        {
          label: siteConfig.ctas.technology.label,
          href: siteConfig.ctas.technology.href,
          variant: "outline",
        },
      ]}
    />
  );
}
