import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Courses, SkillTest } from "@/components/site/Sections";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "IT Courses — Mirrar Tech Solutions" },
      { name: "description", content: "Java Full Stack, Data Science, Cybersecurity, Cloud, DevOps and Business Analysis training programs." },
      { property: "og:title", content: "IT Courses — Mirrar Tech Solutions" },
      { property: "og:description", content: "Job-ready IT training programs with placement support." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero eyebrow="Courses" title="Training programs that get you hired" text="Live, project-based courses with mentoring and placement assistance." />
      <Courses />
      <SkillTest />
    </SiteLayout>
  ),
});
