const blockers = [
  {
    icon: "⚡",
    title: "Thoughts loop without resolution",
    body: "Without prompts, reflection stays surface-level. You revisit the same worries without moving through them.",
  },
  {
    icon: "🔍",
    title: "Patterns stay invisible",
    body: "When entries are disconnected, you can't see what's actually shaping your moods, energy, and decisions.",
  },
  {
    icon: "🌿",
    title: "Progress feels hard to measure",
    body: "Without a structured layer, growth is hard to see - even when it's happening.",
  },
];

export const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-3rem)]"
    >
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
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
            <p className="mt-8 text-[16px] font-bold text-(--storia-black)">
              What happens when reflection doesn&apos;t go deep enough?
            </p>

            <div className="mt-6 space-y-4">
              {blockers.map((blocker) => (
                <article
                  key={blocker.title}
                  className="rounded-[14px] bg-(--storia-white50) p-5 shadow-[0_8px_24px_rgba(33,37,41,0.08)]"
                >
                  <div className="flex items-start gap-3">
                    <p className="shrink-0 text-xl leading-none" aria-hidden>
                      {blocker.icon}
                    </p>
                    <h3 className="min-w-0 text-[17px] font-bold leading-snug text-(--storia-black)">
                      {blocker.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.65] text-(--storia-black75)">
                    {blocker.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[420px] lg:mt-6">
            <div className="aspect-4/5 w-full rounded-[40px] bg-[#E8E0D4] p-6">
              <div className="flex h-full items-center justify-center rounded-[32px] border border-(--storia-black15)">
                <p className="text-center text-[14px] text-(--storia-black50)">
                  Illustration / 3D character
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
