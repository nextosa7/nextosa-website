import Hero from "@/components/home/Hero";
import PlatformTabs from "@/components/home/PlatformTabs";
import IndustryShowcase from "@/components/home/IndustryShowcase";
import AiAgents from "@/components/home/AiAgents";
import Spotlights from "@/components/home/Spotlights";
import Integrations from "@/components/home/Integrations";
import Security from "@/components/home/Security";
import HowItWorks from "@/components/home/HowItWorks";
import StoryTeaser from "@/components/home/StoryTeaser";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";
import DemoVideos from "@/components/DemoVideos";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/JsonLd";
import { faqLd } from "@/lib/seo";
import { homeFaqs } from "@/lib/homeFaqs";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd(homeFaqs)} />
      <Hero />
      <PlatformTabs />
      <DemoVideos names={["platform-tour", "command-center", "business-ai"]} />
      <IndustryShowcase />
      <AiAgents />
      <Spotlights />
      <Integrations />
      <Security />
      <StoryTeaser />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
