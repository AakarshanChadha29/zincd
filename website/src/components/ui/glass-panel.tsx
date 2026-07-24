import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  /** Prefer opaque surfaces by default; glass is opt-in */
  translucent?: boolean;
};

export function GlassPanel({
  children,
  className,
  translucent = false,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-panel)] border p-6 shadow-[var(--shadow-1)]",
        translucent
          ? "glass-surface"
          : "border-border bg-surface",
        className
      )}
    >
      {children}
    </div>
  );
}
