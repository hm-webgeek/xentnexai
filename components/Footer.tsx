"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const QUICK_LINKS = [
  { label: "AI Lead Generation", href: "/ai-lead-generation" },
  { label: "AI Voice Agents", href: "/ai-voice-agents" },
  { label: "GEO Audit Reports", href: "/geo-audit-reports" },
  { label: "AI News", href: "/ai-news" },
];

const linkStyle = {
  color: "#94A3B8",
  textDecoration: "none",
  fontSize: "0.875rem",
  transition: "color 0.15s",
  display: "flex",
  alignItems: "center",
  gap: "0.625rem",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0B1426",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        marginTop: "auto",
        backgroundImage: "url('/images/xentnexai-footer-banner.svg')",
        backgroundSize: "cover",
        backgroundPosition: "bottom left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">

          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: "0.75rem" }}>
              <Logo variant="dark" height={61} showIcon={false} />
            </div>
            <p style={{ color: "#94A3B8", fontSize: "0.875rem", lineHeight: "1.6", maxWidth: "34ch" }}>
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
                    style={linkStyle}
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
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              <li>
                <a
                  href="mailto:info@xentnexai.com.au"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                >
                  {/* Email icon */}
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@xentnexai.com.au
                </a>
              </li>
              <li>
                <a
                  href="tel:0752215504"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                >
                  {/* Phone icon */}
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (07) 5221 5504
                </a>
              </li>
              <li>
                <span style={{ ...linkStyle, cursor: "default" }}>
                  {/* Location icon */}
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Sunshine Coast, Queensland
                </span>
              </li>
            </ul>
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
            © {year} XentnexAI. All rights reserved.
          </p>
          <p style={{ color: "#94A3B8", fontSize: "0.8125rem" }}>
            Built by{" "}
            <a
              href="https://webgeeksolutions.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#94A3B8", textDecoration: "underline" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              WebGeek Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
