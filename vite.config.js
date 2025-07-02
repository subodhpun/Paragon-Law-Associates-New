import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        // customize if needed
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: isDevelopment
      ? {
          proxy: {
            '/api': {
              target: 'https://strapi-backend-6xyu.onrender.com', // or your dev backend
              // target: 'http://localhost:1337',
              changeOrigin: true,
            },
            '/uploads': {
              target: 'https://strapi-backend-6xyu.onrender.com',
              // target: 'http://localhost:1337',
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined, // no server proxy in production
  };
});
