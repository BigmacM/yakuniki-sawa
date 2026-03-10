import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yakiniku-sawa-pattaya.com',
  integrations: [
    tailwind(),
  ],
});
