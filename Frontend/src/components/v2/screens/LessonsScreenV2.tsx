import { Card } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Progress } from "../../ui/progress";
import { motion } from "motion/react";
import { CheckCircle2, Lock, Play } from "lucide-react";

interface LessonsScreenV2Props {
  onSelectLesson: (lessonId: number) => void;
}

export function LessonsScreenV2({ onSelectLesson }: LessonsScreenV2Props) {
  const lessons = [
    {
      id: 1,
      title: "Salutations",
      icon: "👋",
      progress: 100,
      completed: true,
      words: 8,
      color: "from-[#6BCB77] to-[#5BB967]",
    },
    {
      id: 2,
      title: "Famille",
      icon: "👨‍👩‍👧‍👦",
      progress: 60,
      completed: false,
      words: 12,
      color: "from-[#FFD56B] to-[#FFE89B]",
    },
    {
      id: 3,
      title: "Nourriture",
      icon: "🍌",
      progress: 30,
      completed: false,
      words: 15,
      color: "from-[#C85C5C] to-[#B84C4C]",
    },
    {
      id: 4,
      title: "Animaux",
      icon: "🦁",
      progress: 0,
      completed: false,
      words: 10,
      locked: true,
      color: "from-gray-300 to-gray-400",
    },
    {
      id: 5,
      title: "Nature",
      icon: "🌿",
      progress: 0,
      completed: false,
      words: 12,
      locked: true,
      color: "from-gray-300 to-gray-400",
    },
    {
      id: 6,
      title: "Maison",
      icon: "🏠",
      progress: 0,
      completed: false,
      words: 14,
      locked: true,
      color: "from-gray-300 to-gray-400",
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#6BCB77] to-[#5BB967] rounded-b-[40px] pb-8 pt-6 px-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white mb-1">Mes Leçons</h2>
            <p className="text-white/80">Apprends à ton rythme</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 text-sm">Complétées</p>
            <p className="text-white text-2xl">1/6</p>
          </div>
        </div>
      </div>

      {/* Lessons Path */}
      <div className="px-6 space-y-4">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={index % 2 === 0 ? "pr-8" : "pl-8"}
          >
            <Card
              onClick={() => !lesson.locked && onSelectLesson(lesson.id)}
              className={`relative border-0 shadow-lg overflow-hidden ${
                lesson.locked
                  ? "cursor-not-allowed"
                  : "cursor-pointer hover:scale-105 transition-transform"
              }`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${lesson.color} ${
                  lesson.locked ? "opacity-40" : "opacity-100"
                }`}
              />

              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center text-4xl ${
                        lesson.locked ? "grayscale" : ""
                      }`}
                    >
                      {lesson.icon}
                    </div>
                    <div>
                      <h3
                        className={lesson.locked ? "text-gray-400" : "text-white"}
                      >
                        {lesson.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          lesson.locked ? "text-gray-400" : "text-white/80"
                        }`}
                      >
                        {lesson.words} mots à apprendre
                      </p>
                    </div>
                  </div>

                  {lesson.locked ? (
                    <Lock className="w-6 h-6 text-gray-400" />
                  ) : lesson.completed ? (
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  ) : (
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-[#6BCB77] ml-0.5" />
                    </div>
                  )}
                </div>

                {!lesson.locked && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Progress
                        value={lesson.progress}
                        className="h-2 flex-1 mr-3 bg-white/30"
                      />
                      <Badge className="bg-white/20 text-white border-0 hover:bg-white/20">
                        {lesson.progress}%
                      </Badge>
                    </div>
                  </div>
                )}

                {lesson.locked && (
                  <div className="flex items-center space-x-2 mt-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-400">
                      Termine la leçon précédente
                    </p>
                  </div>
                )}
              </div>

              {/* Decorative circle */}
              <div
                className={`absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full ${
                  lesson.locked ? "opacity-30" : ""
                }`}
              />
            </Card>

            {/* Connector Line */}
            {index < lessons.length - 1 && (
              <div
                className={`w-1 h-6 mx-auto my-2 ${
                  lessons[index + 1].locked
                    ? "bg-gray-300"
                    : "bg-gradient-to-b from-[#6BCB77] to-[#FFD56B]"
                }`}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
