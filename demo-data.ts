/**
 * DEMO_DATA — everything in this file is illustrative content for the
 * investor/grant-reviewer demo, not live figures from CeloHT's real
 * treasury, agent network, or education programs. Every number here is
 * meant to look like a healthy, active version of what CeloHT is
 * actually building toward — not a claim about where it is today.
 *
 * This distinction matters: CeloHT's real, current-stage figures live
 * in the celoht-admin platform (see docs/DATA_SOURCES.md there). This
 * demo exists to show what the finished product experience will feel
 * like, clearly labeled as such throughout the UI via <DemoBanner />.
 */

export const LIVE_STATS = [
  { label: "People Trained", value: 460, suffix: "" },
  { label: "Active Agents", value: 37, suffix: "" },
  { label: "Communities", value: 12, suffix: "" },
  { label: "Trees Planted", value: 1250, suffix: "" },
  { label: "CELO Transactions", value: 4820, suffix: "" },
  { label: "Treasury Balance", value: 84210, suffix: "", prefix: "$" },
  { label: "Donations Raised", value: 46200, suffix: "", prefix: "$" },
  { label: "Community Members", value: 1840, suffix: "" },
];

export const DASHBOARD_KPIS = [
  { label: "Total Donations", value: 46200, format: "usd" as const, delta: 9.8 },
  { label: "Total Users", value: 2140, format: "number" as const, delta: 8.4 },
  { label: "Active Agents", value: 37, format: "number" as const, delta: 12.1 },
  { label: "Community Impact Score", value: 78, format: "score" as const, delta: 4.5 },
  { label: "Monthly Growth", value: 11.2, format: "percent" as const, delta: 2.1 },
  { label: "Wallet Balance (demo)", value: 84210, format: "usd" as const, delta: 6.2 },
];

export const GROWTH_TREND = [
  { month: "Feb", users: 980, treasury: 41000, donations: 12000 },
  { month: "Mar", users: 1180, treasury: 51000, donations: 18500 },
  { month: "Apr", users: 1420, treasury: 58000, donations: 24800 },
  { month: "May", users: 1650, treasury: 66500, donations: 31200 },
  { month: "Jun", users: 1890, treasury: 74000, donations: 38900 },
  { month: "Jul", users: 2140, treasury: 84210, donations: 46200 },
];

export const COURSES = [
  { id: "c1", title: "Intro to Blockchain & Financial Inclusion", students: 96, completion: 82, certified: 64 },
  { id: "c2", title: "Celo Wallet Fundamentals (Valora)", students: 74, completion: 91, certified: 58 },
  { id: "c3", title: "Community Agent Certification", students: 41, completion: 68, certified: 22 },
  { id: "c4", title: "Digital Literacy for Merchants", students: 88, completion: 75, certified: 51 },
  { id: "c5", title: "Women in Web3 Bootcamp", students: 52, completion: 87, certified: 40 },
];

export interface AgentProfile {
  id: string;
  name: string;
  region: string;
  x: number; // stylized-map position, 0-100
  y: number;
  walletsOnboarded: number;
  monthlyVolume: number;
  services: string[];
}

export const AGENTS: AgentProfile[] = [
  { id: "a1", name: "Agent — Léogâne Centre", region: "Léogâne Centre", x: 32, y: 58, walletsOnboarded: 164, monthlyVolume: 4820, services: ["Cash-in", "Cash-out", "Wallet setup"] },
  { id: "a2", name: "Agent — Léogâne Nord", region: "Léogâne Nord", x: 40, y: 44, walletsOnboarded: 121, monthlyVolume: 3610, services: ["Cash-in", "Cash-out"] },
  { id: "a3", name: "Agent — Petit-Goâve", region: "Petit-Goâve", x: 55, y: 62, walletsOnboarded: 98, monthlyVolume: 2980, services: ["Cash-in", "Cash-out", "Merchant onboarding"] },
  { id: "a4", name: "Agent — Grand-Goâve", region: "Grand-Goâve", x: 47, y: 70, walletsOnboarded: 87, monthlyVolume: 2540, services: ["Wallet setup", "Education referral"] },
  { id: "a5", name: "Agent — Léogâne Sud", region: "Léogâne Sud", x: 30, y: 74, walletsOnboarded: 143, monthlyVolume: 3990, services: ["Cash-in", "Cash-out", "Wallet setup"] },
];

export interface PlantingSite {
  id: string;
  location: string;
  x: number;
  y: number;
  treesPlanted: number;
  survivalRate: number;
  lastReport: string;
}

export const PLANTING_SITES: PlantingSite[] = [
  { id: "p1", location: "Léogâne Watershed A", x: 34, y: 52, treesPlanted: 420, survivalRate: 78, lastReport: "3 days ago" },
  { id: "p2", location: "Léogâne Watershed B", x: 38, y: 48, treesPlanted: 310, survivalRate: 71, lastReport: "1 week ago" },
  { id: "p3", location: "Coastal Buffer Zone", x: 44, y: 66, treesPlanted: 260, survivalRate: 65, lastReport: "5 days ago" },
  { id: "p4", location: "School Grounds Pilot", x: 50, y: 56, treesPlanted: 140, survivalRate: 88, lastReport: "2 days ago" },
  { id: "p5", location: "Community Farm Plot", x: 42, y: 60, treesPlanted: 120, survivalRate: 82, lastReport: "1 day ago" },
];

export const TREASURY_ALLOCATION = [
  { label: "Education", value: 38 },
  { label: "Agent Network", value: 27 },
  { label: "Reforestation", value: 19 },
  { label: "Operations", value: 11 },
  { label: "Tooling", value: 5 },
];

export const TREASURY_TREND = GROWTH_TREND.map((g) => ({ month: g.month, income: Math.round(g.treasury * 0.18), expenses: Math.round(g.treasury * 0.12), balance: g.treasury }));

export const IMPACT_KPIS = [
  { label: "People Trained", value: 460 },
  { label: "Women Supported", value: 210 },
  { label: "Youth Supported", value: 168 },
  { label: "Communities Reached", value: 12 },
  { label: "Trees Planted", value: 1250 },
  { label: "Transactions Completed", value: 4820 },
];

export type RoadmapStatus = "Completed" | "Current" | "Upcoming" | "Future";

export const ROADMAP = [
  { phase: "Phase 1 — Foundation", window: "2026 Q2–Q3", status: "Completed" as RoadmapStatus, items: ["Flagship documentation published", "First agent cohort trained in Léogâne", "First grant applications submitted"] },
  { phase: "Phase 2 — Validation", window: "2026 Q4–2027 Q1", status: "Current" as RoadmapStatus, items: ["Prove the model end-to-end in Léogâne", "Reforestation pilot survival tracking", "This investor demo + celoht-admin platform"] },
  { phase: "Phase 3 — Growth", window: "2027", status: "Upcoming" as RoadmapStatus, items: ["Expand beyond the pilot region", "Public dApp beta", "Agent network service-fee sustainability begins"] },
  { phase: "Phase 4 — Maturity", window: "2028+", status: "Future" as RoadmapStatus, items: ["Governance decentralization", "Regional expansion beyond Haiti", "Full financial self-sustainability"] },
];

/** Ecosystem section — framed as "built on / works with," not formal
 *  partnership claims. FreClean stays explicitly prospective. */
export const ECOSYSTEM = [
  { name: "Celo", role: "Blockchain infrastructure CeloHT is built on", status: "Ecosystem" },
  { name: "Valora", role: "Primary supported wallet for CeloHT users", status: "Ecosystem" },
  { name: "GitHub", role: "Open-source home for every CeloHT repository", status: "Ecosystem" },
  { name: "FreClean", role: "Local entrepreneurship initiative", status: "Prospective Partner" },
];

/** Illustrative persona quotes — not attributed to real named individuals,
 *  clearly representative of the kind of feedback CeloHT aims to earn. */
export const TESTIMONIALS = [
  { quote: "The agent in my neighborhood walked me through my first wallet in Creole, at my own pace. I finally understood what I was holding.", persona: "Community Member", region: "Léogâne" },
  { quote: "What stood out to us was the discipline: no token, a documented roadmap, and a governance structure that doesn't route through one person.", persona: "Grant Reviewer", region: "Ecosystem Partner" },
  { quote: "It's rare to see a nonprofit's codebase this organized. The RLS policies alone tell you someone thought about this seriously.", persona: "Contributing Developer", region: "Open Source Contributor" },
  { quote: "We look for teams that can show their work, not just describe it. CeloHT's transparency dashboard is the kind of thing we wish more applicants had.", persona: "Prospective Funder", region: "Institutional Reviewer" },
];
