import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://deco-design-64.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
