const TESTIMONIALS = [
  {
    quote:
      "XentnexAI's lead generation system filled our pipeline within the first month. We're now booking more consultations than ever before.",
    name: "Sarah M.",
    business: "Sunshine Coast Financial Planning",
    suburb: "Maroochydore",
  },
  {
    quote:
      "The AI voice agent handles after-hours calls perfectly. Our customers get instant responses and we never miss a booking opportunity.",
    name: "James T.",
    business: "Coastal Trade Services",
    suburb: "Buderim",
  },
  {
    quote:
      "We had no idea our business wasn't showing up in ChatGPT searches. The GEO Audit revealed exactly what we needed to fix.",
    name: "Leanne K.",
    business: "Noosa Wellness Studio",
    suburb: "Noosa Heads",
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              color: "#1BA899",
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            Client Results
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "#1A2740",
              letterSpacing: "-0.02em",
            }}
          >
            What Sunshine Coast Businesses Say
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
          className="sm:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: "#F8FAFB",
                border: "1px solid #E8EFF4",
                borderRadius: "1rem",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#2DD4BF">
                    <path d="M8 1.5l1.854 3.754 4.146.603-3 2.923.708 4.131L8 10.77l-3.708 1.941.708-4.131-3-2.923 4.146-.603L8 1.5z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  color: "#334155",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div>
                <p style={{ color: "#1A2740", fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>
                  {t.name}
                </p>
                <p style={{ color: "#64748B", fontSize: "0.8125rem", margin: "0.125rem 0 0" }}>
                  {t.business} · {t.suburb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
