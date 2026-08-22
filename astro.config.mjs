// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import lastmod from './src/data/lastmod.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: 'https://pompe-a-chaleur-bw.be',
  trailingSlash: 'always',
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      // <lastmod> réel par page = date du dernier commit de la page (src/data/lastmod.json,
      // généré par `npm run lastmod`). Repli : date de build si la page n'est pas dans le fichier.
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.lastmod = lastmod[path] ?? new Date().toISOString();
        return item;
      },
    }),
  ]
});