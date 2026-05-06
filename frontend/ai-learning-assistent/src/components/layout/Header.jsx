import { Home, FileText, Layers3, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/60 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-lg font-bold text-slate-900"
          >
            <Home className="h-5 w-5 text-sky-600" />
            AI Learning
          </Link>
        </div>

        <nav className="hidden items-center gap-3 md:flex">
          <Link
            to="/documents"
            className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <FileText className="h-4 w-4" /> Documents
          </Link>
          <Link
            to="/flashcards"
            className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Layers3 className="h-4 w-4" /> Flashcards
          </Link>
          <Link
            to="/quizzes"
            className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <BookOpen className="h-4 w-4" /> Quizzes
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/profile"
            className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <User className="h-5 w-5" /> Profile
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
