const stats: { value: string; accent?: string; label: string }[] = [
  {
    value: "40M",
    accent: "+",
    label: "Words captured",
  },
  {
    value: "10",
    accent: "×",
    label: "Apple App of the Day",
  },
  {
    value: "60",
    label: "Countries",
  },
];

export const Achievements = () => {
  return (
    <section className="section-shell" aria-labelledby="achievements-heading">
      <div className="section-inner">
        <h2
          id="achievements-heading"
          className="eyebrow-muted mb-4 text-center font-normal md:mb-5"
        >
          Achievements so far
        </h2>

        <div className="overflow-hidden rounded-[20px] bg-(--storia-darkgreen) px-6 py-10 shadow-[0_8px_40px_rgba(39,74,58,0.35)] sm:px-10 sm:py-12 md:px-12 md:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`text-center sm:px-6 ${
                  index < stats.length - 1
                    ? "border-b border-(--storia-white15) pb-10 sm:border-b-0 sm:border-r sm:pb-0"
                    : ""
                }`}
              >
                <p className="text-[clamp(2.25rem,5vw,3rem)] leading-none font-bold tracking-tight text-(--storia-white)">
                  {item.value}
                  {item.accent !== undefined ? (
                    <span className="ml-0.5 text-(--storia-green)">{item.accent}</span>
                  ) : null}
                </p>
                <p className="mt-3 text-[13px] leading-snug text-(--storia-white50)">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mx-auto mt-12 max-w-208 border-t border-(--storia-white15) pt-10 text-center">
            <p className="text-[15px] leading-[1.65] text-(--storia-white50) italic md:text-[16px]">
              &ldquo;One of 7 women building some of the world&rsquo;s most
              exciting AI consumer products&rdquo;
            </p>
            <footer className="mt-4 text-[14px] leading-snug font-semibold text-(--storia-white) md:text-[15px]">
              — Apple Editorial Team on Elizabeth Uviebinené, Founder &amp; CEO
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
