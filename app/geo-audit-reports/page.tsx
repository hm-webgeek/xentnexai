import type { Metadata } from "next";
import { buildMetadata, BASE_URL } from "@/lib/metadata";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: "GEO Audit Reports — Is Your Business Visible in AI Search?",
  description:
    "Generative Engine Optimisation (GEO) audit for Sunshine Coast businesses. Find out if ChatGPT, Gemini, and Perplexity recommend your business — and fix it if they don't.",
  path: "/geo-audit-reports",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GEO Audit Reports",
  provider: { "@type": "LocalBusiness", name: "XentnexAI", url: BASE_URL },
  description:
    "Generative Engine Optimisation (GEO) audit reports that reveal how your business appears in ChatGPT, Gemini, and Perplexity — and a clear action plan to improve visibility.",
  areaServed: "Sunshine Coast, Queensland, Australia",
  serviceType: "Generative Engine Optimisation",
};

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Search Visibility Audit",
    body: "We systematically test dozens of queries in ChatGPT, Google Gemini, and Perplexity to document exactly where — and whether — your business appears in AI-generated answers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Competitor Benchmarking",
    body: "See exactly which Sunshine Coast competitors are being recommended by AI instead of you — and understand why they're winning those mentions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Detailed Written Report",
    body: "A clear, jargon-free report that explains what AI search engines currently know about your business, what signals they're missing, and your current ranking factors.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Action Plan Included",
    body: "Every audit includes a prioritised action plan — specific, implementable steps ranked by impact to improve how AI search tools represent and recommend your business.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Citation Source Analysis",
    body: "AI models pull from specific sources. We identify which platforms, directories, and content types are driving AI recommendations in your industry — and which gaps to fill.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Quarterly Tracking (Optional)",
    body: "AI search landscapes shift quickly. Optional quarterly re-audits track your improvement over time and flag new opportunities as AI platforms evolve.",
  },
];

const STEPS = [
  { num: "01", title: "Query Mapping", body: "We build a list of 40–60 search queries your ideal customers would ask AI assistants — covering services, location, and problem-specific searches." },
  { num: "02", title: "AI Search Testing", body: "Every query is tested across ChatGPT, Gemini, and Perplexity. We record whether your business appears, what's said, and who else is mentioned." },
  { num: "03", title: "Report Creation", body: "We analyse the data, benchmark against local competitors, and produce your written GEO Audit Report with findings and priority actions." },
  { num: "04", title: "Strategy Walkthrough", body: "We present the report in a 45-minute call, walking through every finding and ensuring your team understands exactly what to do next." },
];

const AI_PLATFORMS = [
  "ChatGPT", "Google Gemini", "Perplexity AI", "Microsoft Copilot",
  "Claude AI", "Meta AI", "Google AI Overviews", "Bing AI",
];

export default function GEOAuditReportsPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />

      <ServiceHero
        badge="Sunshine Coast AI Service · New"
        title="Is Your Business Invisible in AI Search?"
        subtitle="When someone asks ChatGPT, Gemini, or Perplexity for the best businesses in Sunshine Coast — does your name come up? A GEO Audit tells you the truth, and shows you how to fix it."
      />

      {/* What is GEO — explainer */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "1.25rem",
              background: "linear-gradient(135deg, rgba(45, 212, 191, 0.06) 0%, rgba(232, 160, 32, 0.06) 100%)",
              border: "1px solid rgba(45, 212, 191, 0.25)",
              marginBottom: "4rem",
            }}
          >
            <p style={{ color: "#1BA899", fontSize: "0.8125rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              What is GEO?
            </p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Generative Engine Optimisation — The New SEO
            </h2>
            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
              Traditional SEO gets your website ranked on Google. <strong style={{ color: "#1A2740" }}>GEO</strong> gets your
              business <em>mentioned and recommended</em> by AI tools like ChatGPT, Google&apos;s AI Overviews,
              Gemini, and Perplexity — where millions of Australians are now starting their search for local businesses.
            </p>
            <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75 }}>
              AI search is growing rapidly in Australia. Businesses that optimise for GEO now will own significant
              market share in their local area before their competitors even know it&apos;s happening.
            </p>
          </div>

          {/* AI platforms grid */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1.125rem", marginBottom: "1.5rem" }}>
              Platforms We Audit
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", justifyContent: "center" }}>
              {AI_PLATFORMS.map((p) => (
                <span key={p} style={{ padding: "0.375rem 0.875rem", borderRadius: "9999px", border: "1px solid rgba(45, 212, 191, 0.25)", backgroundColor: "#E6FAF8", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500 }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              What&apos;s Included in Your GEO Audit
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.7, maxWidth: "52ch", margin: "0 auto" }}>
              A comprehensive audit of your AI search presence — no fluff, no vague recommendations.
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
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em" }}>
              Our GEO Audit Process
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} style={{ padding: "1.75rem", borderRadius: "1rem", backgroundColor: "#F8FAFB", border: "1px solid #E8EFF4" }}>
                <div style={{ color: "#C47A10", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#334155", fontSize: "0.875rem", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Find Out Where You Stand in AI Search"
        subheading="Order your GEO Audit Report and discover exactly how — and whether — AI tools are recommending your Sunshine Coast business to potential customers."
      />
      <ContactForm />
    </>
  );
}
