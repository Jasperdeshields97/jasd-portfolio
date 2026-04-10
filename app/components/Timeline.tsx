"use client";

import type { TimelineEntry } from "../types";

interface TimelineProps {
  entries: TimelineEntry[];
}

const TYPE_CONFIG = {
  ship: { label: "Shipped", color: "#10b981" },
  milestone: { label: "Milestone", color: "#f59e0b" },
  start: { label: "Started", color: "#8a8f98" },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function Timeline({ entries }: TimelineProps) {
  const sorted = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="timeline" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div
            className="text-[12px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace, SF Mono, Menlo, monospace" }}
          >
            Timeline
          </div>
          <h2
            className="text-[2rem] font-semibold mb-3"
            style={{
              color: "#f7f8f8",
              letterSpacing: "-0.704px",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            Build history
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "480px" }}>
            Chronological. Velocity is visible.
          </p>
        </div>

        {/* Timeline entries */}
        <div className="max-w-[720px]">
          {sorted.map((entry, i) => {
            const type = TYPE_CONFIG[entry.type] || TYPE_CONFIG.milestone;
            return (
              <div key={i} className="flex gap-6 mb-8">
                {/* Left — date + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5"
                    style={{ background: type.color }}
                  />
                  {i < sorted.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{ background: "rgba(255,255,255,0.06)", minHeight: "32px" }}
                    />
                  )}
                </div>

                {/* Right — content */}
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-[11px] font-semibold uppercase"
                      style={{
                        color: type.color,
                        fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {type.label}
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: "#3e3e44" }}
                    >
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  <h4
                    className="text-[15px] font-semibold mb-1"
                    style={{
                      color: "#f7f8f8",
                      letterSpacing: "-0.02em",
                      fontFeatureSettings: '"cv01","ss03"',
                    }}
                  >
                    {entry.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#62666d" }}>
                    {entry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
