import {
  BookOpen,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Flame,
  LayoutGrid,
  Sparkles,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const overviewStats = [
  {
    label: "Study streak",
    value: "12 days",
    change: "+3 this week",
    icon: Flame,
  },
  {
    label: "Documents uploaded",
    value: "24",
    change: "+5 this month",
    icon: FileText,
  },
  {
    label: "Flashcards mastered",
    value: "186",
    change: "84% retention",
    icon: Brain,
  },
  {
    label: "Quiz score average",
    value: "91%",
    change: "+7 points",
    icon: Trophy,
  },
];

const studyPlan = [
  {
    title: "Review AI notes",
    detail: "15 min spaced repetition session",
    due: "Today",
    status: "Ready",
    to: "/flashcards/biology-basics",
  },
  {
    title: "Take chapter quiz",
    detail: "12 questions, medium difficulty",
    due: "Tomorrow",
    status: "Scheduled",
    to: "/quizzes/take",
  },
  {
    title: "Generate new flashcards",
    detail: "From the latest uploaded lecture",
    due: "Fri",
    status: "Pending",
    to: "/documents/ai-ethics",
  },
];

const recentActivity = [
  {
    title: "Uploaded Neural Networks.pdf",
    detail: "AI generated 18 flashcards from the document",
    time: "2 hours ago",
    to: "/documents/ai-ethics",
  },
  {
    title: "Completed Biology Quiz 04",
    detail: "Scored 92% with 3 minutes remaining",
    time: "Yesterday",
    to: "/quizzes/result",
  },
  {
    title: "Reviewed 40 flashcards",
    detail: "Strong recall on vocabulary and formulas",
    time: "2 days ago",
    to: "/flashcards/biology-basics",
  },
];

const progressItems = [
  { label: "Machine Learning", value: 82 },
  { label: "Biology", value: 68 },
  { label: "Statistics", value: 91 },
];

const COMPLETED_STUDY_PLAN_KEY = "dashboard-completed-study-plan";

const DashboardPage = () => {
  const [completedPlans, setCompletedPlans] = useState(() => {
    try {
      const raw = localStorage.getItem(COMPLETED_STUDY_PLAN_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      COMPLETED_STUDY_PLAN_KEY,
      JSON.stringify(completedPlans),
    );
  }, [completedPlans]);

  const toggleStudyPlan = (title) => {
    setCompletedPlans((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-40 -right-16 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Top summary card for the main dashboard overview. */}
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
                  to="/documents"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition-transform hover:scale-[1.02]"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Open workspace
                </Link>
                <Link
                  to="/profile"
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
                    <p className="text-sm font-medium text-slate-500">
                      Next quiz
                    </p>
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

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {overviewStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-sm backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-emerald-700">
                  {stat.change}
                </p>
              </article>
            );
          })}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Progress cards keep the current study momentum visible. */}
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
                    <span className="font-medium text-slate-700">
                      {item.label}
                    </span>
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

          {/* Action list points the user to the next best study task. */}
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
              {studyPlan.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-4 transition-transform hover:-translate-y-0.5 hover:shadow-sm ${
                    completedPlans.includes(item.title)
                      ? "border-emerald-200/80 bg-emerald-50/70"
                      : "border-slate-200/80 bg-stone-50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
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
                        completedPlans.includes(item.title)
                          ? "bg-emerald-100 text-emerald-800 ring-emerald-200"
                          : "bg-sky-50 text-sky-700 ring-sky-100"
                      }`}
                    >
                      {completedPlans.includes(item.title)
                        ? "Completed"
                        : item.status}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleStudyPlan(item.title)}
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-colors ${
                        completedPlans.includes(item.title)
                          ? "bg-white text-slate-600 ring-slate-200 hover:bg-slate-50"
                          : "bg-white text-sky-700 ring-sky-100 hover:bg-sky-50"
                      }`}
                    >
                      {completedPlans.includes(item.title)
                        ? "Undo"
                        : "Mark done"}
                    </button>
                    <Link
                      to={item.to}
                      className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:bg-slate-50"
                    >
                      Open
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  AI study assistant
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  A quick snapshot of what the assistant can do for you.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
                <p className="text-sm font-semibold text-sky-800">
                  Generate flashcards from documents
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Turn lecture notes into focused review material in seconds.
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                <p className="text-sm font-semibold text-emerald-800">
                  Create quizzes from weak topics
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Practice the concepts that need the most attention.
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                <p className="text-sm font-semibold text-amber-800">
                  Track long-term progress
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Stay motivated with streaks, scores, and study momentum.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent activity
                </h2>
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
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
