"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { ZincdLogo } from "@/components/brand/zincd-logo";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Button } from "@/components/ui/button";
import {
  desktopPrimaryNav,
  siteConfig,
} from "@/content/site-config";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-[var(--duration-micro)] ease-[var(--ease-out-premium)]",
        scrolled
          ? "border-border bg-surface shadow-[var(--shadow-1)]"
          : "glass-surface border-transparent"
      )}
    >
      <div
        className="mx-auto flex h-[var(--nav-height)] w-full max-w-[var(--container-wide)] items-center gap-4 px-[var(--page-gutter)] sm:px-6 lg:px-8"
      >
        <ZincdLogo priority />

        <nav
          aria-label="Primary"
          className="ml-2 hidden flex-1 items-center gap-1 lg:flex"
        >
          {desktopPrimaryNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="text-small inline-flex h-10 items-center gap-1 rounded-[var(--radius-control)] px-3 font-medium text-foreground/90 hover:bg-surface-muted hover:text-foreground"
                  aria-expanded={openMenu === item.href}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === item.href ? null : item.href
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="size-3.5 opacity-70" aria-hidden />
                </button>
                {openMenu === item.href ? (
                  <div
                    role="menu"
                    className="absolute top-full left-0 z-50 min-w-[16rem] rounded-[var(--radius-panel)] border border-border bg-surface p-2 shadow-[var(--shadow-2)]"
                  >
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="text-small block rounded-[var(--radius-control)] px-3 py-2 font-medium hover:bg-surface-muted"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className="block rounded-[var(--radius-control)] px-3 py-2 hover:bg-surface-muted"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="text-small font-medium text-foreground">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="text-small mt-0.5 block text-muted-foreground">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-small inline-flex h-10 items-center rounded-[var(--radius-control)] px-3 font-medium text-foreground/90 hover:bg-surface-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="partner"
            size="sm"
            className="hidden rounded-[var(--radius-control)] md:inline-flex"
            render={<Link href={siteConfig.ctas.distributor.href} />}
          >
            {siteConfig.ctas.distributor.shortLabel}
          </Button>
          <Button
            size="sm"
            className="hidden rounded-[var(--radius-control)] sm:inline-flex"
            render={<Link href={siteConfig.ctas.assessment.href} />}
          >
            {siteConfig.ctas.assessment.label}
          </Button>
          <Button
            size="sm"
            className="rounded-[var(--radius-control)] sm:hidden"
            render={<Link href={siteConfig.ctas.assessment.href} />}
          >
            Assessment
          </Button>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
