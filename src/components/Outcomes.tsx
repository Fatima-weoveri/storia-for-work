const cards = [
  {
    stat: "2 weeks",
    body: "Most users notice a shift in how they think within two weeks of daily entries.",
    tone: "var(--storia-green30)",
    accent: "var(--storia-black75)",
    emoji: "🌅",
  },
  {
    stat: "80%",
    body: "Of Storia users report feeling less caught in mental loops after 30 days of consistent use.",
    tone: "var(--storia-green30)",
    accent: "var(--storia-black75)",
    emoji: "🌀",
  },
  {
    stat: "3x",
    body: "People who reflect with structure make decisions with more confidence than those journaling freely.",
    tone: "var(--storia-green30)",
    accent: "var(--storia-black75)",
    emoji: "🎯",
  },
];

export const Outcomes = () => {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <h2 className="mx-auto max-w-[780px] text-center text-[clamp(2.1rem,4vw,2.5rem)] leading-[1.2] text-(--storia-black)">
          What consistent reflection actually does.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.stat}
              className="rounded-[20px] border-[0.5px] border-solid border-(--storia-black15) p-8 text-center shadow-[0_10px_28px_rgba(33,37,41,0.1)]"
              style={{ backgroundColor: card.tone }}
            >
              <p className="text-[42px] leading-none font-bold md:text-[48px] opacity-90">
                {card.emoji}
              </p>
              <p
                className="mt-4 text-[42px] leading-none font-bold md:text-[48px]"
                style={{
                  color: card.accent,
                  fontFamily: "Fraunces, serif",
                }}
              >
                {card.stat}
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] text-(--storia-black75)">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[12px] italic text-(--storia-black50)">
          *Outcomes based on early user feedback and structured reflection
          research.
        </p>
      </div>
    </section>
  );
};
