import Link from "next/link";

import { qrSvg } from "@/lib/qr";
import { PrintQrButton } from "@/components/blocks/print-qr-button";
import { cn } from "@/lib/cn";

/** Live preview URL encoded on the brochure QR. */
export const BROCHURE_DISTRIBUTORS_URL =
  "https://website-ten-lac-91.vercel.app/distributors";

export async function DistributorsPageQr({
  variant = "embed",
  className,
}: {
  variant?: "embed" | "print";
  className?: string;
}) {
  const svg = await qrSvg(BROCHURE_DISTRIBUTORS_URL);
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
        {BROCHURE_DISTRIBUTORS_URL}
      </p>
      {printSheet ? (
        <>
          <p className="text-small mt-8 text-muted-foreground print:hidden">
            Print this page for the brochure. The code opens the distributors
            page.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 print:hidden">
            <a
              href="/qr/zincd-distributors.svg"
              download
              className="text-small font-medium text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              Download SVG
            </a>
            <a
              href="/qr/zincd-distributors.png"
              download
              className="text-small font-medium text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
            >
              Download PNG
            </a>
          </div>
          <PrintQrButton />
        </>
      ) : (
        <p className="text-small mt-4 text-muted-foreground">
          Scan to open the distributors page, or{" "}
          <Link
            href="/distributors/brochure-qr"
            className="font-medium text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
          >
            print this QR
          </Link>
          .
        </p>
      )}
    </div>
  );
}
