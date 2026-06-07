"use client";
import { useState } from "react";
import { profile, targetCompanies } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: "100px 0 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Main CTA block */}
        <div style={{
          background: "var(--text-primary)",
          borderRadius: 24,
          padding: "64px 56px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          marginBottom: 32,
        }}>
          {/* Glow effects */}
          <div style={{
            position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
            width: 400, height: 200,
            background: "radial-gradient(ellipse, rgba(0,113,227,0.3) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -60, right: "10%",
            width: 300, height: 200,
            background: "radial-gradient(ellipse, rgba(0,180,216,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="chip font-mono" style={{ fontSize: 11, marginBottom: 24, display: "inline-flex", background: "rgba(0,113,227,0.15)", borderColor: "rgba(0,113,227,0.3)", color: "#60a5fa" }}>
              Open to opportunities
            </span>

            <h2 style={{
              fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 600,
              letterSpacing: "-0.04em", color: "white", lineHeight: 1.1, marginBottom: 20,
            }}>
              Let&apos;s build something<br />
              <span style={{
                background: "linear-gradient(135deg, #0071e3 0%, #00b4d8 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>remarkable</span> together.
            </h2>

            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", marginBottom: 40, fontWeight: 300, maxWidth: 480, margin: "0 auto 40px" }}>
              Graduating May 2027 with a Master&apos;s in CS from Purdue Fort Wayne. Actively looking for SDE-1 roles at world-class companies.
            </p>

            {/* Target companies */}
            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
              {targetCompanies.map((c) => (
                <span key={c} style={{
                  padding: "6px 18px", borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontSize: 13, color: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.05)",
                }}>{c}</span>
              ))}
            </div>

            {/* Email CTA */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={`mailto:${profile.email}`}
                style={{
                  padding: "13px 30px",
                  background: "var(--accent)",
                  color: "white",
                  borderRadius: 100,
                  fontSize: 15, fontWeight: 500,
                  textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.2"/>
                  <path d="M1 5l7 5 7-5" stroke="white" strokeWidth="1.2"/>
                </svg>
                Send me an email
              </a>
              <button onClick={copy}
                style={{
                  padding: "13px 24px",
                  background: "rgba(255,255,255,0.08)",
                  color: copied ? "#30d158" : "rgba(255,255,255,0.7)",
                  borderRadius: 100,
                  fontSize: 15, fontWeight: 400,
                  border: "1px solid rgba(255,255,255,0.1)",
                  cursor: "pointer", transition: "all 0.2s ease",
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}>
                {copied ? "✓ Copied!" : profile.email}
              </button>
            </div>
          </div>
        </div>

        {/* Links row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          padding: "20px 0",
          borderTop: "1px solid var(--border)",
        }}>
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 300 }}>
            © 2026 Shreya Sagar · Built with Next.js & Framer Motion
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "LinkedIn", href: profile.linkedin },
              { label: "GitHub", href: profile.github },
              { label: "Resume", href: "#" },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
