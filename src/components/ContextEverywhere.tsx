import {
  useCallback,
  useId,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import sunnyHittingWall from "../../assets/sunnyHittingWall.gif";
import sunnyWithGlasses from "../../assets/sunnyWithGlasses.gif";

const SCATTERED_CONTEXT = [
  {
    emoji: "🌀",
    label: "Mental loops after meetings",
    motion: "hero-float-y",
    position:
      "top-[2%] left-0 max-w-[9.5rem] md:top-[2%] md:left-[6%] md:max-w-[200px]",
  },
  {
    emoji: "📉",
    label: "The week that drained you",
    motion: "hero-float-y--c",
    position:
      "top-[2%] right-0 max-w-[9.5rem] md:top-[2%] md:right-[6%] md:max-w-[200px]",
  },
  {
    emoji: "💭",
    label: "Stress before hard calls",
    motion: "hero-float-y--b",
    position:
      "top-[32%] left-0 max-w-[9.5rem] md:top-[36%] md:left-[0%] md:max-w-[200px]",
  },
  {
    emoji: "🔍",
    label: "Patterns buried across old entries",
    motion: "hero-float-y--b",
    position:
      "top-[34%] right-0 max-w-[9.5rem] md:top-[38%] md:right-[0%] md:max-w-[220px]",
  },
  {
    emoji: "😮‍💨",
    label: "Energy dips, unexplained",
    motion: "hero-float-y",
    position:
      "top-[-10%] left-1/2 max-w-[9.5rem] -translate-x-1/2 md:top-[-12%] md:max-w-[200px]",
  },
] as const;

const FLOAT_CHIP_CLASS =
  "context-chip pointer-events-none absolute flex max-w-[min(100%,220px)] items-center gap-1.5 text-left will-change-transform max-md:gap-1";

const GATHER_MS = 2200;
const GATHER_STAGGER_MS = 100;
const SPREAD_MS = 780;
const SPREAD_STAGGER_MS = 45;
const GATHER_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const resetChipStyles = (chip: HTMLDivElement) => {
  chip.style.transition = "";
  chip.style.transform = "";
  chip.style.opacity = "";
  chip.style.transitionDelay = "";
  chip.classList.remove("context-chip--animating");
};

export const ContextEverywhere = () => {
  const [withStoria, setWithStoria] = useState(false);
  const [digestVisible, setDigestVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleId = useId();

  const stageRef = useRef<HTMLDivElement>(null);
  const digestRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animatingRef = useRef(false);

  const runChipMotion = useCallback((gather: boolean) => {
    const stage = stageRef.current;
    const digest = digestRef.current;
    const chips = chipRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!stage || !digest || chips.length === 0) return;

    const stageRect = stage.getBoundingClientRect();
    const digestRect = digest.getBoundingClientRect();
    const targetX = digestRect.left + digestRect.width / 2 - stageRect.left;
    const targetY = digestRect.top + digestRect.height / 2 - stageRect.top;

    chips.forEach((chip, index) => {
      const chipRect = chip.getBoundingClientRect();
      const chipX = chipRect.left + chipRect.width / 2 - stageRect.left;
      const chipY = chipRect.top + chipRect.height / 2 - stageRect.top;
      const dx = targetX - chipX;
      const dy = targetY - chipY;
      const durationMs = gather ? GATHER_MS : SPREAD_MS;
      const staggerMs = gather ? GATHER_STAGGER_MS : SPREAD_STAGGER_MS;
      const delay = `${index * staggerMs}ms`;
      const ease = gather ? GATHER_EASE : "cubic-bezier(0.33, 1, 0.68, 1)";

      chip.classList.add("context-chip--animating");

      if (gather) {
        chip.style.transition = "none";
        chip.style.transform = "translate(0, 0) scale(1)";
        chip.style.opacity = "1";
        chip.style.transitionDelay = "";

        void chip.offsetWidth;

        chip.style.transition = `transform ${durationMs}ms ${ease} ${delay}, opacity ${durationMs * 0.55}ms ease ${Number.parseInt(delay, 10) + durationMs * 0.4}ms`;
        chip.style.transform = `translate(${dx}px, ${dy}px) scale(0.72)`;
        chip.style.opacity = "0";
      } else {
        chip.style.transition = "none";
        chip.style.transform = `translate(${dx}px, ${dy}px) scale(0.72)`;
        chip.style.opacity = "0";
        chip.style.transitionDelay = "";

        void chip.offsetWidth;

        chip.style.transition = `transform ${durationMs}ms ${ease} ${delay}, opacity ${durationMs * 0.45}ms ease ${delay}`;
        chip.style.transform = "translate(0, 0) scale(1)";
        chip.style.opacity = "1";
      }
    });
  }, []);

  const clearChipMotion = useCallback(() => {
    chipRefs.current.forEach((chip) => {
      if (chip) resetChipStyles(chip);
    });
  }, []);

  const handleToggle = () => {
    if (animatingRef.current) return;

    const next = !withStoria;

    if (prefersReducedMotion()) {
      setWithStoria(next);
      setDigestVisible(next);
      clearChipMotion();
      if (!next) {
        chipRefs.current.forEach((chip) => {
          if (chip) chip.style.opacity = "1";
        });
      } else {
        chipRefs.current.forEach((chip) => {
          if (chip) chip.style.opacity = "0";
        });
      }
      return;
    }

    animatingRef.current = true;
    setIsAnimating(true);

    if (next) {
      setWithStoria(true);
      setDigestVisible(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          runChipMotion(true);
          window.setTimeout(
            () => {
              setDigestVisible(true);
              animatingRef.current = false;
              setIsAnimating(false);
            },
            GATHER_MS + SCATTERED_CONTEXT.length * GATHER_STAGGER_MS,
          );
        });
      });
      return;
    }

    setWithStoria(false);
    setDigestVisible(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        runChipMotion(false);
        window.setTimeout(
          () => {
            clearChipMotion();
            animatingRef.current = false;
            setIsAnimating(false);
          },
          SPREAD_MS + SCATTERED_CONTEXT.length * SPREAD_STAGGER_MS,
        );
      });
    });
  };

  const onChipTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform" || withStoria) return;
    resetChipStyles(event.currentTarget);
  };

  const chipsHidden = withStoria && !isAnimating;

  return (
    <section
      id="context"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)] mt-4 md:mt-8"
    >
      <div
        ref={stageRef}
        className="section-inner relative mx-auto flex max-w-[920px] flex-col items-center justify-center px-3 text-center md:px-2"
      >
        {SCATTERED_CONTEXT.map((item, index) => (
          <div
            key={item.label}
            ref={(node) => {
              chipRefs.current[index] = node;
            }}
            onTransitionEnd={onChipTransitionEnd}
            className={`${item.motion} ${FLOAT_CHIP_CLASS} ${item.position} ${
              chipsHidden ? "invisible" : ""
            }`}
            aria-hidden={withStoria}
          >
            <span className="text-base leading-none" aria-hidden>
              {item.emoji}
            </span>
            <span className="text-[10px] leading-snug text-(--storia-black75) md:text-[12px]">
              {item.label}
            </span>
          </div>
        ))}

        <div className="relative z-10 mx-auto flex w-full max-w-[min(100%,280px)] flex-col items-center md:max-w-[640px]">
          <h2 className="context-hero-headline mt-8 text-balance text-[clamp(1.35rem,3.8vw,2.05rem)] leading-[1.4] tracking-[0.02em] text-(--storia-black) uppercase">
            Your mind is{" "}
            <span className="context-hero-underline">everywhere.</span> Storia
            makes sense of it.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <span
              className={`text-[12px] transition-colors duration-300 ${
                withStoria ? "text-(--storia-black50)" : "text-(--storia-black)"
              }`}
            >
              without Storia
            </span>
            <button
              type="button"
              id={toggleId}
              role="switch"
              aria-checked={withStoria}
              disabled={isAnimating}
              aria-label="Toggle between scattered work context and context unified with Storia"
              onClick={handleToggle}
              className={`relative h-6.5 w-[48px] shrink-0 rounded-full border border-(--storia-black15) transition-colors duration-300 shadow-(--storia-black15) ${
                withStoria ? "bg-(--storia-green)" : "bg-(--storia-black15)"
              }`}
            >
              <span
                className={`absolute top-1/2 size-5 -translate-y-1/2 rounded-full bg-(--storia-white) shadow-sm transition-[left] duration-300 ease-out ${
                  withStoria ? "left-[calc(100%-1.35rem)]" : "left-0.5"
                }`}
              />
            </button>
            <span
              className={`text-[12px] transition-colors duration-300 ${
                withStoria ? "text-(--storia-black)" : "text-(--storia-black50)"
              }`}
            >
              with Storia
            </span>
          </div>
          {/* <div
              ref={digestRef}
              className="flex size-11 items-center justify-center rounded-[10px] bg-(--storia-green)"
            >
              <img
                src={storiaIcon}
                alt=""
                className="h-6 w-6 object-contain brightness-0 invert"
              />
            </div> */}
          <div className="mt-10 flex flex-col items-center">
            <div ref={digestRef} className="flex justify-center">
              <img
                src={withStoria ? sunnyWithGlasses : sunnyHittingWall}
                alt={
                  withStoria
                    ? "Sunny with glasses, your mind connected"
                    : "Sunny hitting a wall, mind scattered"
                }
                className="h-24 w-auto object-contain sm:h-28"
              />
            </div>
            <p
              className={`mt-3 text-[12px] text-(--storia-black50) transition-opacity duration-500 ${
                digestVisible ? "context-digest-enter opacity-100" : "opacity-0"
              }`}
              aria-hidden={!digestVisible}
            >
              3,234 pieces of your mind connected
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
