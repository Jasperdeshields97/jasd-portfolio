import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import type { Project } from "../../types";

import projectsData from "../../../content/projects.json";

interface Props {
  params: Promise<{ slug: string }>;
}

const STATUS_CONFIG = {
  live: { color: "#10b981", bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)" },
  review: { color: "#f59e0b", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)" },
  building: { color: "#8a8f98", bg: "rgba(138,143,152,0.1)", border: "rgba(138,143,152,0.2)" },
};

export async function generateStaticParams() {
  return (projectsData as unknown as Project[]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = (projectsData as unknown as Project[]).find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Jasper de Shields`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = (projectsData as unknown as Project[]).find((p) => p.slug === slug);

  if (!project) notFound();

  const status = STATUS_CONFIG[project.status];

  return (
    <div style={{ background: "#08090a", minHeight: "100vh", color: "#f7f8f8" }}>
      {/* Nav strip */}
      <div
        className="sticky top-0 z-50 px-6 h-14 flex items-center"
        style={{
          background: "rgba(8,9,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-[1200px] mx-auto w-full flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[13px] transition-colors duration-200"
            style={{ color: "#62666d", textDecoration: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 7H1M1 7l5-5M1 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>
          <span style={{ color: "#28282c" }}>/</span>
          <span className="text-[13px]" style={{ color: "#8a8f98" }}>{project.name}</span>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px]"
              style={{
                background: status.bg,
                border: `1px solid ${status.border}`,
                color: status.color,
                fontWeight: 510,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: status.color }} />
              {project.statusLabel}
            </span>
          </div>

          <h1
            className="font-semibold mb-3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.04em",
              color: "#f7f8f8",
              lineHeight: 1.05,
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            {project.name}
          </h1>
          <p
            className="text-[1.125rem] mb-6"
            style={{
              color: "#8a8f98",
              letterSpacing: "-0.01em",
              lineHeight: 1.65,
            }}
          >
            {project.tagline}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {Object.entries(project.links).map(([key, url]) =>
              url ? (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-[6px] text-[13px] capitalize transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#d0d6e0",
                    fontWeight: 510,
                    textDecoration: "none",
                  }}
                >
                  {key === "appStore" ? "App Store" : key}
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1 10L10 1M10 1H4M10 1v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ) : null
            )}
          </div>
        </div>

        {/* Metrics */}
        {Object.keys(project.metrics).length > 0 && (
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 p-6 rounded-[12px]"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key}>
                <div
                  className="text-[1.25rem] font-semibold mb-0.5"
                  style={{ color: "#f7f8f8", letterSpacing: "-0.03em", fontFeatureSettings: '"cv01","ss03"' }}
                >
                  {val}
                </div>
                <div
                  className="text-[12px] capitalize"
                  style={{ color: "#62666d" }}
                >
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content sections */}
        <div className="space-y-10">
          {[
            { label: "The insight", content: project.insight },
            { label: "The problem", content: project.problem },
            { label: "What was built", content: project.whatWasBuilt },
          ].map(({ label, content }) => (
            <div key={label}>
              <div
                className="text-[11px] font-semibold uppercase mb-3"
                style={{
                  color: "#f59e0b",
                  fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </div>
              <p
                className="text-[16px] leading-relaxed"
                style={{ color: "#d0d6e0" }}
              >
                {content}
              </p>
            </div>
          ))}

          {/* Stack */}
          <div>
            <div
              className="text-[11px] font-semibold uppercase mb-3"
              style={{
                color: "#f59e0b",
                fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                letterSpacing: "0.08em",
              }}
            >
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-[6px] text-[13px]"
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
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-16 p-8 rounded-[12px]"
          style={{
            background: "rgba(245,158,11,0.04)",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          <h3
            className="text-[1.25rem] font-semibold mb-2"
            style={{
              color: "#f7f8f8",
              letterSpacing: "-0.03em",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            Interested in working together?
          </h3>
          <p className="text-[14px] mb-5" style={{ color: "#8a8f98" }}>
            Whether you want to hire me, partner, or just talk product — I&apos;m reachable.
          </p>
          <a
            href="/#work-with-me"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] text-[14px]"
            style={{
              background: "#f59e0b",
              color: "#08090a",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Work with me
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
