export const Hero = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ryota Ikezawa
                </h1>
                <h2 className="text-2xl font-medium text-muted-foreground">EM, Full-stack web developer</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    TBD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
