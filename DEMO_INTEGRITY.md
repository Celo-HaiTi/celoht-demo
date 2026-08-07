# Demo integrity policy

This is an **investor and grant-reviewer demo**, not CeloHT's live product. It exists to show what the finished experience will feel like — a realistic wallet-connect flow, a donation flow with a transaction hash, interactive maps, working charts — without claiming any of it is connected to real funds, real wallets, or the real Celo network.

Every piece of simulated realism in this repo follows one rule: **it must be labeled, every time it's shown, not just once on a splash screen.**

## What's simulated, and how it's labeled

| Feature | What's simulated | Where the label lives |
|---|---|---|
| Wallet connect | `src/lib/hooks/use-wallet.ts` generates a fake address and a ~1s artificial delay — no real Valora/MiniPay/WalletConnect session is opened | Wallet modal states "Simulated connection... no real wallet was accessed" every time it opens |
| Donation transaction hash | `src/lib/utils/tx.ts`'s `generateDemoTxHash()` produces a realistic-looking but random hex string | Success screen states explicitly: "no real cUSD/CELO moved and nothing was broadcast" |
| Maps (Agent Network, Reforestation) | `src/components/demo/stylized-map.tsx` uses illustrative pin positions on a decorative terrain background, not real GPS coordinates on a real map provider | "Illustrative map — not to scale" caption on every map instance |
| All dashboard figures | `src/lib/data/demo-data.ts` — seeded, hand-written illustrative numbers | `<DemoBanner />` on every page that shows them |
| Testimonials | Representative persona quotes, not attributed to real named individuals | Section subhead: "Illustrative of the kind of feedback... not attributed quotes from named individuals" |
| Partners/Ecosystem | Reframed as "Ecosystem" (built on / works with), not a formal-partnership claim | FreClean explicitly tagged "Prospective Partner"; Celo/Valora tagged "Ecosystem" |
| MiniPay | Shown in the wallet modal per the design brief, but CeloHT's real, documented wallet policy is Valora-only | Tagged "Coming soon" + "Not yet officially supported" in the modal |

## Why this matters more here than elsewhere

An investor demo is, by definition, the artifact most likely to be shown to someone deciding whether to fund or partner with CeloHT. Realistic simulation is the whole point of this repo — but "realistic" and "unlabeled" together is how a demo becomes a misrepresentation. Every section above exists specifically so that stays true even as the UI gets more polished.

## Before showing this to a real investor or grant committee

1. Say out loud, at the start of the walkthrough, that this is a demo of the intended experience, not the live product — don't rely on the in-app banners alone to carry that context in a live presentation.
2. Point to [celoht-admin](https://github.com/Celo-HaiTi/celoht-admin) for CeloHT's actual current operational data (also mock-data-first today, but the platform that will carry real figures as they go live).
3. Never screen-record or screenshot the donation success screen's transaction hash in a way that strips the surrounding "simulated" label.
