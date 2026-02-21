import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { projects } from "./projects/ProjectDetail";

const categories = ["All", "AI & Automation", "Data Analysis", "Web Development", "SEO"];

const Portfolio = () => {
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
                These projects reflect my approach: clarity first, data always, impact measured. 
                Each engagement focused not just on delivery, but on improving how decisions are made.
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
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
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
                        src={project.image}
                        alt={project.title}
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

                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-accent font-medium mb-4">
                        {project.impact}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="flex items-center px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
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
                Let's discuss how I can help you achieve clarity, visibility, and measurable impact.
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
