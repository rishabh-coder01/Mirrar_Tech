import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Stats, Testimonials } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mirrar Tech Solutions" },
      { name: "description", content: "Learn about Mirrar Tech Solutions' mission to build tech careers and connect talent with leading employers." },
      { property: "og:title", content: "About Us — Mirrar Tech Solutions" },
      { property: "og:description", content: "Our mission, vision and expertise in IT training and recruitment." },
    ],
  }),
  component: About,
});

function About() {
  const items = [
    { I: Target, t: "Our Mission", d: "Make every candidate job-ready and every placement a lasting success." },
    { I: Eye, t: "Our Vision", d: "Be the most trusted bridge between tech talent and the companies that need it." },
    { I: Award, t: "Our Expertise", d: "A decade of IT staffing, certified trainers and deep partnerships across industries." },
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Building careers. Powering teams." text="Mirrar Tech Solutions combines training, mentoring and recruitment so talent and opportunity meet." />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        {items.map(({ I, t, d }) => (
          <div key={t} className="card-soft"><I className="h-10 w-10 text-primary" /><h2 className="mt-5 font-display text-xl font-semibold text-navy">{t}</h2><p className="mt-2 text-muted-foreground">{d}</p></div>
        ))}
      </section>
      <Stats />
      <Testimonials />
    </SiteLayout>
  );
}
