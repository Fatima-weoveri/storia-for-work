import * as React from "react";

const steps = [
  {
    n: "01",
    title: "Reflect in minutes",
    body: "Short guided prompts turn mental noise into signal. No blank page. No overthinking where to start.",
  },
  {
    n: "02",
    title: "Spot patterns early",
    body: "Storia identifies recurring themes across entries, so individuals and teams can see what is helping, what is draining energy, and what keeps repeating.",
  },
  {
    n: "03",
    title: "Act with intention",
    body: "Use the insight to adjust habits, priorities, and communication before small issues become bigger performance and wellbeing costs.",
  },
];

export const HowItWorks = () => {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [showSteps, setShowSteps] = React.useState(false);

  React.useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSteps(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="px-6 py-24 md:px-[60px] md:py-32"
      style={{ borderTop: "1px solid var(--ink-15)" }}
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <p className="eyebrow">How it works</p>
        <h2
          className="mt-6 max-w-[720px] text-[32px] leading-[1.1] sm:text-[40px] md:text-[46px]"
          style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
        >
          A simple rhythm for better workdays.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {steps.map((s, index) => (
            <div
              key={s.n}
              style={{
                opacity: showSteps ? 1 : 0,
                transform: showSteps ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 520ms ease-out ${index * 500}ms, transform 520ms ease-out ${index * 500}ms`,
              }}
            >
              <div
                className="font-display text-[64px] leading-none md:text-[72px]"
                style={{
                  fontFamily: "Fraunces, serif",
                  color: "var(--storia-black50)",
                  fontWeight: 500,
                }}
              >
                {s.n}
              </div>
              <div
                className="mt-5 h-[2px] w-10"
                style={{ backgroundColor: "var(--storia-black15)" }}
              />
              <p className="mt-5 text-[20px] font-medium">{s.title}</p>
              <p className="mt-3 text-[16px] leading-[1.6] text-(--storia-black75)">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
