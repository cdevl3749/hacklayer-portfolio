// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import PentestLanding from './PentestLanding.jsx'
import MentionsLegales from './MentionsLegales.jsx'
import ConditionsVente from './ConditionsVente.jsx'
import ScrollToTop from './ScrollToTop'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pentest" element={<PentestLanding />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/conditions-vente" element={<ConditionsVente />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
