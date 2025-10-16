import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Progress } from "../../ui/progress";
import { motion } from "motion/react";
import { Trophy, Flame, Star, Award, Target, TrendingUp, Settings } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function ProfileScreenV2() {
  const achievements = [
    { id: 1, name: "Première leçon", emoji: "🎓", unlocked: true, date: "Il y a 7 jours" },
    { id: 2, name: "Série de 7 jours", emoji: "🔥", unlocked: true, date: "Aujourd'hui" },
    { id: 3, name: "Quiz parfait", emoji: "⭐", unlocked: true, date: "Il y a 3 jours" },
    { id: 4, name: "50 mots", emoji: "📚", unlocked: false, date: null },
    { id: 5, name: "Explorateur", emoji: "🌍", unlocked: false, date: null },
    { id: 6, name: "30 jours", emoji: "💎", unlocked: false, date: null },
  ];

  const weekActivity = [
    { day: "L", value: 65, lessons: 2 },
    { day: "M", value: 80, lessons: 3 },
    { day: "M", value: 45, lessons: 1 },
    { day: "J", value: 90, lessons: 4 },
    { day: "V", value: 70, lessons: 2 },
    { day: "S", value: 100, lessons: 5 },
    { day: "D", value: 85, lessons: 3 },
  ];

  return (
    <div className="min-h-screen pb-24 bg-[#FFF9F0]">
      {/* Header Profile Card */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-[#6BCB77] via-[#FFD56B] to-[#C85C5C] rounded-b-[40px]" />
        
        <div className="absolute top-0 left-0 right-0 px-6 pt-6">
          <div className="flex justify-end mb-8">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <Card className="bg-white border-0 shadow-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjB0cmFkaXRpb25hbCUyMGRyZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMjI1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#6BCB77] rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-xs">🌿</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-[#333333] mb-1">Apprenant Ngunga</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className="bg-[#FFD56B] hover:bg-[#FFD56B] text-[#333333] border-0">
                      Niveau Débutant
                    </Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Progression</span>
                      <span className="text-[#6BCB77]">1,250 / 2,000 XP</span>
                    </div>
                    <Progress value={62} className="h-2" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="px-6 mt-32 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: Trophy,
              label: "Leçons complétées",
              value: "8",
              color: "#6BCB77",
              bg: "from-[#6BCB77] to-[#5BB967]",
            },
            {
              icon: Flame,
              label: "Série actuelle",
              value: "7 jours",
              color: "#C85C5C",
              bg: "from-[#C85C5C] to-[#B84C4C]",
            },
            {
              icon: Star,
              label: "Mots appris",
              value: "45",
              color: "#FFD56B",
              bg: "from-[#FFD56B] to-[#FFE89B]",
            },
            {
              icon: Award,
              label: "Quiz réussis",
              value: "12",
              color: "#6BCB77",
              bg: "from-[#6BCB77] to-[#5BB967]",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Card
                  className={`bg-gradient-to-br ${stat.bg} border-0 shadow-lg p-5 text-white`}
                >
                  <Icon className="w-6 h-6 mb-3 opacity-80" />
                  <p className="text-2xl mb-1">{stat.value}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Week Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="bg-white border-0 shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#333333]">Cette semaine</h3>
              <TrendingUp className="w-5 h-5 text-[#6BCB77]" />
            </div>

            <div className="flex items-end justify-between h-40 mb-4">
              {weekActivity.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${day.value}%` }}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="w-full max-w-[32px] bg-gradient-to-t from-[#6BCB77] to-[#5BB967] rounded-t-xl relative group cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#333333] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {day.lessons} leçons
                    </div>
                  </motion.div>
                  <span className="text-xs text-gray-500 mt-2">{day.day}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#6BCB77]/10 rounded-2xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#6BCB77] rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[#333333] text-sm">Objectif hebdomadaire</p>
                <p className="text-xs text-gray-500">20 leçons - Tu es à 75%!</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Badges 🏆</h3>
            <span className="text-sm text-gray-500">3/6 débloqués</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
              >
                <Card
                  className={`border-0 p-4 text-center relative overflow-hidden ${
                    achievement.unlocked
                      ? "bg-white shadow-lg"
                      : "bg-gray-100 opacity-60"
                  }`}
                >
                  {achievement.unlocked && (
                    <div className="absolute top-1 right-1">
                      <div className="w-5 h-5 bg-[#6BCB77] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  )}
                  <div className="text-3xl mb-2">{achievement.emoji}</div>
                  <p className="text-xs text-[#333333] mb-1">
                    {achievement.name}
                  </p>
                  {achievement.unlocked && achievement.date && (
                    <p className="text-xs text-gray-400">{achievement.date}</p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Card className="bg-gradient-to-br from-[#FFD56B] to-[#FFE89B] border-0 shadow-lg p-6 text-center">
            <p className="text-2xl mb-2">🎯</p>
            <p className="text-[#333333]">
              "Continue comme ça! Tu progresses chaque jour."
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
