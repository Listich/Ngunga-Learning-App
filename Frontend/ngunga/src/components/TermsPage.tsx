import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f5ea] via-white to-[#fef9e7] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-6 flex items-center gap-2 text-[#2d7a3e] hover:text-[#40a855]"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </Button>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-600 mb-8">
            Version du {new Date().toLocaleDateString('fr-FR')} - Application en phase de test (MVP)
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Présentation du service</h2>
            <p className="text-gray-700 mb-4">
              Ngunga est une application d'apprentissage de la langue Lari, créée et opérée depuis la France. 
              Le service est actuellement en phase de test (version MVP - Minimum Viable Product).
            </p>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600"><strong>Éditeur :</strong> [Ton nom/Structure]</p>
              <p className="text-sm text-gray-600"><strong>Siège social :</strong> [Ton adresse]</p>
              <p className="text-sm text-gray-600"><strong>Contact :</strong> [Ton email]</p>
              <p className="text-sm text-gray-600"><strong>Hébergement :</strong> [Nom hébergeur]</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acceptation des conditions</h2>
            <p className="text-gray-700">
              En utilisant Ngunga, vous acceptez les présentes conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Accès au service</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Inscription</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>L'inscription est gratuite</li>
              <li>Vous devez fournir une adresse email valide</li>
              <li>Vous devez avoir au moins 13 ans (ou l'âge minimum légal dans votre pays)</li>
              <li>Vous êtes responsable de la confidentialité de votre compte</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Service gratuit</h3>
            <p className="text-gray-700">
              Actuellement, Ngunga est entièrement gratuit. Aucun paiement n'est requis.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Utilisation de vos données</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Données collectées</h3>
            <p className="text-gray-700 mb-2">Nous collectons uniquement :</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Votre adresse email</li>
              <li>Votre progression dans l'application (leçons complétées, scores, XP)</li>
              <li>Vos préférences d'apprentissage</li>
              <li>Données d'utilisation (pages visitées, temps passé)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Utilisation des données</h3>
            <p className="text-gray-700 mb-2">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Vous fournir le service d'apprentissage</li>
              <li>Améliorer l'application (analyser ce qui plaît aux utilisateurs)</li>
              <li>Suivre votre progression</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Stockage</h3>
            <p className="text-gray-700 mb-4">
              Vos données sont stockées sur MongoDB avec des mesures de sécurité appropriées.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Pas de vente de données</h3>
            <p className="text-gray-700 mb-4 font-semibold text-[#2d7a3e]">
              Nous ne vendons JAMAIS vos données à des tiers.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.5 Vos droits (RGPD)</h3>
            <p className="text-gray-700 mb-2">Conformément au RGPD, vous avez le droit de :</p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Accéder</strong> à vos données personnelles</li>
              <li><strong>Rectifier</strong> vos données</li>
              <li><strong>Supprimer</strong> votre compte et vos données</li>
              <li><strong>Exporter</strong> vos données</li>
              <li><strong>Vous opposer</strong> au traitement de vos données</li>
            </ul>
            <p className="text-gray-700">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:[ton-email]" className="text-[#2d7a3e] underline">[ton email]</a>
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Contenu de l'application</h3>
            <p className="text-gray-700 mb-4">
              Tous les contenus (leçons, images, textes, design) sont protégés par le droit d'auteur 
              et appartiennent à Ngunga ou à ses partenaires.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Votre contenu</h3>
            <p className="text-gray-700">
              Vous conservez la propriété de tout contenu que vous pourriez créer dans l'application.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilité</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Service "tel quel"</h3>
            <p className="text-gray-700 mb-4">
              Ngunga est fourni "en l'état" sans garantie d'aucune sorte. 
              L'application est en phase de test et peut contenir des bugs.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Disponibilité</h3>
            <p className="text-gray-700 mb-4">
              Nous ne garantissons pas que le service sera disponible 24h/24 et 7j/7.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Limitation de responsabilité</h3>
            <p className="text-gray-700">
              Dans la limite autorisée par la loi, Ngunga ne sera pas responsable des dommages 
              indirects liés à l'utilisation de l'application.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Résiliation</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Par vous</h3>
            <p className="text-gray-700 mb-4">
              Vous pouvez supprimer votre compte à tout moment depuis les paramètres de votre profil 
              ou en nous contactant.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Par nous</h3>
            <p className="text-gray-700 mb-2">Nous pouvons suspendre ou fermer votre compte en cas de :</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Violation des présentes conditions</li>
              <li>Utilisation abusive du service</li>
              <li>Comportement inapproprié</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier ces conditions à tout moment. 
              Les modifications entreront en vigueur dès leur publication. 
              Nous vous informerons des changements importants par email.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Loi applicable</h2>
            <p className="text-gray-700">
              Ces conditions sont régies par le droit français. Tout litige sera soumis aux 
              tribunaux compétents de [ta ville].
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
            <p className="text-gray-700">
              Nous utilisons des cookies essentiels pour le fonctionnement de l'application. 
              Vous pouvez les désactiver dans les paramètres de votre navigateur, 
              mais cela peut affecter le fonctionnement du service.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <p className="text-gray-700 mb-2">
              Pour toute question concernant ces conditions d'utilisation :
            </p>
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600"><strong>Email :</strong> [ton email]</p>
              <p className="text-sm text-gray-600"><strong>Adresse :</strong> [ton adresse]</p>
            </div>
          </section>

          {/* Section 12 - MVP Warning */}
          <section className="mb-8">
            <div className="bg-[#fef9e7] border-2 border-[#fbbf24] rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                ⚠️ 12. Mentions spéciales - Phase MVP
              </h2>
              <p className="text-gray-700 mb-4 font-semibold">
                IMPORTANT : Ngunga est actuellement en phase de test (MVP).
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Le service peut être modifié ou interrompu à tout moment</li>
                <li>Des bugs peuvent survenir</li>
                <li>Vos retours sont précieux pour améliorer l'application</li>
                <li>Certaines fonctionnalités peuvent être ajoutées ou retirées</li>
              </ul>
            </div>
          </section>

          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}