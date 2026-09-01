"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Copy, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DemoBanner } from "@/components/shared/demo-banner";
import { generateDemoTxHash, truncateHash } from "@/lib/utils/tx";
import { useWallet } from "@/lib/hooks/use-wallet";

type Currency = "USDm" | "CELO";
type Step = "form" | "confirm" | "success";

const PRESETS = [10, 25, 50, 100];

export default function DonationsPage() {
  const { connected } = useWallet();
  const [currency, setCurrency] = useState<Currency>("USDm");
  const [amount, setAmount] = useState(25);
  const [step, setStep] = useState<Step>("form");
  const [txHash, setTxHash] = useState("");
  const [copied, setCopied] = useState(false);

  function handleConfirm() {
    setTxHash(generateDemoTxHash());
    setStep("success");
  }

  function reset() {
    setStep("form");
    setAmount(25);
  }

  function copyHash() {
    navigator.clipboard.writeText(txHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <DemoBanner />
      <Card>
        <CardHeader>
          <CardTitle>Make a demo donation</CardTitle>
          <CardDescription>
            {connected ? "Wallet connected. This simulates a real donation flow." : "Connect a wallet above to try the full flow, or continue without one."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            {step === "form" && (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
                <div>
                  <p className="mb-2 text-sm font-medium text-navy-900/70">Currency</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(["USDm", "CELO"] as Currency[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`rounded-xl border py-3 text-sm font-medium transition-colors ${
                          currency === c ? "border-green-400 bg-green-100 text-green-700" : "border-navy-950/10 text-navy-900/70"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-navy-900/70">Amount</p>
                  <div className="grid grid-cols-4 gap-2">
                    {PRESETS.map((p) => (
                      <button
                        key={p}
                        onClick={() => setAmount(p)}
                        className={`rounded-xl border py-2.5 text-sm font-medium tabular transition-colors ${
                          amount === p ? "border-green-400 bg-green-100 text-green-700" : "border-navy-950/10 text-navy-900/70"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value) || 0)}
                    className="tabular mt-2 h-11 w-full rounded-xl border border-navy-950/10 px-3.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-label="Custom amount"
                  />
                </div>

                <Button variant="green" size="lg" className="w-full" onClick={() => setStep("confirm")} disabled={amount <= 0}>
                  Continue <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {step === "confirm" && (
              <motion.div key="confirm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
                <div className="space-y-3 rounded-xl bg-navy-950/[0.03] p-4 text-sm">
                  <div className="flex justify-between"><span className="text-navy-900/60">Amount</span><span className="tabular font-medium">{amount} {currency}</span></div>
                  <div className="flex justify-between"><span className="text-navy-900/60">Network fee (est.)</span><span className="tabular font-medium">~0.001 CELO</span></div>
                  <div className="flex justify-between border-t border-navy-950/8 pt-3"><span className="text-navy-900/60">Recipient</span><span className="text-xs text-navy-900/60">CeloHT Treasury (demo)</span></div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={() => setStep("form")}>Back</Button>
                  <Button variant="green" className="flex-1" onClick={handleConfirm}>Confirm donation</Button>
                </div>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-5 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500"
                >
                  <CheckCircle2 className="h-9 w-9" />
                </motion.div>
                <div>
                  <p className="font-display text-lg font-medium">Demo donation complete</p>
                  <p className="tabular mt-1 text-sm text-navy-900/60">{amount} {currency} · simulated</p>
                </div>
                <button
                  onClick={copyHash}
                  className="mx-auto flex items-center gap-2 rounded-lg bg-navy-950/[0.04] px-3 py-2 text-xs text-navy-900/70 hover:bg-navy-950/[0.08]"
                >
                  <span className="tabular">{truncateHash(txHash)}</span>
                  <Copy className="h-3 w-3" />
                  {copied && <span className="text-green-600">Copied</span>}
                </button>
                <p className="text-xs text-navy-900/40">
                  This is a simulated transaction hash for demo purposes. No real USDm or CELO moved, and nothing was broadcast to the Celo network.
                </p>
                <Button variant="outline" className="w-full" onClick={reset}>Make another demo donation</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
