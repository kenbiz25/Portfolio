import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Sarah Mwangi",
    role: "CEO, TechStartup Kenya",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "Keneth transformed our online presence completely. Our organic traffic increased by 300% in just 6 months, and we now rank on page 1 for all our target keywords. His data-driven approach is exceptional.",
    rating: 5,
  },
  {
    name: "James Ochieng",
    role: "Marketing Director, E-commerce Hub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "Working with Keneth was a game-changer for our e-commerce business. His SEO expertise and analytical skills helped us identify growth opportunities we never knew existed. Highly recommended!",
    rating: 5,
  },
  {
    name: "Grace Wanjiku",
    role: "Founder, Digital Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "Keneth's attention to detail and strategic thinking sets him apart. He delivered comprehensive data analytics that drove our marketing decisions and improved our ROI by 150%.",
    rating: 5,
  },
  {
    name: "David Kimani",
    role: "Operations Manager, Safari Tours",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content:
      "Our tourism website went from invisible to industry-leading thanks to Keneth's SEO work. He understands the Kenyan market and knows exactly how to capture the right audience.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 section-dark">
      <div className="container-custom">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-medium mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
              What Clients Say
            </h2>
            <p className="text-section-dark-foreground/70">
              Trusted by teams that value clarity, accountability, and measurable outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <ScrollReveal delay={200}>
          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl relative">
                      {/* Quote Icon */}
                      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-section-dark-foreground/20 text-section-dark-foreground hover:bg-section-dark-foreground/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-accent" : "bg-section-dark-foreground/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-section-dark-foreground/20 text-section-dark-foreground hover:bg-section-dark-foreground/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
