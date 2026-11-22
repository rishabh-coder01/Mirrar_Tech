import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Linkedin, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/job-seekers", label: "Job Seekers" },
  { to: "/employers", label: "Employers" },
  { to: "/courses", label: "Courses" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className={`flex items-center gap-2 font-display text-lg font-bold ${light ? "text-primary-foreground" : "text-navy"}`}>
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand text-primary-foreground">M</span>
      Mirrar<span className="font-medium opacity-70">Tech</span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden gap-7 text-sm font-medium lg:flex" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "!text-primary" }} activeOptions={{ exact: true }}>{n.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn-primary hidden text-sm sm:inline-flex">Get Started</Link>
            <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 lg:hidden" aria-label="Mobile">
            {nav.map((n) => (<Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">{n.label}</Link>))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-navy text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 text-sm opacity-70">Building tech careers and connecting top talent with forward-thinking companies.</p>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Facebook, Twitter, Instagram].map((I, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition hover:bg-primary"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-display font-semibold">Quick Links</p>
            <ul className="mt-4 space-y-2 text-sm opacity-70">{nav.map((n) => (<li key={n.to}><Link to={n.to} className="hover:opacity-100">{n.label}</Link></li>))}</ul>
          </div>
          <div>
            <p className="font-display font-semibold">Services</p>
            <ul className="mt-4 space-y-2 text-sm opacity-70">{["IT Recruitment", "IT Training", "Career Guidance", "Resume Building", "Interview Prep", "Placement Assistance"].map((s) => (<li key={s}>{s}</li>))}</ul>
          </div>
          <div className="space-y-3 text-sm opacity-80">
            <p className="font-display font-semibold opacity-100">Contact</p>
            <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" /> 1200 Main Street, Suite 400, Dallas, TX 75201</p>
            <p className="flex gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
            <p className="flex gap-2"><Mail className="h-4 w-4" /> info@mirrartech.com</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-60">© {new Date().getFullYear()} Mirrar Tech Solutions. All rights reserved.</div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-gradient-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow !text-sky">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg opacity-80">{text}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}
