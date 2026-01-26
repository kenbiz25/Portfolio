import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, Calendar, Tag, CheckCircle, Target, Zap, ExternalLink } from "lucide-react";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export const projects = [
  {
    id: "teenage-pregnancies-analysis",
    title: "Teenage Pregnancies in Kenya Analysis",
    category: "Data Analysis",
    date: "2024",
    problem: "Fragmented data across counties made policy-making difficult. Stakeholders lacked a unified view of teenage pregnancy trends across Kenya's 47 counties.",
    action: "Conducted comprehensive data analysis examining trends across all counties. Built interactive dashboards and created actionable reports for policymakers.",
    outcome: "Actionable insights for policymakers, adopted by 3 county governments. The analysis informed targeted intervention programs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    // Add 2-5 gallery images here
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
    liveUrl: "", // Add live project URL if available
    tools: ["Python", "Pandas", "Tableau", "Excel"],
    deliverables: ["Interactive county-level dashboard", "Policy recommendation report", "Trend analysis documentation"],
    impact: "3 county governments adopted recommendations"
  },
  {
    id: "nbc-report-2024",
    title: "NBC Report 2024/2025",
    category: "Data Analysis",
    date: "2024",
    problem: "Leadership lacked consolidated performance visibility. Decision-making was slow due to scattered data sources and inconsistent reporting.",
    action: "Created annual business intelligence report with market analysis and comprehensive metrics. Integrated multiple data sources into unified reporting.",
    outcome: "Strategic recommendations that improved decision-making speed by 40%. Leadership now has real-time visibility into key performance indicators.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
    liveUrl: "",
    tools: ["Power BI", "SQL", "Excel"],
    deliverables: ["Executive summary dashboard", "Quarterly performance reports", "KPI tracking system"],
    impact: "40% improvement in decision-making speed"
  },
  {
    id: "hai-africa-website",
    title: "Hai Africa Website & Training",
    category: "Web Development",
    date: "2024",
    problem: "Outdated website with poor discoverability and untrained staff. The organization struggled to reach their target audience online.",
    action: "Complete website development with SEO optimization. Provided comprehensive staff training on content management and analytics.",
    outcome: "150% increase in organic traffic within 6 months. Staff now independently manages content and tracks performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    ],
    liveUrl: "https://haiafrica.org",
    tools: ["WordPress", "SEO", "Google Analytics"],
    deliverables: ["Responsive website", "SEO-optimized content", "Staff training program", "Analytics setup"],
    impact: "150% increase in organic traffic"
  },
  {
    id: "khrc-srhr-report",
    title: "KHRC SRHR Media Coverage Report",
    category: "Data Analysis",
    date: "2024",
    problem: "No systematic tracking of media coverage for SRHR advocacy. The organization couldn't measure their media impact or optimize outreach.",
    action: "Implemented media monitoring and analysis for Kenya Human Rights Commission. Created tracking systems and comprehensive coverage reports.",
    outcome: "Evidence-based advocacy strategy that increased media engagement by 80%. Clear visibility into media reach and impact.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ],
    liveUrl: "",
    tools: ["Media Monitoring Tools", "Excel", "Data Visualization"],
    deliverables: ["Media monitoring dashboard", "Monthly coverage reports", "Advocacy impact analysis"],
    impact: "80% increase in media engagement"
  },
  {
    id: "zoe-africa-website",
    title: "ZOE Africa Website",
    category: "Web Development",
    date: "2023",
    problem: "Poor user experience leading to low donation conversions. The website wasn't effectively communicating impact to potential donors.",
    action: "Complete website redesign focused on UX and conversion optimization. Streamlined donation flow and improved impact storytelling.",
    outcome: "200% increase in online donations year-over-year. Improved donor engagement and retention.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ],
    liveUrl: "https://zoeafrica.org",
    tools: ["WordPress", "PHP", "SEO", "UX Design"],
    deliverables: ["Redesigned website", "Optimized donation funnel", "Impact storytelling pages", "Performance optimization"],
    impact: "200% increase in online donations"
  },
  {
    id: "search-console-dashboard",
    title: "Search Console Dashboard",
    category: "SEO",
    date: "2024",
    problem: "Clients couldn't track SEO performance in real-time. Manual reporting was time-consuming and often delayed.",
    action: "Built custom dashboard providing real-time SEO metrics and performance tracking. Automated reporting workflows.",
    outcome: "Enabled data-driven SEO decisions for 12+ client websites. Reduced reporting time by 90%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
    liveUrl: "",
    tools: ["Looker Studio", "Google Search Console", "BigQuery"],
    deliverables: ["Real-time SEO dashboard", "Automated reports", "Performance alerts", "Client training"],
    impact: "12+ clients with real-time SEO visibility"
  },
  {
    id: "dhirens-migration",
    title: "Dhirens Coffee & Salon Migration",
    category: "Web Development",
    date: "2023",
    problem: "Legacy website causing SEO value loss and performance issues. The business risked losing hard-earned search rankings during migration.",
    action: "Complete migration with SEO preservation and performance optimization. Implemented 301 redirects and preserved all ranking signals.",
    outcome: "Zero ranking loss during migration. 50% faster page load times and improved user experience.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop",
    ],
    liveUrl: "",
    tools: ["WordPress", "WooCommerce", "SEO Migration"],
    deliverables: ["Migrated website", "SEO preservation strategy", "Performance optimization", "Redirect mapping"],
    impact: "Zero ranking loss, 50% faster load times"
  },
  {
    id: "eagle-venture-safaris",
    title: "Eagle Venture Safaris Website",
    category: "Web Development",
    date: "2023",
    problem: "Limited international visibility for tourism services. The business struggled to attract international tourists online.",
    action: "Built tourism website with booking integration optimized for international SEO. Targeted key source markets.",
    outcome: "70% increase in international inquiries within first quarter. Improved conversion rates from website visitors.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&h=500&fit=crop",
    ],
    liveUrl: "https://eagleventuresafaris.com",
    tools: ["WordPress", "Booking System", "International SEO"],
    deliverables: ["Multilingual website", "Booking integration", "International SEO strategy", "Content optimization"],
    impact: "70% increase in international inquiries"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    date: "2024",
    problem: "Needed a modern platform to showcase professional work. Previous portfolio didn't effectively communicate value proposition.",
    action: "Built with React, TypeScript, and Tailwind CSS for optimal performance. Focused on conversion and clear value communication.",
    outcome: "Fast, responsive, and professional online presence. Improved lead generation and client inquiries.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    ],
    liveUrl: "",
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    deliverables: ["Modern portfolio website", "Contact form integration", "Performance optimization", "SEO setup"],
    impact: "Professional online presence established"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

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
              <span className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-1" />
                {project.date}
              </span>
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
              mainImage={project.image}
              galleryImages={project.galleryImages || []}
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
              Let's discuss how I can help you achieve clarity, visibility, and measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="btn-primary rounded-full">
                <a
                  href="https://calendly.com/kenethkiplagat"
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
