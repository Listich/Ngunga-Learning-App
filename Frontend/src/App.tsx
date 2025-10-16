import { useState } from "react";
import { SplashScreen } from "./components/screens/SplashScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { LessonsScreen } from "./components/screens/LessonsScreen";
import { LessonDetailScreen } from "./components/screens/LessonDetailScreen";
import { QuizScreen } from "./components/screens/QuizScreen";
import { CultureScreen } from "./components/screens/CultureScreen";
import { ProfileScreen } from "./components/screens/ProfileScreen";

type Screen =
  | "splash"
  | "login"
  | "home"
  | "lessons"
  | "lesson-detail"
  | "quiz"
  | "culture"
  | "profile";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreen onStart={() => navigateTo("login")} />;
      case "login":
        return <LoginScreen onLogin={() => navigateTo("home")} />;
      case "home":
        return <HomeScreen onNavigate={navigateTo} />;
      case "lessons":
        return (
          <LessonsScreen
            onNavigate={navigateTo}
            onSelectLesson={() => navigateTo("lesson-detail")}
          />
        );
      case "lesson-detail":
        return <LessonDetailScreen onNavigate={navigateTo} />;
      case "quiz":
        return <QuizScreen onNavigate={navigateTo} />;
      case "culture":
        return <CultureScreen onNavigate={navigateTo} />;
      case "profile":
        return <ProfileScreen onNavigate={navigateTo} />;
      default:
        return <SplashScreen onStart={() => navigateTo("login")} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {renderScreen()}
    </div>
  );
}
