// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jbpete85.github.io',
  base: '/chordquestsite/',
  integrations: [react(), sitemap()]
});
