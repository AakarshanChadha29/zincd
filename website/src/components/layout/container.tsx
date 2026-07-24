import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  width?: "narrow" | "default" | "wide";
  as?: "div" | "section" | "article";
};

const widthClass = {
  narrow: "max-w-[var(--container-narrow)]",
  default: "max-w-[var(--container-default)]",
  wide: "max-w-[var(--container-wide)]",
} as const;

export function Container({
  children,
  className,
  width = "default",
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-[var(--page-gutter)] sm:px-6 lg:px-8",
        widthClass[width],
        className
      )}
    >
      {children}
    </Comp>
  );
}
