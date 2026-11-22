import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import * as Icons from "lucide-react";
import { MapPin, Code2, Clock, ArrowRight, Quote, Star, Building2, ClipboardCheck } from "lucide-react";
import { z } from "zod";
import { SectionHead } from "./Layout";
import { services, stats, clients, jobs, courses, courseImg, testimonials } from "@/lib/site-data";

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead center eyebrow="Our Services" title="Everything you need to launch or scale" text="End-to-end support for job seekers and employers — from first skill to first offer." />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const I = Icons[s.icon] as Icons.LucideIcon;
          return (
            <div key={s.t} className="card-soft group">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><I className="h-6 w-6" /></span>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => { const p = Math.min((t - start) / 1600, 1); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  return (
    <section className="bg-gradient-navy text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <p className="font-display text-4xl font-bold md:text-5xl"><Counter to={s.v} suffix={s.s} /></p>
            <p className="mt-2 text-sm opacity-75">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">Trusted by leading companies</p>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {clients.map((c) => (
          <div key={c} className="grid h-20 place-items-center rounded-xl border border-border bg-card font-display text-xl font-bold text-muted-foreground/70 transition hover:text-primary hover:shadow-md">{c}</div>
        ))}
      </div>
    </section>
  );
}

export function Jobs({ limit }: { limit?: number }) {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead eyebrow="Job Opportunities" title="Featured openings" text="Hand-picked roles from our hiring partners." />
          <Link to="/job-seekers" className="btn-outline">View all jobs</Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.slice(0, limit).map((j) => (
            <article key={j.role} className="card-soft flex flex-col">
              <h3 className="font-display text-lg font-semibold text-navy">{j.role}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary" />{j.loc}</li>
                <li className="flex gap-2"><Code2 className="h-4 w-4 text-primary" />{j.tech}</li>
                <li className="flex gap-2"><Clock className="h-4 w-4 text-primary" />{j.exp} experience</li>
              </ul>
              <Link to="/contact" search={{ interest: "job" }} className="btn-primary mt-6 justify-center text-sm">Apply Now</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Courses() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead center eyebrow="Training Programs" title="Job-ready courses built with employers" />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
            <img src={courseImg(c.img)} alt={`${c.t} course`} loading="lazy" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-6">
              <div className="flex gap-2 text-xs font-medium text-primary"><span className="rounded-full bg-primary/10 px-3 py-1">{c.weeks} weeks</span><span className="rounded-full bg-primary/10 px-3 py-1">{c.level}</span></div>
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SkillTest() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-brand p-10 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-14">
        <div className="flex gap-5">
          <ClipboardCheck className="hidden h-14 w-14 shrink-0 md:block" />
          <div>
            <h2 className="font-display text-3xl font-bold">Take a free skill assessment</h2>
            <p className="mt-2 max-w-xl opacity-85">Find out where you stand in 20 minutes and get matched to jobs that fit your skills.</p>
          </div>
        </div>
        <Link to="/contact" search={{ interest: "assessment" }} className="btn-light">Start Assessment</Link>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead center eyebrow="Success Stories" title="What candidates and employers say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.n} className="card-soft">
              <Quote className="h-8 w-8 text-primary/30" />
              <div className="mt-3 flex gap-0.5 text-amber">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 text-foreground">"{t.q}"</blockquote>
              <figcaption className="mt-6"><p className="font-semibold text-navy">{t.n}</p><p className="text-sm text-muted-foreground">{t.r}</p></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmployerCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 rounded-3xl bg-navy p-10 text-primary-foreground md:grid-cols-[1fr_auto] md:p-16">
        <div className="flex gap-5">
          <Building2 className="hidden h-14 w-14 shrink-0 text-sky md:block" />
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Hiring tech talent?</h2>
            <p className="mt-3 max-w-xl opacity-80">Share your staffing requirements and receive pre-screened candidates within 48 hours.</p>
          </div>
        </div>
        <Link to="/contact" search={{ interest: "hire" }} className="btn-primary">Submit Requirements</Link>
      </div>
    </section>
  );
}

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number"),
  interest: z.enum(["job", "training", "hire", "assessment", "other"], { message: "Choose an option" }),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000),
});

export function ContactForm({ interest }: { interest?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  if (sent) return <div className="card-soft grid min-h-80 place-items-center text-center"><div><p className="font-display text-2xl font-bold text-navy">Thank you!</p><p className="mt-2 text-muted-foreground">Our team will contact you within one business day.</p></div></div>;
  return (
    <form noValidate className="card-soft grid gap-4 sm:grid-cols-2" onSubmit={(e) => {
      e.preventDefault();
      const r = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
      if (!r.success) { const m: Record<string, string> = {}; r.error.issues.forEach((i) => { m[String(i.path[0])] ??= i.message; }); setErrors(m); return; }
      setErrors({}); setSent(true);
    }}>
      {([["name", "Full name", "text"], ["email", "Email", "email"], ["phone", "Phone", "tel"]] as const).map(([k, l, t]) => (
        <label key={k} className="text-sm font-medium">{l}<input name={k} type={t} className="field" aria-invalid={!!errors[k]} />{errors[k] && <span className="mt-1 block text-xs text-destructive">{errors[k]}</span>}</label>
      ))}
      <label className="text-sm font-medium">I'm interested in
        <select name="interest" defaultValue={interest ?? ""} className="field">
          <option value="" disabled>Select…</option>
          <option value="job">Finding a job</option><option value="training">IT training</option><option value="hire">Hiring talent</option><option value="assessment">Skill assessment</option><option value="other">Other</option>
        </select>{errors["interest"] && <span className="mt-1 block text-xs text-destructive">{errors["interest"]}</span>}
      </label>
      <label className="text-sm font-medium sm:col-span-2">Message<textarea name="message" rows={4} className="field" />{errors["message"] && <span className="mt-1 block text-xs text-destructive">{errors["message"]}</span>}</label>
      <button className="btn-primary justify-center sm:col-span-2">Send Message</button>
    </form>
  );
}
