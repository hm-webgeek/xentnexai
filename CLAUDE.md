# XentnexAI — Claude Context

## Project Overview

**XentnexAI** is a Next.js 16 marketing website for an AI services agency targeting Sunshine Coast (QLD, Australia) businesses.

- **Live domain:** https://xentnexai.com.au
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Output:** Static export (`output: "export"` in next.config.ts) — deployed as static HTML
- **Images:** `unoptimized: true` (required for static export)

## Services Offered

1. **AI Lead Generation** — `/ai-lead-generation`
2. **AI Voice Agents** — `/ai-voice-agents`
3. **GEO Audit Reports** — `/geo-audit-reports`

## Key Files

- [lib/metadata.ts](lib/metadata.ts) — Shared constants: `BASE_URL`, `CALENDLY_URL`, `FORMSPREE_ID`, `buildMetadata()` helper
- [app/layout.tsx](app/layout.tsx) — Root layout: Plus Jakarta Sans (display) + Inter (body), Header + Footer wrappers
- [src/lib/articles.ts](src/lib/articles.ts) — MDX/MD article loader for the AI News blog section
- [content/articles/](content/articles/) — Blog articles as `.md` or `.mdx` files (frontmatter: title, date, category, summary, heroImage, sources)

## Article / Blog System

Articles live in `content/articles/` as Markdown/MDX files with this frontmatter:

```yaml
title: string
date: string        # YYYY-MM-DD
category: ai-tools | automation | local-business | industry-news
summary: string
heroImage?: string  # optional path
sources?: [{url, title}]  # optional source citations
```

Routes:
- `/ai-news` — article listing
- `/ai-news/[slug]` — individual article
- `/ai-news/category/[category]` — filtered by category

## Design Tokens

- **Primary teal:** `#1BA899`
- **Dark navy:** `#1A2740`
- **Body gray:** `#64748B`
- **Light bg:** `#F8FAFB`
- Fonts: `--font-display` (Plus Jakarta Sans), `--font-body` (Inter)
- Custom display font also available: Orbitron (`public/fonts/orbitron.woff2`)

## Third-Party Integrations

- **Calendly:** `https://calendly.com/xentnexai` — booking CTA links
- **Formspree:** ID `xlgorlke` — contact form submission
- **Schema.org LocalBusiness** structured data on homepage

## Build & Dev

```bash
npm run dev     # local dev server
npm run build   # static export to /out
npm run lint    # ESLint
```

The `/out` directory contains the built static site — do not edit files there directly.

## Locale

Site targets Australian English (`lang="en-AU"`, `locale: "en_AU"`). Use AU spelling in content.
