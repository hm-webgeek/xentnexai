import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, CATEGORIES } from "@/src/lib/articles";
import ArticleGrid from "@/components/ArticleGrid";

export const metadata: Metadata = {
  title: "AI News for Sunshine Coast Businesses | XentnexAI",
  description:
    "Daily AI news curated for Sunshine Coast business owners. What's happening in AI and what it means for your business.",
};

const CATEGORY_COLOURS: Record<string, { bg: string; text: string }> = {
  "ai-tools":       { bg: "#E6FAF8", text: "#1BA899" },
  automation:       { bg: "#EEF2FF", text: "#4F46E5" },
  "local-business": { bg: "#FEF6E4", text: "#C47A10" },
  "industry-news":  { bg: "#F1F5F9", text: "#475569" },
};

export default function AINewsPage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#0B1426", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "4rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.875rem", borderRadius: "9999px", border: "1px solid rgba(45,212,191,0.35)", backgroundColor: "rgba(45,212,191,0.08)", color: "#2DD4BF", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" as const, marginBottom: "1.25rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#2DD4BF", display: "inline-block" }} />
            Updated daily
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, color: "#F0F4F8", letterSpacing: "-0.03em", marginBottom: "0.875rem", lineHeight: 1.15 }}>
            AI News for Sunshine Coast Businesses
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "1.0625rem", lineHeight: 1.7, maxWidth: "54ch" }}>
            Every morning our AI agent scans the web and surfaces the stories that matter — with a local business lens.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>

          {/* Category filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem", marginBottom: "2.5rem" }}>
            {Object.entries(CATEGORIES).map(([slug, label]) => {
              const c = CATEGORY_COLOURS[slug] ?? { bg: "#F1F5F9", text: "#475569" };
              return (
                <Link key={slug} href={`/ai-news/category/${slug}`}
                  style={{ padding: "0.375rem 1rem", borderRadius: "9999px", backgroundColor: c.bg, color: c.text, fontSize: "0.8125rem", fontWeight: 500, textDecoration: "none" }}>
                  {label}
                </Link>
              );
            })}
          </div>

          <ArticleGrid articles={articles} />
        </div>
      </section>
    </>
  );
}
