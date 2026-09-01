"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, X, Check, Link2 } from "lucide-react";
import { useWallet, type WalletProvider } from "@/lib/hooks/use-wallet";
import { truncateHash } from "@/lib/utils/tx";

const PROVIDERS: { id: WalletProvider; name: string; logo?: string; comingSoon?: boolean; note: string }[] = [
  { id: "valora", name: "Valora", logo: "/brand/valora-logo.png", note: "CeloHT's primary supported wallet" },
  { id: "minipay", name: "MiniPay", logo: "/brand/minipay-logo.png", comingSoon: true, note: "Not yet officially supported. Shown for roadmap context." },
  { id: "walletconnect", name: "WalletConnect", note: "Connect any WalletConnect-compatible wallet" },
];

export function WalletModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { connect, connecting, connected, address, disconnect } = useWallet();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-medium">{connected ? "Wallet connected" : "Connect a wallet"}</h3>
              <button onClick={onClose} aria-label="Close">
                <X className="h-4 w-4 text-navy-900/50" />
              </button>
            </div>

            {connected ? (
              <div>
                <div className="flex items-center gap-3 rounded-xl bg-green-100 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400 text-white">
                    <Check className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-navy-950">Connected</p>
                    <p className="tabular truncate text-xs text-navy-900/60">{address ? truncateHash(address, 6) : ""}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-navy-900/50">
                  Simulated connection for demo purposes. No real wallet was accessed.
                </p>
                <button
                  onClick={() => { disconnect(); }}
                  className="mt-4 w-full rounded-lg border border-navy-950/10 py-2.5 text-sm text-navy-900/70 hover:bg-navy-950/5"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {PROVIDERS.map((p) => (
                  <button
                    key={p.id}
                    disabled={connecting || p.comingSoon}
                    onClick={() => connect(p.id)}
                    className="flex w-full items-center gap-3 rounded-xl border border-navy-950/10 p-3.5 text-left transition-colors hover:bg-navy-950/5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {p.logo ? (
                      <Image src={p.logo} alt={p.name} width={32} height={32} className="rounded-lg" />
                    ) : (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-950 text-white">
                        <Link2 className="h-4 w-4" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{p.name}</p>
                        {p.comingSoon && (
                          <span className="rounded-full bg-gold-200/50 px-2 py-0.5 text-[10px] font-medium text-gold-600">
                            Coming soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-navy-900/50">{p.note}</p>
                    </div>
                    {connecting && <Loader2 className="h-4 w-4 animate-spin text-navy-900/40" />}
                  </button>
                ))}
                <p className="pt-2 text-center text-xs text-navy-900/40">
                  This demo simulates a wallet connection. No real wallet extension or app is required.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
