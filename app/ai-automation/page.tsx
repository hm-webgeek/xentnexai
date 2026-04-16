import type { Metadata } from "next";
import { buildMetadata, BASE_URL, CALENDLY_URL } from "@/lib/metadata";
import ServiceHero from "@/components/ServiceHero";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "AI Automation Sunshine Coast",
  description:
    "Stop doing everything manually. XentnexAI builds AI automation systems for Sunshine Coast businesses — leads, calls, and workflows handled for you. Book a free chat.",
  path: "/ai-automation",
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Systems",
  provider: { "@type": "LocalBusiness", name: "XentnexAI", url: BASE_URL },
  description:
    "AI automation systems for Sunshine Coast businesses — automated lead capture, AI voice agents, and workflow automation that handles the repetitive work for you.",
  areaServed: "Sunshine Coast, Queensland, Australia",
  serviceType: "AI Automation",
};

const WHAT_WE_AUTOMATE = [
  {
    href: "/ai-lead-generation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Lead Generation",
    body: "Automated lead capture, qualification, and nurture. AI-powered forms and chatbots engage website visitors, qualify serious enquiries, and follow up automatically — day and night, seven days a week.",
    cta: "AI Lead Generation →",
  },
  {
    href: "/ai-receptionist",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Receptionist",
    body: "24/7 call answering, lead qualification, and appointment booking. A natural-sounding AI receptionist answers your calls, checks your calendar, and books appointments in real time. You never miss a call again.",
    cta: "AI Receptionist →",
  },
  {
    href: "/geo-audit-reports",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "GEO Audit Reports",
    body: "Visibility in AI search tools. When potential customers ask ChatGPT, Google Gemini, or Perplexity to recommend a local business, does your name come up? A GEO Audit shows you exactly where you stand.",
    cta: "GEO Audit Reports →",
  },
];

const HOW_IT_WORKS = [
  {
    num: "01",
    title: "Discovery Call",
    body: "We spend 30 minutes understanding your business — what's taking up your time, where leads are slipping through, and what your existing tools look like. No jargon, no hard sell.",
  },
  {
    num: "02",
    title: "We Build and Configure",
    body: "Our team designs and sets up your automation system, connecting it to your calendar, CRM, website, or phone system. You don't touch any code.",
  },
  {
    num: "03",
    title: "It Runs, You Watch",
    body: "Once live, your system handles the repetitive work in the background. You get a clear dashboard, regular check-ins, and a local team you can call if something needs adjusting.",
  },
];

const INDUSTRIES = [
  "Trades & Home Services",
  "Health & Wellness",
  "Real Estate",
  "Hospitality & Tourism",
  "Professional Services",
  "Finance & Mortgage",
  "Education & Coaching",
  "Retail & eCommerce",
];

const FAQS = [
  {
    q: "Do I need any technical knowledge to use AI automation?",
    a: "No — and that's the whole point. XentnexAI handles all of the setup, configuration, and integration. You don't need to understand how it works under the bonnet. You interact with the results: leads coming in, calls getting answered, appointments being booked. We set it up so that your experience is as simple as checking a dashboard and reading a report.",
  },
  {
    q: "How long does it take to get up and running?",
    a: "Most automation systems go live within two to four weeks, depending on the complexity of your workflows and what existing tools you already use. Simple setups — like automated enquiry follow-up or AI call answering — can often be configured and tested faster than that. We'll give you a realistic timeline after the discovery call.",
  },
  {
    q: "Will it integrate with the software I already use?",
    a: "In most cases, yes. We regularly integrate with common Australian business tools including Xero, HubSpot, Calendly, Google Workspace, ServiceM8, and most CRM and booking systems. During the discovery call, we'll walk through exactly what you're currently using and confirm what's possible before any commitment is made.",
  },
  {
    q: "What's the difference between AI automation and just using ChatGPT?",
    a: "ChatGPT gives you answers when you ask questions. AI automation takes action without you having to ask. It captures a lead at 11pm and sends them a follow-up email. It answers your phone when you're on a job. It books an appointment into your calendar without anyone getting involved. You're not typing prompts — the system is doing the work on its own, in the background, while you get on with your day.",
  },
  {
    q: "What platforms and tools do you use to build automation systems?",
    a: "We use a range of leading automation platforms depending on what's the right fit for your business — including OpenClaw, Make.com, n8n, Zapier, Voiceflow, and Vapi. OpenClaw in particular has become a well-known name in the AI agent space, and we're experienced with it. But we don't push any single tool — we recommend what's best for your specific workflows, budget, and existing software.",
  },
  {
    q: "Is this affordable for a small business on the Sunshine Coast?",
    a: "Yes. We scope every project to your business size and budget, and we're transparent about costs from the start. Many of our clients see a return within the first month — either through time saved or through leads captured that would otherwise have been missed. We're not here to sell you a Ferrari when a reliable ute will do the job.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function AIAutomationPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />

      <ServiceHero
        badge="AI Automation Sunshine Coast"
        title="Stop Doing It All Manually — Let AI Run the Repetitive Stuff"
        subtitle="You started your business to do the work you love — not to spend your evenings chasing enquiries, rescheduling bookings, or following up on quotes that went cold. XentnexAI builds AI automation systems for Sunshine Coast businesses using platforms like OpenClaw, Make.com, and n8n — configured for your workflows, so the repetitive, time-draining tasks get handled for you."
        image={{ src: "/images/xentnexai-hero-automation.webp", alt: "Sunshine Coast business owner relaxed at cafe with AI automation running in the background", width: 1280, height: 640 }}
        imageMobile={{ src: "/images/xentnexai-hero-automation-mobile.webp" }}
      />

      {/* Intro / Pain section */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "3rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                The Hidden Cost of Doing It Manually
              </h2>
              <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                Every missed call from a tradie who needed a quote. Every enquiry that sat in an inbox over the weekend. Every lead who called twice and then booked someone else. Manual processes don&apos;t just cost time — they cost revenue, and most business owners don&apos;t see it until they sit down and do the maths.
              </p>
              <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                A plumber who misses two calls a day at an average job value of $400 is leaving $800 on the table every single day. A health clinic that takes 48 hours to respond to a new patient enquiry loses half those bookings to a competitor who got back first. Hospitality businesses that manually manage every reservation spend hours each week on tasks an AI system could handle in seconds.
              </p>
              <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75 }}>
                The cost of doing it manually isn&apos;t just your time. It&apos;s the leads you don&apos;t realise you&apos;re losing.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1rem" }} className="sm:grid-cols-2">
              {[
                { stat: "2–4 hrs", label: "Average admin time saved per day with automated workflows" },
                { stat: "50%+", label: "Of after-hours enquiries go unanswered without automation" },
                { stat: "< 5 min", label: "Average AI response time vs 24–48 hrs manually" },
                { stat: "2–4 wks", label: "Typical time from discovery call to your system going live" },
              ].map((item) => (
                <div key={item.stat} style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#F8FAFB", border: "1px solid #E8EFF4", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#1BA899", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>{item.stat}</div>
                  <p style={{ color: "#64748B", fontSize: "0.8125rem", lineHeight: 1.5 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate — three service cards */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              What We Automate for Sunshine Coast Businesses
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.7, maxWidth: "54ch", margin: "0 auto" }}>
              Three specialised AI automation systems, each designed to solve a specific business problem.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="md:grid-cols-3">
            {WHAT_WE_AUTOMATE.map((item) => (
              <div key={item.href} style={{ padding: "2rem", borderRadius: "1rem", backgroundColor: "#FFFFFF", border: "1px solid #E8EFF4", display: "flex", flexDirection: "column" }}>
                <div style={{ backgroundColor: "#E6FAF8", width: "3.25rem", height: "3.25rem", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", color: "#2DD4BF", marginBottom: "1.25rem" }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#1A2740", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.7, flex: 1, marginBottom: "1.5rem" }}>{item.body}</p>
                <Link
                  href={item.href}
                  style={{ color: "#1BA899", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}
                >
                  {item.cta}
                </Link>
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
              How It Works — From Setup to Running on Autopilot
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.7, maxWidth: "52ch", margin: "0.75rem auto 0" }}>
              Getting started with AI automation doesn&apos;t mean learning new software or managing a tech project.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1.5rem" }} className="md:grid-cols-3">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.num} style={{ padding: "1.75rem", borderRadius: "1rem", backgroundColor: "#F8FAFB", border: "1px solid #E8EFF4", position: "relative" }}>
                <div style={{ color: "#C47A10", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem", fontVariantNumeric: "tabular-nums" }}>{step.num}</div>
                <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ color: "#334155", fontSize: "0.875rem", lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
              Industries We Work With on the Sunshine Coast
            </h2>
            <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.7, maxWidth: "52ch", margin: "0 auto" }}>
              AI automation isn&apos;t just for big companies. The businesses that benefit most are busy local operators who don&apos;t have time to keep up with every enquiry, call, and follow-up.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {INDUSTRIES.map((ind) => (
              <span key={ind} style={{ padding: "0.5rem 1.125rem", borderRadius: "9999px", border: "1px solid rgba(196, 122, 16, 0.25)", backgroundColor: "#FEF6E4", color: "#C47A10", fontSize: "0.875rem", fontWeight: 500 }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why XentnexAI */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "3rem", alignItems: "start" }} className="lg:grid-cols-2">
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                Why Local Businesses Choose XentnexAI
              </h2>
              <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                There&apos;s no shortage of AI agencies online — most of them are overseas, faceless, and unreachable when things go wrong. XentnexAI is based right here on the Sunshine Coast. We understand the local market, we&apos;re in the same time zone, and you can actually get us on the phone.
              </p>
              <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                We work in plain English. We don&apos;t hide behind technical jargon or make simple things sound complicated. When we build your automation system, we explain how it works, what it&apos;s doing, and how to read the results.
              </p>
              <p style={{ color: "#334155", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1rem" }}>
                There are no lock-in contracts. We want to earn your business every month. And we provide ongoing support — so as your business grows, your system grows with you.
              </p>
              <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>
                <strong style={{ color: "#1A2740" }}>Tools we work with:</strong> OpenClaw, Make.com, n8n, Zapier, Voiceflow, Vapi, HubSpot, Google Workspace, Calendly, ServiceM8 and more — we use the right tool for your situation, not a one-size-fits-all stack.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "1rem" }} className="sm:grid-cols-2">
              {[
                { title: "Locally Based", body: "Sunshine Coast team, same time zone, reachable by phone" },
                { title: "Plain English", body: "No jargon, no overcomplicated explanations — just clear communication" },
                { title: "No Lock-In Contracts", body: "We earn your business every month, not trap you in a contract" },
                { title: "Ongoing Support", body: "Regular check-ins and updates as your business evolves" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "1.5rem", borderRadius: "1rem", backgroundColor: "#F8FAFB", border: "1px solid #E8EFF4" }}>
                  <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: "#2DD4BF", marginBottom: "0.75rem" }} />
                  <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "0.375rem" }}>{item.title}</h3>
                  <p style={{ color: "#64748B", fontSize: "0.8125rem", lineHeight: 1.6 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, color: "#1A2740", letterSpacing: "-0.02em" }}>
              Common Questions About AI Automation
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS.map((faq) => (
              <div key={faq.q} style={{ padding: "1.75rem", borderRadius: "1rem", backgroundColor: "#FFFFFF", border: "1px solid #E8EFF4" }}>
                <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1rem", marginBottom: "0.75rem" }}>{faq.q}</h3>
                <p style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Book a Free Automation Discovery Call"
        subheading="Thirty minutes. No hard sell. We'll listen to what's taking up your time and tell you honestly whether AI automation can help — and where to start."
      />
      <ContactForm />
    </>
  );
}
