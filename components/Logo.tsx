interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
  showIcon?: boolean;
}

export default function Logo({ variant = "light", height = 40, showIcon = true }: LogoProps) {
  const wordmarkFill = variant === "dark" ? "#FFFFFF" : "#1A2740";
  const taglineFill = variant === "dark" ? "#94A3B8" : "#64748B";
  const centralNodeFill = variant === "dark" ? "#0B1426" : "#1A2740";
  const nodeFill = variant === "dark" ? "#FFFFFF" : "#1A2740";

  // Wordmark-only: viewBox 320x98, text starts x=10
  // With icon: viewBox 480x98, text starts x=95
  const viewBoxWidth = showIcon ? 480 : 320;
  const textX = showIcon ? 95 : 10;
  const width = height * (viewBoxWidth / 98);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} 98`}
      width={width}
      height={height}
      role="img"
      aria-label="XentnexAI logo"
    >
      <title>XentnexAI</title>

      {/* Icon mark — nexus node cluster, centre (45,45), logo-011: no outer ring, nodes are dark/inverted */}
      {showIcon && (
        <>
          <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="45" y1="45" x2="45" y2="19" />
          <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="45" y1="45" x2="65" y2="28" />
          <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="45" y1="45" x2="68" y2="58" />
          <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="45" y1="45" x2="26" y2="62" />
          <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="45" y1="45" x2="20" y2="37" />
          <circle fill={nodeFill} cx="45" cy="19" r="4.5" />
          <circle fill={nodeFill} cx="65" cy="28" r="4.5" />
          <circle fill={nodeFill} cx="68" cy="58" r="4.5" />
          <circle fill={nodeFill} cx="26" cy="62" r="3.5" />
          <circle fill={nodeFill} cx="20" cy="37" r="3.5" />
          <circle fill={centralNodeFill} cx="45" cy="45" r="7" />
          <circle fill="#2DD4BF" cx="45" cy="45" r="4.5" />
        </>
      )}

      {/* Wordmark — Orbitron 700, both X's capitalised */}
      <text y="51" dominantBaseline="auto">
        <tspan
          x={textX}
          fontFamily="var(--font-orbitron, 'Orbitron', sans-serif)"
          fontWeight="700"
          fontSize="34"
          fill={wordmarkFill}
          letterSpacing="-0.5"
        >XentneX</tspan><tspan
          fontFamily="var(--font-orbitron, 'Orbitron', sans-serif)"
          fontWeight="700"
          fontSize="34"
          fill="#2DD4BF"
          letterSpacing="-0.3"
        >AI</tspan>
      </text>

      {/* Tagline */}
      <text
        fontFamily="var(--font-orbitron, 'Orbitron', sans-serif)"
        fontWeight="700"
        fontSize="14"
        fill={taglineFill}
        letterSpacing="1.5"
        x={textX}
        y="75"
      >
        SUNSHINE COAST AI SERVICES
      </text>
    </svg>
  );
}
