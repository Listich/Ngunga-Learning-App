import { ArrowLeft } from "lucide-react";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--congo-green-lighter)] via-white to-[var(--congo-yellow-lighter)] px-6 py-10">
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
          Conditions d’utilisation 🌿
        </h1>

        {/* Contenu */}
        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            Bienvenue sur <strong>Ngunga</strong> ! En utilisant notre application,
            vous acceptez les présentes conditions d’utilisation. Merci de les lire
            attentivement avant de créer un compte.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">1. Utilisation du service</h2>
          <p>
            Ngunga est une plateforme d’apprentissage linguistique dédiée à la promotion
            des langues congolaises. Vous vous engagez à utiliser nos services de manière
            respectueuse, sans diffusion de contenu offensant, illégal ou trompeur.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">2. Données personnelles</h2>
          <p>
            Vos données sont strictement confidentielles et ne seront jamais vendues.
            Nous collectons uniquement les informations nécessaires à la création
            de votre compte et à l’amélioration de votre expérience.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">3. Propriété intellectuelle</h2>
          <p>
            Tous les contenus (textes, images, exercices) appartiennent à Ngunga.
            Vous n’êtes pas autorisé à reproduire ou distribuer ce contenu sans notre accord écrit.
          </p>

          <h2 className="text-xl font-semibold text-[var(--congo-green)]">4. Résiliation</h2>
          <p>
            Nous nous réservons le droit de suspendre un compte en cas de non-respect
            des conditions d’utilisation.
          </p>

          <p className="pt-6 italic text-gray-500">
            Dernière mise à jour : Novembre 2025
          </p>
        </div>
      </div>
    </div>
  );
}
