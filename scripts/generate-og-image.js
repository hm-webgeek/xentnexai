#!/usr/bin/env node
// Generates /public/og-default.png — branded 1200×630 Open Graph image
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoSvg = fs.readFileSync(
  path.join(__dirname, '../public/images/logos/xentnexai-logo-011.svg'),
  'utf8'
);

// Extract the embedded Orbitron woff2 font data
const fontDataMatch = logoSvg.match(/base64,([^']+)'/);
const fontBase64 = fontDataMatch ? fontDataMatch[1].trim() : '';

// Build the OG image SVG (1200×630)
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'Orbitron';
        font-weight: 100 900;
        font-style: normal;
        src: url('data:font/woff2;base64,${fontBase64}') format('woff2');
      }
    </style>
    <!-- Radial glow behind logo mark -->
    <radialGradient id="glow" cx="50%" cy="52%" r="38%">
      <stop offset="0%" stop-color="#1BA899" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#0B1426" stop-opacity="0"/>
    </radialGradient>
    <!-- Subtle grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A2740" stroke-width="0.8"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0B1426"/>

  <!-- Grid overlay -->
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.5"/>

  <!-- Glow -->
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="#1BA899"/>

  <!-- Bottom accent bar -->
  <rect x="0" y="626" width="1200" height="4" fill="#1BA899"/>

  <!-- Left accent line -->
  <rect x="80" y="60" width="2" height="510" fill="#1BA899" opacity="0.4"/>

  <!-- Right accent line -->
  <rect x="1118" y="60" width="2" height="510" fill="#1BA899" opacity="0.4"/>

  <!-- Network node decorations (top-left) -->
  <circle cx="110" cy="110" r="3" fill="#2DD4BF" opacity="0.5"/>
  <circle cx="150" cy="85" r="2" fill="#2DD4BF" opacity="0.3"/>
  <circle cx="135" cy="145" r="2" fill="#E8A020" opacity="0.4"/>
  <line x1="110" y1="110" x2="150" y2="85" stroke="#2DD4BF" stroke-width="1" opacity="0.3"/>
  <line x1="110" y1="110" x2="135" y2="145" stroke="#2DD4BF" stroke-width="1" opacity="0.3"/>

  <!-- Network node decorations (bottom-right) -->
  <circle cx="1090" cy="520" r="3" fill="#2DD4BF" opacity="0.5"/>
  <circle cx="1050" cy="545" r="2" fill="#2DD4BF" opacity="0.3"/>
  <circle cx="1065" cy="485" r="2" fill="#E8A020" opacity="0.4"/>
  <line x1="1090" y1="520" x2="1050" y2="545" stroke="#2DD4BF" stroke-width="1" opacity="0.3"/>
  <line x1="1090" y1="520" x2="1065" y2="485" stroke="#2DD4BF" stroke-width="1" opacity="0.3"/>

  <!-- ── Logo mark (network icon) scaled to ~120px tall, centred at 600,230 ── -->
  <!-- Spokes from centre -->
  <line x1="600" y1="230" x2="600" y2="153" stroke="#2DD4BF" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="600" y1="230" x2="661" y2="184" stroke="#2DD4BF" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="600" y1="230" x2="669" y2="275" stroke="#2DD4BF" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="600" y1="230" x2="539" y2="283" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="600" y1="230" x2="522" y2="207" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Outer nodes (dark fill, teal ring) -->
  <circle cx="600" cy="153" r="9" fill="#0B1426" stroke="#2DD4BF" stroke-width="2.5"/>
  <circle cx="661" cy="184" r="9" fill="#0B1426" stroke="#2DD4BF" stroke-width="2.5"/>
  <circle cx="669" cy="275" r="9" fill="#0B1426" stroke="#2DD4BF" stroke-width="2.5"/>
  <circle cx="539" cy="283" r="7" fill="#0B1426" stroke="#2DD4BF" stroke-width="2"/>
  <circle cx="522" cy="207" r="7" fill="#0B1426" stroke="#2DD4BF" stroke-width="2"/>

  <!-- Centre node (teal filled) -->
  <circle cx="600" cy="230" r="15" fill="#0B1426"/>
  <circle cx="600" cy="230" r="11" fill="#2DD4BF"/>

  <!-- ── Wordmark ── -->
  <!-- XentnexAI in Orbitron -->
  <text
    x="600" y="385"
    font-family="Orbitron, sans-serif"
    font-weight="600"
    font-size="72"
    fill="#FFFFFF"
    text-anchor="middle"
    letter-spacing="2"
  >Xentnex<tspan fill="#2DD4BF">AI</tspan></text>

  <!-- Tagline -->
  <text
    x="600" y="440"
    font-family="Orbitron, sans-serif"
    font-weight="400"
    font-size="20"
    fill="#64748B"
    text-anchor="middle"
    letter-spacing="5"
  >SUNSHINE COAST AI AGENCY</text>

  <!-- Amber divider dot -->
  <rect x="570" y="462" width="60" height="2" fill="#E8A020" opacity="0.7" rx="1"/>

  <!-- Domain / sub-tagline -->
  <text
    x="600" y="510"
    font-family="Orbitron, sans-serif"
    font-weight="300"
    font-size="16"
    fill="#1BA899"
    text-anchor="middle"
    letter-spacing="3"
  >xentnexai.com.au</text>
</svg>`;

const outputPath = path.join(__dirname, '../public/og-default.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(info => {
    console.log('OG image created:', outputPath);
    console.log('Size:', info.width, 'x', info.height);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
