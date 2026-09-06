/** Returns the deterministic placeholder hash used by the donation demo. */
export function generateDemoTxHash(): string {
  return "0x0000000000000000000000000000000000000000000000000000000000000000";
}

export function truncateHash(hash: string, chars = 8): string {
  return `${hash.slice(0, chars + 2)}…${hash.slice(-chars)}`;
}
