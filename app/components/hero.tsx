import { Link } from "@remix-run/react";

export const Hero = () => {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Engineering Manager,<br/>Senior Web Engineer
              </h1>
              <p className="text-muted-foreground md:text-xl">
                As a senior web engineer with near a decade of experience, I
                specialize in building business purposes applications and highly
                functional websites and web applications. My expertise spans
                front-end and back-end development, sometimes infrastructure,
                ensuring seamless integration and optimal performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch="intent"
              >
                View Portfolio
              </Link>
              <Link
                to="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch="intent"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <img
            src="/placeholder.jpeg"
            width="650"
            height="650"
            alt="Hero"
            className="mx-auto aspect-[16/9] overflow-hidden rounded-xl object-fit sm:w-full"
          />
        </div>
      </div>
    </section>
  );
};
