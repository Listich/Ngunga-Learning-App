import { Card } from "../ui/card";
import { Mascot } from "../Mascot";
import { BookOpen, Brain, Music, TrendingUp } from "lucide-react";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const menuItems = [
    {
      id: "lessons",
      title: "Leçons",
      description: "Apprends de nouveaux mots",
      icon: BookOpen,
      color: "bg-[#6BCB77]",
      onClick: () => onNavigate("lessons"),
    },
    {
      id: "quiz",
      title: "Quiz",
      description: "Teste tes connaissances",
      icon: Brain,
      color: "bg-[#FFD56B]",
      onClick: () => onNavigate("quiz"),
    },
    {
      id: "culture",
      title: "Culture & Musique",
      description: "Découvre la culture Kongo",
      icon: Music,
      color: "bg-[#C85C5C]",
      onClick: () => onNavigate("culture"),
    },
    {
      id: "profile",
      title: "Progression",
      description: "Consulte tes statistiques",
      icon: TrendingUp,
      color: "bg-[#6BCB77]",
      onClick: () => onNavigate("profile"),
    },
  ];

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[#6BCB77]">Mbote! 👋</h1>
            <p className="text-muted-foreground">
              Prêt à apprendre le Lari aujourd'hui?
            </p>
          </div>
          <Mascot className="scale-75" />
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                onClick={item.onClick}
                className="p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 bg-white border-0 shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`${item.color} p-3 rounded-2xl text-white flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#333333] mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Daily Streak */}
        <Card className="p-6 bg-gradient-to-r from-[#FFD56B] to-[#6BCB77] border-0 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Série quotidienne</p>
              <p className="text-3xl">🔥 7 jours</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">Ton niveau</p>
              <p className="text-2xl">Débutant</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
