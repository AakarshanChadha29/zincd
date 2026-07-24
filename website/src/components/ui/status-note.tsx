import type { ReactNode } from "react";
import { Info } from "lucide-react";

import { cn } from "@/lib/cn";

type StatusNoteProps = {
  children: ReactNode;
  className?: string;
  tone?: "info" | "warning";
};

export function StatusNote({
  children,
  className,
  tone = "info",
}: StatusNoteProps) {
  return (
    <aside
      role="note"
      className={cn(
        "flex gap-3 rounded-[var(--radius-panel)] border px-4 py-3 text-small",
        tone === "info" &&
          "border-border bg-surface-muted text-muted-foreground",
        tone === "warning" &&
          "border-[color:var(--warning)]/30 bg-[color:var(--warning)]/5 text-foreground",
        className
      )}
    >
      <Info
        className="mt-0.5 size-4 shrink-0 text-accent-aquatic"
        aria-hidden
        strokeWidth={1.5}
      />
      <div>{children}</div>
    </aside>
  );
}
