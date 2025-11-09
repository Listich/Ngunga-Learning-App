import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { BookOpen, ArrowLeft, User, Mail, Lock, Eye, EyeOff } from "lucide-react";

interface RegisterPageProps {
  onRegister: () => void;
  onBack: () => void;
  onLoginClick?: () => void;
}

export function RegisterPage({ onRegister, onBack, onLoginClick }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Les mots de passe ne correspondent pas");
    return;
  }

  if (!acceptTerms) {
    alert("Veuillez accepter les conditions d'utilisation");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await response.json();

      if (response.ok) {
        alert("✅ Compte créé avec succès !");
        console.log("Utilisateur enregistré :", data);
        onRegister();
      } else {
        alert(data.message || "Erreur lors de l'inscription");
      }
    } catch (error) {
      console.error("Erreur frontend :", error);
      alert("❌ Impossible de communiquer avec le serveur.");
    }
  };


  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--congo-yellow-lighter)] via-white to-[var(--congo-green-lighter)] relative overflow-hidden flex items-center justify-center px-6 py-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <defs>
            <pattern id="register-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="var(--congo-yellow)" />
              <circle cx="60" cy="60" r="3" fill="var(--congo-green)" />
              <rect x="40" y="10" width="8" height="8" fill="var(--congo-red)" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#register-pattern)" />
        </svg>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-[var(--congo-green)] hover:text-[var(--congo-green-light)] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>

        {/* Register card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--congo-yellow)] to-[var(--congo-red)] flex items-center justify-center shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Welcome message */}
          <div className="text-center mb-8">
            <h1 className="mb-2 text-[var(--foreground)]">Bienvenue ! 🎉</h1>
            <p className="text-[var(--muted-foreground)]">Commence ton voyage d'apprentissage du Lari</p>
          </div>

          {/* Register form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name field */}
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Ton nom"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[var(--congo-yellow)] focus:ring-[var(--congo-yellow)]"
                  required
                />
              </div>
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ton.email@exemple.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="h-12 pl-11 rounded-xl border-gray-200 focus:border-[var(--congo-yellow)] focus:ring-[var(--congo-yellow)]"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 caractères"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="h-12 pl-11 pr-11 rounded-xl border-gray-200 focus:border-[var(--congo-yellow)] focus:ring-[var(--congo-yellow)]"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm password field */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Retape ton mot de passe"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className="h-12 pl-11 pr-11 rounded-xl border-gray-200 focus:border-[var(--congo-yellow)] focus:ring-[var(--congo-yellow)]"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms and conditions */}
            <div className="flex items-start gap-3 pt-2">
            <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                className="mt-1 border-gray-300 data-[state=checked]:bg-[var(--congo-green)] data-[state=checked]:border-[var(--congo-green)]"
            />
            <label
                htmlFor="terms"
                className="text-sm text-[var(--muted-foreground)] leading-tight cursor-pointer"
            >
                J'accepte les{" "}
                <a
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--congo-green)] hover:underline"
                >
                conditions d'utilisation
                </a>{" "}
                et la{" "}
                <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--congo-green)] hover:underline"
                >
                politique de confidentialité
                </a>
            </label>
            </div>


            {/* Submit button */}
            <Button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-[var(--congo-yellow)] via-[var(--congo-green)] to-[var(--congo-green-light)] hover:from-[var(--congo-green)] hover:to-[var(--congo-yellow)] text-white shadow-lg shadow-[var(--congo-yellow)]/30 transition-all duration-300"
            >
              Créer mon compte
            </Button>
          </form>


          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-[var(--muted-foreground)]">
                Déjà un compte ?
              </span>
            </div>
          </div>

          {/* Login link */}
          <Button
            type="button"
            variant="outline"
            onClick={onLoginClick}
            className="w-full h-14 rounded-xl border-2 border-[var(--congo-green)] text-[var(--congo-green)] hover:bg-[var(--congo-green-lighter)]"
          >
            Se connecter
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-[var(--muted-foreground)]">
            🔒 Tes données sont sécurisées et confidentielles
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            🇨🇬 Une initiative pour préserver et promouvoir le Lari
          </p>
        </div>
      </div>
    </div>
  );
}
