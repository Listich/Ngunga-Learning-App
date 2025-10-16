import { useState } from "react";
import { SplashScreenV2 } from "./components/v2/screens/SplashScreenV2";
import { LoginScreenV2 } from "./components/v2/screens/LoginScreenV2";
import { HomeScreenV2 } from "./components/v2/screens/HomeScreenV2";
import { LessonsScreenV2 } from "./components/v2/screens/LessonsScreenV2";
import { CultureScreenV2 } from "./components/v2/screens/CultureScreenV2";
import { ProfileScreenV2 } from "./components/v2/screens/ProfileScreenV2";
import { BottomNav } from "./components/v2/BottomNav";
import { LessonDetailScreen } from "./components/screens/LessonDetailScreen";
import { QuizScreen } from "./components/screens/QuizScreen";

type Screen =
  | "splash"
  | "login"
  | "home"
  | "lessons"
  | "lesson-detail"
  | "quiz"
  | "culture"
  | "profile";

export default function AppV2() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const showBottomNav =
    currentScreen !== "splash" &&
    currentScreen !== "login" &&
    currentScreen !== "lesson-detail" &&
    currentScreen !== "quiz";

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <SplashScreenV2 onStart={() => navigateTo("login")} />;
      case "login":
        return <LoginScreenV2 onLogin={() => navigateTo("home")} />;
      case "home":
        return <HomeScreenV2 />;
      case "lessons":
        return (
          <LessonsScreenV2
            onSelectLesson={() => navigateTo("lesson-detail")}
          />
        );
      case "lesson-detail":
        return <LessonDetailScreen onNavigate={navigateTo} />;
      case "quiz":
        return <QuizScreen onNavigate={navigateTo} />;
      case "culture":
        return <CultureScreenV2 />;
      case "profile":
        return <ProfileScreenV2 />;
      default:
        return <SplashScreenV2 onStart={() => navigateTo("login")} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {renderScreen()}
      {showBottomNav && (
        <BottomNav activeTab={currentScreen} onTabChange={navigateTo} />
      )}
    </div>
  );
}
