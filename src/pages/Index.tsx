import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CalendlySection } from "@/components/sections/CalendlySection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <TestimonialsSection />
        <CalendlySection />
        <CTASection />
      </PageTransition>
    </Layout>
  );
};

export default Index;

