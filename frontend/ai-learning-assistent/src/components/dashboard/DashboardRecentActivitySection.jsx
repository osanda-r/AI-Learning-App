import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardRecentActivitySection = ({ recentActivity }) => {
  return (
    <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Recent activity</h2>
          <p className="mt-1 text-sm text-slate-500">
            A quick look at your latest learning actions.
          </p>
        </div>
        <Clock3 className="h-5 w-5 text-slate-500" />
      </div>

      <div className="mt-6 space-y-4">
        {recentActivity.map((activity) => (
          <Link
            key={activity.title}
            to={activity.to}
            className="flex gap-4 rounded-2xl border border-slate-200/80 bg-stone-50 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="mt-1 h-3 w-3 rounded-full bg-linear-to-br from-sky-400 to-emerald-400" />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {activity.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {activity.detail}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-medium text-slate-500">
                  {activity.time}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
};

export default DashboardRecentActivitySection;
