import { useSeo, breadcrumbSchema } from "@/lib/seo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { projects, projectCategories } from "@/data/projects";
import { projectImage } from "@/lib/images";

// Only show tabs that have projects
const categories = ["All", ...projectCategories.filter((c) => projects.some((p) => p.category === c))];

const Portfolio = () => {
  useSeo({
    title: "Portfolio & Case Studies",
    description: "Case studies in digital health delivery, MIS and reporting, AI support tools, and product builds: MDTInsights, a RAG WhatsApp assistant for health workers, Bangladesh UHIS support desk, CarwashManage SaaS and more.",
    path: "/portfolio",
    schema: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }])],
  });

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <PageTransition>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Selected Work
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Case studies in multi-country digital health delivery, MIS and reporting, AI implementation, and the products I build. Each one is about making technology work in the real world, not just shipping it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 100}>
                  <Link 
                    to={`/portfolio/${project.id}`}
                    className="group bg-card border border-border rounded-2xl overflow-hidden card-hover h-full flex flex-col"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={projectImage(project.image, "card")}
                        alt={project.title}
                        width={640}
                        height={320}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-2 text-white text-sm font-medium">
                          View Project <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                        <span className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.date}
                        </span>
                      </div>

                      <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>

                      <p className="text-sm text-primary font-medium mb-4">
                        {project.impact}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="flex items-center px-2 py-1 bg-muted text-foreground/75 text-xs rounded"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-foreground/75 text-xs rounded">
                            +{project.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether it's leading technical delivery, building MIS and reporting, or getting a platform adopted in the field, let's talk about what you need.
              </p>
              <a
                href="https://calendly.com/keneth_kiplagat/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-primary rounded-full">
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

export default Portfolio;
