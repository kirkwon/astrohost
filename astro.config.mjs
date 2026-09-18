import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai-history-omo7.onrender.com',
  integrations: [
    react(),
    keystatic(),
    sitemap()
  ],
  adapter: node({
    mode: 'standalone'
  }),
  output: 'server',
  vite: {
    build: {
      rollupOptions: {
        external: ['@langchain/chains', '@langchain/core/documents', '@langchain/openai', '@langchain/core'],
      },
    },
  },
  server: {
    host: true,
    port: 10000
  }
});