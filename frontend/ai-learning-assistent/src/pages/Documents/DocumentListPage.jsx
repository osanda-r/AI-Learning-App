import {
  ArrowRight,
  BookOpen,
  FileText,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_DOCS = [
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
  const [docs, setDocs] = useState(() => {
    try {
      const raw = localStorage.getItem("docs");
      return raw ? JSON.parse(raw) : DEFAULT_DOCS;
    } catch {
      return DEFAULT_DOCS;
    }
  });

  const [query, setQuery] = useState("");

  // Persist the current document list so uploads survive a refresh.
  useEffect(() => {
    localStorage.setItem("docs", JSON.stringify(docs));
  }, [docs]);

  // Filter visible cards by title or subject.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docs;
    return docs.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.subject.toLowerCase().includes(q),
    );
  }, [docs, query]);

  // Turn the uploaded file into a lightweight document card.
  const handleUpload = (files) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const newDoc = {
      id: file.name
        .replace(/\s+/g, "-")
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, ""),
      title: file.name.replace(/\.[^.]+$/, ""),
      subject: "Uploaded",
      pages: Math.max(1, Math.round((file.size || 1000) / 2000)),
      updated: "Just now",
      progress: 0,
    };

    setDocs((prev) => [newDoc, ...prev]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
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

            <div className="flex flex-wrap items-center gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60">
                <Upload className="h-4 w-4" />
                <input
                  type="file"
                  onChange={(e) => handleUpload(e.target.files)}
                  className="sr-only"
                />
                Upload document
              </label>

              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search documents"
                  className="w-64 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm"
                />
                <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Documents", value: docs.length },
            { label: "AI summaries", value: Math.max(0, docs.length - 6) },
            {
              label: "Ready to review",
              value: docs.filter((d) => d.progress > 0 && d.progress < 100)
                .length,
            },
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

        {/* Each card summarizes one document and links into its detail view. */}
        <section className="grid gap-5 xl:grid-cols-3">
          {filtered.map((document) => (
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
                  <Sparkles className="h-3.5 w-3.5" /> AI ready
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
