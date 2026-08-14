"use client";

import { Printer } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PrintQrButton() {
  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      className="mt-6 rounded-[var(--radius-control)] print:hidden"
      onClick={() => window.print()}
    >
      <Printer className="size-4" aria-hidden />
      Print QR sheet
    </Button>
  );
}
