import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                This policy explains how information is collected, used, and protected.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-8">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website is a professional portfolio and contact platform. We collect only the
                    information needed to respond to inquiries, improve the site, and maintain security.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Last updated: February 3, 2026.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Information Collected</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Contact details submitted via forms or email (name, email, message).</li>
                    <li>• Basic analytics data (page views, device type, referrer).</li>
                    <li>• Technical data such as IP address for security and fraud prevention.</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Cookies & Analytics</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use cookies and similar technologies to measure performance and improve the
                    user experience. Third-party analytics or advertising partners may set cookies to
                    provide aggregated insights or personalize ads.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    If Google AdSense is enabled, Google may use cookies to serve ads based on prior
                    visits to this or other websites. You can opt out of personalized advertising by
                    visiting Google Ad Settings.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">How Information Is Used</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Respond to inquiries and deliver requested services.</li>
                    <li>• Improve site performance and content relevance.</li>
                    <li>• Maintain site security and prevent misuse.</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This site may link to external platforms (e.g., LinkedIn, Calendly, WhatsApp).
                    Their privacy practices are governed by their own policies.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For privacy-related requests, contact: kenethkiplagat.io@gmail.com
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default PrivacyPolicy;
