import { Metadata } from "next";
import { DiscoverView } from "@/components/discover/discover-view";

export const metadata: Metadata = {
  title: "Discover Opportunities — career-ops",
  description:
    "Find internships, jobs, and research opportunities from 60+ curated sources: quant firms, research labs, professors, LinkedIn HRs, Indian startups, global firms, forums, and more.",
};

// Static render — source registry is compiled in, no file reads needed
export default function DiscoverPage() {
  return <DiscoverView />;
}
