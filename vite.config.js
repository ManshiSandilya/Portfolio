import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Added this comment to force Vite dev server to restart and clear its dependency cache!
export default defineConfig({
  plugins: [react()],
})
