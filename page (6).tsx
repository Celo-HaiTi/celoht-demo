"use client";

import { useState } from "react";
import { Users, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { StylizedMap } from "@/components/demo/stylized-map";
import { AGENTS } from "@/lib/data/demo-data";
import { formatUSD } from "@/lib/utils/format";

export default function AgentNetworkPage() {
  const [selected, setSelected] = useState(AGENTS[0]!.id);
  const agent = AGENTS.find((a) => a.id === selected)!;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <DemoBanner />
      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Agent locations</CardTitle>
            <CardDescription>Léogâne region — tap a pin to see agent detail</CardDescription>
          </CardHeader>
          <CardContent>
            <StylizedMap
              points={AGENTS.map((a) => ({ id: a.id, x: a.x, y: a.y, label: a.name }))}
              activeId={selected}
              onSelect={setSelected}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-white">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>{agent.name}</CardTitle>
                <CardDescription>{agent.region}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-green-100 p-3">
                <p className="text-xs text-navy-900/60">Wallets onboarded</p>
                <p className="tabular font-display text-xl font-medium">{agent.walletsOnboarded}</p>
              </div>
              <div className="rounded-xl bg-gold-200/40 p-3">
                <p className="text-xs text-navy-900/60">Monthly volume</p>
                <p className="tabular font-display text-xl font-medium">{formatUSD(agent.monthlyVolume, true)}</p>
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-navy-900/60">
                <TrendingUp className="h-3.5 w-3.5" /> Services offered
              </p>
              <div className="flex flex-wrap gap-1.5">
                {agent.services.map((s) => (
                  <span key={s} className="rounded-full bg-navy-950/5 px-2.5 py-1 text-xs text-navy-900/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
