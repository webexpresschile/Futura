import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://webexpresschile.github.io',
  base: '/Futura',
  output: 'static',
  trailingSlash: 'always',
});