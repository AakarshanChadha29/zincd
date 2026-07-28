import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Residential Estate Pool Ionization",
  description:
    "Zinc'd for home and estate pools — ecological mineral ionization with an assessment-led path for owners and the next generation taking over the property.",
  path: "/applications/residential",
  keywords: ["residential pool ionization", "estate pool water treatment"],
});

export default function ResidentialApplicationsPage() {
  return <ApplicationTemplate slug="residential" />;
}
