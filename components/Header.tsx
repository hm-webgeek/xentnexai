"use client";

import Link from "next/link";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/metadata";
import Logo from "@/components/Logo";

const SERVICE_LINKS = [
  { label: "AI Automation", href: "/ai-automation" },
  { label: "AI Lead Generation", href: "/ai-lead-generation" },
  { label: "AI Voice Agents", href: "/ai-voice-agents" },
  { label: "AI Website Building", href: "/ai-website-building" },
  { label: "GEO Audit Reports", href: "/geo-audit-reports" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

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
            <Logo variant="light" height={44} />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{ alignItems: "center", gap: "2rem" }}
            className="hidden md:flex"
          >
            {/* AI Services dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: desktopServicesOpen ? "#1A2740" : "#64748B",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "color 0.15s",
                }}
              >
                AI Services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  style={{
                    transition: "transform 0.2s",
                    transform: desktopServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  paddingTop: "0.625rem",
                  opacity: desktopServicesOpen ? 1 : 0,
                  pointerEvents: desktopServicesOpen ? "auto" : "none",
                  transition: "opacity 0.15s ease",
                }}
              >
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 32px rgba(26, 39, 64, 0.12)",
                  border: "1px solid #E8EFF4",
                  padding: "0.5rem",
                  minWidth: "200px",
                }}
              >
                {SERVICE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#64748B",
                      textDecoration: "none",
                      padding: "0.625rem 0.875rem",
                      borderRadius: "0.5rem",
                      transition: "background-color 0.15s, color 0.15s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F0FDFC";
                      e.currentTarget.style.color = "#1BA899";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#64748B";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              </div>
            </div>

            {/* AI News */}
            <Link
              href="/ai-news"
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
              AI News
            </Link>

            {/* Contact Us */}
            <Link
              href="/#contact"
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
              Contact Us
            </Link>

            {/* Phone number */}
            <a
              href="tel:0752215504"
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#1BA899",
                textDecoration: "none",
                transition: "color 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#159087")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1BA899")}
            >
              (07) 5221 5504
            </a>

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
            onClick={() => setMobileOpen(!mobileOpen)}
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
            {mobileOpen ? (
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

      {/* Backdrop */}
      <div
        className="md:hidden"
        onClick={() => setMobileOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 55,
          backgroundColor: "rgba(26, 39, 64, 0.4)",
          backdropFilter: "blur(2px)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
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
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Panel header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <Logo variant="light" height={40} />
          <button
            onClick={() => setMobileOpen(false)}
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
          {/* AI Services accordion */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "1rem",
              color: "#334155",
              fontWeight: 500,
              padding: "0.75rem 0.5rem",
              borderBottom: "1px solid #F1F5F9",
              background: "none",
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
            }}
          >
            AI Services
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{
                transition: "transform 0.2s",
                transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                color: "#64748B",
              }}
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Submenu */}
          <div
            style={{
              overflow: "hidden",
              maxHeight: servicesOpen ? "400px" : "0",
              transition: "max-height 0.25s ease",
            }}
          >
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  fontSize: "0.9375rem",
                  color: "#64748B",
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "0.625rem 0.5rem 0.625rem 1.25rem",
                  borderBottom: "1px solid #F1F5F9",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1BA899")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* AI News */}
          <Link
            href="/ai-news"
            onClick={() => setMobileOpen(false)}
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
            AI News
          </Link>

          {/* Contact Us */}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
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
            Contact Us
          </Link>

          {/* Phone */}
          <a
            href="tel:0752215504"
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: "1rem",
              color: "#1BA899",
              textDecoration: "none",
              fontWeight: 500,
              padding: "0.75rem 0.5rem",
              borderBottom: "1px solid #F1F5F9",
              transition: "color 0.15s",
            }}
          >
            (07) 5221 5504
          </a>
        </nav>

        {/* CTA at bottom */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
          onClick={() => setMobileOpen(false)}
        >
          Book a Free Call
        </a>
      </div>
    </>
  );
}
