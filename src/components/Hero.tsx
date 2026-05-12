import { ArrowRight, Mail } from "lucide-react";
import heroImage from "../../assets/thinkingSunny.png";
import { ButtonComponent } from "~/components/ButtonComponent";

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
          <div className="mx-auto w-full max-w-[340px] lg:self-end lg:translate-x-12">
            <img
              src={heroImage}
              alt="Character working at a desk with a laptop"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
