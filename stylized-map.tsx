"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface MapPoint {
  id: string;
  x: number; // 0-100
  y: number; // 0-100
  label: string;
  color?: string;
}

/**
 * A stylized, illustrative map — not a real geographic map with live GPS
 * data. Positions are approximate and for visual storytelling only. Using
 * a real mapping provider would require API credentials this demo
 * doesn't have, and real precise coordinates would misrepresent
 * individual agents'/sites' exact locations. See docs/DEMO_INTEGRITY.md.
 */
export function StylizedMap({
  points,
  activeId,
  onSelect,
}: {
  points: MapPoint[];
  activeId?: string;
  onSelect: (id: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 via-cream-100 to-green-100">
      {/* soft terrain contours — decorative, not geographic */}
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 100 75" preserveAspectRatio="none">
        <path d="M0,40 Q25,20 50,35 T100,30 L100,75 L0,75 Z" fill="#6fe0a6" opacity="0.3" />
        <path d="M0,55 Q30,42 60,52 T100,48 L100,75 L0,75 Z" fill="#35d07f" opacity="0.25" />
        <path d="M0,20 Q40,8 70,18 T100,12" fill="none" stroke="#146c43" strokeWidth="0.4" opacity="0.3" />
      </svg>

      {points.map((p) => {
        const active = p.id === activeId || p.id === hovered;
        return (
          <button
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect(p.id)}
            className="group absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={p.label}
          >
            <MapPin
              className={cn(
                "h-6 w-6 drop-shadow-md transition-transform",
                active ? "scale-125 text-gold-500" : "text-navy-900",
              )}
              fill="currentColor"
            />
            <span
              className={cn(
                "pointer-events-none absolute left-1/2 top-[-6px] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-navy-950 px-2 py-1 text-[11px] text-white opacity-0 transition-opacity",
                active && "opacity-100",
              )}
            >
              {p.label}
            </span>
          </button>
        );
      })}

      <p className="absolute bottom-2 right-2 rounded bg-white/70 px-2 py-0.5 text-[10px] text-navy-900/50">
        Illustrative map — not to scale
      </p>
    </div>
  );
}
