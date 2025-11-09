import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { BookOpen, ArrowLeft } from "lucide-react";

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--congo-green-lighter)] via-white to-[var(--congo-yellow-lighter)] relative overflow-hidden flex items-center justify-center px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="login-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="var(--congo-green)" />
              <circle cx="60" cy="60" r="3" fill="var(--congo-yellow)" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#login-pattern)" />
        </svg>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[var(--congo-green)] hover:text-[var(--congo-green-light)] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>

        {/* Login card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--congo-green)] to-[var(--congo-green-light)] flex items-center justify-center shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Welcome message */}
          <div className="text-center mb-8">
            <h1 className="mb-2 text-[var(--foreground)]">Mbote ! 👋</h1>
            <p className="text-[var(--muted-foreground)]">Heureux de te revoir</p>
          </div>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="ton.email@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl border-gray-200 focus:border-[var(--congo-green)] focus:ring-[var(--congo-green)]"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <button
                  type="button"
                  className="text-sm text-[var(--congo-green)] hover:text-[var(--congo-green-light)]"
                >
                  Mot de passe oublié ?
                </button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-gray-200 focus:border-[var(--congo-green)] focus:ring-[var(--congo-green)]"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-[var(--congo-green)] to-[var(--congo-green-light)] hover:from-[var(--congo-green-light)] hover:to-[var(--congo-green)] text-white shadow-lg shadow-[var(--congo-green)]/30"
            >
              Se connecter
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-[var(--muted-foreground)]">
                Nouveau sur Ngunga ?
              </span>
            </div>
          </div>

          {/* Sign up link */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-14 rounded-xl border-2 border-[var(--congo-green)] text-[var(--congo-green)] hover:bg-[var(--congo-green-lighter)]"
          >
            Créer un compte gratuitement
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            🔒 Tes données sont sécurisées et confidentielles
          </p>
        </div>
      </div>
    </div>
  );
}
