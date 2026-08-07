import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { MultiLineTrend, AreaTrend, CategoryBar } from "@/components/demo/charts";
import { GROWTH_TREND, TREASURY_ALLOCATION, IMPACT_KPIS } from "@/lib/data/demo-data";

export default function AnalyticsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <DemoBanner />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>Growth</CardTitle><CardDescription>Users, treasury, and donations together</CardDescription></CardHeader>
          <CardContent>
            <MultiLineTrend
              data={GROWTH_TREND}
              lines={[
                { key: "users", color: "#0a1a30", name: "Users" },
                { key: "treasury", color: "#35d07f", name: "Treasury (USD)" },
                { key: "donations", color: "#d9941f", name: "Donations (USD)" },
              ]}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Education reach</CardTitle><CardDescription>Cumulative students trained</CardDescription></CardHeader>
          <CardContent>
            <AreaTrend data={GROWTH_TREND.map((g, i) => ({ month: g.month, students: 60 + i * 75 }))} dataKey="students" color="#146c43" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Community expansion</CardTitle><CardDescription>Spend by pillar</CardDescription></CardHeader>
          <CardContent><CategoryBar data={TREASURY_ALLOCATION} formatter={(v: number) => `${v}%`} /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Impact snapshot</CardTitle><CardDescription>Cumulative, all pillars</CardDescription></CardHeader>
          <CardContent>
            <ul className="divide-y divide-navy-950/8">
              {IMPACT_KPIS.map((k) => (
                <li key={k.label} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="text-navy-900/70">{k.label}</span>
                  <span className="tabular font-medium">{k.value.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
