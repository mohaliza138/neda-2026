import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to '/neda/' if deploying to github.com/<org>/neda
// Set base to '/' if using a custom domain
export default defineConfig({
  plugins: [react()],
  base: '/neda-2026/',
})
