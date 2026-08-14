import { siteConfig } from "@/content/site-config";
import { createPageMetadata } from "@/lib/metadata";
import { distributorApplyQrSvg } from "@/lib/qr";
import { ZincdLogo } from "@/components/brand/zincd-logo";
import { PrintQrButton } from "@/components/blocks/print-qr-button";

const APPLY_PATH = "/apply";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Distributor QR",
  description: "Printable QR code for the Zinc'd distributor application form.",
  path: "/distributors/qr",
  noIndex: true,
});

export default async function DistributorQrPage() {
  const applyUrl = `${siteConfig.getSiteUrl()}${APPLY_PATH}`;
  const svg = await distributorApplyQrSvg(applyUrl);

  return (
    <section
      data-print-sheet
      className="bg-surface py-10 md:py-16 print:py-8"
    >
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
        <div
          className="mt-8 w-full max-w-[22rem] rounded-[var(--radius-panel)] border border-border bg-white p-6 shadow-[var(--shadow-1)] print:border-0 print:p-0 print:shadow-none [&_svg]:h-auto [&_svg]:w-full"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
        <p className="text-technical mt-6 break-all text-accent-aquatic">
          {applyUrl}
        </p>
        <p className="text-small mt-8 text-muted-foreground print:hidden">
          Print this page for booths, brochures, and leave-behinds. The code
          opens the short distributor form.
        </p>
        <PrintQrButton />
      </div>
    </section>
  );
}
