import { Button } from "../ui/button";
import { Mascot } from "../Mascot";

interface SplashScreenProps {
  onStart: () => void;
}

export function SplashScreen({ onStart }: SplashScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#6BCB77] to-[#FFF9F0]">
      <div className="flex flex-col items-center space-y-8 max-w-md w-full">
        <Mascot className="animate-bounce" />
        
        <div className="text-center space-y-4">
          <h1 className="text-5xl text-white">Ngunga</h1>
          
          <p className="text-xl text-white/90">
            Apprends le Lari en t'amusant 🌿
          </p>
          
          <p className="text-white/80">
            Découvre la langue et la culture Kongo à travers des leçons ludiques, des quiz interactifs et de la musique traditionnelle.
          </p>
        </div>
        
        <Button
          onClick={onStart}
          className="w-full py-6 bg-white text-[#6BCB77] hover:bg-white/90 rounded-full shadow-lg"
        >
          Commencer l'aventure
        </Button>
      </div>
    </div>
  );
}
