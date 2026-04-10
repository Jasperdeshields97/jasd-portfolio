export function SMSScreen() {
  const messages = [
    { from: "user", text: "Just hit 315 on squat. Felt slow off the bottom." },
    { from: "bot", text: "Good lift. That's a 5lb PR from last week. Slow off the bottom at 315 usually means weak quads or insufficient bar speed cue. What did warm-ups feel like?" },
    { from: "user", text: "315 felt heavy. 295 moved well." },
    { from: "bot", text: "Classic RPE 9 at 315. Your true 1RM is probably 325-330 right now. For next session: work up to 295x3x3, then one heavy single at 310. Don't test 315 again until week 4." },
    { from: "user", text: "What about deadlift tomorrow?" },
    { from: "bot", text: "Keep it moderate. 405x4x3. You're 3 weeks out from your last deload — CNS is starting to accumulate. Good time to back off DL intensity and push volume on accessories." },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px 14px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "#f59e0b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "12px",
          }}
        >
          💪
        </div>
        <div>
          <div style={{ color: "#f7f8f8", fontSize: "11px", fontWeight: 700 }}>Performance Buddy</div>
          <div style={{ color: "#10b981", fontSize: "9px" }}>● Active</div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: "10px 10px", display: "flex", flexDirection: "column", gap: "6px", overflowY: "hidden" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                padding: "6px 10px",
                borderRadius: msg.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                background: msg.from === "user" ? "#f59e0b" : "#1a1a1a",
                border: msg.from === "bot" ? "1px solid rgba(255,255,255,0.06)" : "none",
                color: msg.from === "user" ? "#0a0a0a" : "#d0d6e0",
                fontSize: "9.5px",
                lineHeight: "1.5",
                fontWeight: msg.from === "user" ? 500 : 400,
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          padding: "8px 10px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          gap: "6px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "18px",
            padding: "6px 12px",
            color: "#4b5563",
            fontSize: "10px",
          }}
        >
          Text your lifts...
        </div>
        <div
          style={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "#f59e0b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
          }}
        >
          ↑
        </div>
      </div>
    </div>
  );
}
