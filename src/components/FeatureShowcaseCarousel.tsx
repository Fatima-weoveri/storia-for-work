import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties, TransitionEvent } from "react";
import featureCommunity from "../../assets/featureCommunity.png";
import featureEcho from "../../assets/featureEcho.png";
import featureInsights from "../../assets/featureInsights.png";
import featureWeeklyReview from "../../assets/featureWeeklyReview.png";

const SLIDES = [
  {
    image: featureEcho,
    title: "The Echo",
    description:
      "Past entries resurface with short AI reflections so you can spot the thread.",
    imageAlt: "The Echo screen showing a reflective journal reply",
  },
  {
    image: featureInsights,
    title: "Insights",
    description:
      "See moods, habits, and quiet wins in AI reflections built from your entries.",
    imageAlt: "Insights tab showing life arc and pattern highlights",
  },
  {
    image: featureCommunity,
    title: "Member connections",
    description: "Message and swap ideas in a private space for your people.",
    imageAlt: "Community growth feed with shared reflections",
  },
  {
    image: featureWeeklyReview,
    title: "Weekly review",
    description:
      "A warm recap of your week—what moved, what stuck, what’s next.",
    imageAlt: "Weekly review card with a playful headline",
  },
] as const;

const SLIDE_COUNT = SLIDES.length;

/** Clone last + all + clone first — infinite loop without reverse scrub. */
const EXTENDED_SLIDES = [
  SLIDES[SLIDE_COUNT - 1],
  ...SLIDES,
  SLIDES[0],
] as const;
const EXTENDED_COUNT = EXTENDED_SLIDES.length;
const TRACK_PERCENT_PER_SLIDE = 100 / EXTENDED_COUNT;

/** Width of side ghost phones; overlap uses the same value in calc(). */
const FEATURE_SHELL_W = "clamp(6.75rem, 25vw, 12rem)";
/** Fraction of each side shell width tucked under the center phone. */
const SHELL_UNDERLAP = 0.6;

const clusterShellStyle = {
  "--feature-shell-w": FEATURE_SHELL_W,
} as CSSProperties;

/** Decorative phone behind the hero; ~60% of width sits under center via negative margin. */
const SidePhoneShell = ({ side }: { side: "left" | "right" }) => (
  <div
    className="pointer-events-none z-0 w-(--feature-shell-w) shrink-0 opacity-20"
    style={
      side === "left"
        ? { marginRight: `calc(var(--feature-shell-w) * ${-SHELL_UNDERLAP})` }
        : { marginLeft: `calc(var(--feature-shell-w) * ${-SHELL_UNDERLAP})` }
    }
    aria-hidden
  >
    <div className="aspect-9/19.5 rounded-[1.35rem] border-[5px] border-white bg-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] sm:rounded-4xl sm:border-[6px]"></div>
  </div>
);

export const FeatureShowcaseCarousel = () => {
  const reduceMotion = useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const [slideIndex, setSlideIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const slideIndexRef = useRef(1);
  slideIndexRef.current = slideIndex;

  const [autoAdvanceKey, setAutoAdvanceKey] = useState(0);

  const bumpAutoAdvance = () => setAutoAdvanceKey((k) => k + 1);

  const goNext = () => {
    setSlideIndex((i) => Math.min(i + 1, EXTENDED_COUNT - 1));
    bumpAutoAdvance();
  };

  const goPrev = () => {
    setSlideIndex((i) => Math.max(i - 1, 0));
    bumpAutoAdvance();
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((i) => Math.min(i + 1, EXTENDED_COUNT - 1));
    }, 2000);
    return () => window.clearInterval(id);
  }, [autoAdvanceKey]);

  useEffect(() => {
    if (!reduceMotion) return;
    if (slideIndex === EXTENDED_COUNT - 1) {
      setSlideIndex(1);
    } else if (slideIndex === 0) {
      setSlideIndex(SLIDE_COUNT);
    }
  }, [slideIndex, reduceMotion]);

  const handleLoopTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (reduceMotion || e.propertyName !== "transform") return;
    const i = slideIndexRef.current;
    if (i !== EXTENDED_COUNT - 1 && i !== 0) return;

    const next = i === EXTENDED_COUNT - 1 ? 1 : SLIDE_COUNT;
    setEnableTransition(false);
    slideIndexRef.current = next;
    setSlideIndex(next);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setEnableTransition(true);
      });
    });
  };

  const trackStyle = {
    width: `${EXTENDED_COUNT * 100}%`,
    transform: `translateX(-${slideIndex * TRACK_PERCENT_PER_SLIDE}%)`,
  } as const;

  const slideBasis = `${TRACK_PERCENT_PER_SLIDE}%`;

  const transitionClass = enableTransition
    ? "ease-out motion-safe:transition-transform motion-safe:duration-500 motion-reduce:transition-none"
    : "transition-none duration-0";

  return (
    <section
      className="section-shell justify-center bg-(--storia-black) text-white min-h-[calc(100vh-var(--site-header-height))]"
      aria-label="App features"
    >
      <div className="section-inner">
        <div className="mx-auto flex w-full flex-col items-center gap-2 lg:max-w-[min(100%,960px)] lg:flex-row lg:items-center lg:justify-center lg:gap-2">
          {/* Phone cluster: ghost frames (underlap center) + carousel */}
          <div
            className="relative flex w-full max-w-[min(100%,580px)] shrink-0 items-center justify-center"
            style={clusterShellStyle}
          >
            <SidePhoneShell side="left" />
            <div className="relative z-10 w-full min-w-0 max-w-[240px] shrink-0 overflow-hidden sm:max-w-[256px]">
              <div
                className={`flex ${transitionClass}`}
                style={trackStyle}
                onTransitionEnd={handleLoopTransitionEnd}
              >
                {EXTENDED_SLIDES.map((slide, idx) => (
                  <div
                    key={`phone-${idx}`}
                    className="flex shrink-0 justify-center px-2"
                    style={{ flex: `0 0 ${slideBasis}` }}
                  >
                    <div className="relative w-full">
                      <div
                        className="pointer-events-none absolute top-3 left-1/2 z-10 h-5 w-[28%] -translate-x-1/2 rounded-full bg-[#1a1a1a]"
                        aria-hidden
                      />
                      <div className="overflow-hidden rounded-[1.65rem]">
                        <img
                          src={slide.image}
                          alt={slide.imageAlt}
                          className="aspect-9/19.5 w-full object-contain object-top"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SidePhoneShell side="right" />
          </div>

          {/* Copy + controls */}
          <div className="flex min-h-[200px] w-full max-w-[min(100%,480px)] shrink-0 flex-col justify-center lg:max-w-[440px]">
            <div className="relative min-h-9.5rem overflow-hidden sm:min-h-8rem">
              <div
                className={`flex ${transitionClass}`}
                style={trackStyle}
                onTransitionEnd={handleLoopTransitionEnd}
              >
                {EXTENDED_SLIDES.map((slide, idx) => (
                  <div
                    key={`copy-${idx}`}
                    className="shrink-0 px-1"
                    style={{ flex: `0 0 ${slideBasis}` }}
                  >
                    <h2 className="text-[clamp(1.45rem,3.2vw,2.15rem)] leading-[1.1] font-medium tracking-tight text-white">
                      {slide.title}
                    </h2>
                    <p
                      className="mt-4 max-w-[440px] text-[17px] leading-[1.55] text-white/80"
                      aria-live="polite"
                    >
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/50 hover:bg-white/10"
                aria-label="Previous feature"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white/50 hover:bg-white/10"
                aria-label="Next feature"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
