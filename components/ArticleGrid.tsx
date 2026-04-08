"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/src/lib/articles";

const PAGE_SIZE = 11; // 1 featured + 10 in 2-col grid

interface Props {
  articles: Article[];
}

export default function ArticleGrid({ articles }: Props) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(articles.length / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);
  const [featured, ...rest] = pageArticles;

  return (
    <>
      {articles.length === 0 ? (
        <div style={{ textAlign: "center", padding: "6rem 1rem" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#1A2740", marginBottom: "0.5rem" }}>No articles yet</p>
          <p style={{ color: "#64748B", fontSize: "0.9rem" }}>Our AI agent publishes daily at 9am. Check back tomorrow!</p>
        </div>
      ) : (
        <>
          {featured && (
            <div style={{ marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "1rem" }}>Featured</p>
              <ArticleCard slug={featured.slug} {...featured.frontmatter} featured />
            </div>
          )}

          {rest.length > 0 && (
            <>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "1rem" }}>Latest</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "3rem" }}>
                {rest.map((a) => (
                  <ArticleCard key={a.slug} slug={a.slug} {...a.frontmatter} />
                ))}
              </div>
            </>
          )}

          {totalPages > 1 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", paddingTop: "1rem" }}>
              <button
                onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                disabled={page === 1}
                style={{
                  padding: "0.5rem 1.125rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #E2E8F0",
                  backgroundColor: page === 1 ? "#F8FAFB" : "#FFFFFF",
                  color: page === 1 ? "#CBD5E1" : "#1A2740",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: page === 1 ? "not-allowed" : "pointer",
                }}
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    border: n === page ? "none" : "1px solid #E2E8F0",
                    backgroundColor: n === page ? "#1BA899" : "#FFFFFF",
                    color: n === page ? "#FFFFFF" : "#1A2740",
                    fontSize: "0.875rem",
                    fontWeight: n === page ? 700 : 400,
                    cursor: "pointer",
                  }}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                disabled={page === totalPages}
                style={{
                  padding: "0.5rem 1.125rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #E2E8F0",
                  backgroundColor: page === totalPages ? "#F8FAFB" : "#FFFFFF",
                  color: page === totalPages ? "#CBD5E1" : "#1A2740",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  cursor: page === totalPages ? "not-allowed" : "pointer",
                }}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}
