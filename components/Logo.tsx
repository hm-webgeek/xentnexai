interface LogoProps {
  variant?: "light" | "dark";
  height?: number;
  showIcon?: boolean;
}

export default function Logo({ variant = "light", height = 40, showIcon = true }: LogoProps) {
  // Colors that invert between light header and dark footer
  const navyFill   = variant === "dark" ? "#FFFFFF"  : "#1A2740";
  const taglineFill = variant === "dark" ? "#94A3B8" : "#64748B";
  const centralBg  = variant === "dark" ? "#0B1426"  : "#1A2740";

  if (showIcon) {
    // xentnexai-logo-011.svg — viewBox 375×76
    const width = Math.round(height * (375 / 76));
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 375 76"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round" } as React.CSSProperties}
        role="img"
        aria-label="XentnexAI"
      >
        <title>XentnexAI</title>
        <g transform="matrix(0.969175,0,0,0.968864,-12.5519,-7.02426)">
          <rect x="12.951" y="7.25" width="386.927" height="78.442" style={{ fill: "none" }} />

          {/* Icon mark — exact 011 geometry */}
          <g transform="matrix(1.52748,0,0,1.52797,-12.1645,-14.6475)">
            <path d="M45,45L45,19"    style={{ fill: "none", fillRule: "nonzero", stroke: "rgb(45,212,191)", strokeWidth: "2px" }} />
            <path d="M45,45L65,28"    style={{ fill: "none", fillRule: "nonzero", stroke: "rgb(45,212,191)", strokeWidth: "2px" }} />
            <path d="M45,45L68,58"    style={{ fill: "none", fillRule: "nonzero", stroke: "rgb(45,212,191)", strokeWidth: "2px" }} />
            <path d="M45,45L26,62"    style={{ fill: "none", fillRule: "nonzero", stroke: "rgb(45,212,191)", strokeWidth: "1.5px" }} />
            <path d="M45,45L20,37"    style={{ fill: "none", fillRule: "nonzero", stroke: "rgb(45,212,191)", strokeWidth: "1.5px" }} />
            <path d="M49.5,19C49.5,21.485 47.485,23.5 45,23.5C42.515,23.5 40.5,21.485 40.5,19C40.5,16.515 42.515,14.5 45,14.5C47.485,14.5 49.5,16.515 49.5,19Z"     style={{ fill: navyFill, fillRule: "nonzero" }} />
            <path d="M69.5,28C69.5,30.485 67.485,32.5 65,32.5C62.515,32.5 60.5,30.485 60.5,28C60.5,25.515 62.515,23.5 65,23.5C67.485,23.5 69.5,25.515 69.5,28Z"     style={{ fill: navyFill, fillRule: "nonzero" }} />
            <path d="M72.5,58C72.5,60.485 70.485,62.5 68,62.5C65.515,62.5 63.5,60.485 63.5,58C63.5,55.515 65.515,53.5 68,53.5C70.485,53.5 72.5,55.515 72.5,58Z"     style={{ fill: navyFill, fillRule: "nonzero" }} />
            <path d="M29.5,62C29.5,63.933 27.933,65.5 26,65.5C24.067,65.5 22.5,63.933 22.5,62C22.5,60.067 24.067,58.5 26,58.5C27.933,58.5 29.5,60.067 29.5,62Z"     style={{ fill: navyFill, fillRule: "nonzero" }} />
            <path d="M23.5,37C23.5,38.933 21.933,40.5 20,40.5C18.067,40.5 16.5,38.933 16.5,37C16.5,35.067 18.067,33.5 20,33.5C21.933,33.5 23.5,35.067 23.5,37Z"     style={{ fill: navyFill, fillRule: "nonzero" }} />
            <path d="M52,45C52,48.866 48.866,52 45,52C41.134,52 38,48.866 38,45C38,41.134 41.134,38 45,38C48.866,38 52,41.134 52,45Z"                               style={{ fill: centralBg,  fillRule: "nonzero" }} />
            <path d="M49.5,45C49.5,47.485 47.485,49.5 45,49.5C42.515,49.5 40.5,47.485 40.5,45C40.5,42.515 42.515,40.5 45,40.5C47.485,40.5 49.5,42.512 49.5,45Z"    style={{ fill: "rgb(45,212,191)", fillRule: "nonzero" }} />
          </g>

          {/* Wordmark */}
          <g transform="matrix(1.03181,0,0,1.03214,111.219,55.7604)">
            <text x="0" y="0" style={{ fontFamily: "var(--font-orbitron,'Orbitron-Medium','Orbitron',sans-serif)", fontWeight: 500, fontSize: "48px", fill: navyFill }}>
              X<tspan x="38.337 71.25 104.355 124.451 157.028 189.941" y="0 0 0 0 0 0">entneX</tspan>
            </text>
            <text x="228.614" y="0" style={{ fontFamily: "var(--font-orbitron,'Orbitron-Medium','Orbitron',sans-serif)", fontWeight: 500, fontSize: "48px", fill: "rgb(45,212,191)" }}>
              A<tspan x="268.56" y="0">I</tspan>
            </text>
          </g>

          {/* Tagline */}
          <g transform="matrix(1.03181,0,0,1.03214,113.282,73.3067)">
            <g transform="matrix(1.08,0,0,1,0,0)">
              <text x="0" y="0" style={{ fontFamily: "var(--font-orbitron,'Orbitron-Bold','Orbitron',sans-serif)", fontWeight: 700, fontSize: "14px", fill: taglineFill }}>
                S<tspan x="11.676 23.38 35.14 46.816 58.842 61.95 73.71 84.546 88.942 100.562 112.266 124.082 135.758 146.496 150.892 162.708 165.816 170.212 181.888 192.724 204.01 218.164 221.272 232.892 243.728" y="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0">UNSHINE COAST AI SERVICES</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    );
  }

  // xentnexai-logo-no-element-003.svg — viewBox 273×91
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
        <tspan x="-2" y="54" style={{ fontFamily: "var(--font-orbitron,'Orbitron',sans-serif)", fontSize: "48px", fontWeight: 700, fill: navyFill, letterSpacing: "-0.631579px" }}>XentneX</tspan><tspan style={{ fontFamily: "var(--font-orbitron,'Orbitron',sans-serif)", fontSize: "48px", fontWeight: 700, fill: "#2dd4bf", letterSpacing: "-0.378947px" }}>AI</tspan>
      </text>
      <text xmlSpace="preserve" x="0" y="71" style={{ fontFamily: "var(--font-orbitron,'Orbitron',sans-serif)", fontSize: "14px", fontWeight: 700, fill: taglineFill, letterSpacing: "0.8px" }}>SUNSHINE COAST AI SERVICES</text>
    </svg>
  );
}
