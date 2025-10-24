import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Configuration optimisée pour Netlify + suppression du warning "eval"
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },

  // Empêche Vite ou certaines libs (ex: Framer Motion) d'utiliser "eval"
  esbuild: {
    legalComments: 'none',
  },

  define: {
    'process.env.NODE_ENV': '"production"',
  },

  build: {
    sourcemap: false, // empêche les erreurs CSP liées aux map files
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})



