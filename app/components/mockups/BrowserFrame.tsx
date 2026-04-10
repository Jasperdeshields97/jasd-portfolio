import Image from "next/image";

export function BrowserFrame({
  src,
  alt,
  url = "agent-ai-tools.vercel.app",
}: {
  src: string;
  alt: string;
  url?: string;
}) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        background: "#1a1a1a",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.6)",
        width: "100%",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: "#242424",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: "5px" }}>
          {["#FF5F57", "#FFBD2E", "#28CA42"].map((c) => (
            <div key={c} style={{ width: "10px", height: "10px", borderRadius: "50%", background: c }} />
          ))}
        </div>
        {/* URL bar */}
        <div
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.06)",
            borderRadius: "5px",
            padding: "3px 10px",
            fontSize: "11px",
            color: "#8a8f98",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden" }}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }} />
      </div>
    </div>
  );
}
