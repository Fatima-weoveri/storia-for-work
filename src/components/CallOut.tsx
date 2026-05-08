export const CallOut = () => {
  return (
    <section className="px-6 py-16 md:px-[60px] md:py-24">
      <div
        className="mx-auto w-full max-w-[1100px] rounded-2xl px-8 py-16 md:px-16 md:py-20"
        style={{
          backgroundColor: "var(--storia-coffee)",
          borderRadius: "12px",
        }}
      >
        <p className="eyebrow">What this gives back</p>
        <h2
          className="em-blue mt-6 max-w-[820px] text-[32px] leading-[1.1] sm:text-[40px] md:text-[48px]"
          style={{ fontWeight: 500, letterSpacing: "-0.015em" }}
        >
          Clarity is{" "}
          <em
            style={{
              fontStyle: "italic",
              borderBottom: "2px solid var(--storia-blue)",
              paddingBottom: "1px",
            }}
          >
            performance advantage.
          </em>
        </h2>
        <p className="mt-8 max-w-[640px] text-[18px] leading-[1.6] text-(--storia-black75)">
          Better decisions. Cleaner priorities. Less reactive firefighting.
          Storia helps people protect focus and build momentum through
          consistent reflection, not guesswork.
        </p>
      </div>
    </section>
  );
};
