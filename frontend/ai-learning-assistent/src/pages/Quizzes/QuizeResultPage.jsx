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
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-cyan-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Link
          to="/quizzes/take"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to quiz
        </Link>

        <section className="rounded-4xl border border-white/10 bg-white/8 p-6 shadow-[0_30px_80px_-30px_rgba(8,15,34,0.85)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-inset ring-cyan-300/10">
                <Award className="h-4 w-4" />
                Quiz complete
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white">
                Nice work. Your score is {result.percentage}%.
              </h1>
              <p className="text-base leading-7 text-slate-300">
                You answered {result.score} out of {result.total} questions
                correctly. Review the missed ideas and repeat the session to
                strengthen recall.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-linear-to-br from-cyan-500 via-blue-500 to-indigo-600 p-6 text-white shadow-[0_24px_60px_-20px_rgba(59,130,246,0.85)]">
              <p className="text-sm/6 text-white/75">Final score</p>
              <p className="mt-2 text-5xl font-bold">{result.percentage}%</p>
              <p className="mt-2 text-sm text-white/75">
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
                className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300 ring-1 ring-white/5"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-400" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25"
            >
              Return to dashboard
            </Link>
            <Link
              to="/quizzes/take"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
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
