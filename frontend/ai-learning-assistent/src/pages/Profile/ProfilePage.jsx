import {
  Bell,
  BookOpen,
  CircleUserRound,
  Settings,
  Trophy,
} from "lucide-react";

const profileStats = [
  { label: "Study streak", value: "12 days" },
  { label: "Documents", value: "24" },
  { label: "Quiz average", value: "91%" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-200/60">
                <CircleUserRound className="h-10 w-10" />
              </div>
              <div>
                <p className="text-sm font-medium text-sky-700">
                  Student profile
                </p>
                <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
                  Alex Morgan
                </h1>
                <p className="mt-2 text-sm text-slate-500">
                  alex.morgan@example.com
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60"
              >
                <Settings className="h-4 w-4" />
                Edit profile
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
              >
                <Bell className="h-4 w-4" />
                Notifications
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-3">
          {profileStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {stat.value}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <Trophy className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-bold">Learning milestones</h2>
            </div>
            <div className="mt-5 space-y-4">
              {[
                "Completed the first 100 flashcards",
                "Kept a 12-day study streak alive",
                "Scored above 90% on three quizzes",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-stone-50 p-4 text-sm text-slate-600 ring-1 ring-stone-200/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 text-slate-900">
              <BookOpen className="h-5 w-5 text-sky-600" />
              <h2 className="text-xl font-bold">Study preferences</h2>
            </div>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
                Morning review sessions enabled
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                AI summaries prioritized before quizzes
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                Weekly progress digest sent every Sunday
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
