import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { TechnicalLabel } from "@/components/ui/technical-label";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h1",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <TechnicalLabel className={align === "center" ? "justify-center" : undefined}>
          {eyebrow}
        </TechnicalLabel>
      ) : null}
      <Heading
        className={cn(
          Heading === "h1" && "text-h1",
          Heading === "h2" && "text-h2",
          Heading === "h3" && "text-h3"
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-body-large text-muted-foreground max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
