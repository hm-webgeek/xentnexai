import Link from "next/link";

interface RelatedService {
  href: string;
  title: string;
  tagline: string;
}

interface RelatedArticle {
  href: string;
  title: string;
  summary: string;
}

interface RelatedLinksProps {
  services: RelatedService[];
  articles: RelatedArticle[];
}

export default function RelatedLinks({ services, articles }: RelatedLinksProps) {
  return (
    <section style={{ backgroundColor: "#F8FAFB", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "3rem" }} className="lg:grid-cols-2">

        {/* Related Services */}
        <div>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.01em", marginBottom: "1.25rem" }}>
            Related Services
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{ display: "block", padding: "1.125rem 1.375rem", borderRadius: "0.75rem", backgroundColor: "#FFFFFF", border: "1px solid #E8EFF4", textDecoration: "none" }}
              >
                <span style={{ color: "#1BA899", fontWeight: 600, fontSize: "0.9375rem" }}>{svc.title}</span>
                <span style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", lineHeight: 1.5, marginTop: "0.25rem" }}>{svc.tagline}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.01em", marginBottom: "1.25rem" }}>
            From Our AI News
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {articles.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                style={{ display: "block", padding: "1.125rem 1.375rem", borderRadius: "0.75rem", backgroundColor: "#FFFFFF", border: "1px solid #E8EFF4", textDecoration: "none" }}
              >
                <span style={{ color: "#1A2740", fontWeight: 600, fontSize: "0.9375rem", lineHeight: 1.4, display: "block" }}>{art.title}</span>
                <span style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", lineHeight: 1.5, marginTop: "0.25rem" }}>{art.summary}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
