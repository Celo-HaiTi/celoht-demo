const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

test('demo integrity documentation is explicit about simulated data and product scope', () => {
  const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
  const integrity = fs.readFileSync(path.join(root, 'DEMO_INTEGRITY.md'), 'utf8');
  const readiness = fs.readFileSync(path.join(root, 'REPOSITORY_PRODUCT_READINESS.md'), 'utf8');

  assert.match(readme, /This repo is intentionally a demo/i);
  assert.match(integrity, /simulated/i);
  assert.match(readiness, /Status: MOCK \/ DEMO|Status: DEMO ONLY/i);
});

test('wallet hook remains demo-only and does not claim a real wallet integration', () => {
  const walletHook = fs.readFileSync(path.join(root, 'src/lib/hooks/use-wallet.ts'), 'utf8');
  assert.match(walletHook, /Simulated wallet connection for the investor demo/i);
  assert.match(walletHook, /DEMO_WALLET_ADDRESS/i);
  assert.doesNotMatch(walletHook, /window\.ethereum|wagmi|rainbowkit|@web3modal|@walletconnect\/modal|useConnect\(|getWalletClient\(|viem|ethers\s*from/i);
});

test('transaction utility never implies an actual blockchain broadcast', () => {
  const tx = fs.readFileSync(path.join(root, 'src/lib/utils/tx.ts'), 'utf8');
  assert.match(tx, /deterministic placeholder hash/i);
  assert.match(tx, /demo/i);
  assert.doesNotMatch(tx, /broadcast|walletconnect|sendTransaction|writeContract|ethers/i);
});
