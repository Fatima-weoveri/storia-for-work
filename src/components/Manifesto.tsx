export const Manifesto = () => {
  return (
    <section id="manifesto" className="bg-(--storia-beige)">
      <div className="mx-auto max-w-[1240px] px-6 py-20 md:px-[60px] md:py-28">
        <div className="mx-auto max-w-[680px] text-center">
          <p className="text-[11px] font-medium tracking-[0.13em] text-(--storia-black75)">
            WHY STORIA FOR WORK EXISTS
          </p>
          <h2 className="mt-6 text-[clamp(2.375rem,4vw,3rem)] leading-[1.12] font-medium">
            Most tools track output. Very few improve how people think.
          </h2>
          <div className="mt-8 space-y-6 text-center text-[17px] leading-[1.55] text-(--storia-black75)">
            <p>
              The real bottleneck at work is rarely effort. It is unclear
              thinking under pressure.
            </p>
            <p>
              Days blur. Context switches pile up. Teams repeat avoidable
              patterns because no one has a clear mirror of what is actually
              happening.
            </p>
            <p>
              Storia for Work brings structured reflection into the workflow so
              people gain clarity, teams notice patterns earlier, and progress
              becomes deliberate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
