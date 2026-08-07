"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleField } from "@/components/marketing/particle-field";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy-950/8">
      <ParticleField className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream-50/40 via-cream-50/70 to-cream-50" />

      <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-20 text-center sm:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-950/10 bg-white/70 px-3 py-1 text-xs font-medium text-navy-900/70"
        >
          Léogâne, Haiti · Built on Celo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-6xl"
        >
          CeloHT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-balance text-lg text-navy-900/70 sm:text-xl"
        >
          Empowering communities through Web3 education, financial inclusion, and environmental impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/demo/dashboard">
            <Button variant="green" size="lg">
              Launch Demo <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="https://github.com/Celo-HaiTi" target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg">
              <Github className="h-4 w-4" /> View GitHub
            </Button>
          </a>
          <a href="https://github.com/Celo-HaiTi/CeloHT/blob/main/WHITEPAPER.md" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="lg">
              <FileText className="h-4 w-4" /> Read Whitepaper
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
