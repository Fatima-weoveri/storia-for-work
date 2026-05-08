import { MessageCircle } from "lucide-react";
import { ButtonComponent } from "~/components/ButtonComponent";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-(--storia-black15) bg-(--storia-beige)/95 backdrop-blur-[2px]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-[60px]">
        <a href="/" className="text-[15px] leading-none tracking-[0.01em]">
          <span className="font-medium">Storia</span>
        </a>
        <nav className="hidden items-center gap-8 text-[13px] text-(--storia-black75) md:flex">
          <a href="#how-it-works">How it works</a>
          <a href="#manifesto">Manifesto</a>
          <a href="#contact">Contact</a>
        </nav>
        <ButtonComponent
          href="mailto:hello@storia.world"
          icon={<MessageCircle size={16} strokeWidth={1.75} aria-hidden />}
        >
          Talk to us
        </ButtonComponent>
      </div>
    </header>
  );
};
