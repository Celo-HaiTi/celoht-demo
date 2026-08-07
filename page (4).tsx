"use client";

import { useState } from "react";
import { Bell, Moon, Globe, Wallet } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { useWallet } from "@/lib/hooks/use-wallet";

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`relative h-6 w-11 rounded-full transition-colors ${checked ? "bg-green-400" : "bg-navy-950/15"}`}
      aria-pressed={checked}
    >
      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

export default function SettingsPage() {
  const { connected, disconnect } = useWallet();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const rows = [
    { icon: Bell, label: "Notifications", desc: "Course updates and agent network alerts", value: notifications, onChange: () => setNotifications((v) => !v) },
    { icon: Moon, label: "Dark mode", desc: "Not yet available in this demo build", value: darkMode, onChange: () => setDarkMode((v) => !v) },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <DemoBanner />
      <Card>
        <CardHeader><CardTitle>Preferences</CardTitle><CardDescription>Demo settings — nothing here is persisted between sessions</CardDescription></CardHeader>
        <CardContent className="divide-y divide-navy-950/8">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between py-3.5">
              <div className="flex items-center gap-3">
                <r.icon className="h-4 w-4 text-navy-900/50" />
                <div>
                  <p className="text-sm font-medium">{r.label}</p>
                  <p className="text-xs text-navy-900/50">{r.desc}</p>
                </div>
              </div>
              <Toggle checked={r.value} onChange={r.onChange} />
            </div>
          ))}
          <div className="flex items-center justify-between py-3.5">
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-navy-900/50" />
              <div>
                <p className="text-sm font-medium">Language</p>
                <p className="text-xs text-navy-900/50">Kreyòl ayisyen, English, Français</p>
              </div>
            </div>
            <select className="rounded-lg border border-navy-950/10 px-2.5 py-1.5 text-sm">
              <option>English</option>
              <option>Kreyòl ayisyen</option>
              <option>Français</option>
            </select>
          </div>
          {connected && (
            <div className="flex items-center justify-between py-3.5">
              <div className="flex items-center gap-3">
                <Wallet className="h-4 w-4 text-navy-900/50" />
                <div>
                  <p className="text-sm font-medium">Wallet</p>
                  <p className="text-xs text-navy-900/50">Connected (simulated)</p>
                </div>
              </div>
              <button onClick={disconnect} className="text-xs font-medium text-red-500">Disconnect</button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
