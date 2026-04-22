import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Cloudflare adapter hanya digunakan saat build (production).
// Saat dev, Astro menggunakan Node.js dev server bawaan yang mendukung semua modul.
const isBuilding = process.argv.includes('build');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: isBuilding ? cloudflare() : undefined,
  integrations: [],
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
  }
});
