import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CryptoIcon = ({ name, svg }) => (
  <div
    className="w-12 h-12 flex items-center justify-center p-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5"
    style={{ animation: 'floaty 4s ease-in-out infinite' }}
    title={name}
    dangerouslySetInnerHTML={{ __html: svg }}
  />
)

const bitcoin = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#F7931A"/><text x="12" y="16" font-size="10" text-anchor="middle" fill="white" font-family="Arial">B</text></svg>`
const ethereum = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 4,12 12,9 20,12" fill="#627EEA"/><polygon points="12,22 20,12 12,15 4,12" fill="#23242A"/></svg>`
const solana = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="2" transform="rotate(-20 12 12)" fill="#00FFA3"/></svg>`

export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [submitted, setSubmitted] = useState(false)

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
          <div className="w-20 h-20 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
            <div className="text-xl font-mono neon">HL</div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              HackLayer — Ingénieur Sécurité & Développeur Full-Stack
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
            Ingénieur sécurité et <strong>développeur full-stack</strong>. Fort
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
            <div>
              <h3 className="font-semibold">Sécurité & Pentesting</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Pentests (web, réseau, applicatif)</li>
                <li>Outils : Kali Linux, Metasploit, Burp Suite, Nmap, Wireshark</li>
                <li>Audit, remédiation et formation technique</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Développement & Blockchain</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Full-stack (React, Node.js)</li>
                <li>Smart Contracts (Solidity) — développement & audit</li>
                <li>Intégration d'apps crypto / wallets</li>
              </ul>
            </div>
          </div>
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
            Je suis passionné par la crypto et j'explore continuellement la
            sécurité des protocoles, des wallets et le développement
            d'applications décentralisées.
          </p>
          <div className="mt-4 flex gap-3">
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
                netlify-honeypot="bot-field"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target
                  const data = {
                    'form-name': form.getAttribute('name'),
                    nom: form.nom.value,
                    email: form.email.value,
                    message: form.message.value,
                  }

                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: encode(data),
                  })
                    .then(() => {
                      form.reset()
                      setSubmitted(true)
                    })
                    .catch(() => alert("Erreur d'envoi"))
                }}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Ne pas remplir <input name="bot-field" />
                  </label>
                </p>

                <label className="block text-sm text-white/80">Nom</label>
                <input
                  required
                  name="nom"
                  className="w-full mt-1 p-3 rounded-md bg-black/40 border border-white/6 text-white"
                />

                <label className="block text-sm text-white/80 mt-4">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full mt-1 p-3 rounded-md bg-black/40 border border-white/6 text-white"
                />

                <label className="block text-sm text-white/80 mt-4">Message</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  className="w-full mt-1 p-3 rounded-md bg-black/40 border border-white/6 text-white"
                />

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

              <div className="mt-4 text-sm text-white/70">
                Contact direct :{' '}
                <a
                  href="mailto:cdevl3749@gmail.com"
                  className="underline text-[#00FF99]"
                >
                  cdevl3749@gmail.com
                </a>
              </div>
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

        <footer className="text-center text-sm text-white/50 pb-10">
          © {new Date().getFullYear()} HackLayer — Cybersécurité & Développement
        </footer>
      </div>
    </div>
  )
}
