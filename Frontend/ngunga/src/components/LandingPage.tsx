import { Button } from "../ui/button";
import { BookOpen, Zap, Trophy, Heart } from "lucide-react";
import saladeImage from "../assets/images/salade.jpg";

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--congo-green-lighter)] via-white to-[var(--congo-yellow-lighter)] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <img
          src={saladeImage}
          alt="Pattern"
          className="w-full h-full object-cover rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--congo-green)] to-[var(--congo-green-light)] flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-[var(--foreground)]">Ngunga</span>
          </div>
          <Button
            onClick={onLogin}
            variant="outline"
            className="rounded-full border-2 border-[var(--congo-green)] text-[var(--congo-green)] hover:bg-[var(--congo-green-lighter)]"
          >
            Se connecter
          </Button>
        </header>

        {/* Hero section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm mb-6">
              <span className="text-sm text-[var(--congo-green)]">🇨🇬 Apprends ta langue maternelle</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-[var(--foreground)] leading-tight">
              Apprends le Lari en t'amusant 🌟
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-8 leading-relaxed">
              5 minutes par jour pour redécouvrir ta langue et ta culture congolaise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onGetStarted}
                size="lg"
                className="rounded-full bg-gradient-to-r from-[var(--congo-green)] to-[var(--congo-green-light)] hover:from-[var(--congo-green-light)] hover:to-[var(--congo-green)] text-white shadow-xl shadow-[var(--congo-green)]/30 px-8 py-6 text-lg"
              >
                Commencer gratuitement 🚀
              </Button>
              <Button
                onClick={onLogin}
                size="lg"
                variant="outline"
                className="rounded-full border-2 px-8 py-6 text-lg"
              >
                J'ai déjà un compte
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={saladeImage}
                alt="Apprendre le Lari"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--congo-yellow)] to-[var(--congo-yellow-light)] flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Plus de</p>
                  <p className="text-[var(--foreground)]">10,000 apprenants</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--congo-green)] to-[var(--congo-green-light)] flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-3 text-[var(--foreground)]">Apprentissage rapide</h3>
            <p className="text-[var(--muted-foreground)]">
              Des leçons courtes et efficaces qui s'adaptent à ton rythme.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--congo-yellow)] to-[var(--congo-yellow-light)] flex items-center justify-center mb-4">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-3 text-[var(--foreground)]">Gamification</h3>
            <p className="text-[var(--muted-foreground)]">
              Gagne des points XP, débloquer des badges et suivre ta progression.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--congo-red)] to-[var(--congo-red-light)] flex items-center justify-center mb-4">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="mb-3 text-[var(--foreground)]">Culture vivante</h3>
            <p className="text-[var(--muted-foreground)]">
              Apprends la langue à travers la culture, les traditions et le quotidien.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-white rounded-3xl p-12 shadow-xl">
          <h2 className="mb-4 text-[var(--foreground)]">
            Prêt à commencer ton voyage linguistique ? 🎯
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">
            Rejoins la communauté Ngunga et redécouvre le Lari
          </p>
          <Button
            onClick={onGetStarted}
            size="lg"
            className="rounded-full bg-gradient-to-r from-[var(--congo-green)] to-[var(--congo-green-light)] hover:from-[var(--congo-green-light)] hover:to-[var(--congo-green)] text-white shadow-xl shadow-[var(--congo-green)]/30 px-12 py-6 text-lg"
          >
            C'est parti ! 🚀
          </Button>
        </div>
      </div>
    </div>
  );
}
