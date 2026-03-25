"use client";

import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1.75rem",
          borderRadius: "1rem",
          backgroundColor: "#FFFFFF",
          border: "1px solid #E8EFF4",
          transition: "box-shadow 0.2s, border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#2DD4BF";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(45,212,191,0.10)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#E8EFF4";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "0.75rem",
            backgroundColor: "#E6FAF8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1BA899",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3
          style={{
            color: "#1A2740",
            fontFamily: "var(--font-display, ui-sans-serif, system-ui, sans-serif)",
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.4",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#334155",
            fontSize: "0.9375rem",
            lineHeight: "1.65",
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Arrow link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            color: "#1BA899",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
        >
          Learn More
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
