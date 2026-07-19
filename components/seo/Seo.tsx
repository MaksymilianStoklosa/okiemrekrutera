import Head from "next/head";
import { siteConfig } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({
  title,
  description,
  path = "",
  keywords,
  image,
  noIndex = false,
  jsonLd,
}: SeoProps) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const metaDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const metaKeywords = [...siteConfig.keywords, ...(keywords ?? [])].join(", ");
  const ogImage = `${siteConfig.url}${image ?? siteConfig.ogImage}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={siteConfig.author} />
        <meta
          name="robots"
          content={noIndex ? "noindex, nofollow" : "index, follow"}
        />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteConfig.name} />
        <meta property="og:locale" content={siteConfig.locale} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Head>
      {jsonLd && <JsonLd data={jsonLd} />}
    </>
  );
}
