"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ECOSYSTEM } from "@/lib/data/demo-data";

const LOGOS: Record<string, string> = {
  Valora: "/brand/valora-logo.png",
  Celo: "/brand/celoht-logo.png", // CeloHT's mark stands in visually; Celo's own logo isn't in our asset set
};

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="border-b border-navy-950/8 bg-white py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-medium text-green-600">Built with, not just built for</p>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Ecosystem</h2>
        <p className="mt-3 max-w-2xl text-navy-900/70">
          What CeloHT is built on, and who it's exploring formal partnership with — labeled honestly, not inflated.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {ECOSYSTEM.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-2xl border border-navy-950/8 p-5"
            >
              {LOGOS[e.name] ? (
                <Image src={LOGOS[e.name]!} alt={e.name} width={40} height={40} className="rounded-lg" />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950 font-display text-sm text-white">
                  {e.name.slice(0, 2)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{e.name}</p>
                  <span
                    className={
                      e.status === "Prospective Partner"
                        ? "rounded-full bg-gold-200/50 px-2 py-0.5 text-[10px] font-medium text-gold-600"
                        : "rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-600"
                    }
                  >
                    {e.status}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-navy-900/60">{e.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
