import founderPhoto from "../../assets/founder.jpeg";
import sunnyThoughts from "../../assets/sunnyThoughts.png";

export const OriginStory = () => {
  return (
    <section
      id="our-story"
      className="section-shell scroll-mt-[calc(var(--site-header-height)-2rem)] bg-(--storia-coffee-light)"
    >
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
            <div className="mt-5 max-w-[620px]">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <img
                  src={sunnyThoughts}
                  alt="Illustration of Sunny reflecting: from scattered notes to intentional progress"
                  className="h-auto w-[min(70%,240px)] max-h-[200px] shrink-0 object-contain object-bottom sm:w-[min(70%,240px)] sm:max-h-[200px]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0 text-right">
                  <p className="text-[15px] text-(--storia-black)">
                    - Elizabeth Uviebinené
                  </p>
                  <p className="mt-1 text-[15px] font-bold text-(--storia-black)">
                    Founder, Storia For Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[430px]">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[32px] border border-(--storia-black15)">
              <img
                src={founderPhoto}
                alt="Elizabeth Uviebinené, founder of Storia For Work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
