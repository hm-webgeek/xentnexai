import type { Metadata } from "next";
import { buildMetadata, BASE_URL } from "@/lib/metadata";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: "AI Lead Generation for Sunshine Coast Businesses",
  description:
    "Automate your lead generation with AI systems built for Sunshine Coast businesses. Capture, qualify, and nurture leads 24/7 without extra staff.",
  path: "/ai-lead-generation",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Lead Generation System",
  provider: { "@type": "LocalBusiness", name: "XentnexAI", url: BASE_URL },
  description:
    "Automated AI lead generation systems that capture, qualify, and nurture leads 24/7 for Sunshine Coast businesses.",
  areaServed: "Sunshine Coast, Queensland, Australia",
  serviceType: "AI Lead Generation",
};

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l3.09 6.26L21 9.27l-5 4.87 1.18 6.88L11 17.77l-6.18 3.25L6 14.14 1 9.27l6.91-1.01L11 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Intelligent Lead Capture",
    body: "AI-powered forms and chatbots that engage visitors at the right moment, asking the right qualifying questions to separate serious prospects from browsers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Automated Qualification",
    body: "Every lead is automatically scored and segmented based on budget, timeline, and fit — so you spend your time on prospects who are ready to buy.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Smart Nurture Sequences",
    body: "AI-driven email and SMS sequences that stay relevant to each lead's stage and interests, keeping your business top-of-mind until they're ready to commit.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "24/7 Pipeline Activity",
    body: "Your lead generation system never sleeps. Capture and respond to enquiries at 2am on a Sunday — when your competitors can't.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Real-Time Reporting",
    body: "A clear dashboard showing lead volume, conversion rates, source attribution, and ROI — so you always know what's working.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "CRM Integration",
    body: "Connects seamlessly with your existing CRM, booking system, or project management tools — no disruption to how you already work.",
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Setup", body: "We map your existing lead sources, customer journey, and conversion points. Then configure your AI system to match your specific business model." },
  { num: "02", title: "AI System Launch", body: "Your lead capture, qualification, and nurture workflows go live. We monitor closely in the first two weeks to tune performance." },
  { num: "03", title: "Optimise & Scale", body: "Using real data from your pipeline, we continuously improve qualification criteria, messaging, and timing to maximise conversion rates." },
  { num: "04", title: "Ongoing Support", body: "Monthly reporting, strategy calls, and system updates ensure your lead generation stays ahead of market changes." },
];

const INDUSTRIES = [
  "Real Estate", "Building & Trades", "Health & Wellness", "Finance & Mortgage",
  "Hospitality & Tourism", "Professional Services", "Retail & eCommerce", "Education & Coaching",
];

export default function AILeadGenerationPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />

      <ServiceHero
        badge="Sunshine Coast AI Service"
        title="AI Lead Generation for Sunshine Coast Businesses"
        subtitle="Stop chasing cold leads. Our AI systems capture qualified prospects automatically — 24 hours a day, 7 days a week — so your sales pipeline is always full."
        image={{ src: "/images/xentnexai-hero-lead-gen.png", alt: "AI lead generation network illustration", width: 1280, height: 640 }}
      />

      {/* Features */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Everything You Need to Fill Your Pipeline
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.7, maxWidth: "52ch", margin: "0 auto" }}>
              A complete AI lead generation system — from first click to booked appointment.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} style={{ padding: "1.75rem", borderRadius: "1rem", backgroundColor: "#FFFFFF", border: "1px solid #E8EFF4" }}>
                <div style={{ backgroundColor: "#E6FAF8", width: "3rem", height: "3rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#2DD4BF", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.65 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em" }}>
              How It Works
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} style={{ padding: "1.75rem", borderRadius: "1rem", backgroundColor: "#F8FAFB", border: "1px solid #E8EFF4" }}>
                <div style={{ color: "#C47A10", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem", fontVariantNumeric: "tabular-nums" }}>{step.num}</div>
                <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#334155", fontSize: "0.875rem", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            Built for Sunshine Coast Industries
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {INDUSTRIES.map((ind) => (
              <span key={ind} style={{ padding: "0.5rem 1.125rem", borderRadius: "9999px", border: "1px solid rgba(196, 122, 16, 0.25)", backgroundColor: "#FEF6E4", color: "#C47A10", fontSize: "0.875rem", fontWeight: 500 }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Automate Your Lead Generation?"
        subheading="Book a free strategy call and we'll show you exactly how many more leads your Sunshine Coast business could be capturing each month."
      />
      <ContactForm />
    </>
  );
}
