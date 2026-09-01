import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, GraduationCap, Network, TreePine, HandCoins, Wallet, BarChart3, User, Settings } from "lucide-react";

export interface DemoNavItem {
  slug: string;
  label: string;
  icon: LucideIcon;
}

export const DEMO_NAV: DemoNavItem[] = [
  { slug: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { slug: "education", label: "Education", icon: GraduationCap },
  { slug: "agent-network", label: "Agent Network", icon: Network },
  { slug: "reforestation", label: "Reforestation", icon: TreePine },
  { slug: "donations", label: "Donations", icon: HandCoins },
  { slug: "treasury", label: "Treasury", icon: Wallet },
  { slug: "analytics", label: "Analytics", icon: BarChart3 },
  { slug: "profile", label: "Profile", icon: User },
  { slug: "settings", label: "Settings", icon: Settings },
];
