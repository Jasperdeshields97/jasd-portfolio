// Pixel-accurate iPhone 15 Pro frame wrapping any content
export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "260px",
        height: "540px",
        flexShrink: 0,
      }}
    >
      {/* Outer shell */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "40px",
          background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #111 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.7), 0 0 0 8px #0f0f0f, inset 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      />
      {/* Screen bezel */}
      <div
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "33px",
          background: "#0A0E1A",
          overflow: "hidden",
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "88px",
            height: "28px",
            background: "#000",
            borderRadius: "20px",
            zIndex: 10,
          }}
        />
        {/* Screen content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            paddingTop: "50px",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </div>
      {/* Side buttons */}
      <div
        style={{
          position: "absolute",
          left: "-3px",
          top: "100px",
          width: "3px",
          height: "32px",
          background: "#1f1f1f",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-3px",
          top: "148px",
          width: "3px",
          height: "56px",
          background: "#1f1f1f",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-3px",
          top: "216px",
          width: "3px",
          height: "56px",
          background: "#1f1f1f",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-3px",
          top: "160px",
          width: "3px",
          height: "72px",
          background: "#1f1f1f",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
