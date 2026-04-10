// Pixel-accurate recreation of North's HomeScreen from source
export function NorthHomeScreen() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0A0E1A",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <span style={{ color: "#F9FAFB", fontSize: "11px", fontWeight: 700, letterSpacing: "4px" }}>NORTH</span>
        <span style={{ color: "#F59E0B", fontSize: "16px" }}>★</span>
      </div>

      {/* Streak ring */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", gap: "8px" }}>
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "70px",
            border: "2px solid #F59E0B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(245,158,11,0.06)",
            boxShadow: "0 0 30px rgba(245,158,11,0.15)",
          }}
        >
          <span style={{ color: "#F9FAFB", fontSize: "36px", fontWeight: 700, lineHeight: 1 }}>47</span>
          <span style={{ color: "#4B5563", fontSize: "9px", letterSpacing: "2px", marginTop: "2px" }}>DAYS CLEAN</span>
        </div>
        <span style={{ color: "#9CA3AF", fontSize: "10px" }}>43 days to 90-day milestone</span>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "1px solid #1F2937",
          borderBottom: "1px solid #1F2937",
          paddingTop: "12px",
          paddingBottom: "12px",
          marginBottom: "16px",
          gap: "0",
        }}
      >
        {[
          { val: "47", label: "Best" },
          { val: "1", label: "Resets" },
          { val: "72", label: "Score" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            {i > 0 && <div style={{ width: "1px", height: "24px", background: "#1F2937", marginRight: "0" }} />}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
              <span style={{ color: "#F59E0B", fontSize: "18px", fontWeight: 700 }}>{s.val}</span>
              <span style={{ color: "#4B5563", fontSize: "9px", letterSpacing: "1px" }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            background: "#111827",
            borderRadius: "10px",
            border: "1px solid #1F2937",
          }}
        >
          <span style={{ fontSize: "16px" }}>📊</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#F9FAFB", fontSize: "12px", fontWeight: 600 }}>Daily check-in</div>
            <div style={{ color: "#4B5563", fontSize: "10px", marginTop: "1px" }}>Log mood, energy & focus</div>
          </div>
          <span style={{ color: "#F59E0B", fontSize: "12px" }}>→</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            background: "#111827",
            borderRadius: "10px",
            border: "1px solid #92400E",
          }}
        >
          <span style={{ fontSize: "16px" }}>⚡</span>
          <div style={{ flex: 1 }}>
            <div style={{ color: "#F9FAFB", fontSize: "12px", fontWeight: 600 }}>Feeling an urge?</div>
            <div style={{ color: "#4B5563", fontSize: "10px", marginTop: "1px" }}>Tap to start surfing it</div>
          </div>
          <span style={{ color: "#F59E0B", fontSize: "12px" }}>→</span>
        </div>
      </div>
    </div>
  );
}

export function NorthScoreScreen() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0A0E1A",
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        gap: "16px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#4B5563", fontSize: "9px", letterSpacing: "3px", marginBottom: "12px" }}>YOUR REBOOT SCORE</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "4px" }}>
          <span style={{ color: "#F97316", fontSize: "72px", fontWeight: 700, lineHeight: 1 }}>72</span>
          <span style={{ color: "#4B5563", fontSize: "20px", fontWeight: 600, marginBottom: "8px" }}>/100</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ color: "#F97316", fontSize: "14px", fontWeight: 700, textAlign: "center" }}>High Dependency</div>
        <p style={{ color: "#9CA3AF", fontSize: "11px", lineHeight: "1.6", textAlign: "center", margin: 0 }}>
          You&apos;ve developed real dependency patterns. Your dopamine system is struggling — but that changes today.
        </p>
        <div style={{ height: "1px", background: "#1F2937" }} />
        <p style={{ color: "#4B5563", fontSize: "10px", lineHeight: "1.6", textAlign: "center", margin: 0 }}>
          North has helped people with scores higher than yours achieve 90+ day streaks. Let&apos;s start.
        </p>
      </div>

      <div
        style={{
          background: "#F59E0B",
          borderRadius: "10px",
          padding: "12px",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#0A0E1A", fontSize: "13px", fontWeight: 700 }}>I&apos;m ready to change</span>
      </div>
    </div>
  );
}
