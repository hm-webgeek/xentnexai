# XentnexAI — Project Brief

## Business Overview

**XentnexAI** is an AI services agency based on the Sunshine Coast, Queensland, Australia.

The business helps local SMEs adopt AI-powered tools that automate lead generation, handle inbound calls, and improve visibility in AI-driven search. The founder is based on the Sunshine Coast and the primary focus is **local SEO** targeting Sunshine Coast and broader QLD businesses, with secondary reach to Australian SMEs nationally.

## Target Audience

- **Primary:** Sunshine Coast small-to-medium business owners
- **Industries:** Trades, health & wellness, real estate, hospitality, professional services, finance, education
- **Profile:** Non-technical owners who understand they need to grow but don't want to manage complex tech themselves
- **Secondary:** Queensland and broader Australian SMEs

## Three Core Services

### 1. AI Lead Generation System
Automated lead capture, qualification, and nurture sequences. AI-powered forms, chatbots, email/SMS sequences, and CRM integrations that work 24/7 to fill the sales pipeline. Target industries: real estate, trades, health, finance, hospitality, professional services.

### 2. AI Voice Agents
24/7 AI-powered call answering, lead qualification, and appointment booking. Sounds natural, checks calendar availability in real-time, books directly. Never misses a call. Target industries: trades, medical, real estate, law, dental, HVAC, home services.

### 3. GEO Audit Reports
Audits how a business appears in ChatGPT, Google Gemini, Perplexity AI, and other AI search tools. Delivers a prioritised action plan to improve AI search visibility (Generative Engine Optimisation). A new, differentiated service ahead of market awareness.

## Brand Voice & Tone

- **Approachable and trustworthy** — not cold or corporate
- **Local and personal** — feels like a Sunshine Coast business, not a faceless tech company
- **Clean and modern** — light, fresh, confident
- **Plain language** — non-technical audience; avoid jargon
- Active voice. Short sentences. Benefits over features.

## Design Tokens (for copy context)

- Primary teal: `#1BA899` / `#2DD4BF`
- Dark navy: `#1A2740`
- Amber accent: `#E8A020` / `#C47A10`
- Fonts: Plus Jakarta Sans (display), Inter (body)
- Australian English (`en-AU`) — use AU spelling throughout

## Site Structure

| Page | Path | Purpose |
|------|------|---------|
| Homepage | `/` | Brand intro, services overview, local SEO signals, testimonials, CTA |
| AI Lead Generation | `/ai-lead-generation` | Service page — lead gen system |
| AI Voice Agents | `/ai-voice-agents` | Service page — call answering & booking |
| GEO Audit Reports | `/geo-audit-reports` | Service page — AI search visibility audit |
| AI Website Building | `/ai-website-building` | Service page — web builds |
| AI News | `/ai-news` | Blog — AI news articles for SEO |

## SEO Context

- Schema.org `LocalBusiness` structured data on homepage
- `areaServed`: Sunshine Coast, QLD, AU (80km radius from -26.65, 153.07)
- Currently targets "Sunshine Coast AI Agency" as primary positioning
- **Priority:** Local SEO for Sunshine Coast first, then QLD, then national

## Technical Notes

- Next.js 16 App Router, static export, deployed via Cloudflare Pages
- Rewrites go directly into `app/[page]/page.tsx` — edit `metadata` title/description strings and hardcoded heading/body copy/CTA strings only
- Do NOT touch imports, component structure, style props, or hrefs
- Australian English throughout
