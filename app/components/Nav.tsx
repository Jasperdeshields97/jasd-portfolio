"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,9,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="font-semibold text-[15px] tracking-[-0.02em]"
          style={{ color: "#f7f8f8", fontFeatureSettings: '"cv01","ss03"' }}
        >
          jasd
          <span style={{ color: "#f59e0b" }}>.</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {["Work", "How I Build", "Timeline"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[13px] transition-colors duration-200"
              style={{
                color: "#8a8f98",
                fontWeight: 510,
                fontFeatureSettings: '"cv01","ss03"',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f7f8f8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8f98")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#work-with-me"
          className="text-[13px] px-4 py-1.5 rounded-[6px] transition-all duration-200"
          style={{
            background: "rgba(245,158,11,0.12)",
            color: "#f59e0b",
            border: "1px solid rgba(245,158,11,0.25)",
            fontWeight: 510,
            fontFeatureSettings: '"cv01","ss03"',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(245,158,11,0.18)";
            e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(245,158,11,0.12)";
            e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)";
          }}
        >
          Work with me
        </a>
      </div>
    </nav>
  );
}
