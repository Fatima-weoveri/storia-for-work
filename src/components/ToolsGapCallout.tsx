export const ToolsGapCallout = () => {
  return (
    <section
      id="tools-gap"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)] bg-(--storia-coffee-light)"
    >
      <div className="section-inner mx-auto w-full max-w-[600px] text-center">
        <h2 className="text-[clamp(1.55rem,3.4vw,2.25rem)] leading-[1.2] tracking-[-0.02em] text-(--storia-black)">
          <span className="inline-block whitespace-nowrap">
            Monday doesn't map how stress shows up
          </span>
          <br />
          across your quarter.
        </h2>
        <p className="mt-5 text-[clamp(1rem,2.1vw,1.125rem)] leading-[1.45] text-(--storia-black75)">
          Notion doesn't surface the line you repeat before every hard call.
          <br />
          Dashboards don't tell you which weeks quietly drained you.
        </p>
      </div>
    </section>
  );
};
