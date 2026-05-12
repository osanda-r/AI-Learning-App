import { Sparkles } from "lucide-react";

const assistantCards = [
  {
    title: "Generate flashcards from documents",
    detail: "Turn lecture notes into focused review material in seconds.",
    className: "rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100",
    titleClassName: "text-sky-800",
  },
  {
    title: "Create quizzes from weak topics",
    detail: "Practice the concepts that need the most attention.",
    className: "rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100",
    titleClassName: "text-emerald-800",
  },
  {
    title: "Track long-term progress",
    detail: "Stay motivated with streaks, scores, and study momentum.",
    className: "rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100",
    titleClassName: "text-amber-800",
  },
];

const DashboardAssistantSection = () => {
  return (
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
        {assistantCards.map((card) => (
          <div key={card.title} className={card.className}>
            <p className={`text-sm font-semibold ${card.titleClassName}`}>
              {card.title}
            </p>
            <p className="mt-1 text-sm text-slate-600">{card.detail}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default DashboardAssistantSection;
