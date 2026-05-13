const pillars = [
  {
    title: "Human words come first",
    body: "Storia is built around what people actually write. Sunny connects entries over time so moods and habits surface from their own language—never scores, shame, or flattening someone into a label.",
  },
  {
    title: "Gentle structure, not guilt",
    body: "We use guided prompts, short reflections, and weekly rhythms so reflection stays doable on heavy weeks. The product nudges and clarifies—it doesn’t pile on another inbox or performance review.",
  },
  {
    title: "Made for teams who take wellbeing seriously",
    body: "Storia for Work is for organisations that want clearer thinking together: thoughtful defaults, inclusive tone, and insights people can bring into one-on-ones, offsites, and the way they plan the quarter.",
  },
] as const;

export const OurApproach = () => {
  return (
    <section
      id="our-approach"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)]"
    >
      <div className="section-inner">
        <div className="overflow-hidden rounded-[28px] bg-(--storia-blue75) px-6 py-10 shadow-(--storia-blue) ring-1 ring-(--storia-black15) sm:px-10 sm:py-12 md:rounded-[32px] lg:px-14 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
            <div>
              <p className="section-pill">Our approach</p>
              <h2 className="mt-5  text-[clamp(1.65rem,3.2vw,2.35rem)] leading-[1.12] text-(--storia-black)">
                Meet people where they write, then help them see what keeps
                coming back.
              </h2>

              <div className="mt-10 space-y-8">
                {pillars.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[17px] font-bold leading-snug text-(--storia-black) md:text-[18px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[560px] text-[15px] leading-[1.65] text-(--storia-black75) md:text-[16px]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="flex justify-center lg:justify-end"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
