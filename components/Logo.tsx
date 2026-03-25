interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
}

export default function Logo({ variant = "light", height = 40 }: LogoProps) {
  const wordmarkFill = variant === "dark" ? "#FFFFFF" : "#1A2740";
  const taglineFill = variant === "dark" ? "#94A3B8" : "#64748B";
  const centralNodeFill = variant === "dark" ? "#0B1426" : "#1A2740";
  // Ring is ink (#1A2740) on light — swap to white on dark so it's visible against navy
  const ringStroke = variant === "dark" ? "#FFFFFF" : "#1A2740";

  // viewBox 480x90 — icon centred at (45,45), wordmark starts x=95
  const width = height * (480 / 90);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 90"
      width={width}
      height={height}
      role="img"
      aria-label="XentneXAI logo"
    >
      <title>XentneXAI</title>

      {/* Icon mark — nexus node cluster, centre (45,45) r=30 */}
      {/* Outer ring: ink on light, white on dark */}
      <circle fill="none" stroke={ringStroke} strokeWidth="2.5" cx="45" cy="45" r="30" strokeDasharray="160 29" strokeDashoffset="10" />

      {/* Spokes */}
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="45" y1="45" x2="45" y2="19" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="45" y1="45" x2="65" y2="28" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="45" y1="45" x2="68" y2="58" />
      <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="45" y1="45" x2="26" y2="62" opacity="0.45" />
      <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="45" y1="45" x2="20" y2="37" opacity="0.45" />

      {/* Satellite nodes */}
      <circle fill="#2DD4BF" cx="45" cy="19" r="4.5" />
      <circle fill="#2DD4BF" cx="65" cy="28" r="4.5" />
      <circle fill="#2DD4BF" cx="68" cy="58" r="4.5" />
      <circle fill="#1BA899" cx="26" cy="62" r="3.5" opacity="0.55" />
      <circle fill="#1BA899" cx="20" cy="37" r="3.5" opacity="0.55" />

      {/* Central node — dual ring */}
      <circle fill={centralNodeFill} cx="45" cy="45" r="7" />
      <circle fill="#2DD4BF" cx="45" cy="45" r="4.5" />

      {/* Wordmark — Orbitron 700, both X's capitalised */}
      <text y="51" dominantBaseline="auto">
        <tspan
          x="95"
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
        fontWeight="400"
        fontSize="14"
        fill={taglineFill}
        letterSpacing="1.5"
        x="95"
        y="67"
      >
        SUNSHINE COAST AI SERVICES
      </text>
    </svg>
  );
}
