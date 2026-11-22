import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { interest?: string } => (typeof s["interest"] === "string" ? { interest: s["interest"] } : {}),
  head: () => ({
    meta: [
      { title: "Contact — Mirrar Tech Solutions" },
      { name: "description", content: "Contact Mirrar Tech Solutions about IT training, job placement or hiring technology talent." },
      { property: "og:title", content: "Contact — Mirrar Tech Solutions" },
      { property: "og:description", content: "Get in touch with our training and recruitment team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { interest } = Route.useSearch();
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact Us" title="Let's start a conversation" text="Tell us what you're looking for and we'll get back within one business day." />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.5fr]">
        <div className="space-y-6">
          {[[MapPin, "1200 Main Street, Suite 400, Dallas, TX 75201"], [Phone, "+1 (555) 123-4567"], [Mail, "info@mirrartech.com"]].map(([I, t], i) => {
            const Icon = I as typeof Mail;
            return <div key={i} className="flex gap-4"><span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span><p className="self-center">{t as string}</p></div>;
          })}
        </div>
        <ContactForm key={interest} {...(interest ? { interest } : {})} />
      </section>
    </SiteLayout>
  );
}
