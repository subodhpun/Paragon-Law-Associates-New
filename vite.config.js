import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Only remove or modify this if you're building a custom entry point
    rollupOptions: {
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://strapi-backend-6xyu.onrender.com',
        changeOrigin: true,

      },
      // Add this new proxy rule for media uploads
      '/uploads': {
        target: 'https://strapi-backend-6xyu.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})