import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Master-Piece/',
  server: {
    host: '192.168.100.221', // your local IP
    port: 5173
  }
})
