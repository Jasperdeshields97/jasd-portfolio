export function ApexScreen() {
  const calls = [
    { name: "Sarah M.", company: "TechCorp", duration: "24m", score: 87, signal: "Buying signal", color: "#10b981" },
    { name: "Marcus L.", company: "StartupXYZ", duration: "18m", score: 61, signal: "Price objection", color: "#f59e0b" },
    { name: "Priya K.", company: "Acme Inc", duration: "31m", score: 92, signal: "Ready to close", color: "#10b981" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0a12",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        padding: "0",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar */}
      <div style={{ padding: "12px 14px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ color: "#f7f8f8", fontSize: "12px", fontWeight: 700, letterSpacing: "-0.02em" }}>Apex</div>
        <div style={{ color: "#62666d", fontSize: "9px", marginTop: "1px" }}>Call Intelligence</div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 14px", gap: "16px" }}>
        {[{ val: "94%", label: "Win rate ↑" }, { val: "31", label: "Calls today" }, { val: "4.2h", label: "Analyzed" }].map((s) => (
          <div key={s.label}>
            <div style={{ color: "#f7f8f8", fontSize: "13px", fontWeight: 700 }}>{s.val}</div>
            <div style={{ color: "#62666d", fontSize: "9px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Call list */}
      <div style={{ flex: 1, overflowY: "hidden", padding: "8px 0" }}>
        <div style={{ padding: "0 14px 6px", color: "#62666d", fontSize: "9px", letterSpacing: "0.06em", textTransform: "uppercase" }}>Recent Calls</div>
        {calls.map((call, i) => (
          <div
            key={i}
            style={{
              padding: "8px 14px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              borderBottom: "1px solid rgba(255,255,255,0.03)",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8a8f98",
                fontSize: "10px",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {call.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#f7f8f8", fontSize: "11px", fontWeight: 600 }}>{call.name}</span>
                <span style={{ color: "#62666d", fontSize: "9px" }}>{call.duration}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2px" }}>
                <span
                  style={{
                    color: call.color,
                    fontSize: "9px",
                    background: `${call.color}15`,
                    padding: "1px 5px",
                    borderRadius: "3px",
                  }}
                >
                  {call.signal}
                </span>
                <span style={{ color: call.color, fontSize: "10px", fontWeight: 700 }}>{call.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active call banner */}
      <div
        style={{
          margin: "8px 10px",
          padding: "8px 10px",
          background: "rgba(112,113,255,0.1)",
          border: "1px solid rgba(112,113,255,0.2)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7170ff", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ color: "#f7f8f8", fontSize: "10px", fontWeight: 600 }}>Live analysis active</div>
          <div style={{ color: "#62666d", fontSize: "9px" }}>Detecting objection patterns...</div>
        </div>
      </div>
    </div>
  );
}
