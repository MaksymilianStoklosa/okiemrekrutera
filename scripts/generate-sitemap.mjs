import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");
const OUTPUT_PATH = path.join(process.cwd(), "public", "sitemap.xml");
const SITE_URL = "https://okiemrekrutera.pl";

const staticEntries = [
  { path: "", changefreq: "weekly", priority: 1 },
  { path: "/oferta", changefreq: "monthly", priority: 0.9 },
  { path: "/cennik", changefreq: "monthly", priority: 0.8 },
  { path: "/o-mnie", changefreq: "monthly", priority: 0.6 },
  { path: "/blog", changefreq: "weekly", priority: 0.8 },
  { path: "/kontakt", changefreq: "monthly", priority: 0.7 },
  { path: "/regulamin", changefreq: "yearly", priority: 0.2 },
  { path: "/polityka-prywatnosci", changefreq: "yearly", priority: 0.2 },
];

function getBlogEntries() {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fileContents = fs.readFileSync(
        path.join(BLOG_DIRECTORY, file),
        "utf8",
      );
      const { data } = matter(fileContents);

      return {
        path: `/blog/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: data.date,
      };
    });
}

function generateSitemapXml(entries) {
  const urlEntries = entries
    .map(
      (entry) => `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
      entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""
    }
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

const sitemap = generateSitemapXml([...staticEntries, ...getBlogEntries()]);
fs.writeFileSync(OUTPUT_PATH, sitemap);
console.log(`Wygenerowano sitemap: ${OUTPUT_PATH}`);
