"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDot, Circle } from "lucide-react";
import { ROADMAP, type RoadmapStatus } from "@/lib/data/demo-data";
import { cn } from "@/lib/utils/cn";

const STATUS_STYLE: Record<RoadmapStatus, { icon: typeof CheckCircle2; color: string; bg: string }> = {
  Completed: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-100" },
  Current: { icon: CircleDot, color: "text-gold-500", bg: "bg-gold-200/50" },
  Upcoming: { icon: Circle, color: "text-navy-600", bg: "bg-navy-950/5" },
  Future: { icon: Circle, color: "text-navy-900/40", bg: "bg-navy-950/5" },
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="border-b border-navy-950/8 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-medium text-green-600">2026–2028</p>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">The real roadmap</h2>
        <p className="mt-3 max-w-2xl text-navy-900/70">
          Four phases, tracked honestly — including where CeloHT actually stands today, not just where it's headed.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ROADMAP.map((phase, i) => {
            const style = STATUS_STYLE[phase.status];
            const Icon = style.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-navy-950/8 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", style.bg, style.color)}>
                    <Icon className="h-3 w-3" /> {phase.status}
                  </span>
                  <span className="text-xs text-navy-900/50">{phase.window}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-medium">{phase.phase}</h3>
                <ul className="mt-3 space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-navy-900/70">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-navy-900/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
