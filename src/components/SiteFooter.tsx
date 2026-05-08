import { Mail } from "lucide-react";
import { ButtonComponent } from "~/components/ButtonComponent";

export const SiteFooter = () => {
  return (
    <section id="contact" className="bg-(--storia-beige)">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-24 md:px-[60px] md:py-28">
        <p className="eyebrow">LET&apos;S BUILD BETTER WORK RHYTHMS</p>
        <h2
          className="mt-5 max-w-[780px] text-[40px] leading-[1.12] md:text-[54px]"
          style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
        >
          Start with <em className="italic">one team, one month</em>.
        </h2>
        <p className="mt-7 max-w-[700px] text-[16px] leading-[1.6] text-(--storia-black75)">
          We work with teams and professionals who want practical systems for
          clarity, growth, and sustainable performance at work.
        </p>
        <ButtonComponent
          href="mailto:hello@storia.world"
          icon={<Mail size={14} strokeWidth={1.8} aria-hidden />}
          className="mt-9 px-5"
        >
          Email us
        </ButtonComponent>
      </div>
      <div className="border-t border-(--storia-black15) bg-(--storia-coffee)">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-7 md:px-[60px]">
          <div className="grid gap-5 text-[13px] text-(--storia-black75) md:grid-cols-[1fr_auto_1fr] md:items-center">
            <p className="font-medium text-(--storia-black)">Storia</p>
            <p className="flex flex-wrap items-center justify-start gap-8 md:justify-center">
              <a href="#how-it-works">How it works</a>
              <a href="#manifesto">Manifesto</a>
              <a href="#">Privacy</a>
              <a href="#contact">Contact</a>
            </p>
            <p
              className="md:text-right"
              style={{ fontFamily: "Fraunces, serif", fontStyle: "italic" }}
            >
              Reflect clearly. Work intentionally.
            </p>
          </div>
          <p className="mt-6 text-[13px] text-(--storia-black50)">
            © 2026 Storia
          </p>
        </div>
      </div>
    </section>
  );
};
