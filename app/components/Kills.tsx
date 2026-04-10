"use client";

const KILLS = [
  {
    what: "Social features in North",
    why: "Accountability partners, friend streaks, public leaderboards — all cut. Every competitor does them. North's positioning is privacy-first. Adding social features would require a backend, a data model for relationships, and would undermine the core differentiator. The kill strengthened the product.",
    impact: "Eliminated backend entirely → zero server attack surface → made the privacy claim 100% credible.",
    project: "North",
  },
  {
    what: "Push notifications",
    why: "Research showed that streak-based apps with aggressive notifications train users to open for the notification, not because they care about their streak. The habit loop breaks. Removed notifications entirely — the app should pull users in because the streak matters, not because a badge does.",
    impact: "Lower DAU, higher retention quality. Users who open daily are actually motivated, not just nudged.",
    project: "North",
  },
  {
    what: "Ayrshare API for Twitter and Reddit posting",
    why: "Ayrshare costs $120+/month and has rate limits that cap organic reach. A persistent Playwright profile with real browser cookies has no monthly cost, no rate limits, and is behaviorally indistinguishable from a human. The API abstraction was adding cost and a single point of failure.",
    impact: "$0/month infrastructure cost. Full posting control. No vendor dependency.",
    project: "AgentAI Tools",
  },
  {
    what: "Multi-page app for AgentAI Tools",
    why: "Initial plan was a full Next.js app with auth, user dashboards, and saved tools. Killed it. The core value was discoverability — SEO-indexed static pages ranking for 'AI tools for real estate agents.' Auth walls kill SEO. Stripped to 33 static pages with one conversion event.",
    impact: "Shipped in days, not weeks. Cleaner SEO surface. One clear path to conversion.",
    project: "AgentAI Tools",
  },
  {
    what: "Custom auth in Apex",
    why: "Apex's demo MVP doesn't need its own auth system. That's weeks of work before a single stakeholder has seen the product. Used Supabase Auth as a commodity layer. The problem Apex solves is call intelligence, not identity management.",
    impact: "Weeks of engineering time redirected to the core product differentiator.",
    project: "Apex",
  },
];

export default function Kills() {
  return (
    <section id="kills" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <div className="text-[11px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace,monospace" }}>
            Kill List
          </div>
          <h2 style={{ color: "#f7f8f8", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", marginBottom: "10px", fontFeatureSettings: '"cv01","ss03"' }}>
            What I chose not to build
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "520px", lineHeight: "1.65" }}>
            Every kill is a product decision. Shipping the wrong thing is slower than not shipping it. Here&apos;s what got cut — and why the product is better for it.
          </p>
        </div>

        <div className="space-y-4">
          {KILLS.map((kill, i) => (
            <div
              key={i}
              className="p-6 rounded-[14px]"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <div className="flex items-center gap-2">
                  {/* Kill badge */}
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px]"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", color: "#ef4444" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Killed
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-[11px]"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#62666d" }}
                  >
                    {kill.project}
                  </span>
                </div>
                <h3
                  style={{ color: "#f7f8f8", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em", fontFeatureSettings: '"cv01","ss03"' }}
                >
                  {kill.what}
                </h3>
              </div>

              <p style={{ color: "#8a8f98", fontSize: "14px", lineHeight: "1.7", marginBottom: "14px" }}>
                {kill.why}
              </p>

              <div
                className="flex items-start gap-2 text-[13px] px-3 py-2 rounded-[8px]"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.12)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: "1px" }}>
                  <path d="M2 7l3.5 3.5L12 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: "#8a8f98" }}>
                  <span style={{ color: "#10b981", fontWeight: 600 }}>Result: </span>
                  {kill.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
