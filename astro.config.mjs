import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [],
  image: {
    service: passthroughImageService(),
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.jsdelivr.net' }],
  },
  server: {
    host: '0.0.0.0'
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  },
  devToolbar: {
    enabled: false,
  },
});
