import { PageShell } from "@/components/layout/page-shell";
import { routePlaceholders } from "@/content/route-placeholders";
import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";

const route = routePlaceholders["/contact"];

export const metadata = createPageMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ContactPage() {
  return (
    <PageShell
      title={route.title}
      description={route.description}
      eyebrow="Contact"
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
    >
      <p className="text-body max-w-2xl text-muted-foreground">
        Lead form submission, mailbox delivery, and published phone or email
        details are deferred until contact identity is confirmed. This page
        establishes the route and CTA intents only.
      </p>
    </PageShell>
  );
}
