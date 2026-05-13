import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";

const slides = [
  {
    quote:
      "I used to write in a journal and feel like I was just venting into a void. Storia helped me see that I kept overcommitting every Sunday and that one insight changed my whole week.",
    name: "Mariam K.",
    role: "Product Manager",
    image: testimonial1,
  },
  {
    quote:
      "The nudges feel like something a wise friend would say. They show up when I'm spiralling and gently point me back to what actually matters without making me feel like I'm doing it wrong.",
    name: "Jess T.",
    role: "UI/UX Designer",
    image: testimonial2,
  },
  {
    quote:
      "Storia is the first app where I actually understand myself better after a month. Seeing my patterns spelled out made it easier to change small habits that were draining me.",
    name: "Sofia R.",
    role: "Content Writer",
    image: testimonial3,
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const cycle = (step: 1 | -1) => {
    if (isAnimating) return;
    setDirection(step);
    setIsAnimating(true);

    window.setTimeout(() => {
      setActive((prev) => (prev + step + slides.length) % slides.length);
      setIsAnimating(false);
    }, 180);
  };

  return (
    <section
      id="testimonials"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)] overflow-x-clip bg-(--storia-coffee-light)"
    >
      <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col justify-center">
        {/* Edge clouds — same vertical frame as content; left ≈ quote band, right lower (ref ss) */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[16%] left-[-52px] z-0 -translate-y-1/2"
        >
          <div className="relative inline-block -translate-x-1/2">
            <img
              src={cloud2}
              alt=""
              decoding="async"
              className="relative z-0 block h-24 w-auto object-contain"
            />
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute top-[90%] right-[-24px] z-0 flex -translate-y-1/2 justify-end"
        >
          <img
            src={cloud1}
            alt=""
            decoding="async"
            className="block h-22 w-auto translate-x-1/2 object-contain object-bottom"
          />
        </div>

        <div className="section-inner relative z-10 w-full">
          <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
            <h2 className="font-[Fraunces,serif] text-[clamp(1.75rem,3.6vw,2.35rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-(--storia-black)">
              What people are saying
            </h2>

            <div className="mt-10 w-full sm:mt-12">
              <div className="overflow-hidden">
                <article
                  className="transition-all duration-300 ease-out"
                  style={{
                    opacity: isAnimating ? 0 : 1,
                    transform: isAnimating
                      ? `translateX(${direction === 1 ? "-12px" : "12px"})`
                      : "translateX(0)",
                  }}
                >
                  <p className="mx-auto max-w-[640px] text-[clamp(1.05rem,2.1vw,1.3rem)] leading-[1.75] font-normal text-(--storia-black)">
                    “{slides[active].quote}”
                  </p>
                  <div className="mt-7 flex justify-center">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-(--storia-black15)">
                        {slides.map((slide, index) => (
                          <img
                            key={slide.name}
                            src={slide.image}
                            alt=""
                            width={48}
                            height={48}
                            loading="eager"
                            decoding="async"
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-150 ease-out ${
                              index === active
                                ? "z-10 opacity-100"
                                : "z-0 opacity-0"
                            }`}
                            aria-hidden={index !== active}
                          />
                        ))}
                      </div>
                      <div className="text-left">
                        <p className="text-[15px] font-semibold text-(--storia-black)">
                          {slides[active].name}
                        </p>
                        <p className="mt-0.5 text-[13px] text-(--storia-black50)">
                          {slides[active].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <div className="mt-7 flex items-center justify-center gap-10">
                <button
                  type="button"
                  className="cursor-pointer rounded-full p-1 text-(--storia-black) transition-colors hover:text-(--storia-green)"
                  onClick={() => cycle(-1)}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={28} strokeWidth={1.5} aria-hidden />
                </button>
                <button
                  type="button"
                  className="cursor-pointer rounded-full p-1 text-(--storia-black) transition-colors hover:text-(--storia-green)"
                  onClick={() => cycle(1)}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={28} strokeWidth={1.5} aria-hidden />
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2.5">
                {slides.map((slide, index) => (
                  <button
                    key={slide.name}
                    type="button"
                    onClick={() => {
                      if (index === active || isAnimating) return;
                      setDirection(index > active ? 1 : -1);
                      setIsAnimating(true);
                      window.setTimeout(() => {
                        setActive(index);
                        setIsAnimating(false);
                      }, 180);
                    }}
                    className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                      index === active
                        ? "bg-(--storia-green)"
                        : "bg-(--storia-black15)"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
