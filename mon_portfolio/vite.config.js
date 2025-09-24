import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les librairies lourdes
          'vendor-gsap': ['gsap', '@gsap/react'],
          'vendor-icons': ['@iconify/react'],
          'vendor-react': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        unused: true,
        dead_code: true
      },
      mangle: {
        safari10: true
      }
    }
  }
})
