import type { Metadata } from "next";
import { buildMetadata, BASE_URL } from "@/lib/metadata";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import LocalSEOSection from "@/components/LocalSEOSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: "Sunshine Coast AI Agency",
  description:
    "XentnexAI delivers AI Lead Generation, AI Voice Agents, and GEO Audit Reports for Sunshine Coast businesses. Get found, get leads, and grow automatically.",
  path: "/",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "XentnexAI",
  description:
    "AI services agency specialising in Lead Generation, Voice Agents, and GEO Audit Reports for Sunshine Coast businesses.",
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sunshine Coast",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -26.65,
      longitude: 153.07,
    },
    geoRadius: "80000",
  },
  serviceType: ["AI Lead Generation", "AI Voice Agents", "GEO Audit Reports"],
  priceRange: "$$",
};

const SERVICES = [
  {
    title: "AI Lead Generation System",
    description:
      "Automated lead capture, qualification, and nurture sequences that work 24/7 to fill your pipeline with ready-to-buy Sunshine Coast prospects.",
    href: "/ai-lead-generation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2C6.477 2 2 6.477 2 11s4.477 9 9 9 9-4.477 9-9M15 2l5 5-5 5M20 7H9"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "AI Voice Agents",
    description:
      "Never miss a call again. Our AI voice agents answer, qualify, and book appointments around the clock — sounding natural, acting fast.",
    href: "/ai-voice-agents",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "GEO Audit Reports",
    description:
      "Discover how your business appears in ChatGPT, Gemini, and Perplexity. Get a detailed audit and action plan to dominate AI search results.",
    href: "/geo-audit-reports",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M9 19V6l12-3v13M9 19a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />

      <Hero />

      {/* Services section */}
      <section
        id="services"
        style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
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
              What We Do
            </p>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 700,
                color: "#1A2740",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              AI Services for Sunshine Coast Businesses
            </h2>
            <p
              style={{
                color: "#64748B",
                fontSize: "1rem",
                maxWidth: "52ch",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Three AI-powered systems designed to automate growth, improve customer
              response times, and make your business visible everywhere people search.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.5rem",
            }}
            className="sm:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <LocalSEOSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
    </>
  );
}
