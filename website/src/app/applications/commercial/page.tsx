import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Commercial Pool Ionization",
  description:
    "Zinc'd for community and commercial aquatic facilities — engineered ionization with documented specifications for boards, GMs and facility directors.",
  path: "/applications/commercial",
  keywords: ["commercial pool ionization", "community pool water treatment"],
});

export default function CommercialApplicationsPage() {
  return <ApplicationTemplate slug="commercial" />;
}
