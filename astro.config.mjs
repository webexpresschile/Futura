import { defineConfig } from 'astro/config';
import { staticSiteMap } from '@asto/sitemap';

// Https://astro.build/reference/configuration-reference/
export default defineConfig({
  site: 'https://webexpresschile.github.io/Futura/',
  initegrations: [],
  output: 'static',
  trailingSlash: 'always,
});