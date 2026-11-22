import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { courses, courseImg } from "@/lib/site-data";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const c = courses.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => loaderData ? {
    meta: [
      { title: `${loaderData.t} Course — Mirrar Tech Solutions` },
      { name: "description", content: loaderData.d },
      { property: "og:title", content: `${loaderData.t} Course — Mirrar Tech Solutions` },
      { property: "og:description", content: loaderData.d },
      { property: "og:image", content: courseImg(loaderData.img) },
      { name: "twitter:image", content: courseImg(loaderData.img) },
    ],
  } : { meta: [{ title: "Course not found" }, { name: "robots", content: "noindex" }] },
  notFoundComponent: () => <SiteLayout><div className="py-32 text-center"><p className="text-2xl font-bold">Course not found</p><Link to="/courses" className="btn-primary mt-6">All courses</Link></div></SiteLayout>,
  component: CoursePage,
});

function CoursePage() {
  const c = Route.useLoaderData();
  return (
    <SiteLayout>
      <PageHero eyebrow={`${c.weeks} weeks · ${c.level}`} title={c.t} text={c.d} />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <img src={courseImg(c.img)} alt={c.t} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
        <div>
          <h2 className="font-display text-2xl font-bold text-navy">What you'll learn</h2>
          <ul className="mt-6 space-y-3">{c.topics.map((t) => (<li key={t} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary" />{t}</li>))}</ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" search={{ interest: "training" }} className="btn-primary">Enroll Now</Link>
            <Link to="/courses" className="btn-outline">All courses</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
