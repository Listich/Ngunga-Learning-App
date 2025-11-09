import { ArrowLeft } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--congo-yellow-lighter)] via-white to-[var(--congo-green-lighter)] px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 relative">
        {/* Retour */}
        <a
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-[var(--congo-green)] hover:text-[var(--congo-green-light)]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </a>

        {/* Titre */}
        <h1 className="text-4xl font-bold text-[var(--congo-green)] mb-6 text-center">
          Politique de confidentialité 🔒
        </h1>

        {/* Contenu */}
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            La confidentialité de nos utilisateurs est essentielle à Ngunga.
            Nous nous engageons à protéger vos données personnelles et à les utiliser
            uniquement dans le cadre de nos services linguistiques.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">1. Données collectées</h2>
          <p>
            Nous collectons uniquement : votre nom, votre adresse e-mail, et vos préférences
            linguistiques. Ces données servent à personnaliser votre apprentissage.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">2. Sécurité</h2>
          <p>
            Vos informations sont stockées de manière sécurisée et chiffrée.
            Nous ne partageons jamais vos données avec des tiers non autorisés.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">3. Cookies</h2>
          <p>
            Ngunga utilise des cookies uniquement pour des raisons techniques,
            comme la sauvegarde de votre progression et la gestion de votre session.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">4. Vos droits</h2>
          <p>
            Vous pouvez à tout moment demander la suppression de votre compte ou la
            rectification de vos informations personnelles via notre support.
          </p>

          <p className="pt-6 italic text-gray-500">
            Dernière mise à jour : Novembre 2025
          </p>
        </div>
      </div>
    </div>
  );
}
