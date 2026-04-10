"use client";

import type { Project } from "../types";
import { PhoneFrame } from "./mockups/PhoneFrame";
import { NorthHomeScreen, NorthScoreScreen } from "./mockups/NorthScreen";
import { BrowserFrame } from "./mockups/BrowserFrame";
import { ApexScreen } from "./mockups/ApexScreen";
import { SMSScreen } from "./mockups/SMSScreen";

interface ProjectsProps { projects: Project[]; }

const STATUS = {
  live:     { color: "#10b981", bg: "rgba(16,185,129,0.1)",  border: "rgba(16,185,129,0.2)" },
  review:   { color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  border: "rgba(245,158,11,0.2)" },
  building: { color: "#8a8f98", bg: "rgba(138,143,152,0.1)", border: "rgba(138,143,152,0.2)" },
};

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "north") {
    return (
      <div className="flex gap-4 justify-center items-center py-4">
        <div className="animate-float" style={{ animationDelay: "0s" }}>
          <PhoneFrame><NorthHomeScreen /></PhoneFrame>
        </div>
        <div className="animate-float hidden sm:block" style={{ animationDelay: "0.7s", opacity: 0.7, transform: "scale(0.88)" }}>
          <PhoneFrame><NorthScoreScreen /></PhoneFrame>
        </div>
      </div>
    );
  }
  if (slug === "agent-ai-tools") {
    return (
      <div className="py-4 px-2">
        <BrowserFrame src="/screenshots/agentai-desktop.png" alt="AgentAI Tools website" url="agent-ai-tools.vercel.app" />
      </div>
    );
  }
  if (slug === "apex") {
    return (
      <div className="flex justify-center py-4">
        <PhoneFrame><ApexScreen /></PhoneFrame>
      </div>
    );
  }
  if (slug === "performance-buddy") {
    return (
      <div className="flex justify-center py-4">
        <PhoneFrame><SMSScreen /></PhoneFrame>
      </div>
    );
  }
  return null;
}

function FeaturedCard({ project }: { project: Project }) {
  const st = STATUS[project.status];
  return (
    <a
      href={`/projects/${project.slug}`}
      className="group gradient-border card-amber-hover block rounded-[14px] overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none" }}
    >
      {/* Visual area */}
      <div
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${project.color}12 0%, #0d0d0f 70%)`,
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          minHeight: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "16px",
        }}
      >
        <ProjectVisual slug={project.slug} />
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <h3 style={{ color: "#f7f8f8", fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.02em", fontFeatureSettings: '"cv01","ss03"' }}>
                {project.name}
              </h3>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px]"
                style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.color, fontWeight: 600 }}>
                <span className="w-1 h-1 rounded-full" style={{ background: st.color }} />
                {project.statusLabel}
              </span>
            </div>
            <p style={{ color: "#62666d", fontSize: "12px" }}>{project.subtitle}</p>
          </div>
          <div className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1" style={{ color: "#3e3e44" }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 12L12 3M12 3H6M12 3v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <p style={{ color: "#8a8f98", fontSize: "13px", lineHeight: "1.65", marginBottom: "16px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {project.description}
        </p>

        {/* Metrics */}
        {Object.keys(project.metrics).length > 0 && (
          <div className="flex flex-wrap gap-5 mb-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key}>
                <div style={{ color: "#f7f8f8", fontSize: "14px", fontWeight: 700, letterSpacing: "-0.02em" }}>{val}</div>
                <div style={{ color: "#62666d", fontSize: "10px", textTransform: "capitalize" }}>{key.replace(/([A-Z])/g," $1").toLowerCase()}</div>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded-[4px] text-[10px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#8a8f98", fontWeight: 510, fontFamily: "ui-monospace,monospace" }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function SmallCard({ project }: { project: Project }) {
  const st = STATUS[project.status];
  return (
    <a href={`/projects/${project.slug}`} className="group card-hover block p-6 rounded-[14px]"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 style={{ color: "#f7f8f8", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em", fontFeatureSettings: '"cv01","ss03"' }}>{project.name}</h3>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px]"
              style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.color, fontWeight: 600 }}>
              <span className="w-1 h-1 rounded-full" style={{ background: st.color }} />{project.statusLabel}
            </span>
          </div>
          <p style={{ color: "#62666d", fontSize: "12px" }}>{project.subtitle}</p>
        </div>
        <div className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "#3e3e44" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <p style={{ color: "#8a8f98", fontSize: "13px", lineHeight: "1.65", marginBottom: "14px" }}>{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="px-2 py-0.5 rounded-[4px] text-[10px]"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "#8a8f98", fontWeight: 510, fontFamily: "ui-monospace,monospace" }}>
            {tech}
          </span>
        ))}
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
        <div className="mb-12">
          <div className="text-[11px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace,monospace" }}>
            Work
          </div>
          <h2 style={{ color: "#f7f8f8", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", marginBottom: "10px", fontFeatureSettings: '"cv01","ss03"' }}>
            What I&apos;m building
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "480px" }}>
            Five concurrent projects at different stages. Real products, real markets, real bets.
          </p>
        </div>

        {/* Featured — 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {featured.map((p) => <FeaturedCard key={p.slug} project={p} />)}
        </div>

        {/* Others */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {others.map((p) => <SmallCard key={p.slug} project={p} />)}
          </div>
        )}
      </div>
    </section>
  );
}
