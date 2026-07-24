"use client";

import Link from "next/link";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-[var(--section-space-md)]">
      <Container width="narrow">
        <SectionHeading
          eyebrow="Error"
          title="Something went wrong"
          description="This page could not be loaded. You can try again or return to a known route. No internal details are shown."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            className="rounded-[var(--radius-control)]"
            onClick={reset}
          >
            Try again
          </Button>
          <Button
            variant="outline"
            className="rounded-[var(--radius-control)]"
            render={<Link href="/" />}
          >
            Back to home
          </Button>
        </div>
      </Container>
    </div>
  );
}
