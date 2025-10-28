import React from "react";
import { Link } from "react-router-dom";

export default function ConditionsVente() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-400">
          Conditions Générales de Vente (CGV)
        </h1>

        {/* 1. Objet */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Objet</h2>
          <p className="text-white/70 leading-relaxed">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
            <span className="text-green-400 font-semibold"> HackLayer </span> et toute personne physique 
            ou morale (le "Client") souhaitant bénéficier d’une prestation en cybersécurité, audit ou pentest.
          </p>
        </section>

        {/* 2. Prestations proposées */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Prestations proposées</h2>
          <p className="text-white/70 leading-relaxed">
            HackLayer propose des prestations de test d’intrusion, d’audit de sécurité, de conseil et de 
            formation en cybersécurité. Chaque mission fait l’objet d’un devis détaillé précisant le périmètre, 
            les objectifs et les tarifs.
          </p>
        </section>

        {/* 3. Commande et acceptation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Commande et acceptation</h2>
          <p className="text-white/70 leading-relaxed">
            Toute commande passée via le site ou validée par e-mail implique l’acceptation sans réserve des 
            présentes CGV. Le devis signé ou la validation électronique vaut engagement ferme.
          </p>
        </section>

        {/* 4. Prix et paiement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Prix et paiement</h2>
          <p className="text-white/70 leading-relaxed">
            Les prix sont indiqués en euros, hors TVA (21% sauf exonération légale). 
            Le paiement s’effectue selon les modalités définies dans le devis (Stripe, virement bancaire, etc.).
            <br />
            Aucun remboursement n’est possible une fois la prestation commencée, sauf accord écrit contraire.
          </p>
        </section>

        {/* 5. Délais d’exécution */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Délais d’exécution</h2>
          <p className="text-white/70 leading-relaxed">
            Les délais d’intervention sont fixés d’un commun accord entre HackLayer et le Client. 
            Ils sont indicatifs et peuvent varier selon la complexité du projet ou des imprévus techniques.
          </p>
        </section>

        {/* 6. Obligations du client */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Obligations du client</h2>
          <p className="text-white/70 leading-relaxed">
            Le Client s’engage à fournir toutes les informations nécessaires à la bonne exécution du pentest 
            (autorisations, accès techniques, documentation). 
            Toute action d’audit ou de test non autorisée est strictement exclue.
          </p>
        </section>

        {/* 7. Responsabilité */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Responsabilité</h2>
          <p className="text-white/70 leading-relaxed">
            HackLayer intervient dans le cadre légal et contractuel défini avec le Client. 
            Sa responsabilité ne peut être engagée pour des dommages indirects, pertes de données ou interruptions 
            de service résultant d’un test autorisé par le Client.
          </p>
        </section>

        {/* 8. Confidentialité */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Confidentialité</h2>
          <p className="text-white/70 leading-relaxed">
            Toutes les informations échangées dans le cadre d’un audit ou d’un test d’intrusion sont strictement 
            confidentielles. HackLayer s’engage à ne divulguer aucune donnée technique ou stratégique sans 
            l’accord écrit du Client.
          </p>
        </section>

        {/* 9. Propriété des livrables */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">9. Propriété des livrables</h2>
          <p className="text-white/70 leading-relaxed">
            Les rapports, analyses et recommandations produits par HackLayer restent la propriété intellectuelle 
            de HackLayer jusqu’au paiement intégral de la prestation.
          </p>
        </section>

        {/* 10. Droit de rétractation */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">10. Droit de rétractation</h2>
          <p className="text-white/70 leading-relaxed">
            Conformément au droit belge, le Client professionnel ne bénéficie pas du droit de rétractation. 
            Le Client particulier dispose d’un délai de 14 jours pour annuler sa commande, sauf si la prestation 
            a déjà commencé avec son accord explicite.
          </p>
        </section>

        {/* 11. Données personnelles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">11. Données personnelles</h2>
          <p className="text-white/70 leading-relaxed">
            Les données collectées pour la facturation et la communication sont traitées conformément au RGPD 
            et à la politique de confidentialité disponible dans les{" "}
            <Link to="/mentions-legales" className="text-green-400 underline hover:text-green-300">
              mentions légales
            </Link>.
          </p>
        </section>

        {/* 12. Droit applicable */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">12. Droit applicable</h2>
          <p className="text-white/70 leading-relaxed">
            Les présentes CGV sont régies par le droit belge. 
            Tout litige sera soumis à la compétence exclusive des tribunaux de l’arrondissement du siège de HackLayer.
          </p>
        </section>

        {/* Lien retour */}
        <div className="mt-12 text-center">
          <Link
            to="/pentest"
            className="text-green-400 underline hover:text-green-300 transition"
          >
            ← Retour à la page Pentest
          </Link>
        </div>
      </div>
    </div>
  );
}
