"use client";

import Link from "next/link";
const CATEGORIES: Record<string, string> = {
  "ai-tools": "AI Tools",
  automation: "Automation",
  "local-business": "Local Business",
  "industry-news": "Industry News",
};

const CATEGORY_COLOURS: Record<string, { bg: string; text: string }> = {
  "ai-tools":       { bg: "#E6FAF8", text: "#1BA899" },
  automation:       { bg: "#EEF2FF", text: "#4F46E5" },
  "local-business": { bg: "#FEF6E4", text: "#C47A10" },
  "industry-news":  { bg: "#F1F5F9", text: "#475569" },
};

interface ArticleCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  heroImage?: string;
  heroImageDesktop?: string;
  heroImageMobile?: string;
  featured?: boolean;
}

export default function ArticleCard({ slug, title, summary, date, category, heroImage, heroImageDesktop, heroImageMobile, featured = false }: ArticleCardProps) {
  const c = CATEGORY_COLOURS[category] ?? { bg: "#F1F5F9", text: "#475569" };
  const cardHero = heroImageDesktop ?? heroImage ?? heroImageMobile;

  return (
    <Link href={`/ai-news/${slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div
        style={{ backgroundColor: "#FFFFFF", borderRadius: "1rem", border: "1px solid #E8EFF4", overflow: "hidden", height: "100%", transition: "box-shadow 0.15s, transform 0.15s" }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,39,64,0.1)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
      >
        <div style={{ position: "relative", height: featured ? "22rem" : "13rem", backgroundColor: "#E8EFF4" }}>
          {cardHero ? (
            <img src={cardHero} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          ) : (
            <div style={{ height: "100%", background: "linear-gradient(135deg, #0B1426 0%, #1A2740 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="40" height="40" viewBox="0 0 80 80" fill="none" opacity={0.35}>
                <circle stroke="#2DD4BF" strokeWidth="2" cx="40" cy="40" r="25" strokeDasharray="130 25" />
                <circle fill="#2DD4BF" cx="40" cy="17" r="4" />
                <circle fill="#2DD4BF" cx="40" cy="40" r="4" />
              </svg>
            </div>
          )}
        </div>
        <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
          <span style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "9999px", backgroundColor: c.bg, color: c.text, fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.75rem" }}>
            {CATEGORIES[category] ?? category}
          </span>
          <h2 style={{ fontSize: featured ? "1.375rem" : "1rem", fontWeight: 700, color: "#1A2740", lineHeight: 1.35, marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>
            {title}
          </h2>
          <p style={{ color: "#64748B", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
            {summary}
          </p>
          <time style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
            {new Date(date + "T00:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
          </time>
        </div>
      </div>
    </Link>
  );
}
