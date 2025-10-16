import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { ArrowLeft, Trophy, Star, Flame, Award } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  const stats = [
    { label: "Mots appris", value: "45", icon: Star, color: "#FFD56B" },
    { label: "Leçons complétées", value: "8", icon: Trophy, color: "#6BCB77" },
    { label: "Série actuelle", value: "7", icon: Flame, color: "#C85C5C" },
    { label: "Quiz réussis", value: "12", icon: Award, color: "#6BCB77" },
  ];

  const badges = [
    { id: 1, name: "Première leçon", emoji: "🎓", unlocked: true },
    { id: 2, name: "Série de 7 jours", emoji: "🔥", unlocked: true },
    { id: 3, name: "50 mots appris", emoji: "📚", unlocked: false },
    { id: 4, name: "Quiz parfait", emoji: "⭐", unlocked: true },
    { id: 5, name: "Explorateur", emoji: "🌍", unlocked: false },
    { id: 6, name: "Série de 30 jours", emoji: "💎", unlocked: false },
  ];

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("home")}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="text-[#333333]">Mon Profil</h2>
            <p className="text-sm text-muted-foreground">
              Consulte ta progression
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="p-6 bg-gradient-to-br from-[#6BCB77] to-[#FFD56B] border-0 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjB0cmFkaXRpb25hbCUyMGRyZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMjI1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3>Apprenant Ngunga</h3>
              <p className="text-sm opacity-90">Niveau: Débutant</p>
              <div className="mt-2">
                <div className="flex justify-between text-xs mb-1">
                  <span>1,250 XP</span>
                  <span>2,000 XP</span>
                </div>
                <Progress value={62} className="h-2 bg-white/30" />
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-4 bg-white border-0 shadow-md">
                <div className="flex items-center space-x-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p className="text-2xl text-[#333333]">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Badges Section */}
        <div>
          <h3 className="text-[#333333] mb-4">Badges 🏆</h3>
          <div className="grid grid-cols-3 gap-4">
            {badges.map((badge) => (
              <Card
                key={badge.id}
                className={`p-4 border-0 ${
                  badge.unlocked
                    ? "bg-white shadow-md"
                    : "bg-gray-100 opacity-60"
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-3xl">{badge.emoji}</div>
                  <p className="text-xs text-[#333333]">{badge.name}</p>
                  {badge.unlocked && (
                    <Badge className="bg-[#6BCB77] hover:bg-[#6BCB77] text-white text-xs">
                      Débloqué
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Activity Chart */}
        <Card className="p-6 bg-white border-0 shadow-md">
          <h4 className="text-[#333333] mb-4">Activité de la semaine</h4>
          <div className="flex items-end justify-between h-32 space-x-2">
            {[65, 80, 45, 90, 70, 100, 85].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-[#6BCB77] rounded-t-lg transition-all hover:opacity-80"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-muted-foreground mt-2">
                  {["L", "M", "M", "J", "V", "S", "D"][index]}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
