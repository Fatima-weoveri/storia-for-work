export const SiteFooter = () => {
  return (
    <footer className="bg-(--storia-beige)">
      <div className="border-t border-(--storia-black15) bg-(--storia-coffee-light)">
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
    </footer>
  );
};
