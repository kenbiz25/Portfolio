import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

const Contact = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Let's Connect
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project, challenge, or idea you're exploring? I'm open to collaborations, 
                consulting engagements, and strategic conversations.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 bg-muted/40">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ScrollReveal delay={100}>
                <a
                  href="https://calendly.com/kenethkiplagat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-2xl p-6 text-center card-hover block"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <Calendar className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Book a Call</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a 30-minute strategy session
                  </p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <a
                  href="https://wa.me/254705091683"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-card border border-border rounded-2xl p-6 text-center card-hover block"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <Phone className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick questions? Chat directly
                  </p>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <a
                  href="mailto:kenethkiplagat.io@gmail.com"
                  className="group bg-card border border-border rounded-2xl p-6 text-center card-hover block"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <Mail className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    kenethkiplagat.io@gmail.com
                  </p>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* Location */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">Based in Nairobi, Kenya</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Available for remote work globally and in-person meetings in the East Africa region.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="btn-primary rounded-full">
                    <a
                      href="https://calendly.com/kenethkiplagat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a Strategy Call
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Contact;
