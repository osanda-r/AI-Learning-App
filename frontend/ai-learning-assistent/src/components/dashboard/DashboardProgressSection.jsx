import { BookOpen } from "lucide-react";

const DashboardProgressSection = ({ progressItems }) => {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Learning progress
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep the momentum visible across your main subjects.
          </p>
        </div>
        <div className="rounded-2xl bg-amber-50 p-3 text-amber-600 ring-1 ring-amber-100">
          <BookOpen className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {progressItems.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{item.label}</span>
              <span className="font-semibold text-slate-900">
                {item.value}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-linear-to-r from-sky-400 via-cyan-400 to-emerald-400"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
          <p className="text-sm text-slate-500">Average session</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">28 min</p>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
          <p className="text-sm text-slate-500">Accuracy</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">91%</p>
        </div>
        <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
          <p className="text-sm text-slate-500">Weekly goal</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">8/10</p>
        </div>
      </div>
    </article>
  );
};

export default DashboardProgressSection;
