import { Check } from "lucide-react";

/** Dark forest + mint palette for this section (distinct from UI accent green). */
const forest = "var(--storia-darkgreen)";
const mint = "var(--storia-green50)";

type Tier = {
  optionLabel: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  variant: "light" | "dark";
};

const tiers: Tier[] = [
  {
    optionLabel: "Option 1",
    title: "Partnership Access",
    badge: "Fastest to launch",
    description:
      "Employees download Storia directly. Full app experience, branded to your partnership. Live within days. No setup fee. No IT project.",
    features: [
      "No setup fee",
      "Live in days — no IT involvement",
      "All features: check-in, forecast, insights, community",
      "Quarterly engagement report included",
      "Onboarding support included",
      "Volume discounts from 250 seats",
    ],
    variant: "light",
  },
  {
    optionLabel: "Option 2",
    title: "White Label",
    badge: "For larger organisations",
    description:
      "A fully branded app under your name. Your logo, your App Store listing. Employees never need to know who built it.",
    features: [
      "Your brand throughout — iOS & Android",
      "Custom prompts & content channels",
      "Feature toggles: community, gamification",
      "Dedicated implementation support",
      "Ready to launch in 6-8 weeks",
    ],
    variant: "dark",
  },
];

function PricingCard({ tier }: { tier: Tier }) {
  const isLight = tier.variant === "light";

  return (
    <article
      className="flex flex-col rounded-[20px] p-6 md:p-7"
      style={{
        backgroundColor: isLight ? mint : forest,
        color: isLight ? undefined : "#fff",
      }}
    >
      <p
        className="text-[10px] font-medium tracking-[0.12em] uppercase"
        style={{
          color: isLight ? "var(--storia-black50)" : "rgba(255,255,255,0.65)",
        }}
      >
        {tier.optionLabel}
      </p>
      <h3
        className="mt-2.5 text-[clamp(1.2rem,2.2vw,1.45rem)] leading-[1.12]"
        style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 600,
          color: isLight ? "var(--storia-black)" : "#fff",
        }}
      >
        {tier.title}
      </h3>
      <p
        className={`mt-2.5 inline-flex w-fit rounded-full px-2.5 py-1 text-[9px] font-semibold tracking-widest text-white uppercase ${
          isLight ? "bg-(--storia-black)" : "bg-white/20"
        }`}
      >
        {tier.badge}
      </p>
      <p
        className="mt-3 text-[13px] leading-[1.55]"
        style={{
          color: isLight ? "var(--storia-black75)" : "rgba(255,255,255,0.88)",
        }}
      >
        {tier.description}
      </p>
      <ul className="mt-5 flex flex-col gap-2">
        {tier.features.map((item) => (
          <li key={item} className="flex gap-2.5 text-[13px] leading-snug">
            <span className="mt-px shrink-0" aria-hidden>
              <Check
                size={15}
                strokeWidth={2.25}
                className={isLight ? "" : "text-white"}
                style={{ color: isLight ? forest : undefined }}
              />
            </span>
            <span style={{ color: isLight ? "var(--storia-black)" : "#fff" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export const OptionsPricing = () => {
  return (
    <section
      id="pricing"
      className="section-shell scroll-mt-[calc(var(--site-header-height)+1rem)] py-9! md:py-10!"
    >
      <div className="section-inner">
        <p className="section-pill">Options & pricing</p>
        <h2
          className="mt-4 max-w-[900px] text-[clamp(1.65rem,3.4vw,2.35rem)] leading-[1.08] md:text-[clamp(1.85rem,3.2vw,2.65rem)]"
          style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
        >
          Two ways in. <span style={{ color: forest }}>One decision.</span>
        </h2>
        <p className="mt-3 max-w-[620px] text-[14px] leading-[1.55] text-(--storia-black75)">
          Start with what fits your organisation today. Scale when you&apos;re
          ready.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {tiers.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};
