import type { Metadata } from "next";
import { buildMetadata, BASE_URL } from "@/lib/metadata";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Sunshine Coast AI Agency",
  description:
    "Meet the team behind XentnexAI — Sunshine Coast's local AI agency helping small businesses automate growth.",
  path: "/about",
});

// TODO: Replace placeholder founder details with real bio content from the board/founder
const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "TODO: Founder Name",
  jobTitle: "Founder & Director",
  worksFor: {
    "@type": "LocalBusiness",
    name: "XentnexAI",
    url: BASE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sunshine Coast",
      addressRegion: "Queensland",
      addressCountry: "AU",
    },
  },
  url: `${BASE_URL}/about`,
  description:
    "TODO: Founder bio — Sunshine Coast-based AI strategist and founder of XentnexAI.",
};

const BELIEFS = [
  {
    quote: "AI should work for your business, not distract from it.",
    body: "We only build what's genuinely useful. If a simple process does the job better than an AI system, we'll tell you that.",
  },
  {
    quote: "Local businesses deserve local support.",
    body: "You shouldn't have to chase an overseas agency across time zones when something needs adjusting. We're here, in your market, and reachable.",
  },
  {
    quote: "Plain English is not optional.",
    body: "If you can't explain how something works in plain English, you don't understand it well enough. We hold ourselves to that standard.",
  },
  {
    quote: "Results matter more than technology.",
    body: "We're not here to impress you with tools. We're here to save you time, capture more leads, and help your business grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData data={founderSchema} />

      <ServiceHero
        badge="About XentnexAI"
        title="About XentnexAI — Sunshine Coast's AI Agency"
        subtitle="We're a local AI agency built for Sunshine Coast small businesses. No overseas handoffs, no jargon, no lock-in contracts — just practical AI that gets results."
      />

      {/* Founder Story */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "3rem",
              alignItems: "center",
            }}
            className="lg:grid-cols-2"
          >
            {/* TODO: Replace with real founder photo */}
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                backgroundColor: "#F0F4F8",
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#94A3B8", fontSize: "0.9rem" }}>
                {/* TODO: Add founder photo here — e.g. <Image src="/images/founder.jpg" ... /> */}
                Founder photo coming soon
              </span>
            </div>

            <div>
              {/* TODO: Replace placeholder text with real founder bio from the board/founder */}
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  color: "#1A2740",
                  letterSpacing: "-0.02em",
                  marginBottom: "1.25rem",
                }}
              >
                Why We Started XentnexAI
              </h2>
              <p
                style={{
                  color: "#334155",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  marginBottom: "1rem",
                }}
              >
                {/* TODO: Founder personal story — e.g. background, how they came to AI, why they care about local businesses */}
                I started XentnexAI because I kept seeing the same thing: local Sunshine Coast businesses working incredibly hard, but losing time — and revenue — to manual processes that technology could handle in seconds. A tradie missing calls while on the tools. A health clinic spending Friday afternoons chasing booking confirmations by hand.
              </p>
              <p
                style={{
                  color: "#334155",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  marginBottom: "1rem",
                }}
              >
                {/* TODO: Expand with real founder connection to Sunshine Coast — how long they've lived here, what they love about the local business community */}
                The Sunshine Coast is a brilliant place to run a business — it's community-minded, growing fast, and full of people doing real, honest work. But most of those businesses don't have an IT department or a tech team. They just need someone local who can explain what AI actually does, build something that works, and be around when questions come up.
              </p>
              <p
                style={{
                  color: "#334155",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                {/* TODO: Closing statement — mission/drive */}
                That's what XentnexAI is. A local team that makes AI practical, affordable, and genuinely useful for small and medium businesses on the Coast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#1A2740",
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              Why Working With a Local Agency Matters
            </h2>
            <p
              style={{
                color: "#64748B",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "52ch",
                margin: "0 auto",
              }}
            >
              There are hundreds of AI agencies online. Most of them are based overseas, operate asynchronously across time zones, and are impossible to reach when things go wrong.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.5rem",
            }}
            className="sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                icon: "📍",
                title: "Same Time Zone",
                body: "We're in Caloundra, working Australian hours. You won't be waiting until midnight for a reply.",
              },
              {
                icon: "🤝",
                title: "Same Market",
                body: "We understand Sunshine Coast business — the local industries, seasonal pressures, and what local buyers actually respond to.",
              },
              {
                icon: "📞",
                title: "Reachable",
                body: "Got a question? Call us. We don't hide behind email ticketing systems or overseas support queues.",
              },
              {
                icon: "📈",
                title: "Invested in Your Growth",
                body: "When you succeed, we succeed. Local reputation matters to us — we're not moving on to the next client the second your project goes live.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "1.75rem",
                  borderRadius: "1rem",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E8EFF4",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    color: "#1A2740",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#64748B",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#1A2740",
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              What We Believe
            </h2>
            <p
              style={{
                color: "#64748B",
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "48ch",
                margin: "0 auto",
              }}
            >
              These aren't values we put on a poster. They're the principles that shape every project we take on.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.5rem",
            }}
            className="sm:grid-cols-2"
          >
            {BELIEFS.map((belief) => (
              <div
                key={belief.quote}
                style={{
                  padding: "2rem",
                  borderRadius: "1rem",
                  backgroundColor: "#F8FAFB",
                  border: "1px solid #E8EFF4",
                  borderLeft: "4px solid #1BA899",
                }}
              >
                <blockquote
                  style={{
                    color: "#1A2740",
                    fontWeight: 700,
                    fontSize: "1.0625rem",
                    lineHeight: 1.5,
                    marginBottom: "0.75rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{belief.quote}&rdquo;
                </blockquote>
                <p
                  style={{
                    color: "#334155",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Meet the Team?"
        subheading="Book a free 30-minute call and let's talk about what AI can actually do for your business — in plain English, no pressure."
      />
    </>
  );
}
