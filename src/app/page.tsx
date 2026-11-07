import Hero from "@/components/home/Hero";
import PlatformTabs from "@/components/home/PlatformTabs";
import IndustryShowcase from "@/components/home/IndustryShowcase";
import AiAgents from "@/components/home/AiAgents";
import Spotlights from "@/components/home/Spotlights";
import Integrations from "@/components/home/Integrations";
import Security from "@/components/home/Security";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformTabs />
      <IndustryShowcase />
      <AiAgents />
      <Spotlights />
      <Integrations />
      <Security />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
