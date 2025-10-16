import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { ArrowLeft, Lock, CheckCircle2 } from "lucide-react";

interface LessonsScreenProps {
  onNavigate: (screen: string) => void;
  onSelectLesson: (lessonId: number) => void;
}

export function LessonsScreen({ onNavigate, onSelectLesson }: LessonsScreenProps) {
  const lessons = [
    {
      id: 1,
      title: "Salutations",
      icon: "👋",
      progress: 100,
      completed: true,
      words: 8,
    },
    {
      id: 2,
      title: "Famille",
      icon: "👨‍👩‍👧‍👦",
      progress: 60,
      completed: false,
      words: 12,
    },
    {
      id: 3,
      title: "Nourriture",
      icon: "🍌",
      progress: 30,
      completed: false,
      words: 15,
    },
    {
      id: 4,
      title: "Animaux",
      icon: "🦁",
      progress: 0,
      completed: false,
      words: 10,
      locked: true,
    },
    {
      id: 5,
      title: "Nature",
      icon: "🌿",
      progress: 0,
      completed: false,
      words: 12,
      locked: true,
    },
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
            <h2 className="text-[#333333]">Leçons</h2>
            <p className="text-sm text-muted-foreground">
              Choisis une leçon pour commencer
            </p>
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Card
              key={lesson.id}
              onClick={() => !lesson.locked && onSelectLesson(lesson.id)}
              className={`p-6 bg-white border-0 shadow-md ${
                lesson.locked
                  ? "opacity-60 cursor-not-allowed"
                  : "cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{lesson.icon}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#333333]">{lesson.title}</h3>
                    {lesson.locked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : lesson.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#6BCB77]" />
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {lesson.words} mots
                  </p>
                  {!lesson.locked && (
                    <div className="space-y-1">
                      <Progress value={lesson.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {lesson.progress}% complété
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
