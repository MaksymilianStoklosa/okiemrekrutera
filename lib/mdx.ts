import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import type { BlogFrontmatter, BlogPostMeta } from "@/data/blog";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readBlogFile(slug: string) {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
}

export function getAllBlogSlugs(): string[] {
  return getBlogSlugs();
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const posts = getBlogSlugs().map((slug) => {
    const { data, content } = readBlogFile(slug);
    const frontmatter = data as BlogFrontmatter;

    return {
      slug,
      ...frontmatter,
      readingTimeMinutes: Math.ceil(readingTime(content).minutes),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPostBySlug(slug: string): Promise<{
  meta: BlogPostMeta;
  content: MDXRemoteSerializeResult;
}> {
  const { data, content } = readBlogFile(slug);
  const frontmatter = data as BlogFrontmatter;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    meta: {
      slug,
      ...frontmatter,
      readingTimeMinutes: Math.ceil(readingTime(content).minutes),
    },
    content: mdxSource,
  };
}
