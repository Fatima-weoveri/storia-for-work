export const TimeReclaimedBanner = () => {
  return (
    <section
      id="time-reclaimed"
      className="relative scroll-mt-[calc(var(--site-header-height)-2rem)] overflow-hidden bg-(--storia-darkgreen) px-6 py-16 text-white md:px-12 md:py-20 lg:px-[60px]"
      aria-labelledby="time-reclaimed-heading"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(45%,20rem)] bg-linear-to-r from-(--storia-green)/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(45%,20rem)] bg-linear-to-l from-(--storia-blue)/15 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        <h2
          id="time-reclaimed-heading"
          className="max-w-[min(100%,920px)] text-[clamp(1.85rem,4.6vw,3.15rem)] leading-[1.08] font-medium tracking-[-0.02em] text-white"
        >
          <em className="font-[Fraunces,serif] italic text-(--storia-green)">
            5+ hours
          </em>{" "}
          reclaimed for deep work.
        </h2>

        <p className="mt-6 max-w-[min(100%,660px)] text-[15px] leading-[1.65] text-white/75 md:text-[16px] md:leading-[1.7]">
          Attention does not only disappear in meetings—it leaks into inbox
          triage, context switching, and the low hum of always-on work tools.
          With Storia, some of that focus is reclaimed: short check-ins and
          Sunny-backed pattern glimpses steer it toward what you intend to
          build, not whatever pinged last.
        </p>
      </div>
    </section>
  );
};
