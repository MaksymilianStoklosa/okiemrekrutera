import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { GetStaticProps } from "next";
import { Seo } from "@/components/seo/Seo";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/mdx";
import {
  blogCategories,
  blogCategoryLabels,
  getCoverImage,
  type BlogCategory,
  type BlogPostMeta,
} from "@/data/blog";

interface BlogIndexPageProps {
  posts: BlogPostMeta[];
}

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  return {
    props: {
      posts: getAllBlogPosts(),
    },
  };
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogIndexPage({ posts }: BlogIndexPageProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all",
  );

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const [featuredPost, ...remainingPosts] = filteredPosts;

  return (
    <>
      <Seo
        title="Blog: porady o CV, rekrutacji i rozmowach kwalifikacyjnych"
        description="Praktyczne porady dotyczące tworzenia CV, przygotowania do rozmowy rekrutacyjnej, LinkedIn i rynku pracy - prosto od doświadczonej rekruterki."
        path="/blog"
        keywords={[
          "porady cv",
          "blog o rekrutacji",
          "jak przygotować się do rozmowy o pracę",
        ]}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Praktyczne porady o CV, rozmowach rekrutacyjnych, LinkedIn i rynku
          pracy - z perspektywy osoby, która na co dzień rekrutuje.
        </p>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtruj według kategorii"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            aria-pressed={activeCategory === "all"}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <Badge
              variant={activeCategory === "all" ? "default" : "outline"}
              className={
                activeCategory === "all"
                  ? "hover:bg-secondary hover:text-secondary-foreground"
                  : "hover:bg-secondary hover:text-secondary-foreground"
              }
            >
              Wszystkie
            </Badge>
          </button>
          {blogCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className="cursor-pointer transition-transform hover:scale-105"
            >
              <Badge
                variant={activeCategory === category ? "default" : "outline"}
                className="hover:bg-secondary hover:text-secondary-foreground"
              >
                {blogCategoryLabels[category]}
              </Badge>
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <p className="mt-10 text-muted-foreground">
            Brak wpisów w tej kategorii.
          </p>
        ) : (
          <div className="mt-10 flex flex-col gap-10">
            {featuredPost && (
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="flex flex-col gap-6 rounded-lg border border-border p-6 transition-colors hover:border-primary/50 sm:flex-row sm:p-8"
              >
                <Image
                  src={getCoverImage(featuredPost)}
                  alt=""
                  width={1200}
                  height={630}
                  className="aspect-video w-full rounded-md object-cover sm:w-80"
                />
                <div className="flex flex-1 flex-col justify-center gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">
                      {blogCategoryLabels[featuredPost.category]}
                    </Badge>
                    <span>{formatDate(featuredPost.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredPost.readingTimeMinutes} min czytania</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {featuredPost.description}
                  </p>
                </div>
              </Link>
            )}

            {remainingPosts.length > 0 && (
              <ul className="grid gap-6 sm:grid-cols-2">
                {remainingPosts.map((post) => (
                  <li
                    key={post.slug}
                    className="rounded-lg border border-border p-6 transition-colors hover:border-primary/50"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex h-full flex-col gap-3"
                    >
                      <Image
                        src={getCoverImage(post)}
                        alt=""
                        width={1200}
                        height={630}
                        className="aspect-video w-full rounded-md object-cover"
                      />
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="secondary">
                          {blogCategoryLabels[post.category]}
                        </Badge>
                        <span>{formatDate(post.date)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readingTimeMinutes} min czytania</span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {post.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>
    </>
  );
}
