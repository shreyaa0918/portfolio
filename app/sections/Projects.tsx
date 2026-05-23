"use client";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 0", background: "var(--bg-alt)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 56 }}>
          <span className="chip font-mono" style={{ fontSize: 11, marginBottom: 16, display: "inline-flex" }}>Projects</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.03em" }}>Things I&apos;ve built</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: 12, fontWeight: 300 }}>
            From freelance client work to side projects and open-source.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
          {projects.map((project, i) => (
            <a key={i} href={project.link} target="_blank" rel="noreferrer"
              style={{ textDecoration: "none", display: "block" }}>
              <div className="card" style={{ padding: "28px 32px", height: "100%", cursor: "pointer" }}>
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12, marginBottom: 20,
                  background: "var(--accent-subtle)",
                  border: "1px solid rgba(0,113,227,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" stroke="var(--accent)" strokeWidth="1.5"/>
                    <path d="M7 10h6M10 7v6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>

                <span style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "var(--text-muted)", display: "block", marginBottom: 8,
                }}>
                  {project.type}
                </span>

                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 12, color: "var(--text-primary)" }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 300, marginBottom: 20 }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="chip font-mono" style={{ fontSize: 11 }}>{t}</span>
                  ))}
                </div>

                <div style={{
                  marginTop: 24, display: "flex", alignItems: "center", gap: 6,
                  fontSize: 13, color: "var(--accent)", fontWeight: 500,
                }}>
                  View project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}

          {/* Add more placeholder */}
          <div className="card" style={{
            padding: "28px 32px",
            border: "1px dashed var(--border-strong)",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 12,
            minHeight: 220,
            background: "transparent",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              border: "1px dashed var(--border-strong)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 4v12M4 10h12" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 500, color: "var(--text-secondary)" }}>More projects coming</p>
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>Currently building during my MS at Purdue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
