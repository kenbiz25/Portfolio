import { ScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

const highlights = [
  {
    title: "MDTInsights",
    description:
      "A role-based access control (RBAC) Power BI reporting platform giving leadership and donor stakeholders real-time delivery visibility across Bangladesh, Kenya, Ghana, and Sierra Leone.",
  },
  {
    title: "Field adoption assessments, Sierra Leone",
    description:
      "Worked directly with community health workers and hospital teams in Freetown and Bombali to surface real barriers (device access, digital literacy, workflow fit) and turn them into practical rollout and training plans.",
  },
  {
    title: "Kenya Digital Health Agency secondment",
    description:
      "National-scale secondment to the Ministry of Health, contributing to the escalation management framework and tool used in the nationwide SHA/Tiberbu rollout.",
  },
];

const openRoles = [
  "MIS Specialist (donor-funded development programs)",
  "Technical Program Management",
  "Technology & AI Operations",
  "Product Delivery",
  "AI Implementation",
];

const coreSkills = [
  "Technical Project Management",
  "Digital Health Platforms",
  "Power BI / Looker / GA4",
  "Field Implementation & Adoption",
  "Multi-Country Program Delivery",
  "Stakeholder & Donor Governance",
  "Management Information Systems (MIS)",
  "SEO & Brand Management",
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative lg:sticky lg:top-28">
              <div className="relative">
                <img
                  src="/img/kip-about.webp"
                  width={560}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  alt="Keneth Kiplagat at work"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-accent font-medium mb-2 block">About Keneth</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technology & AI Operations · Technical Program Management
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  I lead <strong className="text-foreground">technical delivery for multi-country digital health programs</strong>,
                  coordinating between technical teams, field operations, and donor stakeholders so platforms get adopted and actually work.
                </p>
                <p>Over 8+ years I've built and delivered:</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ul className="space-y-4 mb-8">
                {highlights.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Before health tech, I spent 5+ years in growth, partnership, and delivery roles at{" "}
                  <strong className="text-foreground">Mdundo.com</strong>, a pan-African media platform. There I built reporting
                  dashboards (Looker, GA4), managed multi-country vendor SLAs, and contributed to a{" "}
                  <strong className="text-foreground">60% increase in customer retention</strong> through data-led interventions.
                </p>
                <p className="italic border-l-4 border-primary pl-4">
                  What I bring: the ability to sit between technical builders, field teams, and donor/leadership stakeholders,
                  and make sure <strong className="text-foreground">what gets built actually gets used.</strong>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-card p-6 rounded-2xl shadow-lg space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Open to roles in</h3>
                  <ul className="space-y-2">
                    {openRoles.map((role) => (
                      <li key={role} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
