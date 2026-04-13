import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug, CATEGORIES, getDesktopHeroImage, getMobileHeroImage } from "@/src/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.frontmatter.title} | XentnexAI`,
    description: article.frontmatter.summary,
  };
}

const CATEGORY_COLOURS: Record<string, { bg: string; text: string }> = {
  "ai-tools":      { bg: "#E6FAF8", text: "#1BA899" },
  automation:      { bg: "#EEF2FF", text: "#4F46E5" },
  "local-business":{ bg: "#FEF6E4", text: "#C47A10" },
  "industry-news": { bg: "#F1F5F9", text: "#475569" },
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const categoryLabel = CATEGORIES[frontmatter.category] ?? frontmatter.category;
  const c = CATEGORY_COLOURS[frontmatter.category] ?? { bg: "#F1F5F9", text: "#475569" };
  const desktopHero = getDesktopHeroImage(frontmatter);
  const mobileHero = getMobileHeroImage(frontmatter);

  return (
    <div style={{ backgroundColor: "#F8FAFB", minHeight: "60vh" }}>
      {/* Article header */}
      <div style={{ backgroundColor: "#0B1426", padding: "3rem 1.5rem 0" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <Link href="/ai-news" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", color: "#64748B", fontSize: "0.875rem", textDecoration: "none", marginBottom: "1.5rem" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            AI News
          </Link>

          <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "9999px", backgroundColor: c.bg, color: c.text, fontSize: "0.75rem", fontWeight: 600, marginBottom: "1rem" }}>
            {categoryLabel}
          </span>

          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#F0F4F8", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            {frontmatter.title}
          </h1>

          <p style={{ color: "#94A3B8", fontSize: "1.0625rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            {frontmatter.summary}
          </p>

          <time style={{ display: "block", fontSize: "0.8125rem", color: "#64748B", paddingBottom: "2rem" }}>
            {new Date(frontmatter.date + "T00:00:00").toLocaleDateString("en-AU", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </time>
        </div>
      </div>

      {/* Hero image */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ position: "relative", height: "22rem", borderRadius: "0 0 1rem 1rem", overflow: "hidden", backgroundColor: "#E8EFF4" }}>
          {desktopHero || mobileHero ? (
            <picture>
              {mobileHero ? <source media="(max-width: 767px)" srcSet={mobileHero} /> : null}
              <img
                src={desktopHero ?? mobileHero}
                alt={frontmatter.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </picture>
          ) : (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", background: "linear-gradient(135deg, #0B1426 0%, #1A2740 100%)" }}>
              <svg width="48" height="48" viewBox="0 0 80 80" fill="none" opacity={0.35}><circle stroke="#2DD4BF" strokeWidth="2" cx="40" cy="40" r="25" strokeDasharray="130 25" /><circle fill="#2DD4BF" cx="40" cy="17" r="4" /><circle fill="#2DD4BF" cx="40" cy="40" r="4" /></svg>
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: "48rem", margin: "0 auto", padding: "2.5rem 1.5rem 4rem" }}>
        <div style={{
          color: "#334155",
          fontSize: "1.0625rem",
          lineHeight: 1.8,
        }}>
          <MDXRemote source={content} />
        </div>

        {/* Sources */}
        {frontmatter.sources && frontmatter.sources.length > 0 && (
          <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #E8EFF4" }}>
            <h2 style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94A3B8", marginBottom: "0.75rem" }}>Sources</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {frontmatter.sources.map((source, i) => (
                <li key={i}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "#2DD4BF", textDecoration: "none" }}>
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ marginTop: "2.5rem" }}>
          <Link href="/ai-news" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "#64748B", textDecoration: "none" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to AI News
          </Link>
        </div>
      </div>
    </div>
  );
}
