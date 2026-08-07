"use client";

import { motion } from "framer-motion";
import { LIVE_STATS } from "@/lib/data/demo-data";
import { AnimatedCounter } from "@/components/marketing/animated-counter";
import { DemoPill } from "@/components/shared/demo-banner";

export function LiveStats() {
  return (
    <section id="stats" className="border-b border-navy-950/8 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-green-600">Where the program stands</p>
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Illustrative program metrics</h2>
          </div>
          <DemoPill />
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-950/8 bg-navy-950/8 sm:grid-cols-4">
          {LIVE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="bg-white p-6"
            >
              <p className="font-display text-3xl font-medium text-navy-950">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} />
              </p>
              <p className="mt-1 text-sm text-navy-900/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
