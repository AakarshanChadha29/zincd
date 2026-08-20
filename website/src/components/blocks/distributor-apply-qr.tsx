import { siteConfig } from "@/content/site-config";
import { distributorApplyQrSvg } from "@/lib/qr";
import { PrintQrButton } from "@/components/blocks/print-qr-button";
import { cn } from "@/lib/cn";

export const DISTRIBUTOR_APPLY_PATH = "/apply";

export function distributorApplyUrl() {
  return `${siteConfig.getSiteUrl()}${DISTRIBUTOR_APPLY_PATH}`;
}

export async function DistributorApplyQr({
  variant = "embed",
  className,
}: {
  variant?: "embed" | "print";
  className?: string;
}) {
  const applyUrl = distributorApplyUrl();
  const svg = await distributorApplyQrSvg(applyUrl);
  const printSheet = variant === "print";

  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div
        className={cn(
          "w-full max-w-[18rem] rounded-[var(--radius-panel)] border border-border bg-white p-5 shadow-[var(--shadow-1)] [&_svg]:h-auto [&_svg]:w-full",
          printSheet &&
            "max-w-[22rem] p-6 print:border-0 print:p-0 print:shadow-none",
        )}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <p className="text-technical mt-5 break-all text-accent-aquatic">
        {applyUrl}
      </p>
      {printSheet ? (
        <>
          <p className="text-small mt-8 text-muted-foreground print:hidden">
            Print this page for booths, brochures, and leave-behinds. The code
            opens the short distributor form.
          </p>
          <PrintQrButton />
        </>
      ) : (
        <p className="text-small mt-4 text-muted-foreground">
          Scan to open the application.
        </p>
      )}
    </div>
  );
}
