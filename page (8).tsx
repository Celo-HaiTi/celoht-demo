import { KpiCard } from "@/components/demo/kpi-card";
import { AreaTrend, MultiLineTrend } from "@/components/demo/charts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { DASHBOARD_KPIS, GROWTH_TREND } from "@/lib/data/demo-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <DemoBanner />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {DASHBOARD_KPIS.map((k) => (
          <KpiCard key={k.label} label={k.label} value={k.value} format={k.format} delta={k.delta} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User growth</CardTitle>
            <CardDescription>Monthly active users onboarded through the agent network</CardDescription>
          </CardHeader>
          <CardContent>
            <AreaTrend data={GROWTH_TREND} dataKey="users" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Treasury &amp; donations</CardTitle>
            <CardDescription>Combined USD-equivalent, monthly</CardDescription>
          </CardHeader>
          <CardContent>
            <MultiLineTrend
              data={GROWTH_TREND}
              lines={[
                { key: "treasury", color: "#0a1a30", name: "Treasury" },
                { key: "donations", color: "#35d07f", name: "Donations" },
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
