export const OriginStory = () => {
  return (
    <section className="section-shell bg-(--storia-coffee-light)">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="section-pill">For people in real life</p>
            <h2 className="mt-6 text-[clamp(2.2rem,4.6vw,2.75rem)] leading-[1.2] text-(--storia-black)">
              We built it because
              <br />
              we needed it ourselves.
            </h2>
            <div className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-(--storia-black75)">
              <p>
                "I kept journals for years. Notebooks full of thoughts, worries,
                and plans. But I couldn't see the patterns. I kept arriving at
                the same stuck places.
              </p>
              <p className="mt-6">
                When I found structured reflection - prompts that guided me,
                insights that connected my entries - everything started to
                shift. That's what Storia is built to give you."
              </p>
            </div>
            <div className="mt-5 max-w-[620px] text-right">
              <p className="text-[15px] text-(--storia-black)">
                - Elizabeth Uviebinené
              </p>
              <p className="mt-1 text-[15px] font-bold text-(--storia-black)">
                Founder, Storia For Work
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[430px]">
            <div className="relative aspect-4/5 w-full rounded-[32px] bg-[#E0D8CE] p-6">
              <div className="flex h-full items-center justify-center rounded-[24px] border border-(--storia-black15)">
                <p className="text-center text-[14px] text-(--storia-black50)">
                  Founder photo or illustration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
