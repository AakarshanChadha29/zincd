import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/content/site-config";

export default function NotFound() {
  return (
    <div className="py-[var(--section-space-md)]">
      <Container width="narrow">
        <SectionHeading
          eyebrow="404"
          title="Page not found"
          description="That route is not part of the current Zinc'd public site map. Use the links below to continue."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            className="rounded-[var(--radius-control)]"
            render={<Link href="/" />}
          >
            Home
          </Button>
          <Button
            variant="outline"
            className="rounded-[var(--radius-control)]"
            render={<Link href="/technology" />}
          >
            Technology
          </Button>
          <Button
            variant="outline"
            className="rounded-[var(--radius-control)]"
            render={<Link href={siteConfig.ctas.assessment.href} />}
          >
            {siteConfig.ctas.assessment.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}
