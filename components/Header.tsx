"use client";

import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/metadata";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "AI Lead Generation", href: "/ai-lead-generation" },
  { label: "AI Voice Agents", href: "/ai-voice-agents" },
  { label: "GEO Audit Reports", href: "/geo-audit-reports" },
];

function LogoMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="32" height="32" aria-hidden="true">
      <circle fill="none" stroke="#2DD4BF" strokeWidth="2.5" cx="40" cy="40" r="30" strokeDasharray="160 29" strokeDashoffset="10" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="40" y1="40" x2="40" y2="14" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="40" y1="40" x2="61" y2="22" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="40" y1="40" x2="63" y2="53" />
      <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="40" y1="40" x2="20" y2="58" opacity="0.45" />
      <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="40" y1="40" x2="11" y2="32" opacity="0.45" />
      <circle fill="#2DD4BF" cx="40" cy="13" r="4.5" />
      <circle fill="#2DD4BF" cx="62" cy="21" r="4.5" />
      <circle fill="#2DD4BF" cx="64" cy="54" r="4.5" />
      <circle fill="#1BA899" cx="19" cy="59" r="3.5" opacity="0.55" />
      <circle fill="#1BA899" cx="10" cy="31" r="3.5" opacity="0.55" />
      <circle fill="#1A2740" cx="40" cy="40" r="7" />
      <circle fill="#2DD4BF" cx="40" cy="40" r="4.5" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(255, 255, 255, 0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #E8EFF4",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
          }}
        >
          <LogoMark />
          <span
            style={{
              fontFamily: "var(--font-display, ui-sans-serif, system-ui, sans-serif)",
              fontWeight: 700,
              fontSize: "1.125rem",
              letterSpacing: "-0.02em",
              color: "#1A2740",
            }}
          >
            Xentnex<span style={{ color: "#2DD4BF" }}>AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#64748B",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1A2740")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.8125rem" }}
          >
            Book a Free Call
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "#1A2740",
          }}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid #E8EFF4",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
          className="md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "1rem",
                color: "#334155",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ alignSelf: "flex-start" }}
            onClick={() => setOpen(false)}
          >
            Book a Free Call
          </a>
        </div>
      )}
    </header>
  );
}
