/** Generates a realistic-looking but clearly-fake Celo transaction hash
 *  for the donation flow demo. Never presented without surrounding
 *  "Demo transaction" labeling — see DonationFlow component. */
export function generateDemoTxHash(): string {
  const chars = "0123456789abcdef";
  let out = "0x";
  for (let i = 0; i < 64; i++) out += chars[Math.floor(Math.random() * 16)];
  return out;
}

export function truncateHash(hash: string, chars = 8): string {
  return `${hash.slice(0, chars + 2)}…${hash.slice(-chars)}`;
}
