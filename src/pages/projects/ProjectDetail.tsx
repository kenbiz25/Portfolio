import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, Calendar, Tag, CheckCircle, Target, Zap, ExternalLink, Lightbulb, Linkedin } from "lucide-react";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";
import { projectImage, projectImageSrcSet } from "@/lib/images";
import { useSeo, breadcrumbSchema, SITE_URL } from "@/lib/seo";

// ~155 chars: impact first, then as much of the problem as fits
const metaDescription = (impact: string, problem: string) => {
  const text = `${impact}. ${problem}`;
  return text.length <= 158 ? text : `${text.slice(0, 155).replace(/\s+\S*$/, "")}…`;
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);
  const path = `/portfolio/${projectId}`;

  useSeo({
    title: project?.title,
    description: project ? metaDescription(project.impact, project.problem) : undefined,
    path,
    image: project?.image,
    type: "article",
    schema: project
      ? [
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            headline: project.title,
            description: project.impact,
            url: `${SITE_URL}${path}`,
            image: project.image.startsWith("http") ? project.image : `${SITE_URL}${project.image}`,
            genre: project.category,
            keywords: project.tools.join(", "),
            author: { "@id": `${SITE_URL}/#person` },
            ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.title, path },
          ]),
        ]
      : [],
  });

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <Layout>
      {/* Hero Section - Reduced */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <ScrollReveal>
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {project.category}
              </span>
              {project.date && (
                <span className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.date}
                </span>
              )}
            </div>
            
            {/* Reduced title size */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              {project.title}
            </h1>
            
            <p className="text-base text-accent font-semibold">
              {project.impact}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Gallery - Reduced main image, added gallery support */}
      <section className="pb-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <ScrollReveal>
            <ProjectGallery
              mainImage={projectImage(project.image)}
              mainImageSrcSet={projectImageSrcSet(project.image)}
              galleryImages={(project.galleryImages || []).map((img) => projectImage(img))}
              title={project.title}
            />
            
            {/* View Live Project Button */}
            {project.liveUrl && (
              <div className="mt-6 text-center">
                <Button asChild size="lg" className="btn-primary rounded-full">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* Problem / Action / Outcome */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-destructive" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">The Challenge</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">The Approach</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.action}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">The Result</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.outcome}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Field Lessons */}
      {project.lessons && project.lessons.length > 0 && (
        <section className="py-12 bg-muted/20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-4 h-4 text-accent" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Field Lessons</h2>
                </div>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-4">
                {project.lessons.map((lesson, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <div className="bg-card border border-border rounded-2xl p-6 h-full">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-3">{lesson.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{lesson.detail}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              {project.linkedinUrl && (
                <ScrollReveal delay={300}>
                  <div className="mt-6 flex justify-center">
                    <Button asChild variant="outline" size="sm" className="rounded-full gap-2">
                      <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        Read the full post on LinkedIn
                      </a>
                    </Button>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables & Tools */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold text-foreground mb-4">Deliverables</h3>
                <ul className="space-y-2">
                  {project.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold text-foreground mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="flex items-center px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg"
                    >
                      <Tag className="w-3 h-3 mr-2" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              Want similar results for your organization?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm">
              Let's discuss how I can help improve your workflows, build scalable systems, and coordinate AI tools that deliver real operational impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="btn-primary rounded-full">
                <a
                  href="https://calendly.com/keneth_kiplagat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Strategy Call
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/portfolio">View More Projects</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
