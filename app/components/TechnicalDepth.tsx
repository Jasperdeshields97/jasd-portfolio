"use client";

const DECISIONS = [
  {
    decision: "North has no backend. Zero servers.",
    reasoning:
      "Every competitor stores your most sensitive behavioral data in a database. Quittr proved what happens when that database gets breached. The technically correct answer — not just the marketable one — was local-only storage with MMKV. No auth system to attack, no API keys to rotate, no GDPR surface area. The privacy story is the architecture.",
    tradeoff: "Can't do push notifications, social features, or cross-device sync. Made that call consciously.",
    tags: ["Architecture", "Security", "iOS"],
  },
  {
    decision: "Social automation via Playwright, not APIs.",
    reasoning:
      "Every social API either costs $100+/month, has rate limits that kill organic growth, or gets deprecated. Playwright against a persisted Chrome profile with real cookies costs $0 and behaves like a human. Built persistent Chromium contexts, extracted Chrome cookies for Twitter, built Reddit with cookie auth. Same results, no vendor dependency.",
    tradeoff: "Brittle to DOM changes. Solved with robust selectors and session monitoring.",
    tags: ["Infrastructure", "Automation", "Cost optimization"],
  },
  {
    decision: "Agent infrastructure over manual workflows.",
    reasoning:
      "I run 5 projects in parallel. The only way that works is if the operational layer — social posting, morning briefs, content generation, portfolio updates — runs without me in the loop. Built on n8n (1,396 nodes) with Claude as the reasoning layer. Every workflow is designed with my own removal as the exit condition.",
    tradeoff: "Higher upfront build cost. Pays back on every subsequent project I add.",
    tags: ["Systems design", "AI", "n8n"],
  },
  {
    decision: "RevenueCat over Stripe for North's paywall.",
    reasoning:
      "Stripe handles payments. RevenueCat handles subscriptions — receipt validation, entitlement management, cancellation flows, retention offers, and cross-platform state. For a solo iOS app, building that on raw Stripe is months of work and ongoing maintenance. RevenueCat abstracts it for 1% of revenue. Easy math.",
    tradeoff: "Platform fee. Accepted — it buys time to focus on acquisition instead of infra.",
    tags: ["Monetization", "iOS", "Build vs buy"],
  },
];

const STACK_DECISIONS = [
  { choice: "MMKV", over: "AsyncStorage / SQLite", reason: "10x faster reads, synchronous API, no async overhead for streak state that's read on every render" },
  { choice: "EAS Build", over: "Local Xcode builds", reason: "Reproducible CI builds, no machine dependency, push to TestFlight without touching a Mac" },
  { choice: "Expo Router", over: "React Navigation", reason: "File-based routing maps directly to screens, faster mental model for 20-screen app" },
  { choice: "Vercel", over: "AWS / Railway", reason: "Zero config, preview deploys on every PR, instant rollback. Ops overhead is zero." },
  { choice: "Claude API", over: "OpenAI", reason: "200k context window, better instruction-following for long-running agent sessions, tool use is more reliable" },
  { choice: "Supabase", over: "Firebase", reason: "Postgres means real SQL, real joins, real migrations. Firebase's NoSQL becomes a liability at scale." },
];

export default function TechnicalDepth() {
  return (
    <section id="technical-depth" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div
            className="text-[12px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace, SF Mono, Menlo, monospace" }}
          >
            Technical Decisions
          </div>
          <h2
            className="text-[2rem] font-semibold mb-3"
            style={{
              color: "#f7f8f8",
              letterSpacing: "-0.704px",
              fontFeatureSettings: '"cv01","ss03"',
            }}
          >
            Why, not just what
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "520px", lineHeight: "1.65" }}>
            The decisions that shaped each product. Every choice has a reason and a trade-off that was made consciously.
          </p>
        </div>

        {/* Decision cards */}
        <div className="space-y-4 mb-14">
          {DECISIONS.map((d, i) => (
            <div
              key={i}
              className="p-6 rounded-[12px]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <h3
                  className="text-[1rem] font-semibold"
                  style={{
                    color: "#f7f8f8",
                    letterSpacing: "-0.02em",
                    fontFeatureSettings: '"cv01","ss03"',
                    maxWidth: "600px",
                  }}
                >
                  {d.decision}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-[4px] text-[11px]"
                      style={{
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.15)",
                        color: "#f59e0b",
                        fontWeight: 510,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p
                className="text-[14px] leading-relaxed mb-4"
                style={{ color: "#8a8f98" }}
              >
                {d.reasoning}
              </p>

              <div
                className="flex items-start gap-2 text-[13px]"
                style={{ color: "#62666d" }}
              >
                <span
                  className="flex-shrink-0 mt-0.5 text-[10px] font-semibold uppercase"
                  style={{
                    fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                    letterSpacing: "0.06em",
                    color: "#3e3e44",
                  }}
                >
                  Trade-off
                </span>
                <span>{d.tradeoff}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Build vs buy table */}
        <div
          className="p-6 rounded-[12px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="text-[12px] font-semibold uppercase mb-5"
            style={{
              color: "#62666d",
              fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
              letterSpacing: "0.08em",
            }}
          >
            Stack choices — and what was rejected
          </div>

          <div className="space-y-3">
            {STACK_DECISIONS.map((s, i) => (
              <div
                key={i}
                className="grid gap-3 items-start py-3"
                style={{
                  gridTemplateColumns: "120px 100px 1fr",
                  borderBottom: i < STACK_DECISIONS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}
              >
                <span
                  className="text-[13px] font-semibold"
                  style={{
                    color: "#f7f8f8",
                    fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
                  }}
                >
                  {s.choice}
                </span>
                <span
                  className="text-[12px]"
                  style={{ color: "#3e3e44" }}
                >
                  not {s.over}
                </span>
                <span className="text-[13px]" style={{ color: "#62666d" }}>
                  {s.reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
