import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Mascot } from "../Mascot";
import { useState } from "react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <Mascot />
          <h2 className="text-[#6BCB77]">Bienvenue sur Ngunga</h2>
          <p className="text-center text-muted-foreground">
            Connecte-toi pour continuer ton apprentissage
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full bg-white border-gray-200"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-full bg-white border-gray-200"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full py-6 bg-[#6BCB77] hover:bg-[#5BB967] text-white rounded-full"
          >
            Se connecter
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={onLogin}
            className="text-[#6BCB77] hover:underline"
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
}
