import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://futura-three.vercel.app',
  output: 'static',
  trailingSlash: 'always',
});