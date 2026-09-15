import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const forbiddenImports = [
  "@/lib/data/demo-data",
  "@/lib/hooks/use-wallet",
  "@/lib/utils/tx",
];
const forbiddenTokens = [
  "DEMO_WALLET_ADDRESS",
  "generateDemoTxHash",
  "DemoBanner",
  "DemoPill",
];
const allowedDemoPrefixes = [
  "src/app/demo/",
  "src/components/demo/",
  "src/components/marketing/",
  "src/components/shared/demo-banner.tsx",
  "src/lib/data/demo-data.ts",
  "src/lib/hooks/use-wallet.ts",
  "src/lib/utils/tx.ts",
];

const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (/\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
}

walk(path.join(root, "src"));

const violations = [];

for (const filePath of files) {
  const rel = path.relative(root, filePath).replace(/\\/g, "/");
  const text = fs.readFileSync(filePath, "utf8");
  const isAllowed = allowedDemoPrefixes.some((prefix) => rel.includes(prefix));

  if (!isAllowed) {
    const matches = forbiddenImports.filter((i) => text.includes(i));
    const tokenMatches = forbiddenTokens.filter((token) => text.includes(token));
    if (matches.length > 0 || tokenMatches.length > 0) {
      violations.push({ file: rel, matches: [...matches, ...tokenMatches] });
    }
  }
}

if (violations.length > 0) {
  console.error("Production mock-data guard failed.");
  for (const violation of violations) {
    console.error(`- ${violation.file}: ${violation.matches.join(", ")}`);
  }
  process.exit(1);
}

console.log("Production mock-data guard passed.");
