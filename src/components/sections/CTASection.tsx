import { Calendar } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Ready to Transform Your Strategy?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Something Impactful Together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Whether you need help with data analytics, digital visibility, or building 
              systems that scale — let's discuss how I can support your mission.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <a
                  href="https://calendly.com/kenethkiplagat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Strategy Call
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
