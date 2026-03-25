import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const CATEGORIES: Record<string, string> = {
  "ai-tools": "AI Tools",
  automation: "Automation",
  "local-business": "Local Business",
  "industry-news": "Industry News",
};

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface ArticleFrontmatter {
  title: string;
  date: string;
  category: "ai-tools" | "automation" | "local-business" | "industry-news";
  summary: string;
  heroImage?: string;
  sources?: { url: string; title: string }[];
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(ARTICLES_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return { slug, frontmatter: data as ArticleFrontmatter, content };
  });

  return articles.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  for (const ext of [".mdx", ".md"]) {
    const filePath = path.join(ARTICLES_DIR, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return { slug, frontmatter: data as ArticleFrontmatter, content };
    }
  }
  return null;
}
