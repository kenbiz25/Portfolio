import { useSeo, PERSON_SCHEMA, SITE_URL } from "@/lib/seo";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CalendlySection } from "@/components/sections/CalendlySection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { PageTransition } from "@/components/PageTransition";

const Index = () => {
  useSeo({
    path: "/",
    type: "profile",
    schema: [PERSON_SCHEMA, {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Keneth Kiplagat",
      publisher: { "@id": `${SITE_URL}/#person` },
    }],
  });

  return (
    <Layout>
      <PageTransition>
        <HeroSection />
        <SocialProofSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CalendlySection />
        <CTASection />
      </PageTransition>
    </Layout>
  );
};

export default Index;

