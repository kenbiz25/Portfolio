import { useEffect, useState } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "200%", label: "Avg. Traffic Growth" },
  { value: "40%", label: "Decision Speed Improvement" },
  { value: "12+", label: "Happy Clients" },
];

const partners = [
  { name: "Kenya Human Rights Commission", Image: "/img/khrc.webp" },
  { name: "Mdundo", Image: "/img/mdundo.svg" },
  { name: "Hai Africa", Image: "/img/HAI.svg" },
  { name: "Resolve Communications", Image: "/img/resolve.svg" },
  { name: "Synergy Gases", Image: "/img/Synergy.svg" },
];

export const SocialProofSection = () => {
  const [visible, setVisible] = useState<boolean[]>([]);
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const itemsPerSlide = 4;
  const slides = [];

  for (let i = 0; i < partners.length; i += itemsPerSlide) {
    slides.push(partners.slice(i, i + itemsPerSlide));
  }

  // Clone first slide for seamless looping
  const extendedSlides = [...slides, slides[0]];

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
    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    setVisible(new Array(partners.length).fill(false));
  }, []);

  // Auto slide (slower + smooth)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 8000); // ⬅️ slowed down

    return () => clearInterval(interval);
  }, []);

  // Seamless reset
  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 1500); // matches transition duration
    }
  }, [index, slides.length]);

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
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Partners Carousel */}
        <ScrollReveal delay={100}>
          <div className="text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
              Trusted by organizations across Africa
            </p>

            <div className="relative overflow-hidden">
              <div
                className={`flex ${
                  isTransitioning
                    ? "transition-transform duration-900 ease-in-out"
                    : ""
                }`}
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {extendedSlides.map((group, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full flex-shrink-0"
                  >
                    {group.map((partner) => {
                      const visibleIndex = partners.findIndex(
                        (p) => p.name === partner.name
                      );

                      return (
                        <div
                          key={partner.name}
                          className={`flex flex-col items-center transition-all duration-700 transform ${
                            visible[visibleIndex]
                              ? "opacity-100 scale-100 blur-0"
                              : "opacity-0 scale-90 blur-sm"
                          } hover:scale-105 hover:brightness-110`}
                        >
                          <img
                            src={partner.Image}
                            alt={partner.name}
                            className="h-10 w-auto filter dark:invert mb-2 transition-all duration-500"
                            loading="lazy"
                          />
                          <span className="text-xs md:text-sm text-muted-foreground text-center">
                            {partner.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
