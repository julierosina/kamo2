// vite.config.js
// Configuration Vite pour le projet Kamo
// Inclut le base path pour le déploiement sur GitHub Pages

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kamo2/',
})
