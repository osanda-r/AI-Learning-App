import {
  CalendarDays,
  Clock3,
  LayoutGrid,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHeroSection = ({
  openWorkspaceTo = "/documents",
  progressTo = "/profile",
}) => {
  return (
    <section className="overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[0_30px_80px_-30px_rgba(36,50,68,0.35)] backdrop-blur-sm">
      <div className="grid gap-8 px-6 py-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-10 lg:py-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <Sparkles className="h-4 w-4" />
            AI Learning Dashboard
          </div>

          <div className="space-y-3">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Your study workspace, organized around what matters today.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Track progress, review active topics, and keep your learning
              rhythm smooth with a calm, soft interface.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={openWorkspaceTo}
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition-transform hover:scale-[1.02]"
            >
              <LayoutGrid className="h-4 w-4" />
              Open workspace
            </Link>
            <Link
              to={progressTo}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <TrendingUp className="h-4 w-4" />
              View progress
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl bg-stone-50 p-5 shadow-sm ring-1 ring-stone-200/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Today&apos;s focus
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  2 study blocks
                </p>
              </div>
              <CalendarDays className="h-10 w-10 text-sky-500" />
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-200">
              <div className="h-2 w-3/5 rounded-full bg-linear-to-r from-sky-400 to-emerald-400" />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              60% of your plan is already complete.
            </p>
          </div>

          <div className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Next quiz</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  5:30 PM
                </p>
              </div>
              <Clock3 className="h-10 w-10 text-emerald-500" />
            </div>
            <p className="mt-3 text-sm text-slate-600">
              Biology revision quiz with mixed difficulty questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeroSection;
