import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";

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
    role: "Freelance Designer",
    image: testimonial2,
  },
  {
    quote:
      "Storia is the first app where I actually understand myself better after a month. Seeing my patterns spelled out made it easier to change small habits that were draining me.",
    name: "Sofia R.",
    role: "Early user",
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
    <section className="section-shell overflow-x-clip bg-(--storia-coffee-light)">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 z-0 h-[min(55vw,320px)] w-[min(55vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--storia-blue) opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 z-0 h-[min(50vw,300px)] w-[min(50vw,300px)] translate-x-1/2 -translate-y-1/2 rounded-full bg-(--storia-green) opacity-30 blur-3xl"
      />

      <div className="relative z-1 flex min-h-0 w-full flex-1 flex-col justify-center">
        <div className="section-inner w-full">
          <div className="mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
            <h2 className="font-[Fraunces,serif] text-[clamp(1.75rem,3.6vw,2.35rem)] leading-[1.2] font-semibold tracking-[-0.02em] text-(--storia-black)">
              What people are saying.
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
                  <p className="mx-auto max-w-[640px] font-[Fraunces,serif] text-[clamp(1.05rem,2.1vw,1.3rem)] leading-[1.75] font-normal text-(--storia-black) italic">
                    &quot;{slides[active].quote}&quot;
                  </p>
                  <div className="mt-7 flex justify-center">
                    <div className="flex items-center gap-3">
                      <img
                        src={slides[active].image}
                        alt=""
                        width={48}
                        height={48}
                        className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-(--storia-black15)"
                      />
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
                  className="cursor-pointer rounded-full p-1 text-(--storia-black) transition-colors hover:text-(--storia-orange)"
                  onClick={() => cycle(-1)}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={28} strokeWidth={1.5} aria-hidden />
                </button>
                <button
                  type="button"
                  className="cursor-pointer rounded-full p-1 text-(--storia-black) transition-colors hover:text-(--storia-orange)"
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
                      index === active ? "bg-(--storia-orange)" : "bg-[#D0C8C0]"
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
