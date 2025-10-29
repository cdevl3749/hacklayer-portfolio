import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from "react-router-dom"


const CryptoIcon = ({ name, svg }) => (
  <div
    className="w-16 h-16 flex items-center justify-center p-3
               bg-white/5 rounded-xl border border-white/10 
               backdrop-blur-sm shadow-[0_0_10px_rgba(0,255,153,0.3)]
               floaty-icon transition-transform duration-500"
    title={name}
    dangerouslySetInnerHTML={{
      __html: svg.replace('<svg', '<svg width="36" height="36"'),
    }}
  />
);

const bitcoin = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#F7931A"/><text x="12" y="16" font-size="10" text-anchor="middle" fill="white" font-family="Arial">B</text></svg>`
const ethereum = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 4,12 12,9 20,12" fill="#627EEA"/><polygon points="12,22 20,12 12,15 4,12" fill="#23242A"/></svg>`
const solana = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="2" transform="rotate(-20 12 12)" fill="#00FFA3"/></svg>`

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2200)
    return () => clearTimeout(t)
  }, [])

  // 🧩 Fonction utilitaire Netlify
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')

  return (
    
    <div className="min-h-screen font-sans">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="text-4xl md:text-6xl font-mono tracking-wider text-white neon">
                HACKLAYER<span className="typing-cursor"></span>
              </div>
              <div className="text-sm text-white/60">
                Ingénierie sécurité · Pentesting · Blockchain
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-4xl mx-auto p-6">
        {/* --- En-tête --- */}
        <header className="flex items-center gap-6 py-8">
          <div className="w-20 h-20 rounded-xl flex items-center justify-center border border-green-500/30 bg-black shadow-[0_0_20px_#00ff80]">
            <div className="text-3xl font-bold text-green-400 drop-shadow-[0_0_8px_#00ff80] font-mono">
              HL
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              HackLayer — Cybersécurité & Développement Web
            </h1>
            <p className="mt-2 text-sm text-white/70">
              Plus de 10 ans d'expérience — Pentesting, Kali Linux, Smart
              Contracts & développement full-stack
            </p>
          </div>
        </header>

        {/* --- À propos --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/3 rounded-2xl p-6 mb-6 backdrop-blur-sm border border-white/5"
        >
          <h2 className="text-2xl font-bold">À propos</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Spécialiste sécurité et <strong>développeur full-stack</strong>. Fort
            de plus de <strong>10 ans d'expérience</strong> en cybersécurité, je
            réalise des audits, pentests (Kali Linux, Metasploit, Burp Suite),
            conçois des architectures sécurisées et développe des applications
            résilientes. <br />
            <br />
            Je conçois aussi des <strong>smart contracts (Solidity)</strong> et
            je suis passionné par la crypto — sécurité des wallets, audits de
            protocoles et intégration d'apps décentralisées.
          </p>
        </motion.section>

        {/* --- Compétences --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/3 rounded-2xl p-6 mb-6 backdrop-blur-sm border border-white/5"
        >
          <h2 className="text-2xl font-bold">Compétences & Services</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/85">
            {/* Sécurité & Pentesting */}
            <div>
              <h3 className="font-semibold">Sécurité & Pentesting</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Pentests (web, réseau, applicatif)</li>
                <li>Outils : Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark</li>
                <li>Audit, remédiation et formation technique</li>
              </ul>

              {/* Logos Sécurité */}
              <div className="flex flex-wrap gap-3 mt-4 mb-4">
                <CryptoIcon
                  name="Kali Linux"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M2 12c5-6 15-6 20 0' stroke='#00BFFF' stroke-width='2' fill='none'/><path d='M12 12l5 2-5 2z' fill='#00BFFF'/></svg>`}
                />
                <CryptoIcon
                  name="Metasploit"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='#0077FF'/><text x='12' y='16' font-size='8' text-anchor='middle' fill='white'>M</text></svg>`}
                />
                <CryptoIcon
                  name="Burp Suite"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><rect width='20' height='20' x='2' y='2' rx='4' fill='#FF6B35'/><text x='12' y='16' font-size='8' text-anchor='middle' fill='white'>B</text></svg>`}
                />
                <CryptoIcon
                  name="Wireshark"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M2 20c6-12 14-12 20 0z' fill='#1E90FF'/></svg>`}
                />
                <CryptoIcon
                  name="Nmap"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' fill='#2E8B57'/><path d='M6 12h12' stroke='white' stroke-width='1.5'/></svg>`}
                />
              </div>
            </div>

            {/* Développement & Blockchain */}
            <div>
              <h3 className="font-semibold">Développement & Blockchain</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Full-stack (React, Node.js)</li>
                <li>Smart Contracts (Solidity) — développement & audit</li>
                <li>Intégration d'apps crypto / wallets</li>
              </ul>

              {/* Logos Développement */}
              <div className="flex flex-wrap gap-3 mt-4 mb-4">
                <CryptoIcon
                  name="React"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><circle cx='12' cy='12' r='2.05' fill='#00D8FF'/><path fill='none' stroke='#00D8FF' stroke-width='1.5' d='M12 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z'/></svg>`}
                />
                <CryptoIcon
                  name="Node.js"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='#68A063' d='M12 2l9.5 5.5v9L12 22 2.5 16.5v-9z'/></svg>`}
                />
                <CryptoIcon
                  name="Solidity"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M7 2l5 8-5 8H2l5-8L2 2z' fill='#2E2E2E'/><path d='M17 2l5 8-5 8h-5l5-8-5-8z' fill='#4A4A4A'/></svg>`}
                />
                <CryptoIcon
                  name="Ethereum"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><polygon points='12,2 4,12 12,9 20,12' fill='#627EEA'/><polygon points='12,22 20,12 12,15 4,12' fill='#23242A'/></svg>`}
                />
                <CryptoIcon
                  name="GitHub"
                  svg={`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='white' d='M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.31 6.84 9.67.5.09.68-.22.68-.49v-1.71c-2.78.61-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.55 1.09 1.55 1.09.9 1.58 2.37 1.12 2.94.86.09-.67.35-1.12.64-1.37-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06A9.29 9.29 0 0 1 12 6.83a9.2 9.2 0 0 1 2.51.35c1.91-1.34 2.75-1.06 2.75-1.06.55 1.4.2 2.44.1 2.7.64.73 1.03 1.65 1.03 2.78 0 3.97-2.33 4.85-4.55 5.11.36.31.68.93.68 1.89v2.8c0 .27.18.58.68.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z'/></svg>`}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Projets récents --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/3 rounded-2xl p-6 mb-6 backdrop-blur-sm border border-white/5"
        >
          <h2 className="text-2xl font-bold mb-4">Projets récents</h2>
          <div className="space-y-4 text-white/85">
            <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition">
              <h3 className="font-semibold text-[#00FF99]">Site Web portfolio décentralisé</h3>
              <p className="text-sm mt-1">Portfolio est une application décentralisée (DApp) construite sur la blockchain Ethereum qui permet aux utilisateurs de créer et de gérer leurs portefeuilles numériques. Ce projet vise à fournir une plateforme sécurisée et transparente.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition">
              <h3 className="font-semibold text-[#00FF99]">Plateforme tokenisation immobilière</h3>
              <p className="text-sm mt-1">Développement blockchain Ethereum pour permettre aux investisseurs du monde entier d'acheter des tokens immobiliers fractionnés.</p>
            </div>
            <div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition">
              <h3 className="font-semibold text-[#00FF99]">Plateforme pentest automatisée</h3>
              <p className="text-sm mt-1">Développement d'un outil interne pour scans réseaux et tests d'intrusion à distance.</p>
            </div>
          </div>
        </motion.section>

        {/* --- CTA Offres Pentest --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#00FF99]/10 via-black/50 to-[#0077FF]/10 
                     rounded-2xl p-8 mb-6 backdrop-blur-sm border border-[#00FF99]/30 
                     shadow-[0_0_30px_rgba(0,255,153,0.15)] overflow-hidden"
        >
          {/* Effet de grille cyberpunk en arrière-plan */}
          <div className="absolute inset-0 opacity-5"
               style={{
                 backgroundImage: `linear-gradient(#00FF99 1px, transparent 1px),
                                  linear-gradient(90deg, #00FF99 1px, transparent 1px)`,
                 backgroundSize: '20px 20px'
               }}
          />

          <div className="relative z-10 text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 text-xs font-mono font-bold tracking-wider 
                             bg-[#00FF99]/20 text-[#00FF99] rounded-full 
                             border border-[#00FF99]/40 shadow-[0_0_10px_rgba(0,255,153,0.3)]">
                🔒 OFFRE SPÉCIALE PENTESTING
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 
                           bg-gradient-to-r from-[#00FF99] via-white to-[#0077FF] 
                           bg-clip-text text-transparent 
                           drop-shadow-[0_0_20px_rgba(0,255,153,0.5)]">
              Sécurisez votre infrastructure
            </h2>
            
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Découvrez mes offres de <strong>pentesting professionnel</strong> et d'audit de sécurité. 
              Des solutions adaptées à vos besoins, du scan rapide à l'audit complet.
            </p>

            {/* Bouton principal */}
            <Link
  to="/pentest"
  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl 
             font-bold text-lg bg-gradient-to-r from-[#00FF99] to-[#00DD88] text-black
             shadow-[0_0_20px_rgba(0,255,153,0.4)]
             hover:shadow-[0_0_35px_rgba(0,255,153,0.6)]
             hover:scale-105 active:scale-95
             transition-all duration-300 overflow-hidden"
>
  <span className="relative z-10 flex items-center gap-2">
    🚀 Découvrir les offres
    <svg 
      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
  
  {/* Effet de brillance animé */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                    translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
  </div>
</Link>
          </div>

          {/* Particules décoratives */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full 
                          bg-[#00FF99]/10 blur-2xl animate-pulse" />
          <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full 
                          bg-[#0077FF]/10 blur-3xl animate-pulse" 
               style={{ animationDelay: '1s' }} />
        </motion.section>

        {/* --- Passion Crypto --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/3 rounded-2xl p-6 mb-6 backdrop-blur-sm border border-white/5"
        >
          <h2 className="text-2xl font-bold">Passion Crypto</h2>
          <p className="mt-3 text-white/80">
            Je suis passionné par la crypto et j'explore continuellement la sécurité
            des protocoles, des wallets et le développement d'applications décentralisées.
          </p>

          <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-4">
            <CryptoIcon name="Bitcoin" svg={bitcoin} />
            <CryptoIcon name="Ethereum" svg={ethereum} />
            <CryptoIcon name="Solana" svg={solana} />
          </div>
        </motion.section>

        {/* --- Contact --- */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/3 rounded-2xl p-6 mb-12 backdrop-blur-sm border border-white/5"
        >
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-white/80">
            Pour toute demande professionnelle, audit ou collaboration,
            contacte-moi via le formulaire ci-dessous ou directement par email.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  data-netlify-recaptcha="true"
  onSubmit={(e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    // --- Validation manuelle ---
    if (!form.nom.value.trim()) newErrors.nom = "Nom requis";
    if (!form.email.value.trim()) newErrors.email = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value))
      newErrors.email = "Adresse email invalide";
    if (!form.message.value.trim()) newErrors.message = "Message requis";

    // Si erreurs, on les stocke et on arrête
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    // --- Encodage des données ---
    const encode = (data) =>
      Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");

    const data = {
      "form-name": form.getAttribute("name"),
      nom: form.nom.value,
      email: form.email.value,
      message: form.message.value,
    };

    // ✅ Correction : pas de "?no-cache=1"
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setSubmitted(true);
        } else {
          alert("❌ Erreur d'envoi du formulaire");
        }
      })
      .catch(() => alert("❌ Erreur réseau — veuillez réessayer"));
  }}
>
  <input type="hidden" name="form-name" value="contact" />

  <p className="hidden">
    <label>
      Ne pas remplir : <input name="bot-field" />
    </label>
  </p>

  {/* --- Champ Nom --- */}
  <label className="block text-sm text-white/80">Nom</label>
  <input
    name="nom"
    className={`w-full mt-1 p-3 rounded-md bg-black/40 border ${
      errors?.nom ? "border-red-500" : "border-white/6"
    } text-white focus:border-green-400 outline-none`}
  />
  {errors?.nom && <p className="text-red-400 text-sm mt-1">{errors.nom}</p>}

  {/* --- Champ Email --- */}
  <label className="block text-sm text-white/80 mt-4">Email</label>
  <input
    type="email"
    name="email"
    className={`w-full mt-1 p-3 rounded-md bg-black/40 border ${
      errors?.email ? "border-red-500" : "border-white/6"
    } text-white focus:border-green-400 outline-none`}
  />
  {errors?.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}

  {/* --- Champ Message --- */}
  <label className="block text-sm text-white/80 mt-4">Message</label>
  <textarea
    name="message"
    rows="5"
    className={`w-full mt-1 p-3 rounded-md bg-black/40 border ${
      errors?.message ? "border-red-500" : "border-white/6"
    } text-white focus:border-green-400 outline-none`}
  />
  {errors?.message && (
    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
  )}

  {/* --- ReCAPTCHA --- */}
  <div data-netlify-recaptcha="true" className="my-4" />

  {/* --- Boutons --- */}
  <div className="mt-4 flex items-center gap-3">
    <button
      type="submit"
      className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#00FF99] to-[#0077FF] text-black"
    >
      Envoyer
    </button>
    <button
      type="reset"
      className="px-4 py-2 rounded-lg border border-white/6 text-white"
    >
      Effacer
    </button>
  </div>
</form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg bg-black/50 border border-white/6 text-white"
                >
                  Merci — votre message a bien été envoyé. Je vous réponds
                  rapidement à l'adresse fournie.
                </motion.div>
              )}
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/6">
              <h4 className="font-semibold">Informations pratiques</h4>
              <ul className="mt-3 text-white/80 list-disc list-inside">
                <li>Audit de sécurité & pentesting</li>
                <li>Audit Smart Contracts</li>
                <li>Développement Full-Stack & intégration blockchain</li>
              </ul>

              <div className="mt-6">
                <h5 className="font-semibold">Disponibilité</h5>
                <p className="text-white/70 mt-2">
                  Disponible pour missions freelance et collaborations
                  techniques.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- Section Logos Partenaires --- */}
        <section className="py-16 text-center relative">
          <div className="absolute left-1/2 top-0 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#00FF99]/60 to-transparent transform -translate-x-1/2 blur-[0.5px]" />
          
          <h2
            className="text-2xl font-bold mb-8 text-white tracking-wide 
                       drop-shadow-[0_0_8px_rgba(0,255,153,0.4)] neon-text relative"
          >
            Ils m'ont fait confiance
          </h2>

          <div className="absolute left-1/2 bottom-0 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#00FF99]/60 to-transparent transform -translate-x-1/2 blur-[0.5px]" />

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-85 hover:opacity-100 transition-opacity mt-6">
            <img
              src="/logos/logo1.png"
              alt="Logo partenaire 1"
              className="partner-logo delay-1"
            />
            <img
              src="/logos/logo2.png"
              alt="Logo partenaire 2"
              className="partner-logo delay-2"
            />
            <img
              src="/logos/logo3.png"
              alt="Logo partenaire 3"
              className="partner-logo delay-3"
            />
            <img
              src="/logos/logo4.png"
              alt="Logo partenaire 4"
              className="partner-logo delay-4"
            />
          </div>
        </section>

        <footer className="text-center text-sm text-white/50 pb-10">
          © {new Date().getFullYear()} HackLayer — Cybersécurité & Développement
        </footer>

        <style>
        {`
          /* --- Animation des icônes Crypto --- */
          @keyframes floaty {
            0%, 100% { transform: translateY(0px) scale(1); opacity: 1; }
            50% { transform: translateY(-6px) scale(1.05); opacity: 0.95; }
          }

          .floaty-icon {
            animation: floaty 5s ease-in-out infinite;
          }

          @media (max-width: 640px) {
            .floaty-icon {
              width: 48px !important;
              height: 48px !important;
              padding: 2px !important;
            }
          }

          /* --- Animation de flottement des logos partenaires --- */
          @keyframes floatLogo {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-6px); }
          }

          /* --- Animation de balayage lumineux --- */
          @keyframes lightSweep {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }

          /* --- Apparition douce (fade + montée) --- */
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* --- Style principal des logos partenaires --- */
          .partner-logo {
            position: relative;
            height: 50px;
            width: auto;
            background: linear-gradient(145deg, rgba(20,20,20,0.95), rgba(10,10,10,0.85));
            padding: 10px 14px;
            border-radius: 12px;
            box-shadow:
              inset 0 0 6px rgba(0,255,153,0.15),
              0 0 12px rgba(0,255,153,0.1);
            filter: brightness(1.05) contrast(1.15);
            opacity: 0;
            transition: all 0.4s ease;
            animation:
              floatLogo 6s ease-in-out infinite,
              fadeUp 1.2s ease forwards;
            overflow: hidden;
          }

          /* --- Balayage lumineux en pseudo-élément --- */
          .partner-logo::after {
            content: '';
            position: absolute;
            top: 0;
            left: -150%;
            width: 50%;
            height: 100%;
            background: linear-gradient(120deg, transparent, rgba(0, 255, 153, 0.25), transparent);
            animation: lightSweep 4s linear infinite;
            background-size: 200% 100%;
            pointer-events: none;
          }

          /* --- Délai d'apparition progressive --- */
          .delay-1 { animation-delay: 0.4s, 0.4s; }
          .delay-2 { animation-delay: 0.8s, 0.8s; }
          .delay-3 { animation-delay: 1.2s, 1.2s; }
          .delay-4 { animation-delay: 1.6s, 1.6s; }

          /* --- Effet hover --- */
          .partner-logo:hover {
            filter: brightness(1.25) contrast(1.25);
            opacity: 1;
            transform: scale(1.08);
            box-shadow:
              inset 0 0 8px rgba(0,255,153,0.25),
              0 0 25px rgba(0,255,153,0.4);
          }

          /* --- Uniformisation des logos au fond clair --- */
          .partner-logo[alt*="3"],
          .partner-logo[alt*="4"] {
            background: linear-gradient(145deg, rgba(20,20,20,0.95), rgba(10,10,10,0.85));
          }

          /* --- Adaptation mobile --- */
          @media (max-width: 640px) {
            .partner-logo {
              height: 40px;
              padding: 8px;
              margin: 6px;
            }
          }

          /* --- Effet néon pour le titre --- */
          .neon-text {
            text-shadow:
              0 0 5px rgba(0, 255, 153, 0.6),
              0 0 10px rgba(0, 255, 153, 0.4),
              0 0 20px rgba(0, 255, 153, 0.2);
          }

          /* --- Footer espacé et structuré --- */
          footer {
            margin-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 16px;
          }
        `}
        </style>
      </div>
    </div>
  )
}