"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  Languages: "#0071e3",
  Frontend: "#5e5ce6",
  Backend: "#00b4d8",
  Databases: "#30d158",
  "Cloud & DevOps": "#ff9f0a",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }} ref={ref}>
        <div style={{ marginBottom: 56 }}>
          <span className="chip font-mono" style={{ fontSize: 11, marginBottom: 16, display: "inline-flex" }}>
            Technical Skills
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.03em" }}>
            Tools of the trade
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {Object.entries(skills).map(([category, items], ci) => (
            <div key={category} className="card" style={{
              padding: "24px",
              animation: inView ? `fadeInUp 0.5s ease ${ci * 0.08}s both` : "none",
              opacity: inView ? undefined : 0,
            }}>
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: categoryColors[category] || "var(--accent)",
                }} />
                <span style={{
                  fontSize: 12, fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  {category}
                </span>
              </div>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map((skill) => (
                  <span key={skill} style={{
                    padding: "6px 14px",
                    background: `${categoryColors[category]}0d`,
                    border: `1px solid ${categoryColors[category]}22`,
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${categoryColors[category]}18`;
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${categoryColors[category]}0d`;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight bar */}
        <div style={{
          marginTop: 32,
          padding: "20px 28px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          display: "flex",
          gap: 40,
          flexWrap: "wrap",
          alignItems: "center",
        }}>
          {[
            { label: "Languages", value: "4" },
            { label: "Frameworks", value: "10+" },
            { label: "AWS Services", value: "6+" },
            { label: "Databases", value: "3" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.04em", color: "var(--accent)" }}>{s.value}</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", fontSize: 13, color: "var(--text-muted)", fontWeight: 300, fontStyle: "italic" }}>
            Always learning · Always shipping
          </div>
        </div>
      </div>
    </section>
  );
}
