import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            Keneth<span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full ${
                  location.pathname === link.href
                    ? "text-primary after:w-full"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            
            {/* Consult CTA Group */}
            <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1 border border-border">
              <a
                href="https://wa.me/254705091683"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Button asChild size="sm" className="btn-accent rounded-full px-4">
                <a
                  href="https://calendly.com/kenethkiplagat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4 mr-1" />
                  Consult
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors py-2 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Consult Group */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <a
                href="https://wa.me/254705091683"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-medium"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://calendly.com/kenethkiplagat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full btn-accent font-medium"
              >
                <Calendar className="w-4 h-4" />
                Consult
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
