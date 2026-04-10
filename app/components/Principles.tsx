"use client";

import type { Principle } from "../types";

interface PrinciplesProps {
  principles: Principle[];
}

export default function Principles({ principles }: PrinciplesProps) {
  return (
    <section id="how-i-build" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div
            className="text-[12px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace, SF Mono, Menlo, monospace" }}
          >
            How I Build
          </div>
          <h2
            className="text-[2rem] font-semibold mb-3"
            style={{
              color: "#f7f8f8",
              letterSpacing: "-0.704px",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            The operating system
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "480px" }}>
            Four principles that run underneath everything I build.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="p-7 rounded-[12px]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="text-[11px] font-semibold mb-4"
                style={{
                  color: "#3e3e44",
                  fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                  letterSpacing: "0.08em",
                }}
              >
                {principle.number}
              </div>
              <h3
                className="text-[1.0625rem] font-semibold mb-3 leading-snug"
                style={{
                  color: "#f7f8f8",
                  letterSpacing: "-0.02em",
                  fontFeatureSettings: '"cv01","ss03"',
                }}
              >
                {principle.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "#8a8f98" }}
              >
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Competency strip */}
        <div
          className="mt-12 p-7 rounded-[12px]"
          style={{
            background: "rgba(245,158,11,0.04)",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          <div
            className="text-[12px] font-semibold uppercase mb-5"
            style={{
              color: "#f59e0b",
              fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
              letterSpacing: "0.08em",
            }}
          >
            Competency Stack
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                area: "Product",
                skills: ["User psychology", "Paywall design", "Positioning", "Onboarding CRO"],
              },
              {
                area: "Engineering",
                skills: ["React Native", "Next.js", "TypeScript", "Supabase"],
              },
              {
                area: "AI Systems",
                skills: ["Claude API", "Autonomous agents", "n8n workflows", "Prompt engineering"],
              },
              {
                area: "Growth",
                skills: ["Organic social", "Playwright automation", "App Store ASO", "Affiliate systems"],
              },
            ].map(({ area, skills }) => (
              <div key={area}>
                <div
                  className="text-[13px] font-semibold mb-3"
                  style={{
                    color: "#d0d6e0",
                    fontFeatureSettings: '"cv01","ss03"',
                    letterSpacing: "-0.01em",
                  }}
                >
                  {area}
                </div>
                <ul className="space-y-1.5">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[13px] flex items-center gap-2"
                      style={{ color: "#62666d" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "#f59e0b", opacity: 0.6 }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
