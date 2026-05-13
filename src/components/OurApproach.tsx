import workInsightsVideo from "../../assets/WorkInsights.mov?url";

const pillars = [
  {
    title: "We translate, not just track",
    body: "Any app can track. We translate what people write into something that feels true to who they're becoming.",
  },
  {
    title: "Built into your day",
    body: "A small place to land when your head is full. Gentle structure, not guilt when you miss one.",
  },
  {
    title: "A mirror, not a metric",
    body: "The same mirror at work — help people feel heard and bring what's actually shifting into real conversations.",
  },
] as const;

export const OurApproach = () => {
  return (
    <section
      id="our-approach"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)]"
    >
      <div className="section-inner">
        <div className="overflow-hidden rounded-[28px] bg-(--storia-blue75) px-4 py-8 shadow-(--storia-blue) ring-1 ring-(--storia-black15) sm:px-8 sm:py-10 md:rounded-[32px] lg:px-14 lg:py-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
            <div>
              <p className="section-pill">Our approach</p>
              <h2 className="mt-5 text-[clamp(1.65rem,3.2vw,2.25rem)] leading-[1.12] text-(--storia-black)">
                Meet people where they write, then help them see what keeps
                coming back.
              </h2>

              <div className="mt-6 space-y-6">
                {pillars.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[15px] font-bold leading-snug text-(--storia-black) md:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[560px] text-[13px] leading-[1.65] text-(--storia-black75) md:text-[14px]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-center">
              <div className="overflow-hidden rounded-[24px] shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] sm:rounded-[28px] border-6 border-(--storia-black75)">
                <video
                  className="block h-auto max-h-[400px] object-contain object-center sm:max-h-[500px] lg:max-h-[550px]"
                  src={workInsightsVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Storia work insights preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
