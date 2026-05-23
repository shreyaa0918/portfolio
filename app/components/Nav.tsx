"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
      className={scrolled ? "nav-blur" : ""}
    >
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="#about" style={{ textDecoration: "none" }}>
          <span style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}>
            SS<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden md:flex">
          {links.map(({ href, label }) => (
            <a key={href} href={href} style={{
              padding: "6px 14px",
              fontSize: 14,
              fontWeight: 400,
              borderRadius: 100,
              textDecoration: "none",
              color: active === href ? "var(--accent)" : "var(--text-secondary)",
              background: active === href ? "var(--accent-subtle)" : "transparent",
              transition: "all 0.2s ease",
              letterSpacing: "-0.01em",
            }}>
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:shreyasagar0918@gmail.com"
          className="hidden md:flex"
          style={{
            padding: "8px 18px",
            background: "var(--accent)",
            color: "white",
            borderRadius: 100,
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#0077ed")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
        >
          Hire me
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            color: "var(--text-primary)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          borderTop: "1px solid var(--border)",
          padding: "12px 24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }} className="nav-blur md:hidden">
          {links.map(({ href, label }) => (
            <a key={href} href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "10px 14px",
                fontSize: 15,
                textDecoration: "none",
                color: "var(--text-primary)",
                borderRadius: 10,
                background: active === href ? "var(--accent-subtle)" : "transparent",
              }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
