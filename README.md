# MO20 Imperial — Landing Page

A premium, one-page Web3 landing site for **MO20 Imperial**, built on Next.js
14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> The first `npm run dev` / `npm run build` needs an internet connection —
> `next/font` fetches Cinzel, Cormorant Garamond, Manrope, and JetBrains Mono
> from Google Fonts at build time and self-hosts them afterward.

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx      → fonts, SEO metadata, root shell
  page.tsx         → assembles all sections
  globals.css       → design tokens, glass/gradient utilities
components/
  Navbar.tsx        → sticky nav + mobile drawer
  Hero.tsx           → full-screen hero, rotating seal, particle field
  About.tsx           → mission split-layout
  Values.tsx           → 4 Imperial Values cards
  Roadmap.tsx           → 4-phase vertical timeline
  Expansion.tsx          → cinematic parallax section
  Vision.tsx               → "Strategy Over Noise" split section
  Community.tsx              → final CTA
  Footer.tsx                  → links + crest
  GoldButton.tsx, icons.tsx, MouseGlow.tsx, ParticleField.tsx, RevealSection.tsx
lib/
  data.ts            → single source of truth: links, roadmap, values copy
public/images/         → crest + artwork used across the site
```

## Editing content

Everything text-based (links, roadmap phases, values copy, the contract
address placeholder) lives in `lib/data.ts` — update it there and every
section that references it updates automatically.

## Before you launch

- Swap `COMING SOON` in `lib/data.ts` → `contractAddress` for the real
  address once the token is deployed.
- Point `metadataBase` in `app/layout.tsx` at your live domain if it changes.
- Deploys cleanly to Vercel: `vercel --prod` (or connect the repo in the
  Vercel dashboard).
