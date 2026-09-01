"use client";

import { DemoSidebar } from "@/components/demo/sidebar";
import { DemoTopbar } from "@/components/demo/topbar";
import { WalletContext, useWalletState } from "@/lib/hooks/use-wallet";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  const wallet = useWalletState();
  return (
    <WalletContext.Provider value={wallet}>
      <div className="flex min-h-screen">
        <DemoSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <DemoTopbar />
          <main className="flex-1 overflow-y-auto bg-cream-50 p-6">{children}</main>
        </div>
      </div>
    </WalletContext.Provider>
  );
}
