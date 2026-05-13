import graphImg from "../../assets/graph.png";

const blockers = [
  {
    icon: "⚡",
    title: "Thoughts keep circling",
    body: "No prompts—so you circle the same worries without moving through them.",
  },
  {
    icon: "🔍",
    title: "Patterns stay hidden",
    body: "Scattered entries hide what's really shaping mood, energy, and choices.",
  },
  {
    icon: "🌿",
    title: "Growth is hard to see",
    body: "Without a light structure, progress is easy to miss—even when it's there.",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-3rem)]"
    >
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="section-pill">What gets in the way</p>
            <h2 className="mt-6 max-w-[560px] text-[clamp(1.65rem,3.2vw,2.35rem)] leading-[1.15] text-(--storia-black)">
              It's not burnout.
              <br />
              <em className="text-(--storia-green)">It's biology.</em>
            </h2>
            <p className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-(--storia-black75)">
              You write something down. You feel better for a moment.
              <br />
              Then the same patterns resurface. The same decisions feel hard.
              <br />
              Journaling without structure keeps your thoughts captured but not
              understood.
            </p>

            <div className="mt-6 flex gap-4 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
              {blockers.map((blocker) => (
                <article
                  key={blocker.title}
                  className="flex w-[min(100%,280px)] shrink-0 flex-col items-center rounded-[14px] border-[0.5px] border-solid border-(--storia-black15) bg-(--storia-coffee-light) px-4 py-5 text-center shadow-(--storia-coffee-light) sm:w-auto sm:min-w-0 sm:shrink"
                >
                  <p className="text-3xl leading-none" aria-hidden>
                    {blocker.icon}
                  </p>
                  <h3 className="mt-3 text-[15px] font-bold text-(--storia-black)">
                    {blocker.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-(--storia-black75)">
                    {blocker.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] lg:mt-6">
            <div className="w-full rounded-[25px] bg-[#E8E0D4]">
              <img
                src={graphImg}
                alt="Bar chart: mental clarity, energy, decision confidence, and personal growth are higher with structured journaling than without."
                className="h-full w-full object-contain p-3"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
