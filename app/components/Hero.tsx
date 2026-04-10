"use client";

import { useEffect, useState } from "react";
import type { AboutData, Project } from "../types";

interface HeroProps {
  about: AboutData;
  projects: Project[];
}

const STATUS_COLORS: Record<string, { dot: string; text: string; bg: string }> = {
  live:     { dot: "#10b981", text: "#10b981", bg: "rgba(16,185,129,0.08)" },
  review:   { dot: "#f59e0b", text: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
  building: { dot: "#8a8f98", text: "#8a8f98", bg: "rgba(138,143,152,0.08)" },
};

export default function Hero({ about, projects }: HeroProps) {
  const [visible, setVisible] = useState(false);
  const featured = projects.filter((p) => p.featured);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-20 pb-16">

      {/* ── Dot grid ── */}
      <div className="dot-grid absolute inset-0 opacity-40" />

      {/* ── Aurora glows ── */}
      <div className="aurora" style={{ width: 700, height: 400, top: "5%", left: "50%", transform: "translateX(-55%)", background: "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />
      <div className="aurora" style={{ width: 400, height: 400, bottom: "10%", right: "-5%", background: "radial-gradient(ellipse, rgba(113,112,255,0.06) 0%, transparent 70%)" }} />
      <div className="aurora" style={{ width: 300, height: 300, top: "30%", left: "-5%", background: "radial-gradient(ellipse, rgba(16,185,129,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="max-w-[760px]">

          {/* Status pills */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(10px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}
          >
            {featured.map((p) => {
              const s = STATUS_COLORS[p.status];
              return (
                <div
                  key={p.slug}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px]"
                  style={{ background: s.bg, border: "1px solid rgba(255,255,255,0.07)", fontWeight: 510 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse-ring" style={{ background: s.dot, flexShrink: 0 }} />
                  <span style={{ color: "#d0d6e0" }}>{p.name}</span>
                  <span style={{ color: "#3e3e44" }}>·</span>
                  <span style={{ color: s.text }}>{p.statusLabel}</span>
                </div>
              );
            })}
          </div>

          {/* Headline */}
          <div
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "opacity 0.65s ease 0.1s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.1s" }}
          >
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: "clamp(-1.2px, -0.035em, -1.8px)",
                color: "#f7f8f8",
                fontFeatureSettings: '"cv01","ss03"',
                marginBottom: "1.5rem",
              }}
            >
              I build products<br />
              from zero to{" "}
              <span className="text-gradient-amber">revenue.</span>
            </h1>

            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#8a8f98",
                letterSpacing: "-0.015em",
                maxWidth: "520px",
                marginBottom: "2.5rem",
              }}
            >
              Product engineer who thinks in systems and ships in weeks.
              Five concurrent projects. Full-stack execution. AI infrastructure
              that runs without me in the loop.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-16">
              <a
                href="#work"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "11px 22px", borderRadius: "8px",
                  background: "#f59e0b", color: "#08090a",
                  fontSize: "14px", fontWeight: 700,
                  textDecoration: "none", letterSpacing: "-0.01em",
                  boxShadow: "0 0 24px rgba(245,158,11,0.25)",
                  transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fbbf24"; e.currentTarget.style.boxShadow = "0 0 36px rgba(245,158,11,0.35)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#f59e0b"; e.currentTarget.style.boxShadow = "0 0 24px rgba(245,158,11,0.25)"; e.currentTarget.style.transform = "none"; }}
              >
                See the work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                href="#work-with-me"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "11px 22px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.04)", color: "#d0d6e0",
                  border: "1px solid rgba(255,255,255,0.09)", fontSize: "14px", fontWeight: 510,
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
              >
                Work with me
              </a>
            </div>
          </div>

          {/* Stats strip */}
          <div
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexWrap: "wrap", gap: "2.5rem",
              opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s",
            }}
          >
            {[
              { value: "5", label: "Concurrent projects" },
              { value: "7 days", label: "North: init → App Store" },
              { value: "$0/mo", label: "AgentAI infra cost" },
              { value: "$20K", label: "Target MRR by EOY 2026" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{ color: "#f7f8f8", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.1, fontFeatureSettings: '"cv01","ss03"' }}>
                  {value}
                </div>
                <div style={{ color: "#3e3e44", fontSize: "12px", marginTop: "3px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #08090a)" }} />
    </section>
  );
}
