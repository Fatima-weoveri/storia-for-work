import { useEffect, useRef, useState } from "react";
import reflectImg from "../../assets/reflect.png";
import patternsImg from "../../assets/patterns.png";
import clarityImg from "../../assets/clarity.png";

const steps = [
  {
    n: "01",
    title: "Reflect with ease",
    body: "Drop in what happened today. Storia uses guided prompts so you never stare at a blank page and wonder where to begin.",
    image: reflectImg,
  },
  {
    n: "02",
    title: "See your patterns",
    body: "Storia identifies emotional and behavioral patterns across your entries so you can understand what's shaping your days.",
    image: patternsImg,
  },
  {
    n: "03",
    title: "Move forward with clarity",
    body: "Get grounded reflections and practical nudges that help you trust yourself, make better decisions, and stay consistent.",
    image: clarityImg,
  },
];

/** Pause after each card finishes entering before the next one starts. */
const STEP_GAP_MS = 320;

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  /** 0 = none visible; 1–3 = that many cards visible (left to right). */
  const [visibleCount, setVisibleCount] = useState(0);
  const sequenceStartedRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const clearTimers = () => {
      for (const id of timersRef.current) {
        window.clearTimeout(id);
      }
      timersRef.current = [];
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setVisibleCount(3);
      sequenceStartedRef.current = true;
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit || sequenceStartedRef.current) return;
        sequenceStartedRef.current = true;
        obs.disconnect();

        setVisibleCount(1);
        timersRef.current = [
          window.setTimeout(() => setVisibleCount(2), STEP_GAP_MS),
          window.setTimeout(() => setVisibleCount(3), STEP_GAP_MS * 2),
        ];
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimers();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)]"
    >
      <div className="section-inner max-w-[1024px]!">
        <div className="mb-4 flex justify-center md:mb-6">
          <p className="section-pill">How it works</p>
        </div>
        <p className="mx-auto max-w-[600px] text-center text-[17px] leading-[1.65] text-(--storia-black75)">
          A daily intelligence system that learns how they think, surfaces their
          patterns, and helps them make better decisions over time.
        </p>

        <div className="mt-4 md:mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 lg:gap-4 min-[1200px]:[&_h3]:whitespace-nowrap">
            {steps.map((step, index) => {
              const shown = visibleCount > index;
              return (
                <article
                  key={step.n}
                  className={`min-w-0 px-3 py-8 text-center motion-reduce:transition-none md:px-2 lg:px-4 ${
                    shown
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-3 opacity-0"
                  } transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
                >
                  <div className="mx-auto mb-5 flex h-32 items-center justify-center">
                    <img
                      src={step.image}
                      alt=""
                      className="max-h-full w-auto max-w-[min(100%,12rem)] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="mb-4 text-[24px] font-bold tracking-[-0.035em] text-(--storia-black90)">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-(--storia-black75)">
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
