import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, SectionHead } from "@/components/site/Layout";
import { Services, Stats, Clients, Jobs, Courses, SkillTest, Testimonials, EmployerCTA, ContactForm } from "@/components/site/Sections";
import { IMG } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mirrar Tech Solutions — IT Training, Recruitment & Placement" },
      { name: "description", content: "Build your tech career with job-ready IT training and placement, or hire skilled technology professionals with Mirrar Tech Solutions." },
      { property: "og:title", content: "Mirrar Tech Solutions — IT Training, Recruitment & Placement" },
      { property: "og:description", content: "Connecting skilled tech talent with great opportunities." },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden text-primary-foreground">
        <img src={IMG.hero} alt="Technology professionals collaborating" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="eyebrow animate-fade-up !text-sky">IT Training · Recruitment · Placement</p>
          <h1 className="mt-5 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-tight md:text-6xl">Build your tech career. <span className="text-sky">Connect talent</span> with opportunity.</h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg opacity-85">Job-ready training, career coaching and direct placement for job seekers — and pre-vetted technology professionals for employers.</p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up">
            <Link to="/job-seekers" className="btn-primary">Find Your Job</Link>
            <Link to="/employers" className="btn-light">Hire Talent</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img src={IMG.about} alt="Mirrar team mentoring" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
        <div>
          <SectionHead eyebrow="About Us" title="Your partner from first skill to first offer" text="Mirrar Tech Solutions bridges the gap between ambitious professionals and companies that need them. Our mission is to make every candidate job-ready and every hire a great fit." />
          <ul className="mt-6 space-y-3">
            {["10+ years of IT staffing expertise", "Industry-certified trainers", "150+ active hiring partners"].map((x) => (
              <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary" />{x}</li>
            ))}
          </ul>
          <Link to="/about" className="btn-outline mt-8">Learn more</Link>
        </div>
      </section>

      <Services />
      <Stats />
      <Clients />
      <Jobs />
      <Courses />
      <SkillTest />
      <Testimonials />
      <EmployerCTA />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2">
        <SectionHead eyebrow="Contact Us" title="Let's talk about your goals" text="Whether you're starting a career or building a team, we'll respond within one business day." />
        <ContactForm />
      </section>
    </SiteLayout>
  );
}
