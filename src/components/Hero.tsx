import { ArrowRight, Mail } from "lucide-react";
import heroImage from "../../assets/workingSunny.png";
import { ButtonComponent } from "~/components/ButtonComponent";

export const Hero = () => {
  return (
    <section className="hero-texture relative bg-(--storia-coffee-light)">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-[60px] md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] font-medium tracking-[0.13em] text-(--storia-black75)">
              FOR PEOPLE AND TEAMS WHO DO THEIR BEST WORK ON PURPOSE
            </p>
            <h1 className="mt-6 max-w-[840px] text-[clamp(2.45rem,4vw,3.6rem)] leading-[1.05] font-medium lg:whitespace-nowrap">
              You can&apos;t outrun your
              <br />
              mind. But you can{" "}
              <em className="italic text-(--storia-blue)">
                learn <br />
                its rhythm
              </em>{" "}
              at work
            </h1>
            <p className="mt-8 max-w-[720px] text-[18px] leading-[1.55] text-(--storia-black75)">
              Storia for Work helps professionals and teams reflect clearly,
              spot patterns early, and move from reactive days to intentional
              progress.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonComponent
                href="mailto:hello@storia.world"
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
          <div className="mx-auto w-full max-w-[440px] lg:self-end lg:translate-x-12">
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
