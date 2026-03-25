"use client";

import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/metadata";
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { label: "AI Lead Generation", href: "/ai-lead-generation" },
  { label: "AI Voice Agents", href: "/ai-voice-agents" },
  { label: "GEO Audit Reports", href: "/geo-audit-reports" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            padding: "0.3125rem 1.5rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex" }}>
            <Logo variant="light" height={61} />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
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
              zIndex: 60,
              position: "relative",
            }}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Slide-out overlay — outside <header> so it covers full viewport */}
      {/* Backdrop */}
      <div
        className="md:hidden"
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 55,
          backgroundColor: "rgba(26, 39, 64, 0.4)",
          backdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Slide panel */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 60,
          width: "min(80vw, 320px)",
          backgroundColor: "#FFFFFF",
          boxShadow: "-4px 0 24px rgba(26, 39, 64, 0.12)",
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Panel header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <Logo variant="light" height={40} />
          <button
            onClick={() => setOpen(false)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#64748B", padding: "0.25rem" }}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
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
                padding: "0.75rem 0.5rem",
                borderBottom: "1px solid #F1F5F9",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2DD4BF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA at bottom */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ textAlign: "center", marginTop: "2rem" }}
          onClick={() => setOpen(false)}
        >
          Book a Free Call
        </a>
      </div>
    </>
  );
}
