import Image from "next/image";
import { CALENDLY_URL } from "@/lib/metadata";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  image?: { src: string; alt: string; width: number; height: number };
}

export default function ServiceHero({ badge, title, subtitle, image }: ServiceHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0B1426",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      {/* Teal orb */}
      <div
        style={{
          position: "absolute",
          top: "-8rem",
          right: "-8rem",
          width: "32rem",
          height: "32rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "5rem 1.5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className={image ? "lg:grid-cols-2" : ""}
      >
        {/* Text */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              borderRadius: "9999px",
              border: "1px solid rgba(45, 212, 191, 0.3)",
              backgroundColor: "rgba(45, 212, 191, 0.08)",
              color: "#2DD4BF",
              fontSize: "0.8125rem",
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            {badge}
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#F0F4F8",
              maxWidth: "18ch",
              marginBottom: "1.25rem",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              maxWidth: "52ch",
              marginBottom: "2.25rem",
            }}
          >
            {subtitle}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Consultation
            </a>
            <a href="#contact" className="btn-secondary">
              Send an Enquiry
            </a>
          </div>
        </div>

        {/* Image */}
        {image && (
          <div
            className="hidden lg:block"
            style={{ position: "relative", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
