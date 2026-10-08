import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nexora-landing/',
  server: {
    host: true,
    allowedHosts: ['.trycloudflare.com'],
  },
})
