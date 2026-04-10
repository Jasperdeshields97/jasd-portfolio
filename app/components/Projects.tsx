"use client";

import { useRef } from "react";
import type { Project } from "../types";

interface ProjectsProps {
  projects: Project[];
}

const STATUS_CONFIG = {
  live: { color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
  review: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
  building: { color: "#8a8f98", bg: "rgba(138,143,152,0.1)", border: "rgba(138,143,152,0.2)" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const status = STATUS_CONFIG[project.status];

  return (
    <a
      ref={ref}
      href={`/projects/${project.slug}`}
      className="group block p-6 rounded-[12px] card-hover"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        textDecoration: "none",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h3
              className="text-[1.125rem] font-semibold"
              style={{
                color: "#f7f8f8",
                letterSpacing: "-0.24px",
                fontFeatureSettings: '"cv01","ss03"',
              }}
            >
              {project.name}
            </h3>
            {/* Status pill */}
            <span
              className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px]"
              style={{
                background: status.bg,
                border: `1px solid ${status.border}`,
                color: status.color,
                fontWeight: 510,
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: status.color }}
              />
              {project.statusLabel}
            </span>
          </div>
          <p
            className="text-[13px]"
            style={{ color: "#62666d" }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Arrow */}
        <div
          className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1"
          style={{ color: "#3e3e44" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Description */}
      <p
        className="text-[14px] mb-5 leading-relaxed"
        style={{
          color: "#8a8f98",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.description}
      </p>

      {/* Metrics */}
      {Object.entries(project.metrics).length > 0 && (
        <div className="flex flex-wrap gap-4 mb-5">
          {Object.entries(project.metrics).map(([key, val]) => (
            <div key={key}>
              <div
                className="text-[13px] font-semibold"
                style={{ color: "#f7f8f8", letterSpacing: "-0.01em" }}
              >
                {val}
              </div>
              <div className="text-[11px] capitalize" style={{ color: "#62666d" }}>
                {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-[4px] text-[11px]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "#8a8f98",
              fontWeight: 510,
              fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
            }}
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span
            className="px-2 py-0.5 rounded-[4px] text-[11px]"
            style={{ color: "#62666d" }}
          >
            +{project.stack.length - 5}
          </span>
        )}
      </div>
    </a>
  );
}

export default function Projects({ projects }: ProjectsProps) {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const featured = sorted.filter((p) => p.featured);
  const others = sorted.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <div
            className="text-[12px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace, SF Mono, Menlo, monospace" }}
          >
            Work
          </div>
          <h2
            className="text-[2rem] font-semibold mb-3"
            style={{
              color: "#f7f8f8",
              letterSpacing: "-0.704px",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            What I&apos;m building
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "480px" }}>
            Five concurrent projects at different stages. Real products, real markets, real bets.
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Secondary row */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {others.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i + featured.length} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
