import Link from "next/link";
import Image from "next/image";

const COLUMNS = [
  {
    title: "Project",
    links: [
      { label: "GitHub", href: "https://github.com/Celo-HaiTi" },
      { label: "Website", href: "https://celoht.com" },
      { label: "Documentation", href: "https://github.com/Celo-HaiTi/celoht-docs" },
      { label: "Whitepaper", href: "https://github.com/Celo-HaiTi/CeloHT/blob/main/WHITEPAPER.md" },
      { label: "Roadmap", href: "https://github.com/Celo-HaiTi/CeloHT/blob/main/ROADMAP.md" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "https://github.com/Celo-HaiTi/CeloHT/blob/main/docs/privacy.md" },
      { label: "Terms", href: "https://github.com/Celo-HaiTi/CeloHT/blob/main/docs/terms.md" },
      { label: "No-Token Policy", href: "https://github.com/Celo-HaiTi/CeloHT/blob/main/NO_TOKEN_POLICY.md" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "contact@celoht.com", href: "mailto:contact@celoht.com" },
      { label: "partnerships@celoht.com", href: "mailto:partnerships@celoht.com" },
      { label: "security@celoht.com", href: "mailto:security@celoht.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 py-16 text-navy-100">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/brand/celoht-logo.png" alt="CeloHT" width={28} height={28} className="rounded-md" />
              <span className="font-display text-base font-semibold text-white">CeloHT</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-navy-100/60">
              Community-governed. Léogâne, Haiti. No token, no ICO. Built openly, in the open.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-100/40">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} target="_blank" rel="noreferrer" className="text-sm text-navy-100/70 hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-navy-100/40">
          © 2026 CeloHT · Apache 2.0 Licensed · Founded by Johnny Dubic
        </div>
      </div>
    </footer>
  );
}
