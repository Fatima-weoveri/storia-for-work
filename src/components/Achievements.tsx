import appOfTheDayImg from "../../assets/appOfTheDay.png";
import globeImg from "../../assets/globe.png";

const stats: {
  value: string;
  label: string;
  visual:
    | { kind: "emoji"; emoji: string; className: string }
    | { kind: "image"; src: string; alt: string; className: string };
}[] = [
  {
    value: "40 Million+",
    label: "Words captured",
    visual: {
      kind: "emoji",
      emoji: "📖",
      className: "text-[4.5rem] leading-none sm:text-[5rem]",
    },
  },
  {
    value: "10×",
    label: "Apple App of the Day",
    visual: {
      kind: "image",
      src: appOfTheDayImg,
      alt: "Apple App of the Day",
      className:
        "max-h-16 w-auto max-w-[min(100%,8.5rem)] object-contain sm:max-h-[4.5rem] sm:max-w-[min(100%,10rem)]",
    },
  },
  {
    value: "60+",
    label: "Countries",
    visual: {
      kind: "image",
      src: globeImg,
      alt: "",
      className:
        "max-h-[5.25rem] w-auto max-w-[min(100%,11.5rem)] object-contain sm:max-h-[6.25rem] sm:max-w-[min(100%,13.5rem)]",
    },
  },
];

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="section-shell scroll-mt-[calc(var(--site-header-height)+1rem)]"
      aria-labelledby="achievements-heading"
    >
      <div className="section-inner">
        <h2
          id="achievements-heading"
          className="eyebrow-muted mb-4 text-center font-normal md:mb-5"
        >
          Achievements so far
        </h2>

        <div className="overflow-hidden rounded-[20px] bg-(--storia-blue75) px-6 py-10 shadow-(--storia-black15) sm:px-10 sm:py-12 md:px-12 md:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`text-center sm:px-6 ${
                  index < stats.length - 1
                    ? "border-b border-(--storia-black15) pb-10 sm:border-b-0 sm:border-r sm:pb-0"
                    : ""
                }`}
              >
                <div className="mb-4 flex h-22 items-center justify-center sm:h-26">
                  {item.visual.kind === "emoji" ? (
                    <span className={item.visual.className} aria-hidden>
                      {item.visual.emoji}
                    </span>
                  ) : (
                    <img
                      src={item.visual.src}
                      alt={item.visual.alt}
                      className={item.visual.className}
                      decoding="async"
                    />
                  )}
                </div>
                <p className="text-[clamp(2rem,5vw,2.5rem)] leading-none font-bold tracking-tight text-(--storia-black90)">
                  {item.value}
                </p>
                <p className="mt-3 text-[12px] leading-snug text-(--storia-black75)">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-12 max-w-208 border-t border-(--storia-black15) pt-10 text-center">
            <p className="text-[15px] leading-[1.65] text-(--storia-black75) italic md:text-[16px]">
              "A game changing consumer product"
            </p>
            <footer className="mt-4 text-[14px] leading-snug text-(--storia-black50) md:text-[15px]">
              — Apple Editorial Team on Elizabeth Uviebinené, Founder & CEO
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
