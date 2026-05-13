import stressedMan from "../../assets/stressedMan.png";

export const ToolsGapCallout = () => {
  return (
    <section
      id="tools-gap"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)]"
    >
      <div className="section-inner">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,0.55fr)] lg:gap-12 xl:gap-14">
          <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:max-w-none lg:text-left">
            <h2 className="text-[clamp(1.55rem,3.4vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-(--storia-black)">
              Monday doesn't map how stress shows up across your quarter.
            </h2>
            <p className="mt-5 text-[clamp(1rem,2.1vw,1.125rem)] leading-[1.45] text-(--storia-black75)">
              Notion doesn't surface the line you repeat before every hard call.
              <br />
              Dashboards don't tell you which weeks quietly drained you.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-[min(100%,300px)] lg:justify-self-end">
            <div className="overflow-hidden">
              <img
                src={stressedMan}
                alt="Person at a laptop looking stressed and deep in thought"
                className="w-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
