import { createFileRoute } from "@tanstack/react-router";
import { CallOut } from "~/components/CallOut";
import { Hero } from "~/components/Hero";
import { HowItWorks } from "~/components/HowItWorks";
import { Manifesto } from "~/components/Manifesto";
import { Reveal } from "~/components/Reveal";
import { SiteFooter } from "~/components/SiteFooter";
import { SiteHeader } from "~/components/SiteHeader";

const Home = () => {
  return (
    <div className="min-h-screen bg-(--storia-beige) text-(--storia-black)">
      <SiteHeader />
      <main>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <Manifesto />
        </Reveal>
        <div
          aria-hidden="true"
          className="w-full border-t border-(--storia-black15)"
        />
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <CallOut />
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
