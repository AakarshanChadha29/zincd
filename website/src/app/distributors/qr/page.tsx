import { ZincdLogo } from "@/components/brand/zincd-logo";
import { DistributorApplyQr } from "@/components/blocks/distributor-apply-qr";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Distributor QR",
  description: "Printable QR code for the Zinc'd distributor application form.",
  path: "/distributors/qr",
  noIndex: true,
});

export default function DistributorQrPage() {
  return (
    <section data-print-sheet className="bg-surface py-10 md:py-16 print:py-8">
      <div className="mx-auto flex max-w-xl flex-col items-center px-[var(--page-gutter)] text-center print:max-w-none">
        <ZincdLogo href={null} size="hero" />
        <p className="text-technical mt-8 text-accent-aquatic">Scan to apply</p>
        <h1 className="text-h1 mt-3 text-foreground">
          Become a Zinc&apos;d distributor
        </h1>
        <p className="text-body mt-3 max-w-md text-muted-foreground print:text-foreground">
          Company, territory, portfolio, and how you want to partner — sent
          straight to the Zinc&apos;d team.
        </p>
        <DistributorApplyQr variant="print" className="mt-8 w-full" />
      </div>
    </section>
  );
}
