# CeloHT Investor Demo

An interactive, investor- and grant-reviewer-facing demo of the CeloHT product experience: a marketing landing page plus a full simulated application — wallet connect, a donation flow, education, agent network and reforestation maps, treasury, and analytics.

> **This is a demo, not CeloHT's live product.** Every wallet connection, transaction hash, and dashboard figure in this repo is simulated and clearly labeled as such throughout the UI. See [`docs/DEMO_INTEGRITY.md`](docs/DEMO_INTEGRITY.md) for exactly what's simulated and how.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Recharts · Lucide Icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the landing page, or go straight to `/demo/dashboard` for the interactive application.

## Structure

```
src/app/
  (marketing)/          Landing page: hero, live stats, roadmap, ecosystem, testimonials
  demo/                 The interactive demo app
    dashboard/  education/  agent-network/  reforestation/
    donations/  treasury/  analytics/  profile/  settings/
src/components/
  marketing/            Hero, particle field, stats, roadmap, ecosystem, testimonials, footer
  demo/                 Sidebar, topbar, wallet modal, KPI card, charts, stylized map
  ui/                   Button, Card
  shared/                DemoBanner / DemoPill — the honesty layer, see docs/DEMO_INTEGRITY.md
src/lib/
  data/demo-data.ts      All illustrative content, in one file, clearly labeled
  hooks/use-wallet.ts     Simulated wallet-connect state
  utils/tx.ts             Simulated transaction hash generator
```

## Design

Palette: CeloHT's own navy + gold (from the mark) paired with Celo's real ecosystem green. Typography: Fraunces + IBM Plex Sans/Mono — the same pairing already used on celoht.com and celoht-admin, so this demo reads as the same organization. Signature element: a particle field in the hero where nodes occasionally trace a rising path, a quiet nod to the ascending-bar arrow in the CeloHT mark.

## Related

- [celoht-admin](https://github.com/Celo-HaiTi/celoht-admin) — the real operational platform (also mock-data-first today; see its own `docs/DATA_SOURCES.md`)
- [CeloHT](https://github.com/Celo-HaiTi/CeloHT) — core documentation and governance
- [celoht.com](https://celoht.com) — official website

## License

Apache 2.0
