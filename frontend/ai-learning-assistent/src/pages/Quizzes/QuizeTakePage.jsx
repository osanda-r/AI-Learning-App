import { CheckCircle2, ChevronRight, TimerReset } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    prompt: "What best describes supervised learning?",
    options: [
      "Learning from labeled examples",
      "Learning without any data",
      "Only memorizing answers",
    ],
    answer: 0,
  },
  {
    prompt: "Which metric helps track study consistency?",
    options: ["Streak length", "File size", "Font choice"],
    answer: 0,
  },
  {
    prompt: "What is a good quiz review strategy?",
    options: [
      "Focus on weak topics first",
      "Skip feedback after scoring",
      "Only review once a month",
    ],
    answer: 0,
  },
];

const QuizeTakePage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Track how many questions the user has answered so far.
  const answeredCount = useMemo(
    () => answers.filter((answer) => answer !== null).length,
    [answers],
  );

  // Score the quiz locally and send the result page a summary payload.
  const handleSubmit = () => {
    const score = answers.reduce((total, answer, index) => {
      return total + (answer === questions[index].answer ? 1 : 0);
    }, 0);

    navigate("/quizzes/result", {
      state: {
        score,
        total: questions.length,
        percentage: Math.round((score / questions.length) * 100),
      },
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-4xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
                <TimerReset className="h-4 w-4" />
                Quiz session
              </div>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                Test your understanding with short, focused questions.
              </h1>
            </div>
            <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
              {answeredCount}/{questions.length} answered
            </div>
          </div>

          {/* Each question is rendered as a self-contained answer group. */}
          <div className="mt-8 space-y-5">
            {questions.map((question, questionIndex) => (
              <article
                key={question.prompt}
                className="rounded-[1.5rem] border border-slate-200/80 bg-stone-50 p-5"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {questionIndex + 1}. {question.prompt}
                </h2>
                <div className="mt-4 grid gap-3">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[questionIndex] === optionIndex;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setAnswers((prev) => {
                            const next = [...prev];
                            next[questionIndex] = optionIndex;
                            return next;
                          })
                        }
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                          selected
                            ? "border-sky-300 bg-sky-50 text-sky-800"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{option}</span>
                        {selected && (
                          <CheckCircle2 className="h-4 w-4 text-sky-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60"
            >
              Finish quiz
              <ChevronRight className="h-4 w-4" />
            </button>
            <p className="text-sm text-slate-500">
              The result page will show your score and a quick review summary.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizeTakePage;
