"use client";

import { useState, FormEvent } from "react";
import { FORMSPREE_ID } from "@/lib/metadata";

type FormState = "idle" | "loading" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "", label: "What can we help you with?" },
  { value: "ai-lead-generation", label: "AI Lead Generation System" },
  { value: "ai-voice-agents", label: "AI Voice Agents" },
  { value: "ai-website-building", label: "AI Website Building" },
  { value: "geo-audit-reports", label: "GEO Audit Report" },
  { value: "not-sure", label: "Not sure yet — let's chat" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.75rem",
  border: "1px solid #E8EFF4",
  backgroundColor: "#FFFFFF",
  color: "#1A2740",
  fontSize: "0.9375rem",
  outline: "none",
  transition: "border-color 0.15s",
  boxSizing: "border-box",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again or email us directly.");
      setState("error");
    }
  }

  return (
    <section id="contact" style={{ backgroundColor: "#F8FAFB", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
            Get in Touch
          </p>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "#1A2740",
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            Start Your AI Journey
          </h2>
          <p style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.7 }}>
            Tell us about your business and we&apos;ll recommend the right AI solution
            for your Sunshine Coast goals.
          </p>
        </div>

        {/* Success state */}
        {state === "success" ? (
          <div
            style={{
              backgroundColor: "rgba(45, 212, 191, 0.1)",
              border: "1px solid rgba(45, 212, 191, 0.3)",
              borderRadius: "1rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              style={{ margin: "0 auto 1rem", display: "block" }}
            >
              <circle cx="20" cy="20" r="20" fill="rgba(45,212,191,0.15)" />
              <path
                d="M12 20l6 6 10-12"
                stroke="#2DD4BF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 style={{ color: "#1A2740", fontWeight: 600, fontSize: "1.125rem", marginBottom: "0.5rem" }}>
              Message Sent!
            </h3>
            <p style={{ color: "#64748B", fontSize: "0.9375rem" }}>
              Thanks for reaching out. We&apos;ll be in touch within one business day.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Name + Business row */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              <div>
                <label style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem" }}>
                  Your Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8EFF4")}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem" }}>
                  Business Name *
                </label>
                <input
                  name="business"
                  type="text"
                  required
                  placeholder="Sunshine Coast Plumbing Co."
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8EFF4")}
                />
              </div>
            </div>

            {/* Email + Phone row */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              <div>
                <label style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem" }}>
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@yourbusiness.com.au"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8EFF4")}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem" }}>
                  Phone (optional)
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="04xx xxx xxx"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                  onBlur={(e) => (e.target.style.borderColor = "#E8EFF4")}
                />
              </div>
            </div>

            {/* Service select */}
            <div>
              <label style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem" }}>
                Service Interest
              </label>
              <select
                name="service"
                style={{ ...inputStyle, cursor: "pointer" }}
                onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                onBlur={(e) => (e.target.style.borderColor = "#E8EFF4")}
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} style={{ backgroundColor: "#FFFFFF" }}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label style={{ display: "block", color: "#64748B", fontSize: "0.8125rem", fontWeight: 500, marginBottom: "0.375rem" }}>
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us a bit about your business and what you're hoping to achieve with AI..."
                style={{ ...inputStyle, resize: "vertical", minHeight: "7rem" }}
                onFocus={(e) => (e.target.style.borderColor = "#2DD4BF")}
                onBlur={(e) => (e.target.style.borderColor = "#E8EFF4")}
              />
            </div>

            {/* Error message */}
            {state === "error" && (
              <p style={{ color: "#F87171", fontSize: "0.875rem" }}>{errorMsg}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={state === "loading"}
              className="btn-primary"
              style={{
                justifyContent: "center",
                opacity: state === "loading" ? 0.7 : 1,
                cursor: state === "loading" ? "not-allowed" : "pointer",
              }}
            >
              {state === "loading" ? "Sending..." : "Send Message"}
              {state !== "loading" && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
