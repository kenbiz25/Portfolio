import { Workflow, Bot, Users, BarChart3 } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Workflow,
    title: "Technical Program Management",
    description:
      "Leading delivery of multi-country technology programs, coordinating technical teams, field operations, and donor stakeholders.",
    includes: [
      "Delivery planning, tracking & governance",
      "Donor & leadership reporting",
      "Escalation frameworks & vendor SLAs"
    ]
  },
  {
    icon: BarChart3,
    title: "MIS & Reporting Platforms",
    description:
      "Building management information systems and dashboards that give leadership real-time visibility into delivery.",
    includes: [
      "Power BI, Looker & GA4 dashboards",
      "Role-based access (RBAC) reporting",
      "Program indicators & data quality"
    ]
  },
  {
    icon: Users,
    title: "Field Implementation & Adoption",
    description:
      "Making sure what gets built actually gets used, by working with frontline teams to find and remove barriers to adoption.",
    includes: [
      "Field adoption assessments",
      "Rollout & training plans",
      "Workflow fit & digital literacy analysis"
    ]
  },
  {
    icon: Bot,
    title: "Technology & AI Operations",
    description:
      "Putting AI and digital tools to work inside real operations, with the processes and support to keep them running.",
    includes: [
      "AI implementation & workflow automation",
      "Support operations & SOPs",
      "Product delivery support"
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
              Making Technology Work in the Real World
            </h2>
            <p className="text-muted-foreground">
              I sit between technical builders, field teams, and donor/leadership stakeholders, and make sure what gets built actually gets used.
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
