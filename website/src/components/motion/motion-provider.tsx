"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

type MotionProviderProps = {
  children: ReactNode;
};

/**
 * Global motion configuration. Reduced motion is respected via MotionConfig
 * and CSS prefers-reduced-motion utilities elsewhere.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}
