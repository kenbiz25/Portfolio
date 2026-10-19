// Right-size project images for where they're shown.
// Local /img/projects/**/*.webp images have a pre-generated "-card" variant
// (640px wide); Unsplash URLs are resized by their CDN.
export const projectImage = (url: string, size: "card" | "hero" = "hero") => {
  if (url.includes("images.unsplash.com")) {
    const [w, h] = size === "card" ? [640, 320] : [1200, 600];
    const base = url.split("?")[0];
    return `${base}?w=${w}&h=${h}&fit=crop&auto=format&q=70`;
  }
  if (size === "card" && url.startsWith("/img/projects/") && url.endsWith(".webp") && !url.endsWith("-card.webp")) {
    return url.replace(/\.webp$/, "-card.webp");
  }
  return url;
};

/** srcset for a case-study hero: 640w on phones, 1200w on larger screens. */
export const projectImageSrcSet = (url: string) => {
  const small = projectImage(url, "card");
  const large = projectImage(url, "hero");
  return small === large ? undefined : `${small} 640w, ${large} 1200w`;
};
