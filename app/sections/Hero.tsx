"use client";
import { useEffect, useRef } from "react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = 600;

    const particles: { x: number; y: number; r: number; vx: number; vy: number; a: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    let rafId: number;
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0,113,227,${p.a})`;
        ctx!.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });
      rafId = requestAnimationFrame(draw);
    }

    draw();
    const onResize = () => { W = canvas.width = window.innerWidth; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section id="about" style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      paddingTop: 80,
    }}>
      {/* Canvas bg */}
      <canvas ref={canvasRef} style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        opacity: 0.6,
        pointerEvents: "none",
      }} />

      {/* Gradient blob */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,113,227,0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
        animation: "float 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1100,
        width: "100%",
        margin: "0 auto",
        padding: "0 24px",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: 48,
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }} className="flex flex-col md:grid">
        {/* Left content */}
        <div>
          {/* Badge */}
          <div style={{ marginBottom: 28 }}
            className="animate-fadeInUp">
            <span className="chip font-mono" style={{ fontSize: 11 }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--success)", display: "inline-block",
                animation: "pulse-ring 2s ease-out infinite",
              }} />
              {profile.available} · Open to SDE-1 roles
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: 16,
          }} className="animate-fadeInUp delay-100">
            {profile.name}
          </h1>

          {/* Title */}
          <p style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }} className="animate-fadeInUp delay-200">
            <span className="text-gradient" style={{ fontWeight: 500 }}>{profile.title}</span>
            <span style={{ color: "var(--text-muted)", marginLeft: 12 }}>— {profile.subtitle}</span>
          </p>

          {/* Summary */}
          <p style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            maxWidth: 580,
            lineHeight: 1.7,
            marginBottom: 40,
            fontWeight: 300,
          }} className="animate-fadeInUp delay-300">
            {profile.summary}
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }} className="animate-fadeInUp delay-400">
            <a href="#experience"
              style={{
                padding: "12px 28px",
                background: "var(--accent)",
                color: "white",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "-0.01em",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer"
              style={{
                padding: "12px 28px",
                background: "transparent",
                color: "var(--text-primary)",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 400,
                textDecoration: "none",
                border: "1px solid var(--border-strong)",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--surface-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", gap: 24, marginTop: 40, alignItems: "center" }} className="animate-fadeInUp delay-500">
            <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 400 }}>Connect</span>
            <div style={{ height: 1, width: 32, background: "var(--border)" }} />
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}
              style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: 13, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}>
              {profile.email}
            </a>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="animate-fadeInUp delay-300" style={{
          minWidth: 240,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          {[
            { label: "GPA (MS)", value: "4.0", sub: "Purdue Fort Wayne" },
            { label: "Internships", value: "3", sub: "Amazon · DB · Edu-versity" },
            { label: "AWS Services", value: "6+", sub: "Lambda, S3, SQS, SNS…" },
            { label: "Graduating", value: "2027", sub: "Master of CS" },
          ].map((stat) => (
            <div key={stat.label} className="card" style={{ padding: "16px 20px" }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>
                {stat.label}
              </div>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.04em", color: "var(--text-primary)", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 4 }}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        opacity: 0.4,
        animation: "float 2s ease-in-out infinite",
      }}>
        <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
