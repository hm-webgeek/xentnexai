import { CALENDLY_URL } from "@/lib/metadata";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0B1426",
      }}
    >
      {/* Full-width background image — <picture> for responsive WebP delivery */}
      <picture
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        <source media="(max-width: 767px)" srcSet="/images/xentnexai-hero-homepage-mobile.webp" />
        <img
          src="/images/xentnexai-hero-homepage.webp"
          alt=""
          fetchPriority="high"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </picture>

      {/* Dark overlay for text legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(11,20,38,0.92) 40%, rgba(11,20,38,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Teal orb */}
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
          width: "40rem",
          height: "40rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "6rem 1.5rem",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            border: "1px solid rgba(45, 212, 191, 0.35)",
            backgroundColor: "rgba(45, 212, 191, 0.08)",
            color: "#2DD4BF",
            fontSize: "0.8125rem",
            fontWeight: 500,
            marginBottom: "1.75rem",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#2DD4BF", display: "inline-block" }} />
          Sunshine Coast&apos;s AI Agency
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#F0F4F8",
            maxWidth: "16ch",
            marginBottom: "1.5rem",
          }}
        >
          Turn Sunshine Coast Leads Into{" "}
          <span style={{ color: "#E8A020" }}>Customers</span>{" "}
          — Automatically
        </h1>

        {/* Subheading */}
        <p
          style={{
            color: "#94A3B8",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            maxWidth: "50ch",
            marginBottom: "2.5rem",
          }}
        >
          We build AI systems that generate leads, answer calls 24/7, and ensure your
          business gets found in ChatGPT and Google AI — tailored for Sunshine Coast
          businesses ready to grow.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#services" className="btn-secondary">
            See Our Services
          </a>
        </div>

        {/* Social proof strip */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            color: "#94A3B8",
            fontSize: "0.875rem",
          }}
        >
          {["AI Lead Generation", "AI Voice Agents", "GEO Audit Reports"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "#2DD4BF", flexShrink: 0 }}>
                <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
