import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { FileText, ArrowRight, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    id: "html-to-pdf",
    name: "HTML → PDF Converter",
    description:
      "Convert any HTML file or pasted markup into a crisp, style-faithful A4 PDF. Preserves backgrounds, fonts, and layouts using Playwright Chromium.",
    icon: FileText,
    href: "/tools/html-to-pdf",
    gradient: "from-primary/10 to-accent/10",
    badge: "Powered by Playwright",
  },
];

const Tools = () => {
  return (
    <Layout>
      <PageTransition>
        {/* Hero */}
        <section className="pt-28 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                <Wrench className="w-4 h-4" />
                Developer Utilities
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Tools
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                A small collection of utilities I use in my daily workflow — built for reliability, speed,
                and faithful output. Free to use.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Tool Cards */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <ScrollReveal key={tool.id} delay={i * 80}>
                    <div className="group bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full">
                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      {/* Badge */}
                      <span className="inline-flex self-start px-2.5 py-0.5 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                        {tool.badge}
                      </span>

                      {/* Text */}
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-foreground mb-2">
                          {tool.name}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <Button asChild className="btn-primary rounded-full w-full mt-auto group-hover:shadow-md transition-shadow">
                        <Link to={tool.href} className="flex items-center justify-center gap-2">
                          Open Tool
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      </PageTransition>
    </Layout>
  );
};

export default Tools;
