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
  withDot = true,
}: TechnicalLabelProps) {
  return (
    <div
      className={cn(
        "text-technical text-accent-aquatic inline-flex items-center gap-2",
        className
      )}
    >
      {withDot ? (
        <span
          aria-hidden
          className="size-1.5 shrink-0 rounded-full bg-accent-aquatic"
        />
      ) : null}
      <span>{children}</span>
    </div>
  );
}
