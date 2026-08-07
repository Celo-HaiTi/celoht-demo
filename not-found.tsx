import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-4 text-center">
      <p className="font-display text-4xl font-semibold">404</p>
      <p className="text-sm text-navy-900/60">This page doesn't exist in the CeloHT demo.</p>
      <Link href="/"><Button variant="green">Back to home</Button></Link>
    </div>
  );
}
