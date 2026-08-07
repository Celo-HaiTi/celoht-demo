import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatUSD, formatNumber } from "@/lib/utils/format";

interface KpiCardProps {
  label: string;
  value: number;
  format: "usd" | "number" | "percent" | "score";
  delta?: number;
}

export function KpiCard({ label, value, format, delta }: KpiCardProps) {
  const display =
    format === "usd" ? formatUSD(value, value >= 100_000)
    : format === "percent" ? `${value.toFixed(1)}%`
    : format === "score" ? `${value}/100`
    : formatNumber(value, value >= 10_000);

  return (
    <Card className="p-5">
      <p className="text-sm text-navy-900/60">{label}</p>
      <p className="tabular mt-2 font-display text-2xl font-medium">{display}</p>
      {delta !== undefined && (
        <div className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-600">
          <ArrowUpRight className="h-3.5 w-3.5" />
          <span className="tabular">+{delta.toFixed(1)}%</span>
        </div>
      )}
    </Card>
  );
}
