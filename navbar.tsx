"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#stats", label: "Impact" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#testimonials", label: "Voices" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-navy-950/8 bg-cream-50/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/brand/celoht-logo.png" alt="CeloHT" width={32} height={32} className="rounded-md" />
          <span className="font-display text-lg font-semibold">CeloHT</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-navy-900/70 transition-colors hover:text-navy-950">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/Celo-HaiTi" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="sm">GitHub</Button>
          </a>
          <Link href="/demo/dashboard">
            <Button variant="green" size="sm">Launch Demo</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-950/8 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-navy-900/70" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="https://github.com/Celo-HaiTi" target="_blank" rel="noreferrer" className="text-sm text-navy-900/70">GitHub</a>
            <Link href="/demo/dashboard">
              <Button variant="green" size="sm" className="mt-1 w-full">Launch Demo</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
