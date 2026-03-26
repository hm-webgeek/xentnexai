interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
  showIcon?: boolean;
}

export default function Logo({ variant = "light", height = 40, showIcon = true }: LogoProps) {
  if (showIcon) {
    // Header: serve the exact SVG file with font embedded — preserves designer's exact geometry
    const width = Math.round(height * (375 / 76));
    return (
      <img
        src="/images/logos/xentnexai-logo-011.svg"
        alt="XentnexAI"
        width={width}
        height={height}
        style={{ display: "block" }}
      />
    );
  }

  // Footer wordmark-only: inline SVG from no-element-003, colors inverted for dark background
  const navyFill = variant === "dark" ? "#FFFFFF" : "#1A2740";
  const taglineFill = variant === "dark" ? "#94A3B8" : "#64748B";
  const width = Math.round(height * (273 / 91));

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 273 91"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="XentnexAI"
    >
      <title>XentnexAI</title>
      <text xmlSpace="preserve">
        <tspan x="-2" y="54" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "48px", fontWeight: 700, fill: navyFill, letterSpacing: "-0.631579px" }}>XentneX</tspan><tspan style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "48px", fontWeight: 700, fill: "#2dd4bf", letterSpacing: "-0.378947px" }}>AI</tspan>
      </text>
      <text xmlSpace="preserve" x="0" y="71" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "14px", fontWeight: 700, fill: taglineFill, letterSpacing: "0.8px" }}>SUNSHINE COAST AI SERVICES</text>
    </svg>
  );
}
