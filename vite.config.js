import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ★ Editează aici — pune numele exact al repo-ului tău de pe GitHub,
  // între slash-uri. Dacă repo-ul se numește "portal-usi-pergole",
  // rămâne așa cum e mai jos.
  base: '/portal-usi-pergole/',
})
