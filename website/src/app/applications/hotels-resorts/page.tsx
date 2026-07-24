import { ApplicationTemplate } from "@/components/blocks/application-template";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Hotels & Resorts",
  description:
    "Zinc'd for hospitality pools and aquatic amenities — a guest-facing water experience backed by monitored, engineered operation.",
  path: "/applications/hotels-resorts",
});

export default function HotelsResortsApplicationsPage() {
  return <ApplicationTemplate slug="hotels-resorts" />;
}
