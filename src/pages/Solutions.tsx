import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import {
  Calendar,
  Mail,
  CheckCircle,
  ArrowRight,
  Settings2,
  Network,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Layers,
  Target,
} from "lucide-react";

const engagements = [
  {
    number: "01",
    icon: Settings2,
    title: "Operational Systems & Support Transformation",
    positioning:
      "Identify inefficiencies, restructure support workflows, and build the operational visibility that allows leadership to make faster, clearer decisions.",
    includes: [
      "Support operations assessment",
      "SOP review & optimization",
      "Escalation workflow restructuring",
      "Communication gap analysis",
      "Operational visibility recommendations",
      "Cross-functional workflow improvement",
    ],
    idealFor: ["HealthTech organizations", "NGOs", "Scaling support teams"],
    price: "Ksh 180,000+",
    calendlySubject: "Advisory Enquiry: Operational Systems & Support Transformation",
    emailSubject: "Advisory Enquiry: Operational Systems & Support Transformation",
    primaryCta: "Schedule Strategic Consultation",
    secondaryCta: "Send an Enquiry",
    accent: "primary",
  },
  {
    number: "02",
    icon: Network,
    title: "Digital Systems & Workflow Optimization",
    positioning:
      "Design scalable digital workflows that improve coordination, reduce operational friction, and position your organization to execute with greater speed and reliability.",
    includes: [
      "Workflow mapping & process redesign",
      "Operational bottleneck analysis",
      "Digital systems recommendations",
      "AI workflow opportunity assessment",
      "Automation strategy guidance",
      "Implementation roadmap",
    ],
    idealFor: ["Multi-team environments", "Digital transformation initiatives", "Operations-heavy organizations"],
    price: "Ksh 150,000+",
    emailSubject: "Advisory Enquiry: Digital Systems & Workflow Optimization",
    primaryCta: "Discuss Your Project",
    secondaryCta: "Send an Enquiry",
    accent: "accent",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Executive SEO & Digital Visibility Strategy",
    positioning:
      "A comprehensive search and visibility strategy built for organizations that want sustainable digital authority — not quick fixes.",
    includes: [
      "Technical SEO assessment",
      "Search visibility evaluation",
      "Content opportunity analysis",
      "Competitor landscape review",
      "Website performance analysis",
      "Executive growth recommendations",
    ],
    idealFor: ["NGOs & impact organizations", "HealthTech platforms", "Service-led businesses"],
    price: "Ksh 120,000+",
    emailSubject: "Advisory Enquiry: Executive SEO & Digital Visibility Strategy",
    primaryCta: "Request Assessment",
    secondaryCta: "Send an Enquiry",
    accent: "primary",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Data Intelligence & Reporting Solutions",
    positioning:
      "Turn operational, campaign, and organizational data into structured intelligence that leadership can act on — not just reports that sit in inboxes.",
    includes: [
      "Executive reporting design",
      "Operational metrics review",
      "Campaign performance analysis",
      "KPI framework development",
      "Dashboard strategy",
      "Strategic insight documentation",
    ],
    idealFor: ["Leadership teams", "Program managers", "Organizations with donor or funder reporting needs"],
    price: "Ksh 100,000+",
    emailSubject: "Advisory Enquiry: Data Intelligence & Reporting Solutions",
    primaryCta: "Book Discovery Call",
    secondaryCta: "Send an Enquiry",
    accent: "accent",
  },
];

const pillars = [
  {
    icon: Lightbulb,
    title: "Systems Thinking",
    description:
      "I don't just deliver tasks. I identify operational gaps, design the fix, and help you implement it — end to end.",
  },
  {
    icon: Layers,
    title: "Tech + Operations Bridge",
    description:
      "I translate between technical requirements and operational realities so nothing gets lost between teams.",
  },
  {
    icon: Target,
    title: "Outcome-Driven Engagements",
    description:
      "Every engagement is anchored to a clear operational objective, with recommendations you can act on immediately.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start with a structured conversation about your current operational state, priorities, and constraints. No assumptions — just clarity.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "I deliver a clear assessment and a prioritized roadmap: what to address, in what order, and why it matters for your organization.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "Depending on the engagement, I work alongside your team to execute, advise, or transfer capability — so results hold beyond the engagement.",
  },
];

const CALENDLY = "https://calendly.com/keneth_kiplagat/30min";
const EMAIL = "kenbiz25@gmail.com";

const Solutions = () => {
  return (
    <Layout>
      <PageTransition>

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-4">
                  Strategic Engagements
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Advisory & Transformation{" "}
                  <span className="text-primary">Solutions</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Operational systems, digital infrastructure, and strategic advisory
                  designed for HealthTech teams, NGOs, and mission-driven organizations
                  that are serious about scalable growth and measurable execution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary rounded-full px-8">
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Consultation
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={`mailto:${EMAIL}?subject=Advisory Enquiry`}>
                      <Mail className="mr-2 h-5 w-5" />
                      Send an Enquiry
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={pillar.title} delay={index * 100}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <pillar.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-accent font-medium text-sm tracking-wider uppercase mb-2 block">
                  Transformation Areas
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Choose Your Engagement
                </h2>
                <p className="text-muted-foreground">
                  Each engagement is scoped around your specific operational context.
                  Pricing reflects depth, not speed — these are strategic investments.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8">
              {engagements.map((eng, index) => (
                <ScrollReveal key={eng.title} delay={index * 100}>
                  <div className="group bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:border-primary/50 transition-colors duration-300 hover:shadow-xl">

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                          <eng.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <span className="text-3xl font-bold text-muted-foreground/30 select-none">
                          {eng.number}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                          Starts at
                        </span>
                        <span className="text-xl font-bold text-primary">{eng.price}</span>
                      </div>
                    </div>

                    {/* Title & Positioning */}
                    <h3 className="text-xl font-bold text-foreground mb-3">{eng.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {eng.positioning}
                    </p>

                    {/* Includes */}
                    <div className="mb-6 flex-1">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                        What's Included
                      </p>
                      <ul className="space-y-2">
                        {eng.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                        Ideal For
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {eng.idealFor.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <Button asChild className="btn-primary rounded-full flex-1 group/btn">
                        <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                          <Calendar className="mr-2 h-4 w-4" />
                          {eng.primaryCta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full flex-1 border-primary/40 text-primary hover:bg-primary/5"
                      >
                        <a
                          href={`mailto:${EMAIL}?subject=${encodeURIComponent(eng.emailSubject)}`}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          {eng.secondaryCta}
                        </a>
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Together */}
        <section className="py-20 bg-secondary">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-accent font-medium text-sm tracking-wider uppercase mb-2 block">
                  The Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How We Work Together
                </h2>
                <p className="text-muted-foreground">
                  Every engagement starts with a structured conversation — not a proposal template.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {process.map((step, index) => (
                <ScrollReveal key={step.step} delay={index * 150}>
                  <div className="relative text-center">
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-full h-px border-t-2 border-dashed border-border" />
                    )}
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Strengthen Your Operations?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed">
                  Start with a 30-minute discovery call to discuss your operational context
                  and identify which engagement makes sense for where you are right now.
                  No commitment required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="btn-primary rounded-full px-8">
                    <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book a Discovery Call
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={`mailto:${EMAIL}?subject=Advisory Enquiry`}>
                      <Mail className="mr-2 h-5 w-5" />
                      Send an Enquiry
                    </a>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-8">
                  Engagements are scoped individually. Pricing listed is the starting point — final investment depends on scope, depth, and delivery format.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </PageTransition>
    </Layout>
  );
};

export default Solutions;
