"use client";
import { education, certifications } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 56 }}>
          <span className="chip font-mono" style={{ fontSize: 11, marginBottom: 16, display: "inline-flex" }}>Education</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.03em" }}>Academic background</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 16, marginBottom: 32 }}>
          {education.map((edu, i) => (
            <div key={i} className="card" style={{ padding: "28px 32px", position: "relative", overflow: "hidden" }}>
              {/* Accent line */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0,
                width: 3, background: "var(--accent)", borderRadius: "3px 0 0 3px",
              }} />

              {i === 0 && (
                <span style={{
                  position: "absolute", top: 20, right: 20,
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: "var(--accent)",
                  background: "var(--accent-subtle)",
                  border: "1px solid rgba(0,113,227,0.15)",
                  padding: "3px 10px", borderRadius: 100,
                }}>Current</span>
              )}

              <div style={{ paddingLeft: 12 }}>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 6 }}>{edu.school}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 4, fontWeight: 300 }}>{edu.degree}</p>
                <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>{edu.period} · {edu.location}</p>

                <div style={{ display: "flex", gap: 24 }}>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.06em" }}>GPA</div>
                    <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--accent)" }}>{edu.gpa}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 500, color: "var(--text-muted)", marginBottom: 16, letterSpacing: "-0.01em" }}>Certifications</h3>
          {certifications.map((cert, i) => (
            <div key={i} className="card" style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 12,
                  background: "rgba(0,113,227,0.06)",
                  border: "1px solid rgba(0,113,227,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                }}>🏆</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>{cert.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{cert.issuer} · {cert.date}</div>
                </div>
              </div>
              <span className="chip" style={{ fontSize: 11 }}>Certified</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
