const blockers = [
  {
    title: "Thoughts loop without resolution",
    body: "Without prompts, reflection stays surface-level. You revisit the same worries without moving through them.",
  },
  {
    title: "Patterns stay invisible",
    body: "When entries are disconnected, you can't see what's actually shaping your moods, energy, and decisions.",
  },
  {
    title: "Progress feels hard to measure",
    body: "Without a structured layer, growth is hard to see - even when it's happening.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-12">
          <div>
            <p className="section-pill">What gets in the way</p>
            <h2 className="mt-6 text-[clamp(1.65rem,3.2vw,2.35rem)] leading-[1.15] text-(--storia-black)">
              It's not burnout.
              <br />
              <em className="text-(--storia-green)">It's biology.</em>
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-(--storia-black75)">
              You write something down. You feel better for a moment.
              <br />
              Then the same patterns resurface. The same decisions feel hard.
              <br />
              Journaling without structure keeps your thoughts captured but not
              understood.
            </p>
            <p className="mt-8 text-[16px] font-bold text-(--storia-black)">
              What happens when reflection doesn&apos;t go deep enough?
            </p>
          </div>

          <div className="min-w-0 lg:pt-1">
            <ol className="relative m-0 list-none pl-10">
              {blockers.map((blocker, index) => {
                const isFirst = index === 0;
                const lineClass = isFirst
                  ? "top-[0.6875rem] bottom-0"
                  : "top-0 bottom-0";
                return (
                <li
                  key={blocker.title}
                  className={
                    index < blockers.length - 1 ? "relative pb-12" : "relative"
                  }
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute left-[calc(-2.5rem)] z-0 w-px -translate-x-1/2 bg-(--storia-black15) ${lineClass}`}
                  />
                  <span
                    aria-hidden
                    className="absolute top-1.5 left-[calc(-2.5rem)] z-1 size-2.5 -translate-x-1/2 rounded-full border-2 border-(--storia-green) bg-(--storia-beige)"
                  />
                  <article className="min-w-0">
                    <p className="font-sans text-[11px] font-semibold tracking-[0.14em] text-(--storia-green)">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-[17px] font-bold leading-snug text-(--storia-black)">
                      {blocker.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.65] text-(--storia-black75)">
                      {blocker.body}
                    </p>
                  </article>
                </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
