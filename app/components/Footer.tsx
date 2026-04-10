"use client";

import type { AboutData } from "../types";

interface FooterProps {
  about: AboutData;
}

export default function Footer({ about }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-10 border-fade"
      style={{ background: "#08090a" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div
            className="text-[15px] font-semibold mb-1"
            style={{
              color: "#f7f8f8",
              fontFeatureSettings: '"cv01","ss03"',
              letterSpacing: "-0.02em",
            }}
          >
            jasd<span style={{ color: "#f59e0b" }}>.</span>com
          </div>
          <div className="text-[12px]" style={{ color: "#3e3e44" }}>
            Last updated {about.updatedAt} by Jarvis.
          </div>
        </div>

        <div className="flex items-center gap-6">
          {about.social.github && (
            <a
              href={about.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] transition-colors duration-200"
              style={{ color: "#62666d" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f8f8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#62666d")}
            >
              GitHub
            </a>
          )}
          {about.social.twitter && (
            <a
              href={about.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] transition-colors duration-200"
              style={{ color: "#62666d" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f8f8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#62666d")}
            >
              Twitter
            </a>
          )}
          <span className="text-[12px]" style={{ color: "#28282c" }}>
            © {year} {about.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
