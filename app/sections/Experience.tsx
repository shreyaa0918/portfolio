"use client";
import { useState, useEffect, useRef } from "react";
import { experience } from "../data/portfolio";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Experience() {
  const [active, setActive] = useState("amazon");
  const { ref, inView } = useInView();
  const current = experience.find((e) => e.id === active)!;

  return (
    <section id="experience" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }} ref={ref}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="chip font-mono" style={{ fontSize: 11, marginBottom: 16, display: "inline-flex" }}>
            Professional Experience
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Where I&apos;ve worked
          </h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 12, fontSize: 16, fontWeight: 300 }}>
            Internships at industry-leading companies building production systems.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32 }} className="flex flex-col md:grid">
          {/* Company tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {experience.map((exp) => (
              <button key={exp.id} onClick={() => setActive(exp.id)}
                style={{
                  padding: "14px 16px",
                  background: active === exp.id ? "var(--accent-subtle)" : "transparent",
                  border: `1px solid ${active === exp.id ? "rgba(0,113,227,0.2)" : "transparent"}`,
                  borderRadius: 12,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
                onMouseEnter={e => { if (active !== exp.id) e.currentTarget.style.background = "var(--bg-alt)"; }}
                onMouseLeave={e => { if (active !== exp.id) e.currentTarget.style.background = "transparent"; }}
              >
                <img
                  src={exp.logo}
                  alt={exp.company}
                  style={{ width: 28, height: 28, borderRadius: 6, objectFit: "contain" }}
                />
                <div>
                  <div style={{
                    fontSize: 14, fontWeight: 500,
                    color: active === exp.id ? "var(--accent)" : "var(--text-primary)",
                  }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                    {exp.period.split("–")[0].trim()}
                  </div>
                </div>
                {active === exp.id && (
                  <svg style={{ marginLeft: "auto" }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5 3l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div key={active} className="card" style={{ padding: "32px 36px", minHeight: 320,
            animation: "fadeIn 0.3s ease" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{current.role}</h3>
                <p style={{ fontSize: 16, color: "var(--accent)", marginTop: 4, fontWeight: 500 }}>@ {current.company}</p>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{current.period} · {current.location}</p>
              </div>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "var(--accent-subtle)",
                border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24,
              }}>
                <img
                  src={current.logo}
                  alt={current.company}
                  style={{ width: 28, height: 28, objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Highlights */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {current.highlights.map((h, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0, marginTop: 8,
                  }} />
                  <span style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech chips */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {current.tech.map((t) => (
                <span key={t} className="chip font-mono" style={{ fontSize: 11 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
