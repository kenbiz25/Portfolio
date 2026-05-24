import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const focusPills = [
  { label: "AI Workflows", href: "/portfolio" },
  { label: "Support Ops", href: "/portfolio" },
  { label: "Process Design", href: "/portfolio" },
];

export const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-muted/60 via-background to-primary/5">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute right-0 top-0 w-3/5 h-full">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-animation-18377-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className={`absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-accent transition-opacity duration-1000 ${isVideoLoaded ? "opacity-0" : "opacity-100"}`} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-40% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 via-50% to-transparent pointer-events-none" />
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full animate-float-slow" />
          <div className="absolute bottom-40 right-40 w-24 h-24 border border-accent/30 rounded-full animate-float-delayed" />
        </div>
        <div className="lg:hidden absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/80 via-background to-accent/10" />
          <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">

          {/* Left Content */}
          <div className="text-center lg:text-left pt-16 lg:pt-0">

            {/* Eyebrow */}
            <span className="inline-block text-accent font-medium text-sm tracking-widest uppercase mb-3 md:mb-5 animate-hero-fade-in animation-delay-100">
              Tech Operations · Digital Systems · AI
            </span>

            {/* Headline — short & punchy */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 md:mb-5 leading-[1.1] animate-hero-fade-in animation-delay-200">
              Operations
              <br />
              built to{" "}
              <span className="relative inline-block">
                <span className="text-primary">scale.</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" className="animate-draw-line" />
                </svg>
              </span>
            </h1>

            {/* Single tagline */}
            <p className="text-base md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed animate-hero-fade-in animation-delay-300">
              I design the workflows, systems, and AI tools that help organizations move faster and deliver more.
            </p>

            {/* Focus pills — link to portfolio */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-5 md:mb-10 animate-hero-fade-in animation-delay-400">
              {focusPills.map((pill) => (
                <Link
                  key={pill.label}
                  to={pill.href}
                  className="px-4 py-1.5 rounded-full text-sm bg-primary/10 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {pill.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-hero-fade-in animation-delay-500">
              <Button asChild size="lg" className="btn-primary rounded-full px-8 group">
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="https://calendly.com/keneth_kiplagat/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                </a>
              </Button>
            </div>
          </div>

          {/* Right — Profile Image Desktop */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative animate-hero-fade-in animation-delay-300">
              <div className="absolute -inset-8 border-2 border-dashed border-primary/20 rounded-full animate-spin-slow" />
              <div className="absolute -inset-16 border border-accent/10 rounded-full" />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse-slow" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl bg-gradient-to-br from-primary to-accent">
                <img
                  src="img/kip-web.png"
                  alt="Keneth Kiplagat - Tech Operations & Digital Systems Professional"
                  className="w-full h-full object-cover scale-97 hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border px-4 py-2 rounded-xl shadow-lg animate-float">
                <span className="font-semibold text-foreground text-sm">Ops Systems</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg animate-float-delayed">
                <span className="font-semibold text-sm">AI Workflows</span>
              </div>
              <div className="absolute top-1/2 -right-8 translate-y-8 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg animate-float">
                <span className="font-semibold text-sm">Process Ops</span>
              </div>
            </div>
          </div>

          {/* Mobile Profile Image */}
          <div className="lg:hidden flex justify-center order-first">
            <div className="relative animate-hero-fade-in">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl" />
              <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white/50 shadow-xl bg-gradient-to-br from-primary to-accent">
                <img src="img/kip-web.png" alt="Keneth Kiplagat" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-bounce-slow"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
