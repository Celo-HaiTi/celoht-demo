# CeloHT Investor Demo

This repository is a demo product experience for CeloHT. It presents a landing page and a simulated internal dashboard for education, agent network, reforestation, treasury, analytics, and donation flows.

> This repo is intentionally a demo. Wallet connections, balances, transaction hashes, and dashboard values are simulated and visibly labeled as such throughout the UI. See [docs/DEMO_INTEGRITY.md](docs/DEMO_INTEGRITY.md) for the full integrity policy.

## Purpose

- Show what the CeloHT product experience could look and feel like to investors, partners, and grant reviewers
- Provide a realistic UX prototype without claiming live blockchain activity
- Keep the simulation clearly separated from real CeloHT operations

## Technology stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- Recharts
- Framer Motion
- Lucide React

## Verified status

This repository has been validated with the project’s real toolchain:

```bash
npm run lint
npm run typecheck
npm run build
```

The app builds successfully and the static pages are generated correctly.

## Getting started

```bash
npm install
npm run dev
```

Then open:
- http://localhost:3000 for the landing page
- http://localhost:3000/demo/dashboard for the interactive demo dashboard

## Repository structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    not-found.tsx
    demo/
      layout.tsx
      dashboard/
      education/
      agent-network/
      reforestation/
      donations/
      treasury/
      analytics/
      profile/
      settings/
  components/
    marketing/
    demo/
    shared/
    ui/
  lib/
    data/demo-data.ts
    hooks/use-wallet.ts
    nav-config.ts
    utils/
public/
  brand/
```

## Demo-only behavior

This repo does not contain:
- a live production wallet integration
- real blockchain signing
- a live smart-contract deployment
- real treasury or USDm balances

The wallet flow is intentionally simulated and explicitly labeled as such. The donation flow also simulates a transaction hash and does not broadcast anything to the Celo network.

## Related links

- [CeloHT GitHub organization](https://github.com/Celo-HaiTi)
- [CeloHT whitepaper](https://github.com/Celo-HaiTi/CeloHT/blob/main/WHITEPAPER.md)
- [CeloHT website](https://celoht.com)

## Product readiness

See:
- [REPOSITORY_PRODUCT_READINESS.md](REPOSITORY_PRODUCT_READINESS.md)
- [WALLET_COMPATIBILITY.md](WALLET_COMPATIBILITY.md)

## License

Apache 2.0
