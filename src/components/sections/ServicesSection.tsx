import { Headset, Bot, Settings, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Headset,
    title: "Technical Support Operations",
    description:
      "Building and improving support systems that deliver faster, more consistent, and scalable help to users and teams.",
    includes: [
      "Support workflow design & documentation",
      "Ticketing system optimization",
      "SLA tracking & performance reporting"
    ]
  },
  {
    icon: Bot,
    title: "AI Workflow Coordination",
    description:
      "Designing and coordinating AI-powered workflows that reduce manual effort and improve operational throughput.",
    includes: [
      "AI tool integration & deployment",
      "Prompt engineering & automation design",
      "AI-assisted reporting & decision support"
    ]
  },
  {
    icon: Settings,
    title: "Process Optimization & Digital Transformation",
    description:
      "Mapping, streamlining, and digitizing organizational processes to reduce friction and improve outcomes.",
    includes: [
      "Process audits & workflow redesign",
      "SOPs & operational documentation",
      "Change management support"
    ]
  },
  {
    icon: BarChart3,
    title: "Data Analysis, Web Systems & SEO for AI",
    description:
      "Using data and modern web practices to improve visibility, strengthen reporting, and prepare content for AI discovery.",
    includes: [
      "Data analysis & operational dashboards",
      "Web systems setup & maintenance",
      "SEO for AI (AEO, structured data, entity optimization)"
    ]
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium mb-2 block">What I Help With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services I Offer
            </h2>
            <p className="text-muted-foreground">
              I help organizations improve workflows, strengthen operational visibility, and implement scalable systems powered by data, technology, and automation.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <div className="group bg-card p-8 rounded-2xl shadow-lg card-hover border border-border/50 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
