import { ArrowLeft, Brain, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const documentMap = {
  "ai-ethics": {
    title: "AI Ethics and Society",
    subject: "Computer Science",
    summary:
      "A curated overview of fairness, transparency, privacy, and human-centered AI design.",
  },
  "bio-cell": {
    title: "Cell Biology Notes",
    subject: "Biology",
    summary:
      "Cell structures, organelles, and key processes explained in a compact study guide.",
  },
  "stats-basics": {
    title: "Statistics Basics",
    subject: "Mathematics",
    summary:
      "Core statistical concepts, probability patterns, and formula recall for revision.",
  },
};

const DocumentDetailPage = () => {
  const { documentId } = useParams();
  const document = documentMap[documentId] ?? documentMap["ai-ethics"];

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Link
          to="/documents"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to documents
        </Link>

        <section className="mt-6 rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
                <FileText className="h-4 w-4" />
                {document.subject}
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                {document.title}
              </h1>
              <p className="text-base leading-7 text-slate-600">
                {document.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  AI summary complete
                </span>
                <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
                  18 flashcards generated
                </span>
              </div>
            </div>

            <div className="grid min-w-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl bg-sky-50 p-5 ring-1 ring-sky-100">
                <p className="text-sm font-medium text-slate-500">Completion</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">78%</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-100">
                <p className="text-sm font-medium text-slate-500">Confidence</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">High</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <article className="rounded-[1.5rem] bg-stone-50 p-6 ring-1 ring-stone-200/80">
              <div className="flex items-center gap-2 text-slate-900">
                <Brain className="h-5 w-5 text-sky-600" />
                <h2 className="text-xl font-bold">AI study notes</h2>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  This document has been processed into short, review-friendly
                  notes so you can focus on the most important ideas first.
                </p>
                <ul className="space-y-3">
                  {[
                    "Key concepts have been extracted into flashcard-ready snippets.",
                    "The content is organized from foundational ideas to advanced topics.",
                    "You can move from reading to practice quizzes without leaving the page.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="rounded-[1.5rem] bg-white p-6 ring-1 ring-slate-200/80">
              <div className="flex items-center gap-2 text-slate-900">
                <Sparkles className="h-5 w-5 text-emerald-600" />
                <h2 className="text-xl font-bold">Quick actions</h2>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  "Generate flashcards from this document",
                  "Create a quiz from weak topics",
                  "Mark sections for later review",
                ].map((action) => (
                  <div
                    key={action}
                    className="rounded-2xl border border-slate-200 bg-stone-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentDetailPage;
