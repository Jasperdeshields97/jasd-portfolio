"use client";

import type { AboutData } from "../types";

interface WorkWithMeProps {
  about: AboutData;
}

const PATHS = [
  {
    title: "Hire me",
    subtitle: "APM / PM / Product Lead",
    description:
      "I'm open to product roles where I can operate with real autonomy and build alongside the eng team. I think in systems and outcomes, not feature lists. If you need someone who can own a product area end-to-end — discovery through delivery — let's talk.",
    cta: "Get in touch",
    href: "mailto:jasper@jasd.com",
    style: "primary",
  },
  {
    title: "Build together",
    subtitle: "Co-founder / Technical Partner",
    description:
      "If you have a problem worth solving and need a technical co-founder who can build and market, I'm selectively open. I'm most useful in the 0→1 stage where velocity and product judgment matter most.",
    cta: "Tell me about it",
    href: "mailto:jasper@jasd.com",
    style: "secondary",
  },
  {
    title: "Just connect",
    subtitle: "Coffee, feedback, questions",
    description:
      "Working on something interesting in AI, consumer apps, or autonomous systems? Always down to trade notes. No agenda required.",
    cta: "Say hello",
    href: "mailto:jasper@jasd.com",
    style: "ghost",
  },
];

export default function WorkWithMe({ about }: WorkWithMeProps) {
  return (
    <section id="work-with-me" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14 max-w-[580px]">
          <div
            className="text-[12px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace, SF Mono, Menlo, monospace" }}
          >
            Work with me
          </div>
          <h2
            className="text-[2rem] font-semibold mb-4"
            style={{
              color: "#f7f8f8",
              letterSpacing: "-0.704px",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            Three ways to connect
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", lineHeight: "1.65" }}>
            I&apos;m selectively open to the right opportunities. Here&apos;s where I can be most useful.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className="p-6 rounded-[12px] flex flex-col"
              style={{
                background:
                  path.style === "primary"
                    ? "rgba(245,158,11,0.06)"
                    : "rgba(255,255,255,0.02)",
                border:
                  path.style === "primary"
                    ? "1px solid rgba(245,158,11,0.2)"
                    : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex-1">
                <div
                  className="text-[11px] font-semibold uppercase mb-3"
                  style={{
                    color: path.style === "primary" ? "#f59e0b" : "#62666d",
                    fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                    letterSpacing: "0.06em",
                  }}
                >
                  {path.subtitle}
                </div>
                <h3
                  className="text-[1.125rem] font-semibold mb-3"
                  style={{
                    color: "#f7f8f8",
                    letterSpacing: "-0.02em",
                    fontFeatureSettings: '"cv01","ss03"',
                  }}
                >
                  {path.title}
                </h3>
                <p
                  className="text-[14px] leading-relaxed mb-6"
                  style={{ color: "#8a8f98" }}
                >
                  {path.description}
                </p>
              </div>

              <a
                href={path.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] text-[13px] transition-all duration-200"
                style={
                  path.style === "primary"
                    ? {
                        background: "#f59e0b",
                        color: "#08090a",
                        fontWeight: 600,
                        alignSelf: "flex-start",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "#d0d6e0",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontWeight: 510,
                        alignSelf: "flex-start",
                      }
                }
                onMouseEnter={(e) => {
                  if (path.style === "primary") {
                    e.currentTarget.style.background = "#fbbf24";
                  } else {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (path.style === "primary") {
                    e.currentTarget.style.background = "#f59e0b";
                  } else {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }
                }}
              >
                {path.cta}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Open to */}
        <div
          className="p-6 rounded-[12px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div
            className="text-[12px] font-semibold uppercase mb-4"
            style={{ color: "#62666d", fontFamily: "ui-monospace, SF Mono, Menlo, monospace", letterSpacing: "0.06em" }}
          >
            Open to
          </div>
          <div className="flex flex-wrap gap-2">
            {about.openTo.map((role) => (
              <span
                key={role}
                className="px-3 py-1.5 rounded-full text-[13px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#d0d6e0",
                  fontWeight: 510,
                }}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
