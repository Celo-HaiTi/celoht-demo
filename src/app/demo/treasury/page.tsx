import { KpiCard } from "@/components/demo/kpi-card";
import { MultiLineTrend, AllocationPie } from "@/components/demo/charts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { TREASURY_ALLOCATION, TREASURY_TREND } from "@/lib/data/demo-data";

export default function TreasuryPage() {
  const balance = TREASURY_TREND[TREASURY_TREND.length - 1]!.balance;
  const income = TREASURY_TREND.reduce((s, t) => s + t.income, 0);
  const expenses = TREASURY_TREND.reduce((s, t) => s + t.expenses, 0);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <DemoBanner />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <KpiCard label="Treasury Balance" value={balance} format="usd" delta={6.2} />
        <KpiCard label="Income (6mo)" value={income} format="usd" delta={11.4} />
        <KpiCard label="Expenses (6mo)" value={expenses} format="usd" delta={-4.1} />
        <KpiCard label="Funding Progress" value={68} format="percent" delta={4.5} />
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Income vs. expenses</CardTitle>
            <CardDescription>Monthly, USD-equivalent</CardDescription>
          </CardHeader>
          <CardContent>
            <MultiLineTrend
              data={TREASURY_TREND}
              lines={[
                { key: "income", color: "#35d07f", name: "Income" },
                { key: "expenses", color: "#d9941f", name: "Expenses" },
              ]}
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Allocation</CardTitle>
            <CardDescription>By pillar</CardDescription>
          </CardHeader>
          <CardContent>
            <AllocationPie data={TREASURY_ALLOCATION} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
