import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { Mascot } from "../Mascot";

interface QuizScreenProps {
  onNavigate: (screen: string) => void;
}

export function QuizScreen({ onNavigate }: QuizScreenProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Comment dit-on 'Bonjour' en Lari?",
      options: ["Matondo", "Mbote", "Yandi", "Kala"],
      correctAnswer: 1,
    },
    {
      question: "Que signifie 'Matondo' en français?",
      options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
      correctAnswer: 2,
    },
    {
      question: "Comment dit-on 'Oui' en Lari?",
      options: ["Kala", "Yandi", "Mbote", "Nzambi"],
      correctAnswer: 1,
    },
    {
      question: "Que signifie 'Kala'?",
      options: ["Oui", "Peut-être", "Non", "Merci"],
      correctAnswer: 2,
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
      setShowFeedback(true);
      if (index === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz completed
      onNavigate("home");
    }
  };

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("home")}
            className="rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1 mx-4">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#6BCB77] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <span className="text-sm text-muted-foreground">
            {currentQuestionIndex + 1}/{questions.length}
          </span>
        </div>

        {/* Mascot */}
        <div className="flex justify-center">
          <Mascot />
        </div>

        {/* Question Card */}
        <Card className="p-8 bg-white border-0 shadow-lg">
          <h3 className="text-[#333333] text-center mb-6">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              const showCorrect = showFeedback && isCorrectAnswer;
              const showWrong = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                    showCorrect
                      ? "border-[#6BCB77] bg-[#6BCB77]/10"
                      : showWrong
                      ? "border-[#C85C5C] bg-[#C85C5C]/10"
                      : isSelected
                      ? "border-[#6BCB77] bg-[#6BCB77]/5"
                      : "border-gray-200 hover:border-[#6BCB77]/50"
                  } ${showFeedback ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[#333333]">{option}</span>
                    {showCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-[#6BCB77]" />
                    )}
                    {showWrong && (
                      <XCircle className="w-5 h-5 text-[#C85C5C]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Feedback */}
        {showFeedback && (
          <Card
            className={`p-6 border-0 ${
              isCorrect
                ? "bg-[#6BCB77] text-white"
                : "bg-[#C85C5C] text-white"
            }`}
          >
            <div className="flex items-center space-x-4">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-8 h-8" />
                  <div>
                    <h4>Bravo! 🎉</h4>
                    <p className="text-sm opacity-90">
                      C'est la bonne réponse!
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="w-8 h-8" />
                  <div>
                    <h4>Essaie encore!</h4>
                    <p className="text-sm opacity-90">
                      La bonne réponse est:{" "}
                      {currentQuestion.options[currentQuestion.correctAnswer]}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Card>
        )}

        {/* Next Button */}
        {showFeedback && (
          <Button
            onClick={handleNext}
            size="lg"
            className="w-full bg-[#6BCB77] hover:bg-[#5BB967] text-white rounded-full py-6"
          >
            {currentQuestionIndex < questions.length - 1
              ? "Question suivante"
              : `Terminer (Score: ${score}/${questions.length})`}
          </Button>
        )}
      </div>
    </div>
  );
}
