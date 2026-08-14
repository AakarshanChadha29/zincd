import { DistributorApplyForm } from "@/components/blocks/distributor-apply-form";
import { Container } from "@/components/layout/container";
import { TechnicalLabel } from "@/components/ui/technical-label";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Distributor Application",
  description:
    "Short application to carry Zinc'd — company, territory, portfolio, and how you'd like to partner.",
  path: "/apply",
  keywords: [
    "Zinc'd distributor application",
    "pool equipment wholesale",
    "become a pool ionization dealer",
  ],
});

export default function DistributorApplyPage() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div aria-hidden className="absolute inset-0 bg-grid" />
      <div aria-hidden className="absolute inset-0 hero-aura" />
      <Container width="narrow" className="relative py-10 md:py-14">
        <TechnicalLabel>Distributors &amp; partners</TechnicalLabel>
        <h1 className="text-h1 mt-4 text-foreground">
          Apply to carry{" "}
          <span className="text-gradient-aqua">Zinc&apos;d</span>
        </h1>
        <p className="text-body-large mt-4 text-muted-foreground">
          A short form for pool service companies, builders, dealers, and
          hospitality suppliers. Tell us where you operate and how you want to
          work with us — we&apos;ll follow up.
        </p>
        <div className="mt-8 rounded-[var(--radius)] border border-border-strong bg-surface-elevated p-1 shadow-[var(--shadow-2)]">
          <div className="rounded-[calc(var(--radius)-2px)] border border-border bg-surface p-5 md:p-8">
            <DistributorApplyForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
