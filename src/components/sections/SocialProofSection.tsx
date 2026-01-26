import { useEffect, useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "200%", label: "Avg. Traffic Growth" },
  { value: "40%", label: "Decision Speed Improvement" },
  { value: "12+", label: "Happy Clients" },
];

const partners = [
  { name: "Kenya Human Rights Commission", logo: "/logos/khrc.svg" },
  { name: "ZOE Africa", logo: "/logos/zoe.svg" },
  { name: "Hai Africa", logo: "/logos/hai.svg" },
  { name: "NBC Kenya", logo: "/logos/nbc.svg" },
  { name: "Eagle Venture Safaris", logo: "/logos/eagle.svg" },
  { name: "Dhirens Coffee & Salon", logo: "/logos/dhirens.svg" },
];

export const SocialProofSection = () => {
  const [visible, setVisible] = useState<boolean[]>([]);

  // Animate logos sequentially
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    partners.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setVisible((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 200)
      );
    });
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  useEffect(() => {
    setVisible(new Array(partners.length).fill(false));
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container-custom">
        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card border border-border rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trusted By / Logos */}
        <ScrollReveal delay={100}>
          <div className="text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
              Trusted by organizations across Africa
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 items-center">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className={`flex flex-col items-center transition-all duration-700 transform ${
                    visible[index] ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-90 blur-sm"
                  } hover:scale-105 hover:brightness-110`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto filter dark:invert mb-2 transition-all duration-500"
                    loading="lazy"
                  />
                  <span className="text-xs md:text-sm text-muted-foreground text-center">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
