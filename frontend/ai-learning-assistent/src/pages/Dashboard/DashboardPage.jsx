import { Brain, FileText, Flame, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import {
  DashboardAssistantSection,
  DashboardHeroSection,
  DashboardOverviewStats,
  DashboardProgressSection,
  DashboardRecentActivitySection,
  DashboardStudyPlanSection,
} from "../../components/dashboard";

const overviewStats = [
  {
    label: "Study streak",
    value: "12 days",
    change: "+3 this week",
    icon: Flame,
  },
  {
    label: "Documents uploaded",
    value: "24",
    change: "+5 this month",
    icon: FileText,
  },
  {
    label: "Flashcards mastered",
    value: "186",
    change: "84% retention",
    icon: Brain,
  },
  {
    label: "Quiz score average",
    value: "91%",
    change: "+7 points",
    icon: Trophy,
  },
];

const studyPlan = [
  {
    title: "Review AI notes",
    detail: "15 min spaced repetition session",
    due: "Today",
    status: "Ready",
    to: "/flashcards/biology-basics",
  },
  {
    title: "Take chapter quiz",
    detail: "12 questions, medium difficulty",
    due: "Tomorrow",
    status: "Scheduled",
    to: "/quizzes/take",
  },
  {
    title: "Generate new flashcards",
    detail: "From the latest uploaded lecture",
    due: "Fri",
    status: "Pending",
    to: "/documents/ai-ethics",
  },
];

const recentActivity = [
  {
    title: "Uploaded Neural Networks.pdf",
    detail: "AI generated 18 flashcards from the document",
    time: "2 hours ago",
    to: "/documents/ai-ethics",
  },
  {
    title: "Completed Biology Quiz 04",
    detail: "Scored 92% with 3 minutes remaining",
    time: "Yesterday",
    to: "/quizzes/result",
  },
  {
    title: "Reviewed 40 flashcards",
    detail: "Strong recall on vocabulary and formulas",
    time: "2 days ago",
    to: "/flashcards/biology-basics",
  },
];

const progressItems = [
  { label: "Machine Learning", value: 82 },
  { label: "Biology", value: 68 },
  { label: "Statistics", value: 91 },
];

const COMPLETED_STUDY_PLAN_KEY = "dashboard-completed-study-plan";

const DashboardPage = () => {
  const [completedPlans, setCompletedPlans] = useState(() => {
    try {
      const raw = localStorage.getItem(COMPLETED_STUDY_PLAN_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      COMPLETED_STUDY_PLAN_KEY,
      JSON.stringify(completedPlans),
    );
  }, [completedPlans]);

  const toggleStudyPlan = (title) => {
    setCompletedPlans((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-stone-100 via-sky-50 to-emerald-50 text-slate-800">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-40 -right-16 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <DashboardHeroSection />

        <DashboardOverviewStats stats={overviewStats} />

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <DashboardProgressSection progressItems={progressItems} />

          <DashboardStudyPlanSection
            studyPlan={studyPlan}
            completedPlans={completedPlans}
            onToggleStudyPlan={toggleStudyPlan}
          />
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <DashboardAssistantSection />

          <DashboardRecentActivitySection recentActivity={recentActivity} />
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
