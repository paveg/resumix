import type { MetaFunction } from "@remix-run/node";
import { WorkExperiences } from "~/components/work-experiences";

export const meta: MetaFunction = () => {
  return [
    { title: "portfolio" },
    { name: "description", content: "career details" },
  ];
};

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <header className="bg-primary text-primary-foreground px-y px-4 md:px-6">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ryota Ikezawa
          </h1>
          <p className="mt-3 max-w-md text-lg text-primary-foreground/90">
            Engineering Manager, Senior Software Engineer
          </p>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:-py20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work Experience
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <WorkExperiences />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
