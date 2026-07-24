"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { primaryNavigation, siteConfig } from "@/content/site-config";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="rounded-[var(--radius-control)] lg:hidden"
            aria-label="Open navigation menu"
          />
        }
      >
        <Menu className="size-5" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(100%,22rem)] gap-0 bg-surface p-0"
      >
        <SheetHeader className="border-b border-border px-5 py-4 text-left">
          <SheetTitle className="text-h3">{siteConfig.brand.name}</SheetTitle>
        </SheetHeader>
        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
        >
          {primaryNavigation.map((item) => (
            <div key={item.href} className="flex flex-col">
              <Link
                href={item.href}
                className="min-h-11 rounded-[var(--radius-control)] px-3 py-2.5 text-base font-medium hover:bg-surface-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="text-small min-h-10 rounded-[var(--radius-control)] px-6 py-2 text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="mt-auto space-y-3 border-t border-border px-5 py-5">
          <Button
            className="w-full rounded-[var(--radius-control)]"
            size="lg"
            render={<Link href={siteConfig.ctas.assessment.href} />}
            onClick={() => setOpen(false)}
          >
            {siteConfig.ctas.assessment.label}
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-[var(--radius-control)]"
            size="lg"
            render={<Link href={siteConfig.ctas.distributor.href} />}
            onClick={() => setOpen(false)}
          >
            {siteConfig.ctas.distributor.label}
          </Button>
          <Separator />
          <p className="text-small text-muted-foreground">
            {siteConfig.contact.statusNote}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
