import { ArrowRight, Brain, Layers3, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DEFAULT_DECKS = [
  {
    id: "biology-basics",
    title: "Biology Basics",
    cards: 36,
    mastery: 84,
    updated: "Today",
  },
  {
    id: "ml-foundations",
    title: "ML Foundations",
    cards: 28,
    mastery: 71,
    updated: "Yesterday",
  },
  {
    id: "statistics-core",
    title: "Statistics Core",
    cards: 42,
    mastery: 92,
    updated: "3 days ago",
  },
];

const FlashCardListPage = () => {
  // Hydrate the deck list from localStorage so decks persist across reloads.
  const [decks, setDecks] = useState(() => {
    try {
      const raw = localStorage.getItem("decks");
      return raw ? JSON.parse(raw) : DEFAULT_DECKS;
    } catch {
      return DEFAULT_DECKS;
    }
  });
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  // Keep the latest deck list in localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(decks));
  }, [decks]);

  // Create a new deck, add it to the top of the list, and open it immediately.
  const handleCreate = () => {
    if (!newTitle.trim()) return;
    const id = newTitle
      .replace(/\s+/g, "-")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");
    const deck = {
      id,
      title: newTitle.trim(),
      cards: 0,
      mastery: 0,
      updated: "Just now",
    };
    setDecks((d) => [deck, ...d]);
    setNewTitle("");
    navigate(`/flashcards/${id}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-4xl border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
                <Layers3 className="h-4 w-4" />
                Flashcard decks
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                Study with compact, spaced-repetition cards.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                Open a deck to flip through cards, track mastery, and keep your
                review sessions light and focused.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-sky-50 px-5 py-4 ring-1 ring-sky-100">
                <p className="text-sm font-medium text-slate-500">
                  Ready for review
                </p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {decks.length} decks
                </p>
              </div>

              <div className="ml-2 flex items-center gap-2">
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="New deck title"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
                />
                <button
                  onClick={handleCreate}
                  className="rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-4 py-2 text-sm font-semibold text-white"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-3">
          {decks.map((deck) => (
            <article
              key={deck.id}
              className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-sky-700">Study deck</p>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    {deck.title}
                  </h2>
                </div>
                <div className="rounded-2xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100">
                  <Brain className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-600">
                <p>{deck.cards} cards in rotation</p>
                <p>{deck.updated} • optimized for spaced repetition</p>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">Mastery</span>
                  <span className="font-semibold text-slate-900">
                    {deck.mastery}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-linear-to-r from-sky-400 to-emerald-400"
                    style={{ width: `${deck.mastery}%` }}
                  />
                </div>
              </div>

              <Link
                to={`/flashcards/${deck.id}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-800"
              >
                Start reviewing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2 text-slate-900">
            <Sparkles className="h-5 w-5 text-emerald-600" />
            <h2 className="text-xl font-bold">AI advantages</h2>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "Cards generated from your notes and documents",
              "Weak items are surfaced more often",
              "Progress stays visible across every session",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-stone-50 p-4 text-sm text-slate-600 ring-1 ring-stone-200/80"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FlashCardListPage;
