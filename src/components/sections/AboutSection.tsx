import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percentage), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-medium text-primary">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const focusAreas = [
  "Understand what their data is really telling them",
  "Build digital systems that support growth and accountability",
  "Communicate impact clearly to stakeholders, donors, and leadership"
];

export const AboutSection = () => {
  const skills = [
    { name: "Data Analytics & Reporting", percentage: 90 },
    { name: "SEO & Digital Visibility", percentage: 95 },
    { name: "Digital Systems Design", percentage: 85 },
    { name: "Research & Communications", percentage: 88 },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative">
                <img
                  src="https://kenkiplagat.co.ke/img/about.jpg"
                  alt="Keneth Kiplagat - About"
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
                Data, Digital Strategy & Operational Clarity
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100}>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  I work at the intersection of <strong className="text-foreground">data, digital strategy, and operational clarity</strong>.
                </p>
                <p>
                  Over the past <strong className="text-foreground">8+ years</strong>, I've supported organizations across health, media, 
                  human rights, and technology to move from fragmented digital efforts to clear, measurable systems — 
                  from analytics and SEO to reporting, dashboards, and decision support.
                </p>
                <p className="italic border-l-4 border-primary pl-4">
                  My work is grounded in one belief: <strong className="text-foreground">data should not sit in reports — it should guide action.</strong>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mb-8">
                <p className="text-muted-foreground mb-4">Today, I focus on helping teams:</p>
                <ul className="space-y-3">
                  {focusAreas.map((area, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-muted-foreground mb-8 italic">
                I'm especially drawn to work that improves access, transparency, and outcomes at scale.
              </p>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal delay={400}>
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold text-foreground mb-6">Core Expertise</h3>
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
