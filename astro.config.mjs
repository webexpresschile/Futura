import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://webexpresschile.github.io',
  base: '/Futura', // Esto es vital: debe coincidir con el nombre de tu repo
  output: 'static',
});
