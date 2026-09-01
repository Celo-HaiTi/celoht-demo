"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DEMO_NAV } from "@/lib/nav-config";
import { cn } from "@/lib/utils/cn";

export function DemoSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r border-navy-950/8 bg-white md:flex">
      <div className="flex items-center gap-2.5 border-b border-navy-950/8 px-5 py-4">
        <Image src="/brand/celoht-logo.png" alt="CeloHT" width={28} height={28} className="rounded-md" />
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold">CeloHT</p>
          <p className="text-[11px] text-navy-900/50">Investor Demo</p>
        </div>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {DEMO_NAV.map((item) => {
          const href = `/demo/${item.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={item.slug}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                active ? "bg-navy-950 text-white" : "text-navy-900/70 hover:bg-navy-950/5",
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-navy-950/8 p-3">
        <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-navy-900/50 hover:bg-navy-950/5">
          ← Back to site
        </Link>
      </div>
    </aside>
  );
}
