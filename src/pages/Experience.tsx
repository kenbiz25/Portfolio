import { Layout } from "@/components/layout/Layout";
import { Award, ExternalLink, BadgeCheck, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { PageTransition } from "@/components/PageTransition";

const certifications = [
  {
    id: 1,
    title: "SEO Certification I",
    issuer: "HubSpot Academy",
    logo: "🎓",
    color: "from-orange-500 to-red-500",
    date: "2024",
    credentialUrl: "https://academy.hubspot.com/",
    description: "Comprehensive SEO fundamentals including keyword research, on-page optimization, and link building strategies."
  },
  {
    id: 2,
    title: "SEO Certification II",
    issuer: "HubSpot Academy",
    logo: "🏆",
    color: "from-orange-500 to-yellow-500",
    date: "2024",
    credentialUrl: "https://academy.hubspot.com/",
    description: "Advanced SEO techniques including technical SEO, international SEO, and advanced analytics."
  },
  {
    id: 3,
    title: "Digital Marketing & E-commerce",
    issuer: "Google",
    logo: "📊",
    color: "from-blue-500 to-green-500",
    date: "2023",
    credentialUrl: "https://grow.google/certificates/",
    description: "Professional certificate covering digital marketing strategies, e-commerce, and analytics."
  },
  {
    id: 4,
    title: "SEO Toolkit Certification",
    issuer: "Semrush",
    logo: "🔧",
    color: "from-purple-500 to-pink-500",
    date: "2024",
    credentialUrl: "https://www.semrush.com/academy/",
    description: "Mastery of Semrush tools for keyword research, competitor analysis, and SEO auditing."
  },
  {
    id: 5,
    title: "Google SEO Fundamentals",
    issuer: "Google",
    logo: "🔍",
    color: "from-blue-500 to-indigo-500",
    date: "2023",
    credentialUrl: "https://skillshop.google.com/",
    description: "Official Google certification covering search engine optimization best practices."
  },
  {
    id: 6,
    title: "Google Data Analytics",
    issuer: "Google",
    logo: "📈",
    color: "from-green-500 to-teal-500",
    date: "2023",
    credentialUrl: "https://grow.google/certificates/",
    description: "Professional certificate in data analytics covering SQL, R, Tableau, and data visualization."
  }
];

const awards = [
  {
    id: 1,
    title: "Employee of the Quarter",
    organization: "Mdundo",
    year: "2022",
    icon: "🏅",
    color: "from-yellow-500 to-orange-500",
    description: "Recognized for exceptional performance in SEO strategy that led to 150% increase in organic traffic."
  },
  {
    id: 2,
    title: "Leadership Winner",
    organization: "Digital Marketing Summit Kenya",
    year: "2023",
    icon: "👑",
    color: "from-purple-500 to-blue-500",
    description: "Awarded for outstanding leadership in digital transformation and team mentorship."
  },
  {
    id: 3,
    title: "Performance Award",
    organization: "Annual Business Review",
    year: "2024",
    icon: "⭐",
    color: "from-green-500 to-teal-500",
    description: "Top performer recognition for delivering data-driven solutions that exceeded client expectations."
  }
];

const Experience = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Experience & Credentials
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My work is supported by continuous learning across analytics, SEO, digital strategy, 
                and data interpretation — applied in real-world environments, not just theory.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Certifications</h2>
                  <p className="text-muted-foreground">Industry-recognized credentials</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.id} delay={index * 100}>
                  <div className="group bg-card border border-border rounded-2xl overflow-hidden card-hover h-full">
                    {/* Certificate Visual */}
                    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${cert.color}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-30">{cert.logo}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 text-foreground text-xs font-semibold rounded-full shadow-lg">
                          {cert.date}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <span className="text-white text-sm font-medium">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {cert.description}
                      </p>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary font-medium hover:underline"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Verify Credential
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-custom">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Awards & Recognition</h2>
                  <p className="text-muted-foreground">Achievements and milestones</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <ScrollReveal key={award.id} delay={index * 100}>
                  <div className="group bg-card border border-border rounded-2xl overflow-hidden card-hover h-full">
                    {/* Award Visual */}
                    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${award.color}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-7xl opacity-40">{award.icon}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-yellow-400 text-sm font-medium">{award.year}</span>
                        </div>
                        <h3 className="text-white font-semibold text-lg">{award.title}</h3>
                      </div>
                    </div>

                    {/* Award Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent">
                          {award.organization}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 section-dark">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Let's leverage my skills and experience to drive impact for your organization.
              </p>
              <a
                href="https://calendly.com/kenethkiplagat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-accent">
                  Book a Strategy Call
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Experience;
