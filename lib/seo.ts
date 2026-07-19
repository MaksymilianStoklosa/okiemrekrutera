import { siteConfig } from "@/data/site";
import type { BlogPostMeta } from "@/data/blog";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: "Okiem Rekrutera",
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    areaServed: "PL",
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: siteConfig.author,
      jobTitle: "Doradca kariery i rekruterka",
    },
    knowsAbout: [
      "Pisanie CV",
      "Poprawa CV",
      "Optymalizacja CV pod ATS",
      "Przygotowanie do rozmowy rekrutacyjnej",
      "Optymalizacja profilu LinkedIn",
      "Doradztwo zawodowe",
      "Rekrutacja",
      "Analiza rynku pracy",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "pl-PL",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function getBlogPostingJsonLd(meta: BlogPostMeta, coverImage: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    image: `${siteConfig.url}${coverImage}`,
    datePublished: meta.date,
    dateModified: meta.date,
    author: {
      "@type": "Person",
      name: meta.author,
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: `${siteConfig.url}/blog/${meta.slug}`,
  };
}

export function getServiceJsonLd(service: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/oferta#${service.slug}`,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: "PL",
  };
}
