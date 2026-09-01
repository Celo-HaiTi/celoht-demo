"use client";

import { useState } from "react";
import { TreePine, Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { StylizedMap } from "@/components/demo/stylized-map";
import { PLANTING_SITES } from "@/lib/data/demo-data";

export default function ReforestationPage() {
  const [selected, setSelected] = useState(PLANTING_SITES[0]!.id);
  const site = PLANTING_SITES.find((s) => s.id === selected)!;

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <DemoBanner />
      <p className="rounded-lg border border-gold-200 bg-gold-200/20 px-4 py-2.5 text-xs text-navy-900">
        CeloHT's reforestation program is in <span className="font-medium">design and pilot phase</span>. Figures below represent pilot scale, illustrated for this demo.
      </p>
      <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Planting sites</CardTitle>
            <CardDescription>Léogâne watershed. Tap a pin to see site detail.</CardDescription>
          </CardHeader>
          <CardContent>
            <StylizedMap
              points={PLANTING_SITES.map((s) => ({ id: s.id, x: s.x, y: s.y, label: s.location }))}
              activeId={selected}
              onSelect={setSelected}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400 text-white">
                <TreePine className="h-5 w-5" />
              </div>
              <div>
                <CardTitle>{site.location}</CardTitle>
                <CardDescription>Last community report: {site.lastReport}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-green-100 p-3">
                <p className="text-xs text-navy-900/60">Trees planted</p>
                <p className="tabular font-display text-xl font-medium">{site.treesPlanted}</p>
              </div>
              <div className="rounded-xl bg-navy-950/5 p-3">
                <p className="text-xs text-navy-900/60">Survival rate</p>
                <p className="tabular font-display text-xl font-medium">{site.survivalRate}%</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-dashed border-navy-950/15 p-4 text-sm text-navy-900/50">
              <Camera className="h-4 w-4 shrink-0" />
              Community photo documentation attaches here once field reports are wired to Supabase Storage.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
