import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/more-react-project/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['react-star-rating-component'] // додайте залежність тут
    }
  }
});