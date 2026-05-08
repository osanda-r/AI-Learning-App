import { ArrowLeft, Award, CheckCircle2, RefreshCcw } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const defaultResult = {
  score: 2,
  total: 3,
  percentage: 67,
};

const QuizeResultPage = () => {
  const location = useLocation();
  // Use the navigation state when available, otherwise show a default demo result.
  const result = location.state ?? defaultResult;

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Link
          to="/quizzes/take"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to quiz
        </Link>

        <section className="rounded-4xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                <Award className="h-4 w-4" />
                Quiz complete
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Nice work. Your score is {result.percentage}%.
              </h1>
              <p className="text-base leading-7 text-slate-600">
                You answered {result.score} out of {result.total} questions
                correctly. Review the missed ideas and repeat the session to
                strengthen recall.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-linear-to-br from-sky-500 to-emerald-500 p-6 text-white shadow-lg shadow-sky-200/60">
              <p className="text-sm/6 text-white/85">Final score</p>
              <p className="mt-2 text-5xl font-bold">{result.percentage}%</p>
              <p className="mt-2 text-sm text-white/85">
                Keep the streak going with a short review session.
              </p>
            </div>
          </div>

          {/* These follow-up actions turn the score into the next study step. */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Revisit every question you missed",
              "Turn weak topics into flashcards",
              "Retake the quiz after a short review",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-stone-50 p-4 text-sm text-slate-600 ring-1 ring-stone-200/80"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60"
            >
              Return to dashboard
            </Link>
            <Link
              to="/quizzes/take"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
            >
              <RefreshCcw className="h-4 w-4" />
              Retry quiz
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizeResultPage;
