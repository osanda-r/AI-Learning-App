import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DocumentListPage from "./pages/Documents/DocumentListPage";
import DocumentDetailPage from "./pages/Documents/DocumentDetailPage";
import FlashCardListPage from "./pages/Flashcards/FlashCardListPage";
import FlashCardPage from "./pages/Flashcards/FlashCardPage";
import QuizeTakePage from "./pages/Quizzes/QuizeTakePage";
import QuizeResultPage from "./pages/Quizzes/QuizeResultPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Main Routes */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/documents" element={<DocumentListPage />} />
        <Route path="/documents/:documentId" element={<DocumentDetailPage />} />
        <Route path="/flashcards" element={<FlashCardListPage />} />
        <Route path="/flashcards/:deckId" element={<FlashCardPage />} />
        <Route path="/quizzes" element={<QuizeTakePage />} />
        <Route path="/quizzes/take" element={<QuizeTakePage />} />
        <Route path="/quizzes/result" element={<QuizeResultPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
