import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Jobs, Services, SkillTest } from "@/components/site/Sections";

export const Route = createFileRoute("/job-seekers")({
  head: () => ({
    meta: [
      { title: "Job Seekers — Mirrar Tech Solutions" },
      { name: "description", content: "Browse IT jobs, get career guidance, resume help and interview prep with Mirrar Tech Solutions." },
      { property: "og:title", content: "Job Seekers — Mirrar Tech Solutions" },
      { property: "og:description", content: "Find your next tech role with expert support." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="For Job Seekers" title="Land the tech role you deserve" text="Explore openings, sharpen your skills and get placed with our hiring partners." />
      <Jobs />
      <Services />
      <SkillTest />
    </SiteLayout>
  ),
});
