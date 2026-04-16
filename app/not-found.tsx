import Link from "next/link";
import { CALENDLY_URL } from "@/lib/metadata";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F8FAFB",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
        {/* 404 badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            border: "1px solid rgba(45, 212, 191, 0.35)",
            backgroundColor: "rgba(45, 212, 191, 0.08)",
            color: "#1BA899",
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            marginBottom: "1.5rem",
          }}
        >
          404 — Page Not Found
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#1A2740",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}
        >
          We couldn&apos;t find that page
        </h1>

        <p
          style={{
            color: "#64748B",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            maxWidth: "44ch",
            margin: "0 auto 2.5rem",
          }}
        >
          The page you&apos;re looking for may have moved or no longer exists. Here&apos;s
          where you can head from here.
        </p>

        {/* Navigation links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1rem",
            marginBottom: "2.5rem",
            maxWidth: "36rem",
            margin: "0 auto 2.5rem",
          }}
          className="sm:grid-cols-3"
        >
          {[
            { label: "AI Lead Generation", href: "/ai-lead-generation" },
            { label: "AI Receptionist", href: "/ai-receptionist" },
            { label: "GEO Audit Reports", href: "/geo-audit-reports" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "0.875rem 1rem",
                borderRadius: "0.75rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E8EFF4",
                color: "#1BA899",
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Back to Homepage
          </Link>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
