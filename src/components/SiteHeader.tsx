import storiaLogo from "../../assets/icon.png";
import { ButtonComponent } from "~/components/ButtonComponent";

export const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 box-border min-h-(--site-header-height) border-b border-(--storia-black15) bg-(--storia-beige)/95 backdrop-blur-[2px]">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-[60px]">
        <a href="/" className="inline-flex items-center leading-none">
          <img src={storiaLogo} alt="Storia" className="h-4 w-auto md:h-5" />
        </a>
        <nav className="hidden max-w-[min(100%,720px)] flex-wrap items-center justify-end gap-x-5 gap-y-2 text-[12px] text-(--storia-black75) lg:max-w-none lg:gap-x-6 lg:text-[13px] xl:flex-nowrap md:flex">
          <a href="#problem">Why Storia</a>
          <a href="#meet-the-agent">Meet Sunny</a>
          <a href="#how-it-works">How it works</a>
          <a href="#our-story">Our story</a>
          <a href="#achievements">Achievements</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <ButtonComponent href="#contact" icon={null}>
          Work with us
        </ButtonComponent>
      </div>
    </header>
  );
};
