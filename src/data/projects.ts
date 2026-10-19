export interface ProjectLesson {
  title: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  problem: string;
  action: string;
  outcome: string;
  lessons?: ProjectLesson[];
  image: string;
  galleryImages?: string[];
  liveUrl?: string;
  linkedinUrl?: string;
  tools: string[];
  deliverables: string[];
  impact: string;
}

// Filter tabs on /portfolio, in display order
export const projectCategories = [
  "Digital Health",
  "Data & MIS",
  "AI & Automation",
  "Product & Platforms",
  "Web & SEO",
];

export const projects: Project[] = [
  {
    id: "spice-insights-portal",
    title: "MDTInsights — RBAC Power BI Reporting Platform",
    category: "Data & MIS",
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
    image: "/img/projects/stock/photo-1551288049-bebda4e38f71.webp",
    galleryImages: [
      "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
      "/img/projects/stock/photo-1553877522-43269d4ea984.webp"
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
    impact: "Role-based Power BI reporting giving leadership and donors real-time delivery visibility across Bangladesh, Kenya, Ghana and Sierra Leone"
  },
  {
    id: "whatsapp-ai-chatbot",
    title: "RAG-Based AI Support Tool for Community Health Workers — Sierra Leone",
    category: "Digital Health",
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
    image: "/img/projects/stock/photo-1526374965328-7f61d4dc18c5.webp",
    galleryImages: [
      "/img/projects/stock/photo-1555949963-aa79dcee981c.webp",
      "/img/projects/stock/photo-1677442135703-1787eea5ce01.webp"
    ],
    liveUrl: "",
    linkedinUrl: "https://www.linkedin.com/posts/kkiplagat_ai-rag-digitalhealth-ugcPost-7455182538982998016-BZNF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA_LOhsBldccvB4V1TLe4yzAU70f48zCDpk",
    tools: ["Python", "FastAPI", "RAG", "FAISS", "OpenAI", "WhatsApp Cloud API", "Docker", "Field Research"],
    deliverables: [
      "Fully implemented RAG-based AI chatbot deployed over WhatsApp",
      "Field research with CHWs in Sierra Leone (April 2025)",
      "Usability testing and feedback loops in low-connectivity environments",
      "Full production deployment serving Community Health Workers (May 2026)"
    ],
    impact: "Fully deployed AI support tool for Community Health Workers in Sierra Leone — from field research (April 2025) to live implementation (May 2026)"
  },
  {
    id: "uhis-support-bangladesh",
    title: "UHIS Support Desk & Bangla AI Assistant — Bangladesh",
    category: "Digital Health",
    date: "2026",
    problem: "Health workers using the SPICE platform in Bangladesh's UHIS programme needed a reliable way to get help, and field support teams needed one place to receive, prioritise, escalate and resolve issues arriving from many channels, in Bangla as well as English.",
    action: "I built a multi-channel support desk and an AI support assistant for Medtronic LABS' Bangladesh field operations. Issues arrive by web form, WhatsApp, an embeddable widget, email, API or Telegram and land in one queue with SLA tiers (P1–P5 plus outage), breach timers, auto-assignment to the least-loaded agent, and an escalation matrix that follows the country's division and district structure across four support tiers (L1–L4). Alongside it, a RAG-based WhatsApp assistant answers how-to questions from the product knowledge base, detects Bangla and \"Banglish\", replies in the user's language, transcribes voice notes, and opens a structured ticket when it can't resolve an issue.",
    outcome: "The support portal is live at support.medtroniclabs.org, giving field teams a single, auditable view of every issue, with region-scoped access, CSAT feedback over WhatsApp, a public help centre, and analytics dashboards with export for programme reporting. The AI assistant architecture first built for Sierra Leone now serves a second country in a second language.",
    lessons: [
      {
        title: "Support design follows the shape of the health system",
        detail: "Escalation only works when it mirrors how the programme is actually run. Mapping support tiers to divisions and districts made ownership obvious instead of debated."
      },
      {
        title: "Meet users in their language and their channel",
        detail: "Health workers already live on WhatsApp and think in Bangla. Language detection and voice notes removed barriers that no amount of training would."
      },
      {
        title: "AI should hand off, not dead-end",
        detail: "When the assistant can't answer, it creates a structured ticket with context, so the human agent starts from the facts instead of from zero."
      }
    ],
    image: "/img/projects/uhis-main.webp",
    galleryImages: ["/img/projects/uhis-hero.webp"],
    liveUrl: "https://support.medtroniclabs.org",
    linkedinUrl: "",
    tools: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "WhatsApp Cloud API", "RAG", "OpenAI", "Chart.js", "APScheduler", "SSO (Google, Microsoft)"],
    deliverables: [
      "Multi-channel ticket intake (web, WhatsApp, widget, email, API, Telegram)",
      "SLA tiers with breach timers and least-loaded auto-assignment",
      "Country escalation matrix across L1–L4 support tiers",
      "Bangla/English RAG WhatsApp assistant with voice-note support",
      "CSAT, public help centre and analytics dashboards with CSV/Excel export",
      "Region-scoped role-based access and audit logs"
    ],
    impact: "Live multi-channel support desk and bilingual AI assistant for SPICE users in Bangladesh"
  },
  {
    id: "kdha-escalation-framework",
    title: "Escalation Management Framework — Kenya Digital Health Agency",
    category: "Digital Health",
    date: "National secondment",
    problem: "Kenya's nationwide rollout of the Social Health Authority (SHA) system on the Tiberbu platform meant issues would surface from facilities across the country at the same time. Without a clear way to capture, route and resolve them, problems stall adoption at exactly the moment a national system needs trust.",
    action: "On a national-scale secondment to the Kenya Digital Health Agency (Ministry of Health), I contributed to the development and management of an escalation management framework and the tool that supports it: how issues are logged, categorised, routed to the right team, and followed through to resolution during the nationwide SHA/Tiberbu rollout.",
    outcome: "The framework and tool were used in the nationwide SHA/Tiberbu rollout, giving the rollout a structured path from a reported issue to an accountable owner and a resolution.",
    image: "/img/projects/stock/photo-1576091160550-2173dba999ef.webp",
    galleryImages: [],
    liveUrl: "",
    linkedinUrl: "",
    tools: ["Escalation Management", "Service Management", "Stakeholder Coordination", "Reporting"],
    deliverables: [
      "Escalation management framework",
      "Escalation tracking tool",
      "Issue categorisation and routing to accountable teams"
    ],
    impact: "Contributed to the escalation framework and tool used in Kenya's nationwide SHA/Tiberbu rollout"
  },
  {
    id: "sierra-leone-field-adoption",
    title: "Field Adoption Assessments — Freetown & Bombali, Sierra Leone",
    category: "Digital Health",
    date: "Field assessment",
    problem: "Digital health platforms rarely fail in the code; they fail at the point of care. Before scaling, the programme needed to know what was actually stopping community health workers and hospital teams from using the tools day to day.",
    action: "I ran technical field adoption assessments in Freetown and Bombali, working directly with community health workers and hospital teams to observe real workflows and identify the barriers to use: device access, digital literacy and workflow fit.",
    outcome: "The findings were turned into practical rollout and training plans, so adoption work targeted the barriers that actually mattered on the ground rather than assumed ones.",
    image: "/img/projects/stock/photo-1584515933487-779824d29309.webp",
    galleryImages: [],
    liveUrl: "",
    linkedinUrl: "",
    tools: ["Field Research", "User Interviews", "Workflow Mapping", "Training Design", "Rollout Planning"],
    deliverables: [
      "Field adoption assessments in Freetown and Bombali",
      "Barrier analysis: device access, digital literacy, workflow fit",
      "Practical rollout plan",
      "Training plan for CHWs and hospital teams"
    ],
    impact: "Turned real field barriers into practical rollout and training plans for CHWs and hospital teams"
  },
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
    image: "/img/projects/stock/photo-1677442135703-1787eea5ce01.webp",
    galleryImages: [
      "/img/projects/stock/photo-1555949963-aa79dcee981c.webp",
      "/img/projects/stock/photo-1526374965328-7f61d4dc18c5.webp"
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
    id: "carwashmanage-saas",
    title: "CarwashManage — From Client Build to Multi-Tenant SaaS",
    category: "Product & Platforms",
    date: "2026",
    problem: "Most car washes in Kenya run on cash books and WhatsApp, with no reliable record of washes, staff commissions, M-Pesa payments or stock across branches. BGO Shine Hub, a 24/7 multi-branch wash in Nairobi, needed a system to run the business, and other car wash owners had the same problem.",
    action: "I started with a client build for BGO Shine Hub: active-wash tracking, staff roles, inventory, memberships and loyalty, expenses, reports, M-Pesa STK Push and WhatsApp notifications. I then turned it into CarwashManage, a multi-tenant SaaS. Each organisation gets branches and role-based access (owner, manager, cashier, staff); each branch collects M-Pesa into its own till, so money never passes through the platform; plans are billed monthly in KES with a 14-day trial, referral commissions and a Super Admin console for running the business. The same core was adapted for a nail salon and a barbershop.",
    outcome: "CarwashManage is live at carwashmanage.com with a self-serve free trial and a public demo that resets nightly. Customers track their car by phone number and plate without logging in, and owners see washes, revenue, M-Pesa share, queue and low-stock alerts across branches from one dashboard.",
    lessons: [
      {
        title: "A good client build is a product prototype",
        detail: "Solving one owner's problem well surfaced the workflows every car wash shares. Generalising them into tenants, branches and roles turned a project into a product."
      },
      {
        title: "Don't touch the money if you don't have to",
        detail: "Routing payments straight into each branch's own M-Pesa till removed a whole class of trust, compliance and reconciliation problems."
      },
      {
        title: "Design for the hosting you actually have",
        detail: "Merging backends into a single Node process to fit shared-hosting limits kept running costs low without compromising the product."
      }
    ],
    image: "/img/projects/carwashmanage-main.webp",
    galleryImages: [
      "/img/projects/carwashmanage-dashboard.webp",
      "/img/projects/carwashmanage-superadmin.webp",
      "/img/projects/carwashmanage-checkin.webp",
      "/img/projects/carwashmanage-mpesa.webp",
      "/img/projects/carwashmanage-salon.webp"
    ],
    liveUrl: "https://carwashmanage.com",
    linkedinUrl: "",
    tools: ["React", "Vite", "Tailwind CSS", "Node.js", "MySQL", "Firebase Auth", "M-Pesa (Daraja, Kopo Kopo)", "Paystack", "WhatsApp Cloud API"],
    deliverables: [
      "Multi-tenant organisation → branch → role model",
      "Wash check-in, live queue and no-login customer tracking",
      "Per-branch M-Pesa collection",
      "Subscription billing with trial, referrals and reminders",
      "Super Admin console for operating the SaaS",
      "Marketing site with prerendered SEO pages"
    ],
    impact: "Live multi-tenant SaaS for car wash businesses, grown from a single client build"
  },
  {
    id: "hakijamii-utawala-platform",
    title: "Utawala — Landscape Governance Platform for Hakijamii",
    category: "Product & Platforms",
    date: "2026",
    problem: "Communities facing land, water, environmental and climate rights issues in Kenya, Uganda and Tanzania have to navigate more than 40 mandated institutions. Cases get lost between paralegals, counties, regulators and civil society, with no shared record of who owns what.",
    action: "For the Hakijamii NGO, I took the platform from concept note to implementation roadmap to build: five modules on shared services, delivered in phases, starting with a multi-channel case management engine. Cases arrive via web form, a WhatsApp assistant with retrieval over policy material, an embeddable widget, email, USSD/SMS and API, and are tracked in list, split and kanban views with SLA tiers, breach detection, per-country escalation rules and CSAT. Later modules cover a community portal, field operations, an institutional portal, an analytics hub and a policy tracker.",
    outcome: "Hakijamii has a phased implementation roadmap and a working case management core that connects communities with the institutions responsible for their cases, designed from day one to run across three countries.",
    image: "/img/projects/stock/photo-1500382017468-9049fed747ef.webp",
    galleryImages: [],
    liveUrl: "",
    linkedinUrl: "",
    tools: ["Python", "Flask", "SQLAlchemy", "APScheduler", "Anthropic Claude", "OpenAI", "RAG", "WhatsApp", "USSD/SMS"],
    deliverables: [
      "Concept note and implementation roadmap",
      "Phased development plan (five modules, shared services)",
      "Multi-channel case intake including USSD/SMS",
      "SLA, escalation and CSAT engine",
      "WhatsApp assistant with retrieval over policy material"
    ],
    impact: "From concept note to roadmap to a working case management core for a three-country governance platform"
  },
  {
    id: "mlabs-core-traits-awards",
    title: "Core Traits Recognition Awards Platform — Medtronic LABS",
    category: "Product & Platforms",
    date: "2026",
    problem: "Medtronic LABS runs a recognition programme where colleagues across country teams nominate peers who live the organisation's core traits. Generic survey tools made nominations hard to manage, review and report on each cycle.",
    action: "I built a lightweight, self-hosted nomination and reporting tool: Microsoft sign-in (OAuth with PKCE) with auto-provisioned accounts, a searchable nominee picker, duplicate prevention, admin team management, and dashboards for HR and leadership showing trends and winners per cycle, with CSV and PDF export.",
    outcome: "The platform is live at awards.medtroniclabs.org, giving HR a purpose-built workflow from nomination to review to winners, owned in-house instead of rented as a SaaS licence.",
    image: "/img/projects/stock/photo-1552664730-d307ca884978.webp",
    galleryImages: [],
    liveUrl: "https://awards.medtroniclabs.org",
    linkedinUrl: "",
    tools: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "Zod", "Microsoft Entra ID (OAuth + PKCE)"],
    deliverables: [
      "Peer nomination workflow with duplicate prevention",
      "Microsoft sign-in with auto-provisioned accounts",
      "HR and leadership dashboards per award cycle",
      "CSV and PDF export",
      "Admin team management"
    ],
    impact: "In-house recognition platform for country teams, live at awards.medtroniclabs.org"
  },
  {
    id: "repairshop-platform",
    title: "RepairShop Kenya (Fyx) — Field-Service Platform",
    category: "Product & Platforms",
    date: "2026",
    problem: "Service discovery in the informal repair sector was inefficient, with customers struggling to find reliable technicians and technicians lacking consistent access to demand.",
    action: "Built a two-sided field-service platform for appliance repair and installation: online booking, coverage-area pages, technician onboarding, dispatch with a live job map, customer, technician and admin portals, job completion and payments, technician payout requests, and a blog with a generated sitemap.",
    outcome: "Reduced service search friction, improved customer access to trusted technicians, and unlocked new income opportunities for service providers.",
    image: "/img/projects/repairshop-main.webp",
    galleryImages: [
      "/img/projects/repairshop-dispatch.webp",
      "/img/projects/repairshop-livemap.webp",
      "/img/projects/repairshop-technician.webp",
      "/img/projects/repairshop-booking.webp"
    ],
    liveUrl: "https://repairshop.co.ke",
    tools: ["React", "TypeScript", "Vite", "Firebase", "Vitest"],
    deliverables: [
      "Online booking and coverage-area pages",
      "Technician onboarding and job portal",
      "Dispatch with live job map",
      "Payments and technician payout requests",
      "Admin overview dashboard"
    ],
    impact: "Improved service access while enabling income generation for local technicians"
  },
  {
    id: "kenya-properties-platform",
    title: "Kenya Properties Platform",
    category: "Product & Platforms",
    date: "2026",
    problem: "The housing market lacked a unified digital layer, creating inefficiencies for tenants, property owners, and developers to find and connect with each other.",
    action: "Developed a property marketplace for buying, renting and listing: customer, agent and admin roles, search and saved searches, favourites, real-time messaging and notifications, reviews, a mortgage calculator, and paid listing promotion with Stripe subscriptions and an admin approval workflow.",
    outcome: "Improved housing discovery efficiency and increased visibility for property listings, reducing friction across the housing value chain.",
    image: "/img/projects/kenyaproperties-main.webp",
    galleryImages: ["/img/projects/kenyaproperties-og.webp"],
    liveUrl: "https://kenyaproperties.co.ke",
    tools: ["React", "TypeScript", "Vite", "Firebase", "Stripe"],
    deliverables: [
      "Property listing, search and saved searches",
      "Real-time messaging and notifications",
      "Agent subscriptions and paid promotions (Stripe)",
      "Admin approval and moderation workflows"
    ],
    impact: "Increased transparency and efficiency in property discovery across Kenya"
  },
  {
    id: "cvrevamp-ats-cv-builder",
    title: "CVRevamp — AI ATS CV Builder & Job Board",
    category: "AI & Automation",
    date: "2026",
    problem: "Job seekers in East Africa lose out to applicant tracking systems before a human ever reads their CV, and job listings are scattered across many sites.",
    action: "I built CVRevamp, evolving it from two earlier prototypes: ATS-friendly templates with real-time ATS scoring, job-description keyword matching, AI tools that improve bullet points, generate summaries and tailor a CV to a role, PDF and Word export, shareable public CV links, and an AI-assisted job board for Kenya, Tanzania and Uganda fed by a daily scheduled scrape.",
    outcome: "A complete product with pricing and a paywall in place, taking a user from CV upload to a tailored, ATS-scored CV and matched job leads.",
    image: "/img/projects/cvrevamp-main.webp",
    galleryImages: [],
    liveUrl: "",
    linkedinUrl: "",
    tools: ["React", "TypeScript", "Vite", "Firebase (Auth, Firestore, Functions)", "OpenAI", "shadcn/ui"],
    deliverables: [
      "ATS templates with real-time scoring",
      "Job-description keyword matching",
      "AI bullet, summary and tailoring tools",
      "PDF and Word export with shareable links",
      "Daily-updated East African job board"
    ],
    impact: "AI CV builder with ATS scoring and a daily-updated East African job board"
  },
  {
    id: "social-agent-ai-pipeline",
    title: "Social Agent — Autonomous AI Content Pipeline",
    category: "AI & Automation",
    date: "2026",
    problem: "Keeping a consistent, relevant social presence takes hours of reading and writing every week, time better spent on the work itself.",
    action: "I built a four-agent pipeline: discovery finds news in configured topic areas, enrichment pulls and summarises the source, generation drafts platform-specific posts with Claude, and publishing schedules them into posting slots for X, LinkedIn, Facebook or Buffer. It runs on a schedule with a SQLite store, a CLI with dry-run and stats modes, and tests.",
    outcome: "A working, scheduled pipeline that turns topic configs into ready-to-publish posts. It is a practical example of AI operations: clear agent contracts, a dry-run mode, and a publishing step a human can control.",
    image: "/img/projects/stock/photo-1611162617213-7d7a39e9b1d7.webp",
    galleryImages: [],
    liveUrl: "",
    linkedinUrl: "",
    tools: ["Python", "Anthropic Claude", "Tavily", "APScheduler", "SQLAlchemy", "Tweepy"],
    deliverables: [
      "Discovery, enrichment, generation and publishing agents",
      "Scheduled posting slots across X, LinkedIn, Facebook and Buffer",
      "CLI with dry-run and stats modes",
      "Test suite"
    ],
    impact: "Four-agent pipeline from news discovery to scheduled, platform-specific posts"
  },
  {
    id: "diabetes-ngo-websites",
    title: "DMI Centre & KDDA — Diabetes NGO Websites",
    category: "Web & SEO",
    date: "2026",
    problem: "Two Kenyan diabetes organisations, the Diabetes Management & Information (DMI) Centre and the Kenya Defeat Diabetes Association (KDDA), needed modern websites that make it easy for people living with diabetes, caregivers and partners to find support, programmes, events and opportunities.",
    action: "I built the DMI Centre website, with live opening-hours status, activities, projects, tenders, opportunities and contact pages, plus SEO, sitemap, maps and dark mode. I then reused the build as a template to give KDDA its own branded site.",
    outcome: "dmi.or.ke is live, presenting DMI's services, programmes and events in one place. Reusing the build as a template meant a second NGO got a site for a fraction of the effort.",
    image: "/img/projects/dmi-main.webp",
    galleryImages: ["/img/projects/dmi-field.webp", "/img/projects/dmi-golf.webp"],
    liveUrl: "https://dmi.or.ke",
    linkedinUrl: "",
    tools: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Leaflet", "SEO"],
    deliverables: [
      "DMI Centre website with live opening-hours status",
      "Programmes, events, tenders and opportunities pages",
      "SEO setup and sitemap",
      "Reusable template adapted for KDDA"
    ],
    impact: "Live website for a Kenyan diabetes charity, reused as a template for a second NGO"
  },
  {
    id: "tuvote-voting-platform",
    title: "TuVote — Organizational Voting Platform",
    category: "Product & Platforms",
    date: "2026",
    problem: "Organizations relied on manual, fragmented voting processes — paper ballots, email polls, or generic forms — that were slow, hard to audit, and eroded confidence in election outcomes.",
    action: "Developed a purpose-built digital voting platform for organizations with secure voter authentication, configurable ballot creation, real-time result tracking, and a complete audit trail to ensure transparency and trust.",
    outcome: "Organizations now run fast, secure, and fully transparent digital elections with instant results, verifiable records, and significantly reduced administrative overhead.",
    image: "/img/projects/stock/photo-1494172961521-33799ddd43a5.webp",
    galleryImages: [
      "/img/projects/stock/photo-1540910419892-4a36d2c3266c.webp",
      "/img/projects/stock/photo-1551288049-bebda4e38f71.webp"
    ],
    liveUrl: "",
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI"],
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
    category: "Web & SEO",
    date: "2025–2026",
    problem: "The organization lacked a clear, modern digital presence to communicate vision, engage its community, and support growth, limiting reach and participation.",
    action: "Translated organizational vision into a scalable, accessible digital platform focused on clarity, usability, and engagement across devices.",
    outcome: "Improved user engagement, reduced friction for new visitors, and created a sustainable digital foundation for community growth.",
    image: "/img/projects/stock/photo-1520975916090-3105956dac38.webp",
    galleryImages: [
      "/img/projects/stock/photo-1504384308090-c894fdcc538d.webp"
    ],
    liveUrl: "",
    tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "YouTube Live"],
    deliverables: [
      "Responsive, accessible website",
      "Clear content and navigation architecture",
      "Optimized engagement pathways"
    ],
    impact: "Stronger digital engagement and improved visibility for community outreach"
  },
  {
    id: "khrc-srhr-report",
    title: "KHRC SRHR Media Coverage Report",
    category: "Data & MIS",
    date: "2024",
    problem: "No systematic tracking of media coverage for SRHR advocacy. The organization couldn't measure their media impact or optimize outreach.",
    action: "Implemented media monitoring and analysis for Kenya Human Rights Commission. Created tracking systems and comprehensive coverage reports.",
    outcome: "Evidence-based advocacy strategy that increased media engagement by 80%. Clear visibility into media reach and impact.",
    image: "/img/projects/stock/photo-1504711434969-e33886168f5c.webp",
    galleryImages: [
      "/img/projects/stock/photo-1551288049-bebda4e38f71.webp",
    ],
    liveUrl: "",
    tools: ["Media Monitoring Tools", "Excel", "Data Visualization"],
    deliverables: ["Media monitoring dashboard", "Monthly coverage reports", "Advocacy impact analysis"],
    impact: "80% increase in media engagement"
  },
  {
    id: "nbc-report-2024",
    title: "NBC Report 2024/2025",
    category: "Data & MIS",
    date: "2024",
    problem: "Leadership lacked consolidated performance visibility. Decision-making was slow due to scattered data sources and inconsistent reporting.",
    action: "Created annual business intelligence report with market analysis and comprehensive metrics. Integrated multiple data sources into unified reporting.",
    outcome: "Strategic recommendations that improved decision-making speed by 40%. Leadership now has real-time visibility into key performance indicators.",
    image: "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
    galleryImages: [
      "/img/projects/stock/photo-1551288049-bebda4e38f71.webp",
      "/img/projects/stock/photo-1551434678-e076c223a692.webp",
      "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
    ],
    liveUrl: "",
    tools: ["Power BI", "SQL", "Excel"],
    deliverables: ["Executive summary dashboard", "Quarterly performance reports", "KPI tracking system"],
    impact: "40% improvement in decision-making speed"
  },
  {
    id: "search-console-dashboard",
    title: "Search Console Dashboard",
    category: "Web & SEO",
    date: "2024",
    problem: "Clients couldn't track SEO performance in real-time. Manual reporting was time-consuming and often delayed.",
    action: "Built custom dashboard providing real-time SEO metrics and performance tracking. Automated reporting workflows.",
    outcome: "Enabled data-driven SEO decisions for 12+ client websites. Reduced reporting time by 90%.",
    image: "/img/projects/stock/photo-1551288049-bebda4e38f71.webp",
    galleryImages: [
      "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
      "/img/projects/stock/photo-1504868584819-f8e8b4b6d7e3.webp",
    ],
    liveUrl: "",
    tools: ["Looker Studio", "Google Search Console", "BigQuery"],
    deliverables: ["Real-time SEO dashboard", "Automated reports", "Performance alerts", "Client training"],
    impact: "12+ clients with real-time SEO visibility"
  },
  {
    id: "hai-africa-website",
    title: "Hai Africa Website & Training",
    category: "Web & SEO",
    date: "2024",
    problem: "Outdated website with poor discoverability and untrained staff. The organization struggled to reach their target audience online.",
    action: "Complete website development with SEO optimization. Provided comprehensive staff training on content management and analytics.",
    outcome: "150% increase in organic traffic within 6 months. Staff now independently manages content and tracks performance.",
    image: "/img/projects/stock/photo-1467232004584-a241de8bcf5d.webp",
    galleryImages: [
      "/img/projects/stock/photo-1547658719-da2b51169166.webp",
      "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
    ],
    liveUrl: "https://haiafrica.org",
    tools: ["WordPress", "SEO", "Google Analytics"],
    deliverables: ["Responsive website", "SEO-optimized content", "Staff training program", "Analytics setup"],
    impact: "150% increase in organic traffic"
  },
  {
    id: "zoe-africa-website",
    title: "ZOE Africa Website",
    category: "Web & SEO",
    date: "2023",
    problem: "Poor user experience leading to low donation conversions. The website wasn't effectively communicating impact to potential donors.",
    action: "Complete website redesign focused on UX and conversion optimization. Streamlined donation flow and improved impact storytelling.",
    outcome: "200% increase in online donations year-over-year. Improved donor engagement and retention.",
    image: "/img/projects/stock/photo-1547658719-da2b51169166.webp",
    galleryImages: [
      "/img/projects/stock/photo-1467232004584-a241de8bcf5d.webp",
      "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
      "/img/projects/stock/photo-1551288049-bebda4e38f71.webp",
    ],
    liveUrl: "",
    tools: ["WordPress", "PHP", "SEO", "UX Design"],
    deliverables: ["Redesigned website", "Optimized donation funnel", "Impact storytelling pages", "Performance optimization"],
    impact: "200% increase in online donations"
  },
  {
    id: "dhirens-migration",
    title: "Dhirens Coffee & Salon Migration",
    category: "Web & SEO",
    date: "2023",
    problem: "Legacy website causing SEO value loss and performance issues. The business risked losing hard-earned search rankings during migration.",
    action: "Complete migration with SEO preservation and performance optimization. Implemented 301 redirects and preserved all ranking signals.",
    outcome: "Zero ranking loss during migration. 50% faster page load times and improved user experience.",
    image: "/img/projects/stock/photo-1495474472287-4d71bcdd2085.webp",
    galleryImages: [
      "/img/projects/stock/photo-1501339847302-ac426a4a7cbb.webp",
    ],
    liveUrl: "",
    tools: ["WordPress", "WooCommerce", "SEO Migration"],
    deliverables: ["Migrated website", "SEO preservation strategy", "Performance optimization", "Redirect mapping"],
    impact: "Zero ranking loss, 50% faster load times"
  },
  {
    id: "eagle-venture-safaris",
    title: "Eagle Venture Safaris Website",
    category: "Web & SEO",
    date: "2023",
    problem: "Limited international visibility for tourism services. The business struggled to attract international tourists online.",
    action: "Built tourism website with booking integration optimized for international SEO. Targeted key source markets.",
    outcome: "70% increase in international inquiries within first quarter. Improved conversion rates from website visitors.",
    image: "/img/projects/stock/photo-1516426122078-c23e76319801.webp",
    galleryImages: [
      "/img/projects/stock/photo-1547471080-7cc2caa01a7e.webp",
      "/img/projects/stock/photo-1523805009345-7448845a9e53.webp",
    ],
    liveUrl: "",
    tools: ["WordPress", "Booking System", "International SEO"],
    deliverables: ["Multilingual website", "Booking integration", "International SEO strategy", "Content optimization"],
    impact: "70% increase in international inquiries"
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Web & SEO",
    date: "2024",
    problem: "Needed a modern platform to showcase professional work. Previous portfolio didn't effectively communicate value proposition.",
    action: "Built with React, TypeScript, and Tailwind CSS for optimal performance. Focused on conversion and clear value communication.",
    outcome: "Fast, responsive, and professional online presence. Improved lead generation and client inquiries.",
    image: "/img/projects/stock/photo-1517180102446-f3ece451e9d8.webp",
    galleryImages: [
      "/img/projects/stock/photo-1460925895917-afdab827c52f.webp",
      "/img/projects/stock/photo-1551288049-bebda4e38f71.webp",
    ],
    liveUrl: "https://kenkiplagat.co.ke/",
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    deliverables: ["Modern portfolio website", "Contact form integration", "Performance optimization", "SEO setup"],
    impact: "Professional online presence established"
  }
];
