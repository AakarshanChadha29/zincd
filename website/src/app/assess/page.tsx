import { Suspense } from "react";

import { AssessFunnel } from "@/components/assess/assess-funnel";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { assessPage } from "@/content/assess-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Pool Assessment",
  description:
    "Qualify your pool for a Zinc'd series match: pain inventory, capacity, plumbing, photo checklist, and water-test snapshot.",
  path: "/assess",
  keywords: [
    "pool assessment",
    "pool ionizer quote",
    "Zinc'd series match",
  ],
});

export default function AssessPage() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 hero-aura" />
      <Container width="narrow" className="relative py-10 md:py-14">
        <TechnicalLabel>{assessPage.eyebrow}</TechnicalLabel>
        <h1 className="text-h1 mt-4 text-foreground">{assessPage.title}</h1>
        <p className="text-body-large mt-4 text-muted-foreground">
          {assessPage.description}
        </p>
        <div className="mt-8">
          <Suspense
            fallback={
              <div className="rounded-[var(--radius)] border border-border bg-surface p-8 text-muted-foreground">
                Loading assessment…
              </div>
            }
          >
            <AssessFunnel />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
