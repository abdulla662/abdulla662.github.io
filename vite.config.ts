import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Relative base so the build works both at a domain root and under a
// GitHub Pages project path (https://<user>.github.io/<repo>/) without edits.
export default defineConfig({
  plugins: [react()],
  base: './',
})
