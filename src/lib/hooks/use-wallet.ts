"use client";

import { createContext, useContext, useState, useCallback } from "react";

export type WalletProvider = "valora" | "minipay" | "walletconnect";

interface WalletState {
  connected: boolean;
  provider: WalletProvider | null;
  address: string | null;
  balanceUsdM: number;
  connecting: boolean;
  connect: (provider: WalletProvider) => Promise<void>;
  disconnect: () => void;
}

/**
 * Simulated wallet connection for the investor demo. No real wallet
 * integration runs here. This generates a plausible-looking address
 * and a short artificial delay so the flow *feels* like a real connect
 * request, which is the brief's explicit ask ("if real wallets are
 * unavailable, simulate successful connection"). Every surface that
 * uses this hook must show the demo/simulation labeling; see
 * <DemoBanner /> and the wallet modal's own copy.
 */
export const WalletContext = createContext<WalletState | null>(null);

function fakeAddress(): string {
  const chars = "0123456789abcdef";
  let out = "0x";
  for (let i = 0; i < 40; i++) out += chars[Math.floor(Math.random() * 16)];
  return out;
}

export function useWalletState(): WalletState {
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState<WalletProvider | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const balanceUsdM = 128.4; // fixed demo balance, intentionally not randomized

  const connect = useCallback(async (p: WalletProvider) => {
    setConnecting(true);
    await new Promise((r) => setTimeout(r, 1100));
    setProvider(p);
    setAddress(fakeAddress());
    setConnected(true);
    setConnecting(false);
  }, []);

  const disconnect = useCallback(() => {
    setConnected(false);
    setProvider(null);
    setAddress(null);
  }, []);

  return { connected, provider, address, balanceUsdM, connecting, connect, disconnect };
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
}
