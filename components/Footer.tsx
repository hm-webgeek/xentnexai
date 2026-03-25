"use client";

import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "AI Lead Generation", href: "/ai-lead-generation" },
  { label: "AI Voice Agents", href: "/ai-voice-agents" },
  { label: "GEO Audit Reports", href: "/geo-audit-reports" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0B1426",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        {/* 3-col grid — className only, no conflicting inline gridTemplateColumns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12"
        >
          {/* Col 1: Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display, ui-sans-serif, system-ui, sans-serif)",
                fontWeight: 700,
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
                color: "#F0F4F8",
              }}
            >
              Xentnex<span style={{ color: "#2DD4BF" }}>AI</span>
            </div>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: "1.6", maxWidth: "22ch" }}>
              AI services built for Sunshine Coast businesses. Automate, grow, and get found.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3
              style={{
                color: "#F0F4F8",
                fontWeight: 600,
                fontSize: "0.875rem",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#94A3B8",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3
              style={{
                color: "#F0F4F8",
                fontWeight: 600,
                fontSize: "0.875rem",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Contact
            </h3>
            <address
              style={{
                fontStyle: "normal",
                color: "#94A3B8",
                fontSize: "0.875rem",
                lineHeight: "1.9",
              }}
            >
              <a
                href="mailto:info@xentnexai.com.au"
                style={{ color: "#94A3B8", textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                info@xentnexai.com.au
              </a>
              <a
                href="tel:0752215504"
                style={{ color: "#94A3B8", textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                (07) 5221 5504
              </a>
              <span style={{ display: "block" }}>Sunshine Coast</span>
              <span style={{ display: "block" }}>Queensland, Australia</span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:justify-between items-center gap-2"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "1.5rem",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#94A3B8", fontSize: "0.8125rem" }}>
            © 2025 XentnexAI. All rights reserved.
          </p>
          <p style={{ color: "#94A3B8", fontSize: "0.8125rem" }}>
            Sunshine Coast AI Agency · Queensland, Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
