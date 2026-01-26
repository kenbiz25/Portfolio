import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-primary-foreground">
              Keneth<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-section-dark-foreground/70 text-sm leading-relaxed">
              I help organizations turn data, digital systems, and content into 
              measurable growth and real-world impact.
            </p>
            <p className="mt-4 text-accent font-medium text-sm">
              Data • Digital Strategy • Impact
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-section-dark-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Experience", href: "/experience" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-section-dark-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-section-dark-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Data & Analytics", 
                "SEO & Visibility", 
                "Digital Systems", 
                "Research & Reporting"
              ].map((item) => (
                <li key={item}>
                  <span className="text-section-dark-foreground/70 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-section-dark-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-section-dark-foreground/70 text-sm">
                  Pinetree - Kamburu Drive, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+254705091683"
                  className="text-section-dark-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  +254 705 091 683
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:kenethkiplagat.io@gmail.com"
                  className="text-section-dark-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  kenethkiplagat.io@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com/kenethkiplagat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-section-dark-foreground/10 flex items-center justify-center text-section-dark-foreground/70 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com/in/kenethkiplagat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-section-dark-foreground/10 flex items-center justify-center text-section-dark-foreground/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-section-dark-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-section-dark-foreground/50 text-sm">
              © {currentYear} Keneth Kiplagat. All rights reserved.
            </p>
            <p className="text-section-dark-foreground/50 text-sm">
              Data • Digital Strategy • Impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
