"use client";

import { useEffect, useState } from "react";
import type { AboutData, Project } from "../types";

interface HeroProps {
  about: AboutData;
  projects: Project[];
}

const STATUS_COLORS: Record<string, string> = {
  live: "#10b981",
  review: "#f59e0b",
  building: "#8a8f98",
};

export default function Hero({ about, projects }: HeroProps) {
  const [visible, setVisible] = useState(false);
  const liveProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,158,11,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        {/* Live status pills */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {liveProjects.map((p) => (
            <div
              key={p.slug}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#8a8f98",
                fontWeight: 510,
                fontFeatureSettings: '"cv01","ss03"',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: STATUS_COLORS[p.status] }}
              />
              {p.name}
              <span style={{ color: "#62666d" }}>·</span>
              <span style={{ color: STATUS_COLORS[p.status], fontSize: "11px" }}>
                {p.statusLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Main headline */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <h1
            className="font-semibold leading-none mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "clamp(-1px, -0.035em, -1.584px)",
              color: "#f7f8f8",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            I build products
            <br />
            from zero to{" "}
            <span className="text-gradient-amber">revenue.</span>
          </h1>

          <p
            className="max-w-[560px] mb-10"
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.65",
              color: "#8a8f98",
              letterSpacing: "-0.165px",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            Product engineer. I think in users, build in weeks, and design
            systems that run without me. Five projects at any given time, each
            at a different stage.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[14px] transition-all duration-200"
              style={{
                background: "#f59e0b",
                color: "#08090a",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fbbf24")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f59e0b")}
            >
              See the work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work-with-me"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[14px] transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                color: "#d0d6e0",
                border: "1px solid rgba(255,255,255,0.08)",
                fontWeight: 510,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              Work with me
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-20 pt-10 border-t flex flex-wrap gap-10"
          style={{
            borderColor: "rgba(255,255,255,0.05)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.35s",
          }}
        >
          {[
            { value: "5", label: "Projects running" },
            { value: "7 days", label: "North: init → App Store" },
            { value: "$0/mo", label: "AgentAI Tools infra cost" },
            { value: "2026", label: "Target: $20K/mo automated" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div
                className="text-[1.5rem] font-semibold mb-1"
                style={{
                  color: "#f7f8f8",
                  letterSpacing: "-0.04em",
                  fontFeatureSettings: '"cv01","ss03"',
                }}
              >
                {value}
              </div>
              <div
                className="text-[13px]"
                style={{ color: "#62666d" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
