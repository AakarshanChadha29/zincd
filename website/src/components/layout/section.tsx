import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "sm" | "md" | "lg" | "none";
  background?: "default" | "surface" | "muted" | "deep";
  container?: boolean;
  containerWidth?: "narrow" | "default" | "wide";
};

const spacingClass = {
  none: "",
  sm: "py-[var(--section-space-sm)]",
  md: "py-[var(--section-space-md)] md:py-[var(--section-space-lg)]",
  lg: "py-[var(--section-space-lg)]",
} as const;

const backgroundClass = {
  default: "bg-background",
  surface: "bg-surface",
  muted: "bg-surface-muted",
  deep: "band-deep",
} as const;

export function Section({
  children,
  className,
  id,
  spacing = "md",
  background = "default",
  container = true,
  containerWidth = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingClass[spacing], backgroundClass[background], className)}
    >
      {container ? (
        <Container width={containerWidth}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
