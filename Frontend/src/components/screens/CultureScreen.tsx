import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CultureScreenProps {
  onNavigate: (screen: string) => void;
}

export function CultureScreen({ onNavigate }: CultureScreenProps) {
  const cultureItems = [
    {
      id: 1,
      title: "Musique traditionnelle Kongo",
      description: "Découvre les rythmes ancestraux",
      image: "https://images.unsplash.com/photo-1650378047270-cdb8cb8334ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbXVzaWMlMjBpbnN0cnVtZW50c3xlbnwxfHx8fDE3NjAyMjU2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "5 min",
    },
    {
      id: 2,
      title: "L'histoire du peuple Kongo",
      description: "Un voyage à travers les siècles",
      image: "https://images.unsplash.com/photo-1627837586900-56adbee910a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb25nbyUyMEFmcmljYW4lMjBjdWx0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MDIyNTY1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "8 min",
    },
    {
      id: 3,
      title: "Les tissus et pagnes Kongo",
      description: "L'art textile traditionnel",
      image: "https://images.unsplash.com/photo-1758633854855-3059c5b48674?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwcGF0dGVybnMlMjB0ZXh0aWxlfGVufDF8fHx8MTc2MDIyNTY1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "6 min",
    },
    {
      id: 4,
      title: "Proverbes et sagesse Kongo",
      description: "Les enseignements ancestraux",
      image: "https://images.unsplash.com/photo-1629160477511-e5e730a661ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tYW4lMjB0cmFkaXRpb25hbCUyMGRyZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMjI1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4 min",
    },
  ];

  const handlePlay = (itemId: number) => {
    console.log("Playing item:", itemId);
  };

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
            <h2 className="text-[#333333]">Culture & Musique</h2>
            <p className="text-sm text-muted-foreground">
              Plonge dans la culture Kongo
            </p>
          </div>
        </div>

        {/* Culture Items */}
        <div className="space-y-4">
          {cultureItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-4 p-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button
                      onClick={() => handlePlay(item.id)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Play className="w-5 h-5 text-[#6BCB77] ml-0.5" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[#333333] truncate">{item.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-xs bg-[#FFD56B]/20 text-[#333333] px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cultural Quote */}
        <Card className="p-6 bg-gradient-to-br from-[#6BCB77] to-[#FFD56B] border-0 text-white">
          <p className="text-center italic">
            "Nki diaka dia nsi, mbote dia batu."
          </p>
          <p className="text-center text-sm mt-2 opacity-90">
            Proverbe Kongo: "Comme la terre nourrit, les gens se soutiennent."
          </p>
        </Card>
      </div>
    </div>
  );
}
