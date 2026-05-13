import { ArrowRight, Mail } from "lucide-react";
import heroImage from "../../assets/stressedWoman.png";
import { ButtonComponent } from "~/components/ButtonComponent";

const HERO_FLOAT_BADGES = [
  {
    label: "Burnout spotted",
    dot: "bg-(--storia-black50)",
    motion: "hero-float-y",
    position: "top-[2%] left-[-2%] z-10 sm:left-[-6%]",
  },
  {
    label: "Stress mapped",
    dot: "bg-(--storia-orange)",
    motion: "hero-float-y--b",
    position: "top-[20%] right-[-8%] z-10 sm:right-[-12%]",
  },
  {
    label: "Fatigue",
    dot: "bg-(--storia-blue)",
    motion: "hero-float-y--c",
    position: "top-[48%] left-[-4%] z-10 sm:left-[-20%]",
  },
  {
    label: "Deadline crunch ",
    dot: "bg-(--storia-yellow)",
    motion: "hero-float-y",
    position: "bottom-[10%] left-[-3%] z-10 sm:left-[-8%]",
  },
  {
    label: "Overwhelm",
    dot: "bg-(--storia-green)",
    motion: "hero-float-y--b",
    position: "bottom-[26%] right-[-8%] z-10 sm:right-[-20%]",
  },
] as const;

const FLOAT_PILL_CLASS =
  "pointer-events-none absolute flex max-w-[calc(100%-1rem)] items-center gap-1.5 rounded-full border border-(--storia-black15) bg-(--storia-white)/90 px-2.5 py-1 shadow-[0_10px_28px_-6px_rgba(33,37,41,0.14)] backdrop-blur-sm sm:px-3";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)] bg-(--storia-coffee-light) "
    >
      <div
        className="hero-texture pointer-events-none absolute inset-0 z-0"
        aria-hidden
      />
      <div className="section-inner">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h1 className="mt-6 max-w-[840px] text-[clamp(2.45rem,4vw,3.6rem)] leading-[1.05] font-medium">
              Supported people.
            </h1>
            <h1 className="mt-6 max-w-[840px] text-[clamp(2.45rem,4vw,3.6rem)] leading-[1.05] font-medium text-(--storia-green)">
              Better business.
            </h1>
            <p className="mt-8 max-w-[720px] text-[18px] leading-[1.55] text-(--storia-black75)">
              Storia for Work helps professionals and teams reflect clearly,
              spot patterns early, and move from reactive days to intentional
              progress.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonComponent
                href="#contact"
                icon={<Mail size={16} strokeWidth={1.75} aria-hidden />}
              >
                Contact us
              </ButtonComponent>
              <ButtonComponent
                href="#how-it-works"
                variant="secondary"
                icon={<ArrowRight size={16} strokeWidth={1.75} aria-hidden />}
              >
                See how it works
              </ButtonComponent>
            </div>
          </div>
          <div className="relative isolate mx-auto w-full max-w-[min(100%,380px)] overflow-visible pb-6 pt-2 lg:max-w-[400px] lg:self-end lg:translate-x-12">
            {HERO_FLOAT_BADGES.map((badge) => (
              <div
                key={badge.label}
                className={`${badge.motion} ${FLOAT_PILL_CLASS} ${badge.position}`}
                aria-hidden
              >
                <span
                  className={`size-2 shrink-0 rounded-full ${badge.dot}`}
                  aria-hidden
                />
                <span className="font-sans text-[9px] font-medium tracking-[0.11em] text-(--storia-black75) uppercase sm:text-[10px]">
                  {badge.label}
                </span>
              </div>
            ))}
            <img
              src={heroImage}
              alt="Character working at a desk with a laptop"
              className="relative z-0 h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
