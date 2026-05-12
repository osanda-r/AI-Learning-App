import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardStudyPlanSection = ({
  studyPlan,
  completedPlans,
  onToggleStudyPlan,
}) => {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Study plan</h2>
          <p className="mt-1 text-sm text-slate-500">
            What you should tackle next.
          </p>
        </div>
        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
      </div>

      <div className="mt-6 space-y-4">
        {studyPlan.map((item) => {
          const isCompleted = completedPlans.includes(item.title);

          return (
            <article
              key={item.title}
              className={`rounded-2xl border p-4 transition-transform hover:-translate-y-0.5 hover:shadow-sm ${
                isCompleted
                  ? "border-emerald-200/80 bg-emerald-50/70"
                  : "border-slate-200/80 bg-stone-50"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                  {item.due}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
                    isCompleted
                      ? "bg-emerald-100 text-emerald-800 ring-emerald-200"
                      : "bg-sky-50 text-sky-700 ring-sky-100"
                  }`}
                >
                  {isCompleted ? "Completed" : item.status}
                </div>
                <button
                  type="button"
                  onClick={() => onToggleStudyPlan(item.title)}
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-colors ${
                    isCompleted
                      ? "bg-white text-slate-600 ring-slate-200 hover:bg-slate-50"
                      : "bg-white text-sky-700 ring-sky-100 hover:bg-sky-50"
                  }`}
                >
                  {isCompleted ? "Undo" : "Mark done"}
                </button>
                <Link
                  to={item.to}
                  className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
                >
                  Open
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default DashboardStudyPlanSection;
