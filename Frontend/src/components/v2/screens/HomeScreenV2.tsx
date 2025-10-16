import { Card } from "../../ui/card";
import { Progress } from "../../ui/progress";
import { motion } from "motion/react";
import { Trophy, Flame, Star, Zap } from "lucide-react";
import { AfricanPattern } from "../AfricanPattern";

export function HomeScreenV2() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header with Pattern */}
      <div className="relative bg-gradient-to-br from-[#6BCB77] to-[#5BB967] rounded-b-[40px] pb-8 pt-6 px-6">
        <div className="absolute inset-0 opacity-10">
          <AfricanPattern variant="zigzag" color="#ffffff" />
        </div>

        <div className="relative z-10 space-y-6">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h2 className="text-white mb-1">Mbote! 👋</h2>
              <p className="text-white/80">Prêt pour la leçon du jour?</p>
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#FFD56B] rounded-2xl flex items-center justify-center">
                    <Flame className="w-6 h-6 text-[#C85C5C]" />
                  </div>
                  <div>
                    <p className="text-[#333333]">Série quotidienne</p>
                    <p className="text-2xl text-[#C85C5C]">7 jours 🔥</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Niveau</p>
                  <p className="text-lg text-[#6BCB77]">Débutant</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Progression du niveau</span>
                  <span className="text-[#6BCB77]">1,250 / 2,000 XP</span>
                </div>
                <Progress value={62} className="h-3" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 mt-6 space-y-6">
        {/* Today's Goal */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-[#333333] mb-4">Objectif du jour</h3>
          <Card className="bg-gradient-to-r from-[#FFD56B] to-[#FFE89B] border-0 shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#FFD56B]" />
                </div>
                <div>
                  <p className="text-[#333333] mb-1">Apprends 5 nouveaux mots</p>
                  <div className="flex items-center space-x-2">
                    <Progress value={60} className="h-2 w-32" />
                    <span className="text-sm text-gray-600">3/5</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-[#333333] mb-4">Continue ton apprentissage</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Leçon",
                subtitle: "Famille",
                icon: "👨‍👩‍👧‍👦",
                progress: 60,
                color: "from-[#6BCB77] to-[#5BB967]",
              },
              {
                title: "Quiz",
                subtitle: "Salutations",
                icon: "🧠",
                progress: 0,
                color: "from-[#FFD56B] to-[#FFE89B]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br ${item.color} border-0 shadow-lg p-6 h-full cursor-pointer hover:scale-105 transition-transform`}>
                  <div className="flex flex-col h-full">
                    <span className="text-4xl mb-3">{item.icon}</span>
                    <p className="text-white mb-1">{item.title}</p>
                    <p className="text-white/80 text-sm mb-auto">{item.subtitle}</p>
                    {item.progress > 0 && (
                      <Progress
                        value={item.progress}
                        className="h-2 mt-3 bg-white/30"
                      />
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Trophy, label: "Leçons", value: "8", color: "#6BCB77" },
            { icon: Zap, label: "Mots", value: "45", color: "#FFD56B" },
            { icon: Star, label: "Quiz", value: "12", color: "#C85C5C" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="border-0 shadow-md p-4 text-center">
                  <div
                    className="w-10 h-10 rounded-xl mx-auto mb-2 flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                  <p className="text-2xl text-[#333333] mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Proverb of the Day */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-gradient-to-br from-[#C85C5C] to-[#B84C4C] border-0 shadow-lg p-6 text-white">
            <p className="text-sm opacity-80 mb-2">Proverbe du jour</p>
            <p className="italic mb-2">"Nki diaka dia nsi, mbote dia batu."</p>
            <p className="text-sm opacity-90">
              Comme la terre nourrit, les gens se soutiennent.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
