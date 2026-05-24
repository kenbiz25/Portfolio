import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, Calendar, Tag, CheckCircle, Target, Zap, ExternalLink, Lightbulb, Linkedin } from "lucide-react";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export const projects = [
  {
    id: "digital-health-scanner",
    title: "Digital Health Intelligence Scanner — Medtronic LABS",
    category: "AI & Automation",
    date: "2026",
    problem: "Leadership teams at Medtronic LABS needed timely, credible intelligence on digital health developments across 9 priority markets — but sourcing, verifying, and synthesizing that intelligence manually was slow, inconsistent, and impossible to scale. Critical signals were buried in noise, and executive time was being spent reading raw news rather than acting on insights.",
    action: "I built an automated AI intelligence platform — a 7-step multi-agent pipeline that scrapes 100+ targeted queries across web, news, academic, donor, and government sources; scores each article for credibility (0.0–1.0) filtering out recycled press releases and AI-generated content; enriches it with country tags, health domain categories, urgency tier, and sentiment; classifies business impact (Critical / High / Medium / Low); writes country-level intelligence snapshots with strategic outlook and action items; generates a branded multi-page PDF executive brief; and emails a structured digest to opted-in leadership. The pipeline runs on a configurable schedule (default: every 2 days) or can be triggered manually from the dashboard for any subset of the 9 target countries.",
    outcome: "Leadership now receives structured, AI-verified digital health intelligence across Sierra Leone, Bangladesh, Kenya, Rwanda, Ghana, India, Saudi Arabia, Tanzania, and Bhutan — automatically, every 2 days. Each article surfaces with an executive headline and a recommended action. Credibility scoring removes the noise. Decision-making shifted from reactive news browsing to proactive, prioritized intelligence delivery — without adding headcount.",
    lessons: [
      {
        title: "Multi-agent pipelines need orchestration, not just automation",
        detail: "Seven independent agents each doing one thing well is powerful — but only if their contracts are explicit. A silent failure in step 2 corrupts everything downstream. Orchestration is the product."
      },
      {
        title: "Credibility scoring is the most valuable step",
        detail: "Garbage in, garbage out. The verifier that filters noise — recycled press releases, single-source duplication, AI-generated filler — makes every downstream step more valuable. Trust the filter."
      },
      {
        title: "Delivery format determines adoption",
        detail: "A well-structured PDF brief that lands in an inbox gets read. A dashboard that requires login gets ignored. The last mile of intelligence delivery is as important as the pipeline that produces it."
      }
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop"
    ],
    liveUrl: "",
    linkedinUrl: "",
    tools: ["Python", "FastAPI", "Anthropic Claude", "Multi-agent Pipeline", "Tavily API", "ReportLab", "APScheduler", "WebSocket", "Docker", "AWS EC2"],
    deliverables: [
      "7-step multi-agent AI pipeline (scrape → verify → enrich → classify → write → PDF → email)",
      "Credibility scoring engine filtering 100+ sources per pipeline run",
      "Branded PDF executive brief with per-country intelligence snapshots",
      "HTML email digest with impact-classified article highlights and PDF attachment",
      "Real-time dashboard with WebSocket pipeline monitoring and run history"
    ],
    impact: "Automated AI-powered digital health intelligence across 9 priority markets — delivered to leadership as verified, impact-classified PDF briefs every 2 days"
  },
  {
    id: "whatsapp-ai-chatbot",
    title: "RAG-Based AI Support Tool for Community Health Workers — Sierra Leone",
    category: "AI & Automation",
    date: "April 2025 – May 2026",
    problem: "Community Health Workers (CHWs) in Sierra Leone operate in low-connectivity, low-digital-literacy environments, often without reliable access to trusted clinical guidance during patient interactions. The Ministry of Health Sierra Leone's ambition to transition from paper-based to digital care — across community health and patient management — required tools that work in real-world field conditions, not just controlled environments.",
    action: "Working with Medtronic LABS and the Ministry of Health Sierra Leone, I spent time in April with CHWs in the field to explore a RAG-based (Retrieval-Augmented Generation) AI support tool delivered entirely over WhatsApp — designed for low-connectivity, low-digital-literacy environments. The goal was to observe actual usage patterns, collect usability feedback, and understand how AI-powered tools perform in contexts defined by limited connectivity and varying digital literacy.",
    outcome: "The field research phase surfaced three defining lessons that directly shaped the tool's design. By May 2026, the tool was fully implemented and deployed — giving Community Health Workers in Sierra Leone real-time access to trusted clinical guidance over WhatsApp, at scale. Retrieval quality, low-latency responses, and CHW onboarding were the three pillars that made adoption possible in the field.",
    lessons: [
      {
        title: "Retrieval only works if what you're retrieving is trusted",
        detail: "A hallucination isn't a UX problem — it's a risk. In healthcare, incorrect AI-generated answers aren't just unhelpful, they're potentially dangerous to patients and health workers alike."
      },
      {
        title: "Latency isn't inconvenient — it's the adoption barrier",
        detail: "In low-connectivity environments, a slow response is the difference between a tool that gets used and one that gets abandoned. Performance is a product requirement, not an optimization."
      },
      {
        title: "Human connection is still needed",
        detail: "Good understanding of the 'why' is critical to avoid search loops and tool burden. AI tools without proper onboarding and context lead to over-reliance or abandonment — neither is useful in the field."
      }
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop"
    ],
    liveUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/kkiplagat_ai-rag-digitalhealth-ugcPost-7455182538982998016-BZNF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA_LOhsBldccvB4V1TLe4yzAU70f48zCDpk",
    tools: ["Python", "RAG", "WhatsApp Business API", "LLM", "Vector Database", "Field Research"],
    deliverables: [
      "Fully implemented RAG-based AI chatbot deployed over WhatsApp",
      "Field research with CHWs in Sierra Leone (April 2025)",
      "Usability testing and feedback loops in low-connectivity environments",
      "Full production deployment serving Community Health Workers (May 2026)"
    ],
    impact: "Fully deployed AI support tool for Community Health Workers in Sierra Leone — from field research (April 2025) to live implementation (May 2026)"
  },
  {
    id: "spice-insights-portal",
    title: "SPICE Insights Portal — MDTInsights",
    category: "Health Data & Decision Systems",
    date: "Q4 2024",
    problem: "Health programs across 5+ countries operated without a unified digital layer for decision-making. Leadership, governments, and frontline teams were working from fragmented data and delayed reporting — limiting their ability to respond quickly and allocate resources where they were needed most.",
    action: "I led the development of mdtinsights.org in Q4 2024, building a platform that powers health decision-making across 5+ countries through Power BI dashboards tailored to the needs of organizations and governments. The real challenge wasn't just building a website — it was learning how to close gaps, take ownership beyond assigned tasks, and ensure the platform serves frontline decisions, not just technical goals. I worked in an AI-first way throughout: using AI to accelerate learning, improve structure, and turn ideas into production without compromising judgment.",
    outcome: "mdtinsights.org went live delivering real-time, role-based health dashboards to ministries and leadership teams across Africa. Decision turnaround time improved from weeks to days. The project also marked a turning point in how I approach technology work — building with intent, learning in public, and using AI to amplify impact. Everything is possible with the right tools, the right support, and a willingness to learn.",
    lessons: [
      {
        title: "Go above and beyond assigned tasks",
        detail: "Closing gaps, unblocking progress, and taking quiet ownership when it mattered most — the work that doesn't show up in a ticket is often the work that ships the product."
      },
      {
        title: "Prioritize user needs over technical goals",
        detail: "The platform had to serve frontline health decisions, not just satisfy engineering requirements. Every design choice was tested against that question: does this help the person making the decision?"
      },
      {
        title: "Balance speed, quality, and scalability",
        detail: "Timelines were tight. The solution was not to cut corners but to build smart — using AI tools and structured iteration to move fast without accumulating debt."
      },
      {
        title: "Build with colleagues",
        detail: "Feedback loops with the team made every iteration better. Shipping faster happened because of the people around me, not despite them."
      },
      {
        title: "Work in an AI-first way",
        detail: "Using AI to accelerate learning, improve structure, and turn ideas into production — without replacing judgment. AI amplified the work; the decisions were still human."
      }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
    ],
    liveUrl: "https://mdtinsights.org",
    linkedinUrl: "https://www.linkedin.com/posts/kkiplagat_spice-insights-portal-share-7411891183020580864-s7ze/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA_LOhsBldccvB4V1TLe4yzAU70f48zCDpk",
    tools: ["Power BI", "Python", "SQL", "Excel", "AI-assisted development"],
    deliverables: [
      "mdtinsights.org — live health decision-making platform",
      "Power BI dashboards for 5+ country programs",
      "Role-based access for governments, ministries, and leadership teams",
      "Standardized KPI framework across multi-country health programs"
    ],
    impact: "Live platform powering health decisions across 5+ countries — built and shipped in Q4 2024"
  },
  {
    id: "repairshop-platform",
    title: "RepairShop Kenya",
    category: "Marketplace & Platform Systems",
    date: "2024",
    problem: "Service discovery in the informal repair sector was inefficient, with customers struggling to find reliable technicians and technicians lacking consistent access to demand.",
    action: "Built a two-sided marketplace platform that connects customers with technicians, streamlining service discovery, communication, and job coordination.",
    outcome: "Reduced service search friction, improved customer access to trusted technicians, and unlocked new income opportunities for service providers.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&h=500&fit=crop"
    ],
    liveUrl: "https://repairshop.co.ke",
    tools: ["PHP", "MySQL", "JavaScript"],
    deliverables: [
      "Customer–technician matching system",
      "Service listing and inquiry workflows",
      "Administrative management dashboard"
    ],
    impact: "Improved service access while enabling income generation for local technicians"
  },
  {
    id: "kenya-properties-platform",
    title: "Kenya Properties Platform",
    category: "PropTech & Marketplaces",
    date: "2024",
    problem: "The housing market lacked a unified digital layer, creating inefficiencies for tenants, property owners, and developers to find and connect with each other.",
    action: "Developed a centralized property discovery platform connecting tenants, landlords, and developers with structured listings and search capabilities.",
    outcome: "Improved housing discovery efficiency and increased visibility for property listings, reducing friction across the housing value chain.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=500&fit=crop"
    ],
    liveUrl: "https://kenyaproperties.co.ke",
    tools: ["PHP", "MySQL", "WordPress", "JavaScript"],
    deliverables: [
      "Property listing and search platform",
      "Tenant–landlord–developer connection workflows",
      "Location and filtering system"
    ],
    impact: "Increased transparency and efficiency in property discovery across Kenya"
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
    id: "tuvote-voting-platform",
    title: "TuVote — Organizational Voting Platform",
    category: "Digital Platforms & Engagement",
    date: "2025",
    problem: "Organizations relied on manual, fragmented voting processes — paper ballots, email polls, or generic forms — that were slow, hard to audit, and eroded confidence in election outcomes.",
    action: "Developed a purpose-built digital voting platform for organizations with secure voter authentication, configurable ballot creation, real-time result tracking, and a complete audit trail to ensure transparency and trust.",
    outcome: "Organizations now run fast, secure, and fully transparent digital elections with instant results, verifiable records, and significantly reduced administrative overhead.",
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    ],
    liveUrl: "https://tuvote.co.ke",
    tools: ["React", "Node.js", "PostgreSQL", "JWT Auth", "TypeScript"],
    deliverables: [
      "Secure ballot creation and management system",
      "Voter authentication and access control",
      "Real-time results dashboard",
      "Audit trail and reporting module"
    ],
    impact: "Secure, transparent organizational voting with real-time results and full audit trail"
  },
  {
    id: "manifest-dublin-church-website",
    title: "Manifest Dublin Digital Platform",
    category: "Digital Platforms & Engagement",
    date: "2024",
    problem: "The organization lacked a clear, modern digital presence to communicate vision, engage its community, and support growth, limiting reach and participation.",
    action: "Translated organizational vision into a scalable, accessible digital platform focused on clarity, usability, and engagement across devices.",
    outcome: "Improved user engagement, reduced friction for new visitors, and created a sustainable digital foundation for community growth.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=800&h=500&fit=crop"
    ],
    liveUrl: "https://manifestireland.org",
    tools: ["WordPress", "HTML", "CSS", "JavaScript"],
    deliverables: [
      "Responsive, accessible website",
      "Clear content and navigation architecture",
      "Optimized engagement pathways"
    ],
    impact: "Stronger digital engagement and improved visibility for community outreach"
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
    liveUrl: "https://kenkiplagat.co.ke/",
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
