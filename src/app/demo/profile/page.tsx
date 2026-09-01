"use client";

import { User, Award, GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { useWallet } from "@/lib/hooks/use-wallet";
import { truncateHash } from "@/lib/utils/tx";

export default function ProfilePage() {
  const { connected, address } = useWallet();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <DemoBanner />
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-white">
              <User className="h-6 w-6" />
            </div>
            <div>
              <CardTitle>Demo Reviewer</CardTitle>
              <CardDescription>
                {connected && address ? `Wallet: ${truncateHash(address, 6)}` : "No wallet connected"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-green-100 p-4">
            <GraduationCap className="h-5 w-5 text-green-600" />
            <p className="mt-2 font-display text-xl font-medium">2</p>
            <p className="text-xs text-navy-900/60">Courses completed</p>
          </div>
          <div className="rounded-xl bg-gold-200/40 p-4">
            <Award className="h-5 w-5 text-gold-600" />
            <p className="mt-2 font-display text-xl font-medium">1</p>
            <p className="text-xs text-navy-900/60">Certificate earned</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
