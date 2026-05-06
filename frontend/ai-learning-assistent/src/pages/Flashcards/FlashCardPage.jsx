import { ArrowLeft, ArrowRight, RefreshCcw, RotateCcw } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const deckCards = [
  {
    front: "What is supervised learning?",
    back: "A training approach where labeled examples guide the model toward the correct output.",
  },
  {
    front: "What does recall measure?",
    back: "How many relevant items are successfully retrieved from memory or a dataset.",
  },
  {
    front: "Why use spaced repetition?",
    back: "It improves long-term retention by reviewing material at optimized intervals.",
  },
];

const FlashCardPage = () => {
  const { deckId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentCard = deckCards[currentIndex];

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deckCards.length);
  };

  const handlePrevious = () => {
    setFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deckCards.length) % deckCards.length);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Link
          to="/flashcards"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to decks
        </Link>

        <section className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-sky-700">Deck {deckId}</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                Review your cards one at a time.
              </h1>
            </div>
            <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">
              Card {currentIndex + 1} of {deckCards.length}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_280px]">
            <button
              type="button"
              onClick={() => setFlipped((prev) => !prev)}
              className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-slate-200 bg-linear-to-br from-white to-stone-50 px-6 py-8 text-left shadow-sm transition-transform hover:scale-[1.01]"
            >
              <div className="max-w-xl space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  <RefreshCcw className="h-3.5 w-3.5" />
                  Tap to flip
                </div>
                <p className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  {flipped ? currentCard.back : currentCard.front}
                </p>
                <p className="text-sm leading-7 text-slate-500">
                  {flipped
                    ? "The answer side stays concise so you can verify recall quickly."
                    : "Think of the answer first, then flip the card to check your memory."}
                </p>
              </div>
            </button>

            <aside className="space-y-4 rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-sm backdrop-blur-sm">
              <div className="rounded-2xl bg-sky-50 p-4 ring-1 ring-sky-100">
                <p className="text-sm text-slate-500">Session progress</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">67%</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
                <p className="text-sm text-slate-500">Correct streak</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">4</p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-100">
                <p className="text-sm text-slate-500">Focus score</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">91</p>
              </div>
            </aside>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePrevious}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60"
            >
              Next card
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-stone-50 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              <RotateCcw className="h-4 w-4" />
              Reset flip
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FlashCardPage;
