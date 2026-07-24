import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Residential Applications",
  description:
    "Zinc'd for home and estate pools — a clearer, easier-to-live-with water experience with an assessment-led path.",
  path: "/applications/residential",
});

export default function ResidentialApplicationsPage() {
  return <ApplicationTemplate slug="residential" />;
}
