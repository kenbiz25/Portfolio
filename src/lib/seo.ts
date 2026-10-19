import { useEffect } from "react";

export const SITE_URL = "https://www.kenkiplagat.co.ke";
export const SITE_NAME = "Keneth Kiplagat";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/img/og.jpg`;
export const DEFAULT_TITLE =
  "Keneth Kiplagat | Technology & AI Operations · Technical Program Management";
export const DEFAULT_DESCRIPTION =
  "Keneth Kiplagat leads technical delivery for multi-country digital health programs, coordinating technical teams, field operations, and donor stakeholders so platforms get adopted and actually work.";

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Keneth Kiplagat",
  url: SITE_URL,
  image: `${SITE_URL}/img/kip-web.webp`,
  jobTitle: "Technology & AI Operations | Technical Program Management",
  description: DEFAULT_DESCRIPTION,
  email: "mailto:kenbiz25@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  worksFor: { "@type": "Organization", name: "Medtronic LABS", url: "https://www.medtroniclabs.org" },
  alumniOf: { "@type": "Organization", name: "Mdundo.com" },
  knowsAbout: [
    "Technical Program Management",
    "Technology and AI Operations",
    "Management Information Systems (MIS)",
    "Digital Health",
    "Power BI",
    "Looker Studio",
    "Google Analytics 4",
    "Retrieval-Augmented Generation (RAG)",
    "Field Implementation and Adoption",
    "Multi-Country Program Delivery",
    "Stakeholder and Donor Governance",
  ],
  sameAs: [
    "https://www.linkedin.com/in/kkiplagat/",
    "https://github.com/kenbiz25",
    "https://twitter.com/Kenbiz25Keneth",
  ],
};

interface SeoOptions {
  title?: string;
  description?: string;
  /** Path starting with "/", e.g. "/portfolio" */
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** Extra JSON-LD blocks for this page */
  schema?: object[];
}

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const absolute = (url: string) => (url.startsWith("http") ? url : `${SITE_URL}${url}`);

/** Sets per-page title, description, canonical, social tags and JSON-LD. */
export const useSeo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  schema = [],
}: SeoOptions) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const img = absolute(image);
  const schemaJson = JSON.stringify(schema);

  useEffect(() => {
    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.head.querySelectorAll('script[data-seo="page"]').forEach((el) => el.remove());
    for (const block of JSON.parse(schemaJson) as object[]) {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.dataset.seo = "page";
      el.textContent = JSON.stringify(block);
      document.head.appendChild(el);
    }
  }, [fullTitle, description, url, img, type, noindex, schemaJson]);
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});
