import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Volume2, ArrowRight } from "lucide-react";
import { Mascot } from "../Mascot";

interface LessonDetailScreenProps {
  onNavigate: (screen: string) => void;
}

export function LessonDetailScreen({ onNavigate }: LessonDetailScreenProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    {
      lari: "Mbote",
      french: "Bonjour",
      pronunciation: "m-bo-té",
      example: "Mbote mama! (Bonjour maman!)",
    },
    {
      lari: "Matondo",
      french: "Merci",
      pronunciation: "ma-ton-do",
      example: "Matondo mingi! (Merci beaucoup!)",
    },
    {
      lari: "Yandi",
      french: "Oui",
      pronunciation: "yan-di",
      example: "Yandi, nzolaka. (Oui, je veux.)",
    },
    {
      lari: "Kala",
      french: "Non",
      pronunciation: "ka-la",
      example: "Kala, yandi ko. (Non, ce n'est pas ça.)",
    },
  ];

  const currentWord = words[currentWordIndex];
  const progress = ((currentWordIndex + 1) / words.length) * 100;

  const handleNext = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      onNavigate("lessons");
    }
  };

  const playAudio = () => {
    // Simulate audio playback
    console.log("Playing audio for:", currentWord.lari);
  };

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate("lessons")}
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
            {currentWordIndex + 1}/{words.length}
          </span>
        </div>

        {/* Mascot */}
        <div className="flex justify-center">
          <Mascot />
        </div>

        {/* Word Card */}
        <Card className="p-8 bg-white border-0 shadow-lg text-center space-y-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Mot en Lari</p>
              <h1 className="text-[#6BCB77] text-5xl">{currentWord.lari}</h1>
              <p className="text-muted-foreground mt-2">
                {currentWord.pronunciation}
              </p>
            </div>

            <Button
              onClick={playAudio}
              size="lg"
              className="rounded-full bg-[#FFD56B] hover:bg-[#FFD56B]/90 text-[#333333]"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              Écouter
            </Button>

            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-2">Traduction</p>
              <p className="text-2xl text-[#333333]">{currentWord.french}</p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Exemple</p>
              <p className="text-[#333333]">{currentWord.example}</p>
            </div>
          </div>
        </Card>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          size="lg"
          className="w-full bg-[#6BCB77] hover:bg-[#5BB967] text-white rounded-full py-6"
        >
          {currentWordIndex < words.length - 1 ? (
            <>
              Suivant
              <ArrowRight className="w-5 h-5 ml-2" />
            </>
          ) : (
            "Terminer la leçon"
          )}
        </Button>
      </div>
    </div>
  );
}
