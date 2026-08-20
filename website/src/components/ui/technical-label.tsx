import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type TechnicalLabelProps = {
  children: ReactNode;
  className?: string;
  withDot?: boolean;
};

export function TechnicalLabel({
  children,
  className,
  withDot = false,
}: TechnicalLabelProps) {
  return (
    <div
      className={cn(
        "text-technical text-accent-aquatic inline-flex items-center gap-2.5",
        className
      )}
    >
      {withDot ? (
        <span
          aria-hidden
          className="h-px w-6 shrink-0 bg-current"
        />
      ) : null}
      <span>{children}</span>
    </div>
  );
}
