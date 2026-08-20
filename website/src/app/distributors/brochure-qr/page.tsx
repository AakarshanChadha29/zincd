import { ZincdLogo } from "@/components/brand/zincd-logo";
import { DistributorsPageQr } from "@/components/blocks/distributors-page-qr";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Distributors brochure QR",
  description: "Printable QR code for the Zinc'd distributors page.",
  path: "/distributors/brochure-qr",
  noIndex: true,
});

export default function DistributorsBrochureQrPage() {
  return (
    <section data-print-sheet className="bg-surface py-10 md:py-16 print:py-8">
      <div className="mx-auto flex max-w-xl flex-col items-center px-[var(--page-gutter)] text-center print:max-w-none">
        <ZincdLogo href={null} size="hero" />
        <p className="text-technical mt-8 text-accent-aquatic">Scan to visit</p>
        <h1 className="text-h1 mt-3 text-foreground">
          Zinc&apos;d distributor program
        </h1>
        <p className="text-body mt-3 max-w-md text-muted-foreground print:text-foreground">
          Opens the U.S. distributor page — partner path, series range, and how
          to apply.
        </p>
        <DistributorsPageQr variant="print" className="mt-8 w-full" />
      </div>
    </section>
  );
}
