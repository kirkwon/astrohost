import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    keystatic()
  ],
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    host: true,
    port: 10000
  },
  output: 'server'
});