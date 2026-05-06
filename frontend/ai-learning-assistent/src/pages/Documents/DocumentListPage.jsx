import {
  ArrowRight,
  BookOpen,
  FileText,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

const documents = [
  {
    id: "ai-ethics",
    title: "AI Ethics and Society",
    subject: "Computer Science",
    pages: 42,
    updated: "Today",
    progress: 78,
  },
  {
    id: "bio-cell",
    title: "Cell Biology Notes",
    subject: "Biology",
    pages: 31,
    updated: "Yesterday",
    progress: 64,
  },
  {
    id: "stats-basics",
    title: "Statistics Basics",
    subject: "Mathematics",
    pages: 28,
    updated: "3 days ago",
    progress: 91,
  },
];

const DocumentListPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
                <BookOpen className="h-4 w-4" />
                Document library
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Organize your study documents in one calm workspace.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Browse your uploaded files, review AI summaries, and jump into a
                document to generate flashcards or practice questions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60"
              >
                <Upload className="h-4 w-4" />
                Upload document
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
              >
                <Search className="h-4 w-4" />
                Search library
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Documents", value: "24" },
            { label: "AI summaries", value: "18" },
            { label: "Ready to review", value: "7" },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-sm"
            >
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-5 xl:grid-cols-3">
          {documents.map((document) => (
            <article
              key={document.id}
              className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-sky-700">
                    {document.subject}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    {document.title}
                  </h2>
                </div>
                <div className="rounded-2xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100">
                  <FileText className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">
                {document.pages} pages • Updated {document.updated}
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Review progress
                  </span>
                  <span className="font-semibold text-slate-900">
                    {document.progress}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-linear-to-r from-sky-400 to-emerald-400"
                    style={{ width: `${document.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  AI ready
                </span>
                <Link
                  to={`/documents/${document.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  Open
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
};

export default DocumentListPage;
