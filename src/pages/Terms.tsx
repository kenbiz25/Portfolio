import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const Terms = () => {
  return (
    <Layout>
      <PageTransition>
        <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Terms & Conditions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These terms govern access and use of this website.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-8">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Use of Website</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This website provides information about professional services and past work.
                    By using the site, you agree not to misuse, copy, or distribute content without
                    permission.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Last updated: February 3, 2026.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, visuals, and branding on this site are owned by Keneth Kiplagat unless
                    otherwise stated. Unauthorized use is prohibited.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">External Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This site may link to third-party platforms. We are not responsible for external
                    content, availability, or policies.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The site is provided “as is” without warranties. We are not liable for any damages
                    resulting from use or inability to use the site.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3">Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Questions about these terms can be sent to: kenethkiplagat.io@gmail.com
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

export default Terms;
