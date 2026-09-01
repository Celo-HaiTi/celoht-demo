import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DemoBanner } from "@/components/shared/demo-banner";
import { COURSES } from "@/lib/data/demo-data";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <DemoBanner />
      <div className="grid gap-4">
        {COURSES.map((c) => (
          <Card key={c.id} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-base font-medium">{c.title}</p>
                  <p className="text-sm text-navy-900/60">{c.students} students enrolled</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gold-200/40 px-3 py-1 text-xs font-medium text-gold-600">
                <Award className="h-3.5 w-3.5" /> {c.certified} certified
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs text-navy-900/60">
                <span>Completion rate</span>
                <span className="tabular">{c.completion}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-navy-950/8">
                <div className="h-full rounded-full bg-green-400" style={{ width: `${c.completion}%` }} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
