import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import ViteSitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development';

  return {
    plugins: [
      react(),
      ViteSitemapPlugin({
        hostname: 'https://khusilawgroup.netlify.app',
      }),
    ],
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
              target: 'https://supabasestrapi.onrender.com',
              changeOrigin: true,
            },
            '/uploads': {
              target: 'https://supabasestrapi.onrender.com',
              changeOrigin: true,
              secure: false,
            },
          },
        }
      : undefined,
  };
});
