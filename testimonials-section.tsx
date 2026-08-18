"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/demo-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-b border-navy-950/8 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-sm font-medium text-green-600">Representative feedback</p>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">Voices</h2>
        <p className="mt-3 max-w-2xl text-navy-900/70">
          Illustrative of the kind of feedback CeloHT hears and aims to earn, not attributed quotes from named individuals.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.persona + i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-navy-950/8 bg-white p-6"
            >
              <Quote className="h-5 w-5 text-green-400" />
              <p className="mt-3 text-navy-900/85">"{t.quote}"</p>
              <p className="mt-4 text-sm font-medium text-navy-950">{t.persona}</p>
              <p className="text-xs text-navy-900/50">{t.region}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
