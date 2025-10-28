import React from "react";
import { Link } from "react-router-dom";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-400">
          Mentions légales & Politique de confidentialité
        </h1>

        {/* 1. Éditeur du site */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Éditeur du site</h2>
          <p className="text-white/70 leading-relaxed">
            Le présent site est édité par{" "}
            <span className="text-green-400 font-semibold">HackLayer</span>, 
            activité indépendante en cybersécurité et pentesting.
            <br />
            Nom du responsable :  <strong>Ch. Devleeshouwer</strong>
            <br />
            Siège d’exploitation :  <strong>4850 Montzen</strong>
            <br />
           {/* Numéro d’entreprise (BCE) : ⚙️ <strong>XXXXXXX</strong>
            <br />
            Numéro de TVA : ⚙️ <strong>BE0XXXXXXXXX</strong> */}
            <br />
            Contact :{" "}
            <a
              href="mailto:contact@hacklayer.be"
              className="text-green-400 underline hover:text-green-300"
            >
              contact@hacklayer.be
            </a>
            <br />
            Responsable de la publication : ⚙️ <strong>HackLayer</strong>
          </p>
        </section>

        {/* 2. Hébergement */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Hébergement</h2>
          <p className="text-white/70">
            Le site est hébergé par{" "}
            <span className="text-green-400 font-semibold">Netlify, Inc.</span>
            <br />
            Adresse : 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA
            <br />
            Site web :{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300"
            >
              www.netlify.com
            </a>
          </p>
        </section>

        {/* 3. Propriété intellectuelle */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Propriété intellectuelle</h2>
          <p className="text-white/70 leading-relaxed">
            L’ensemble du contenu présent sur ce site (textes, images, graphismes, logo, icônes,
            structure et design) est la propriété exclusive de HackLayer, sauf mention contraire.
            Toute reproduction, distribution, modification ou exploitation sans autorisation écrite
            préalable est strictement interdite, conformément au Code de droit économique belge.
          </p>
        </section>

        {/* 4. Données personnelles */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            4. Protection des données personnelles (RGPD / AVG)
          </h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Conformément au Règlement Général sur la Protection des Données (UE 2016/679), 
            HackLayer collecte uniquement les informations strictement nécessaires 
            pour répondre à vos demandes de contact.
          </p>
          <ul className="text-white/70 list-disc ml-6 space-y-2">
            <li>
              Responsable du traitement : HackLayer – contact@hacklayer.be
            </li>
            <li>
              Finalité : gestion des demandes via le formulaire de contact.
            </li>
            <li>
              Base légale : consentement de l’utilisateur.
            </li>
            <li>
              Durée de conservation : 12 mois maximum.
            </li>
            <li>
              Aucune donnée n’est partagée avec des tiers ou partenaires commerciaux.
            </li>
            <li>
              Vous disposez d’un droit d’accès, de rectification et de suppression 
              de vos données, que vous pouvez exercer à tout moment via{" "}
              <a
                href="mailto:contact@hacklayer.be"
                className="text-green-400 underline hover:text-green-300"
              >
                contact@hacklayer.be
              </a>.
            </li>
          </ul>
        </section>

        {/* 5. Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
          <p className="text-white/70 leading-relaxed">
            Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement 
            (préférences, consentement). 
            Aucun cookie publicitaire ni de suivi externe n’est utilisé.
            <br />
            Vous pouvez à tout moment supprimer ou bloquer les cookies via les paramètres de votre navigateur.
          </p>
        </section>

        {/* 6. Responsabilité */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Limitation de responsabilité</h2>
          <p className="text-white/70 leading-relaxed">
            HackLayer s’efforce d’assurer la fiabilité et la mise à jour des informations diffusées 
            sur ce site. Toutefois, des erreurs ou omissions peuvent survenir. 
            L’utilisateur reste responsable de l’utilisation des informations fournies.
            HackLayer ne pourra être tenue responsable d’un dommage direct ou indirect 
            résultant de l’utilisation du site.
          </p>
        </section>

        {/* 7. Droit applicable */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Droit applicable</h2>
          <p className="text-white/70 leading-relaxed">
            Les présentes mentions légales sont régies par le droit belge. 
            En cas de litige, les tribunaux compétents seront ceux de l’arrondissement judiciaire du siège de HackLayer.
          </p>
        </section>

        {/* 8. Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Contact</h2>
          <p className="text-white/70">
            Pour toute question ou demande d’information, vous pouvez nous contacter via la page{" "}
            <Link to="/pentest" className="text-green-400 underline hover:text-green-300">
              Pentest
            </Link>{" "}
            ou par e-mail à{" "}
            <a
              href="mailto:contact@hacklayer.be"
              className="text-green-400 underline hover:text-green-300"
            >
              contact@hacklayer.be
            </a>.
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
