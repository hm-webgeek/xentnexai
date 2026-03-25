const SUBURBS = [
  "Noosa Heads",
  "Noosaville",
  "Maroochydore",
  "Alexandra Headland",
  "Mooloolaba",
  "Caloundra",
  "Buderim",
  "Nambour",
  "Coolum Beach",
  "Sippy Downs",
  "Bli Bli",
  "Palmview",
];

const WHY_LOCAL = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Local Market Knowledge",
    body: "We understand Sunshine Coast business dynamics — seasonal tourism, trade services, health & wellness, and the growing tech sector.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Built for Australian Compliance",
    body: "Our AI systems are configured with Australian privacy laws (Privacy Act) in mind, protecting your customers and your business.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Personal, Hands-On Support",
    body: "No overseas call centres. You work directly with our local team who are invested in seeing your Sunshine Coast business succeed.",
  },
];

export default function LocalSEOSection() {
  return (
    <section style={{ backgroundColor: "#0F1D35", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              color: "#2DD4BF",
              fontSize: "0.875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
            }}
          >
            Local Expertise
          </p>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "#F0F4F8",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Serving Sunshine Coast Businesses
          </h2>
          <p
            style={{
              color: "#94A3B8",
              fontSize: "1rem",
              maxWidth: "52ch",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From Noosa to Caloundra, we help local businesses automate growth with AI
            systems designed for the Queensland market.
          </p>
        </div>

        {/* Suburb badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          {SUBURBS.map((suburb) => (
            <span
              key={suburb}
              style={{
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                border: "1px solid rgba(45, 212, 191, 0.25)",
                backgroundColor: "rgba(45, 212, 191, 0.06)",
                color: "#94A3B8",
                fontSize: "0.8125rem",
                fontWeight: 500,
              }}
            >
              {suburb}
            </span>
          ))}
        </div>

        {/* Why local bullets */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1.5rem",
          }}
          className="sm:grid-cols-3"
        >
          {WHY_LOCAL.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.75rem",
                borderRadius: "1rem",
                backgroundColor: "rgba(26, 43, 74, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              <div
                style={{
                  color: "#2DD4BF",
                  marginBottom: "1rem",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  color: "#F0F4F8",
                  fontWeight: 600,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.65 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
