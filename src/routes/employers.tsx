import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, SectionHead } from "@/components/site/Layout";
import { Clients, EmployerCTA, Testimonials } from "@/components/site/Sections";

export const Route = createFileRoute("/employers")({
  head: () => ({
    meta: [
      { title: "Employers — Hire IT Talent | Mirrar Tech Solutions" },
      { name: "description", content: "Hire pre-vetted developers, data, cloud and security professionals. Contract, contract-to-hire and permanent staffing." },
      { property: "og:title", content: "Employers — Hire IT Talent | Mirrar Tech Solutions" },
      { property: "og:description", content: "Pre-screened tech talent within 48 hours." },
    ],
  }),
  component: Employers,
});

function Employers() {
  const models = [["Contract Staffing", "Flexible experts for projects of any length."], ["Contract-to-Hire", "Evaluate talent before making it permanent."], ["Permanent Placement", "Long-term hires matched to your culture."]];
  return (
    <SiteLayout>
      <PageHero eyebrow="For Employers" title="Hire skilled technology professionals, fast" text="Pre-screened, trained candidates delivered within 48 hours." />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead center eyebrow="Engagement Models" title="Staffing that fits your needs" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {models.map(([t, d]) => (<div key={t} className="card-soft"><h3 className="font-display text-xl font-semibold text-navy">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></div>))}
        </div>
      </section>
      <Clients />
      <Testimonials />
      <EmployerCTA />
    </SiteLayout>
  );
}
