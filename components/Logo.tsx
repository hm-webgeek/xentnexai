interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
}

export default function Logo({ variant = "light", height = 40 }: LogoProps) {
  const wordmarkFill = variant === "dark" ? "#FFFFFF" : "#1A2740";
  const taglineFill = variant === "dark" ? "#94A3B8" : "#64748B";
  const centralNodeFill = variant === "dark" ? "#0B1426" : "#1A2740";

  // Maintain aspect ratio: viewBox 480x80
  const width = height * (480 / 80);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 80"
      width={width}
      height={height}
      role="img"
      aria-label="XentneXAI logo"
    >
      <title>XentneXAI</title>

      {/* Icon mark — nexus node cluster */}
      <circle fill="none" stroke="#2DD4BF" strokeWidth="2.5" cx="40" cy="40" r="30" strokeDasharray="160 29" strokeDashoffset="10" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="40" y1="40" x2="40" y2="14" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="40" y1="40" x2="61" y2="22" />
      <line stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" x1="40" y1="40" x2="63" y2="53" />
      <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="40" y1="40" x2="20" y2="58" opacity="0.45" />
      <line stroke="#2DD4BF" strokeWidth="1.5" strokeLinecap="round" x1="40" y1="40" x2="11" y2="32" opacity="0.45" />
      <circle fill="#2DD4BF" cx="40" cy="13" r="4.5" />
      <circle fill="#2DD4BF" cx="62" cy="21" r="4.5" />
      <circle fill="#2DD4BF" cx="64" cy="54" r="4.5" />
      <circle fill="#1BA899" cx="19" cy="59" r="3.5" opacity="0.55" />
      <circle fill="#1BA899" cx="10" cy="31" r="3.5" opacity="0.55" />
      <circle fill={centralNodeFill} cx="40" cy="40" r="7" />
      <circle fill="#2DD4BF" cx="40" cy="40" r="4.5" />

      {/* Wordmark — Orbitron 700, both X's capitalised */}
      <text y="48" dominantBaseline="auto">
        <tspan
          x="90"
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
        fontSize="11"
        fill={taglineFill}
        letterSpacing="1"
        x="90"
        y="64"
      >
        SUNSHINE COAST AI SERVICES
      </text>
    </svg>
  );
}
