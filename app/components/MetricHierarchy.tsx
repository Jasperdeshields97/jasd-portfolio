"use client";

const PROJECTS = [
  {
    name: "North",
    northStar: "Day-30 retention rate",
    northStarWhy: "A user who's still tracking their streak at 30 days has built a real habit. That's the behavior that drives LTV — not initial downloads or even week-1 opens.",
    leading: [
      { metric: "Day-7 check-in rate", why: "Predicts D30 with ~70% accuracy. Users who check in 5+ of their first 7 days almost always hit 30." },
      { metric: "Urge-button taps / week", why: "Engagement signal. Active urge logging = user is relying on the app, not just aware of it." },
      { metric: "Paywall conversion on first session", why: "The onboarding creates urgency. If they don't convert in session 1, probability drops sharply." },
    ],
    lagging: ["MRR", "Churn rate", "LTV by acquisition channel"],
    instrumented: "12 funnel events defined and spec'd before Day 1 of dev. onboarding_started, onboarding_completed, paywall_viewed, paywall_converted, day7_checkin, urge_logged, streak_milestone_reached.",
    color: "#f59e0b",
  },
  {
    name: "AgentAI Tools",
    northStar: "Affiliate click-through rate per page visit",
    northStarWhy: "MRR comes from affiliate conversions. CTR per visit captures both traffic quality and page-level persuasion. It's the only metric that directly predicts revenue — not vanity traffic.",
    leading: [
      { metric: "Organic search rank for target keywords", why: "Search rank drives the traffic that drives the CTR that drives revenue. Leading by 3-6 months." },
      { metric: "Time on page > 90 seconds", why: "Users who spend 90+ seconds are reading, not bouncing. They're 4x more likely to click affiliate links." },
      { metric: "Social post engagement rate", why: "High engagement = algorithm distribution = organic reach without paid spend." },
    ],
    lagging: ["Monthly affiliate revenue", "Gumroad sales", "Total organic sessions"],
    instrumented: "Posthog events on all affiliate links, scroll depth tracking on content pages, UTM attribution on social posts.",
    color: "#10b981",
  },
];

export default function MetricHierarchy() {
  return (
    <section id="metrics" className="py-24 px-6 border-fade">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-14">
          <div className="text-[11px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#f59e0b", fontFamily: "ui-monospace,monospace" }}>
            Metric Thinking
          </div>
          <h2 style={{ color: "#f7f8f8", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.04em", marginBottom: "10px", fontFeatureSettings: '"cv01","ss03"' }}>
            How I think in metrics
          </h2>
          <p style={{ color: "#8a8f98", fontSize: "1rem", maxWidth: "540px", lineHeight: "1.65" }}>
            For each product: the North Star metric, the leading indicators that predict it, and what was instrumented before launch. Metrics-informed — not metrics-driven.
          </p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((p) => (
            <div
              key={p.name}
              className="rounded-[14px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Header */}
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: `radial-gradient(ellipse at 0% 50%, ${p.color}10 0%, rgba(255,255,255,0.02) 60%)`, borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                <span style={{ color: "#f7f8f8", fontSize: "15px", fontWeight: 700, letterSpacing: "-0.02em", fontFeatureSettings: '"cv01","ss03"' }}>{p.name}</span>
              </div>

              <div className="p-6 grid md:grid-cols-3 gap-6">
                {/* North Star */}
                <div className="md:col-span-1">
                  <div className="text-[10px] font-semibold uppercase mb-2"
                    style={{ color: p.color, fontFamily: "ui-monospace,monospace", letterSpacing: "0.08em" }}>
                    ★ North Star
                  </div>
                  <div style={{ color: "#f7f8f8", fontSize: "14px", fontWeight: 700, marginBottom: "8px", letterSpacing: "-0.01em" }}>
                    {p.northStar}
                  </div>
                  <p style={{ color: "#8a8f98", fontSize: "12px", lineHeight: "1.65" }}>{p.northStarWhy}</p>
                </div>

                {/* Leading */}
                <div className="md:col-span-1">
                  <div className="text-[10px] font-semibold uppercase mb-3"
                    style={{ color: "#62666d", fontFamily: "ui-monospace,monospace", letterSpacing: "0.08em" }}>
                    Leading indicators
                  </div>
                  <div className="space-y-3">
                    {p.leading.map((l) => (
                      <div key={l.metric} className="p-3 rounded-[8px]"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ color: "#d0d6e0", fontSize: "12px", fontWeight: 600, marginBottom: "3px" }}>{l.metric}</div>
                        <div style={{ color: "#62666d", fontSize: "11px", lineHeight: "1.55" }}>{l.why}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lagging + Instrumentation */}
                <div className="md:col-span-1 space-y-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase mb-2"
                      style={{ color: "#62666d", fontFamily: "ui-monospace,monospace", letterSpacing: "0.08em" }}>
                      Lagging indicators
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.lagging.map((l) => (
                        <span key={l} className="px-2.5 py-1 rounded-full text-[11px]"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "#8a8f98" }}>
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-[8px]"
                    style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.12)" }}>
                    <div className="text-[10px] font-semibold uppercase mb-2"
                      style={{ color: "#f59e0b", fontFamily: "ui-monospace,monospace", letterSpacing: "0.08em" }}>
                      Pre-launch instrumentation
                    </div>
                    <p style={{ color: "#8a8f98", fontSize: "11px", lineHeight: "1.6" }}>{p.instrumented}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
