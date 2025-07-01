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
              target: 'http://localhost:8000', // or your dev backend
              changeOrigin: true,
            },
            '/uploads': {
              target: 'http://localhost:8000',
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined, // no server proxy in production
  };
});
