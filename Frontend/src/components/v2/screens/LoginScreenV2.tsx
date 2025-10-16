import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Lock, ArrowRight } from "lucide-react";

interface LoginScreenV2Props {
  onLogin: () => void;
}

export function LoginScreenV2({ onLogin }: LoginScreenV2Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Top Curved Background */}
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-br from-[#6BCB77] to-[#FFD56B] rounded-b-[50px]">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full" />
          <div className="absolute top-32 right-16 w-16 h-16 bg-white rounded-full" />
          <div className="absolute top-20 right-32 w-12 h-12 bg-white rounded-full" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center px-6 pt-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-4 rotate-6">
            <span className="text-5xl">🌿</span>
          </div>
          <h2 className="text-white mb-2">Bienvenue!</h2>
          <p className="text-white/90">Connecte-toi pour continuer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-[40px] shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#333333]">
                  Adresse email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="ton@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 py-6 rounded-2xl bg-gray-50 border-0"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#333333]">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 py-6 rounded-2xl bg-gray-50 border-0"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                className="text-[#6BCB77] hover:underline text-sm"
              >
                Mot de passe oublié?
              </button>

              <Button
                type="submit"
                size="lg"
                className="w-full py-7 bg-gradient-to-r from-[#6BCB77] to-[#5BB967] hover:from-[#5BB967] hover:to-[#6BCB77] text-white rounded-full shadow-lg group"
              >
                Se connecter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-3">Pas encore de compte?</p>
              <button
                onClick={onLogin}
                className="text-[#6BCB77] hover:underline"
              >
                Créer un compte gratuitement
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="w-12 h-1 bg-[#6BCB77] rounded-full" />
            <span className="text-gray-400 text-sm">ou</span>
            <div className="w-12 h-1 bg-[#6BCB77] rounded-full" />
          </div>

          <Button
            variant="outline"
            onClick={onLogin}
            className="w-full mt-6 py-6 bg-white border-2 border-gray-200 rounded-full"
          >
            <span className="mr-2">📱</span>
            Continuer avec Google
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
