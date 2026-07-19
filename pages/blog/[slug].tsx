import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { Seo } from "@/components/seo/Seo";
import { Badge } from "@/components/ui/badge";
import { CTA } from "@/components/sections/CTA";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/mdx";
import {
  blogCategoryLabels,
  getCoverImage,
  type BlogPostMeta,
} from "@/data/blog";
import { getBlogPostingJsonLd } from "@/lib/seo";

interface BlogPostPageProps {
  meta: BlogPostMeta;
  content: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllBlogSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const { meta, content } = await getBlogPostBySlug(slug);

  return {
    props: { meta, content },
  };
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

const mdxComponents = {
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      className="my-6 w-full rounded-lg object-cover"
      alt={props.alt ?? ""}
    />
  ),
};

export default function BlogPostPage({ meta, content }: BlogPostPageProps) {
  const coverImage = getCoverImage(meta);

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={`/blog/${meta.slug}`}
        image={coverImage}
        jsonLd={getBlogPostingJsonLd(meta, coverImage)}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Image
          src={coverImage}
          alt=""
          width={1200}
          height={630}
          priority
          className="aspect-video w-full rounded-lg object-cover"
        />

        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="secondary">{blogCategoryLabels[meta.category]}</Badge>
          <span>{formatDate(meta.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{meta.readingTimeMinutes} min czytania</span>
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          {meta.title}
        </h1>

        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none prose-a:text-primary prose-headings:font-semibold">
          <MDXRemote {...content} components={mdxComponents} />
        </div>
      </article>

      <CTA />
    </>
  );
}
