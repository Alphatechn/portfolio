import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sass } from 'sass'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        // Optionnel : ajouter des chemins globaux
        additionalData: `@use "src/sass/default/variable" as *;`
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          libs: ['lodash', 'axios']
        }
      }
    }
  }
})
