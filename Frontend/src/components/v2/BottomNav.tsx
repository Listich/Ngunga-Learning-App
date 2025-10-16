import { Home, BookOpen, Music, User } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "home", icon: Home, label: "Accueil" },
    { id: "lessons", icon: BookOpen, label: "Leçons" },
    { id: "culture", icon: Music, label: "Culture" },
    { id: "profile", icon: User, label: "Profil" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-inset-bottom z-50">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-around px-2 py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex flex-col items-center justify-center min-w-[60px] py-1 transition-all"
              >
                <div
                  className={`p-2 rounded-2xl transition-all ${
                    isActive
                      ? "bg-[#6BCB77] scale-110"
                      : "bg-transparent scale-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
                <span
                  className={`text-xs mt-1 transition-colors ${
                    isActive ? "text-[#6BCB77]" : "text-gray-400"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
