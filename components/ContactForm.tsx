'use client'

import { useState, useRef } from "react";

const PROJECT_TYPES = [
  "Driveway",
  "Patio",
  "Walkway / Stairs",
  "Retaining Wall",
  "Foundation Work",
  "Reconditioning",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setState("success");
      formRef.current?.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again or reach out via Instagram @portal.llc.");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "#FFFFFF",
    fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
    fontSize: "0.95rem",
    padding: "0.875rem 1rem",
    outline: "none",
    appearance: "none",
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
    fontSize: "0.72rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "0.5rem",
  };

  if (state === "success") {
    return (
      <div style={{
        border: "1px solid rgba(255,107,26,0.4)",
        padding: "3rem",
        textAlign: "center",
      }}>
        <div style={{ marginBottom: "1rem" }}>
          <span style={{ fontSize: "2rem" }}>✓</span>
        </div>
        <h3 style={{
          fontFamily: "var(--font-anton, 'Anton', sans-serif)",
          fontSize: "1.8rem",
          color: "#FFFFFF",
          marginBottom: "0.75rem",
        }}>
          Got it — we&rsquo;ll be in touch.
        </h3>
        <p style={{
          fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
          fontSize: "0.95rem",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
        }}>
          Chris typically responds within a few hours. If it&rsquo;s urgent, call{" "}
          Instagram <a href="https://www.instagram.com/portal.llc/" style={{ color: "#FF6B1A" }}>@portal.llc</a>.</p><p>
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input id="name" name="name" type="text" required style={inputStyle} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone *</label>
          <input id="phone" name="phone" type="tel" required style={inputStyle} placeholder="(206) 555-0100" />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email *</label>
        <input id="email" name="email" type="email" required style={inputStyle} placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="project_type" style={labelStyle}>Project type *</label>
        <select id="project_type" name="project_type" required style={{ ...inputStyle, cursor: "pointer" }}>
          <option value="">Select a project type</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="address" style={labelStyle}>Address / Neighborhood</label>
        <input id="address" name="address" type="text" style={inputStyle} placeholder="e.g. Admiral, Fauntleroy, Alki..." />
      </div>

      <div>
        <label htmlFor="notes" style={labelStyle}>Tell us about your project</label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Approximate size, current condition, any photos you can share via email..."
        />
      </div>

      {state === "error" && (
        <p style={{
          fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)",
          fontSize: "0.85rem",
          color: "#FF6B1A",
          border: "1px solid rgba(255,107,26,0.3)",
          padding: "0.75rem 1rem",
        }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-cta"
        style={{ opacity: state === "submitting" ? 0.6 : 1, cursor: state === "submitting" ? "wait" : "pointer" }}
      >
        {state === "submitting" ? "Sending..." : "Send My Request"}
      </button>

      <p style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', sans-serif)", fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", lineHeight: 1.6 }}>
        Free estimates, no obligation. Or reach out on Instagram <a href="https://www.instagram.com/portal.llc/" style={{ color: "rgba(255,255,255,0.4)" }}>@portal.llc</a>.
      </p>
    </form>
  );
}
