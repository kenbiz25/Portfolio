import { Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export const CalendlySection = () => {
  const calendlyUrl = "https://calendly.com/kenethkiplagat";

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent font-medium mb-2 block">Let's Talk Strategy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Schedule a Strategy Session
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                If you're looking to improve visibility, understand your data better, or design 
                digital systems that actually work, let's have a focused conversation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScrollReveal delay={100}>
              <div className="bg-card p-6 rounded-xl border border-border text-center card-hover h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Pick a Time</h3>
                <p className="text-sm text-muted-foreground">
                  Choose a convenient slot that works with your schedule
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-card p-6 rounded-xl border border-border text-center card-hover h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Meet Virtually</h3>
                <p className="text-sm text-muted-foreground">
                  Connect via Google Meet or Zoom for a personalized session
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-card p-6 rounded-xl border border-border text-center card-hover h-full">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">30 Min Free</h3>
                <p className="text-sm text-muted-foreground">
                  No sales pressure — just clarity
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Free Consultation
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Book Your Strategy Call
                </h3>
                <p className="text-muted-foreground">
                  Let's discuss your SEO, data analytics, or digital systems needs
                </p>
              </div>

              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a 30-Minute Strategy Call
                </Button>
              </a>

              <p className="mt-4 text-sm text-muted-foreground">
                Or reach out via WhatsApp for quick questions →
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
