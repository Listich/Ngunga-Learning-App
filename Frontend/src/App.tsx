import { useState } from "react";
import { SplashScreen } from "./components/screens/SplashScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import { HomeScreen } from "./components/screens/HomeScreen";
import { LessonsScreen } from "./components/screens/LessonsScreen";
import { LessonDetailScreen } from "./components/screens/LessonDetailScreen";
import { QuizScreen } from "./components/screens/QuizScreen";
import { CultureScreen } from "./components/screens/CultureScreen";
import { ProfileScreen } from "./components/screens/ProfileScreen";
import { Button } from "./components/ui/button";
import AppV2 from "./AppV2";

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
  const [version, setVersion] = useState<1 | 2>(1);
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

  if (version === 2) {
    return (
      <div className="relative">
        <AppV2 />
        <Button
          onClick={() => setVersion(1)}
          className="fixed top-4 right-4 z-50 bg-[#C85C5C] hover:bg-[#B84C4C] text-white rounded-full shadow-2xl"
        >
          ← Version 1
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {renderScreen()}
      <Button
        onClick={() => setVersion(2)}
        className="fixed top-4 right-4 z-50 bg-[#6BCB77] hover:bg-[#5BB967] text-white rounded-full shadow-2xl"
      >
        Version 2 →
      </Button>
    </div>
  );
}
