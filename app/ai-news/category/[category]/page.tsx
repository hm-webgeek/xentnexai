import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, CATEGORIES, getDesktopHeroImage } from "@/src/lib/articles";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const label = CATEGORIES[category];
  if (!label) return {};
  return { title: `${label} — AI News | XentnexAI` };
}

const CATEGORY_SUBHEADINGS: Record<string, string> = {
  "ai-tools":       "Discover the AI tools helping Sunshine Coast businesses work smarter and grow faster.",
  automation:       "Automation guides and workflows for Sunshine Coast businesses ready to reclaim their time.",
  "local-business": "AI news and practical insights for local businesses on the Sunshine Coast, QLD.",
  "industry-news":  "Stay across the latest AI industry developments and what they mean for your business.",
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = CATEGORIES[category];
  if (!label) notFound();

  const articles = getAllArticles().filter((a) => a.frontmatter.category === category);
  const subheading = CATEGORY_SUBHEADINGS[category] ?? "";

  return (
    <div style={{ backgroundColor: "#F8FAFB", minHeight: "60vh" }}>
      <section style={{ backgroundColor: "#0B1426", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/ai-news" style={{ fontSize: "0.875rem", color: "#64748B", textDecoration: "none", display: "inline-block", marginBottom: "1.25rem" }}>← AI News</Link>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#F0F4F8", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>{label}</h1>
          {subheading && <p style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.6, maxWidth: "48rem" }}>{subheading}</p>}
        </div>
      </section>
      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {articles.length === 0 ? (
            <p style={{ color: "#64748B", textAlign: "center", padding: "4rem 0" }}>No articles in this category yet.</p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.slug} href={`/ai-news/${article.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ backgroundColor: "#FFFFFF", borderRadius: "1rem", border: "1px solid #E8EFF4", overflow: "hidden" }}>
                    <div style={{ position: "relative", height: "13rem", backgroundColor: "#E8EFF4" }}>
                      {getDesktopHeroImage(article.frontmatter) ? (
                        <img src={getDesktopHeroImage(article.frontmatter)} alt={article.frontmatter.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                      ) : (
                        <div style={{ height: "100%", background: "linear-gradient(135deg, #0B1426 0%, #1A2740 100%)" }} />
                      )}
                    </div>
                    <div style={{ padding: "1.25rem 1.5rem" }}>
                      <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "#1A2740", lineHeight: 1.35, marginBottom: "0.5rem" }}>{article.frontmatter.title}</h2>
                      <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>{article.frontmatter.summary}</p>
                      <time style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                        {new Date(article.frontmatter.date + "T00:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
