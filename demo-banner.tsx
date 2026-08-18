import { Info } from "lucide-react";

/**
 * Persistent, unmissable labeling that this is a simulated product
 * experience. Wallets, balances, and transactions are illustrative,
 * not live. This banner (or the compact <DemoPill />) must appear on
 * every screen that shows financial figures, a wallet address, or a
 * transaction hash. See docs/DEMO_INTEGRITY.md for the full policy.
 */
export function DemoBanner() {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-gold-200 bg-gold-200/30 px-4 py-2.5 text-xs text-navy-900">
      <Info className="h-3.5 w-3.5 shrink-0 text-gold-500" />
      <p>
        <span className="font-semibold">Investor demo.</span> Wallets, balances, and transactions on
        this page are simulated to show the intended product experience. No real funds move, and no
        blockchain transaction is broadcast.
      </p>
    </div>
  );
}

export function DemoPill() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gold-200/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-gold-600">
      <Info className="h-2.5 w-2.5" />
      Simulated
    </span>
  );
}
