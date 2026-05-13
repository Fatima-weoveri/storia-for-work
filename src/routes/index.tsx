import { createFileRoute } from "@tanstack/react-router";
import { Achievements } from "~/components/Achievements";
import { ContactCta } from "~/components/ContactCta";
import { FeatureShowcaseCarousel } from "~/components/FeatureShowcaseCarousel";
import { Hero } from "~/components/Hero";
import { HowItWorks } from "~/components/HowItWorks";
import { MeetCompanion } from "~/components/MeetCompanion";
import { OriginStory } from "~/components/OriginStory";
import { OurApproach } from "~/components/OurApproach";
import { OptionsPricing } from "~/components/OptionsPricing";
import { Outcomes } from "~/components/Outcomes";
import { ProblemSection } from "~/components/ProblemSection";
import { ToolsGapCallout } from "~/components/ToolsGapCallout";
import { Reveal } from "~/components/Reveal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";
import { Testimonials } from "~/components/Testimonials";
import { TimeReclaimedBanner } from "~/components/TimeReclaimedBanner";

const Home = () => {
  return (
    <div className="min-h-screen bg-(--storia-beige) text-(--storia-black)">
      <SiteHeader />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <ProblemSection />
        </Reveal>
        <Reveal>
          <ToolsGapCallout />
        </Reveal>
        <Reveal>
          <MeetCompanion />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <FeatureShowcaseCarousel />
        </Reveal>
        <Reveal>
          <OurApproach />
        </Reveal>
        <Reveal>
          <OriginStory />
        </Reveal>
        <Reveal>
          <Achievements />
        </Reveal>
        <Reveal>
          <TimeReclaimedBanner />
        </Reveal>
        <Reveal>
          <Outcomes />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <OptionsPricing />
        </Reveal>
        <Reveal>
          <ContactCta />
        </Reveal>
        <Reveal>
          <SiteFooter />
        </Reveal>
      </main>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Home,
});
