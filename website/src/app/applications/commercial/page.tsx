import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Commercial Applications",
  description:
    "Zinc'd for community and commercial pool operators — engineered control and monitoring for higher-volume water, with documented specifications.",
  path: "/applications/commercial",
});

export default function CommercialApplicationsPage() {
  return <ApplicationTemplate slug="commercial" />;
}
