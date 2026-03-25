import { CALENDLY_URL } from "@/lib/metadata";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
}

export default function CTASection({
  heading = "Ready to Automate Your Growth?",
  subheading = "Join Sunshine Coast businesses using AI to generate more leads, answer more calls, and get found by more customers.",
}: CTASectionProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0B1426 0%, #1A2B4A 50%, #0B1426 100%)",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orb */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30rem",
          height: "30rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232, 160, 32, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "48rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#F0F4F8",
            letterSpacing: "-0.02em",
            marginBottom: "1rem",
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            color: "#94A3B8",
            fontSize: "1.0625rem",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "48ch",
            margin: "0 auto 2.5rem",
          }}
        >
          {subheading}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Free Strategy Call
          </a>
          <a href="#contact" className="btn-secondary">
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
