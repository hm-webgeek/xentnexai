import type { Metadata } from "next";
import { buildMetadata, BASE_URL } from "@/lib/metadata";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = buildMetadata({
  title: "AI Website Building for Sunshine Coast Businesses",
  description:
    "Professional AI-built websites for Sunshine Coast businesses. Rapid deployment, no upfront costs, monthly subscription. Keyword research, solid SEO, lightning-fast performance — live in days.",
  path: "/ai-website-building",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Website Building",
  provider: { "@type": "LocalBusiness", name: "XentnexAI", url: BASE_URL },
  description:
    "Professional AI-generated websites for Sunshine Coast businesses — keyword research, solid SEO foundations, lightning-fast performance, and no upfront costs.",
  areaServed: "Sunshine Coast, Queensland, Australia",
  serviceType: "AI Website Building",
};

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9.75 17L5 12.25l1.41-1.41L9.75 14.17l7.34-7.34L18.5 8.25 9.75 17z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 3h16a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI-Powered Design",
    body: "Professional web design accelerated by AI generation tools. We combine creative expertise with cutting-edge AI to produce polished, conversion-focused websites in a fraction of the time.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Keyword Research Included",
    body: "Every build starts with real keyword research. We find what your customers are searching for and engineer every page around those terms — from headings to meta descriptions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13 2L3 14h9l-1 6 10-12h-9l1-6z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Lightning-Fast Performance",
    body: "Static-generated, edge-hosted sites that load in milliseconds. Consistent 90+ Google PageSpeed scores — because speed is both a ranking signal and a conversion driver.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Solid SEO Foundation",
    body: "Clean semantic code, structured data markup, canonical URLs, Open Graph tags, and a sitemap — every technical SEO box ticked before we hand over the keys.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "No Upfront Costs",
    body: "Zero large upfront investment. A simple monthly subscription covers your entire website — design, build, hosting, security updates, and ongoing support.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Contact Forms & Lead Capture",
    body: "Every site ships with fully functional contact forms so you start capturing enquiries from the moment you go live. No third-party tools required.",
  },
];

const STEPS = [
  { num: "01", title: "Discovery Call", body: "We learn your business, your goals, your target customers, and your competitors. We conduct keyword research and map out your sitemap before a single line of code is written." },
  { num: "02", title: "AI-Assisted Build", body: "Our designer uses advanced AI generation tools to rapid-prototype your site. Pages are built, refined, and tested against your brief — what used to take weeks now takes days." },
  { num: "03", title: "Review & Launch", body: "You review the completed site, we apply your feedback, then we launch on our fast managed hosting with your domain connected and all forms live." },
  { num: "04", title: "Ongoing Support", body: "Your monthly subscription covers hosting, security patches, and content updates. Your site stays fast, secure, and current — no tech headaches for you." },
];

const INCLUDED = [
  "Custom multi-page website design",
  "Mobile-responsive across all devices",
  "Keyword research & on-page SEO",
  "Schema.org structured data markup",
  "Google PageSpeed 90+ optimisation",
  "Contact & enquiry forms",
  "Fast edge hosting included",
  "SSL certificate & security updates",
  "Google Search Console setup",
  "Monthly content & maintenance updates",
];

const INDUSTRIES = [
  "Trades & Home Services", "Cafés & Restaurants", "Health & Wellness", "Real Estate",
  "Professional Services", "Retail & E-commerce", "Tourism & Hospitality", "Coaches & Consultants",
];

export default function AIWebsiteBuildingPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />

      <ServiceHero
        badge="Sunshine Coast AI Service"
        title="Professional Websites Built with AI — Live in Days"
        subtitle="No upfront costs. No lengthy timelines. AI-powered web design that delivers keyword-researched, SEO-ready, lightning-fast websites on a simple monthly subscription."
        image={{ src: "/images/xentnexai-hero-website-building.png", alt: "AI-generated professional website design for Sunshine Coast businesses", width: 1280, height: 640 }}
      />

      {/* Features */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Everything Your Business Website Needs — Built In
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.7, maxWidth: "52ch", margin: "0 auto" }}>
              We use AI to move faster, not to cut corners. Every site is designed by a professional and engineered to perform.
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

      {/* What's Included */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <p style={{ color: "#1BA899", fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                What&apos;s Included
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                One Subscription. A Complete Web Presence.
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Traditional agency websites cost thousands upfront and take months to deliver. Our AI-accelerated process means your Sunshine Coast business gets a professional, fully optimised website live in days — not months — with no big bill to start.
              </p>
              <p style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.75 }}>
                Your monthly subscription keeps everything running: hosting, security, updates, and ongoing support. One simple cost. No surprises.
              </p>
            </div>
            <div style={{ backgroundColor: "#F8FAFB", borderRadius: "1.25rem", padding: "2rem", border: "1px solid #E8EFF4" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {INCLUDED.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "0.125rem" }}>
                      <circle cx="9" cy="9" r="9" fill="rgba(45,212,191,0.15)" />
                      <path d="M5.5 9l2.5 2.5 4.5-5" stroke="#1BA899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ color: "#334155", fontSize: "0.875rem", lineHeight: 1.5, fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em" }}>
              From Brief to Live Website in Days
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.num} style={{ padding: "1.75rem", borderRadius: "1rem", backgroundColor: "#FFFFFF", border: "1px solid #E8EFF4" }}>
                <div style={{ color: "#C47A10", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#334155", fontSize: "0.875rem", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "2rem" }}>
            Perfect for Sunshine Coast Businesses Ready to Get Online Fast
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
        heading="Your New Website Could Be Live This Week"
        subheading="Book a free call and we'll show you exactly what we can build for your Sunshine Coast business — keyword research, design concept, and a clear timeline included."
      />
      <ContactForm />
    </>
  );
}
