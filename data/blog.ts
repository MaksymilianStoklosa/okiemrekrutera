export const blogCategories = [
  "porady-cv",
  "rozmowy-rekrutacyjne",
  "linkedin",
  "rynek-pracy",
  "historie-sukcesu",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogCategoryLabels: Record<BlogCategory, string> = {
  "porady-cv": "Porady CV i listu motywacyjnego",
  "rozmowy-rekrutacyjne": "Przygotowanie do rozmów rekrutacyjnych",
  linkedin: "LinkedIn i personal branding",
  "rynek-pracy": "Trendy na rynku pracy",
  "historie-sukcesu": "Historie sukcesu klientów",
};

export const blogCategoryCoverImages: Record<BlogCategory, string> = {
  "porady-cv": "/blog/covers/porady-cv.svg",
  "rozmowy-rekrutacyjne": "/blog/covers/rozmowy-rekrutacyjne.svg",
  linkedin: "/blog/covers/linkedin.svg",
  "rynek-pracy": "/blog/covers/rynek-pracy.svg",
  "historie-sukcesu": "/blog/covers/historie-sukcesu.svg",
};

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  author: string;
  coverImage?: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  slug: string;
  readingTimeMinutes: number;
}

export function getCoverImage(
  post: Pick<BlogPostMeta, "category" | "coverImage">,
) {
  return post.coverImage ?? blogCategoryCoverImages[post.category];
}
