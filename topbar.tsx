"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DEMO_NAV } from "@/lib/nav-config";
import { useWallet } from "@/lib/hooks/use-wallet";
import { WalletModal } from "@/components/demo/wallet-modal";
import { truncateHash } from "@/lib/utils/tx";

function currentLabel(pathname: string): string {
  const slug = pathname.split("/").pop();
  return DEMO_NAV.find((i) => i.slug === slug)?.label ?? "Dashboard";
}

export function DemoTopbar() {
  const pathname = usePathname();
  const { connected, address } = useWallet();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-navy-950/8 bg-white px-5">
        <h1 className="font-display text-lg font-medium">{currentLabel(pathname)}</h1>
        <Button variant={connected ? "outline" : "green"} size="sm" onClick={() => setOpen(true)}>
          <Wallet className="h-3.5 w-3.5" />
          {connected && address ? truncateHash(address, 4) : "Connect Wallet"}
        </Button>
      </header>
      <WalletModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
