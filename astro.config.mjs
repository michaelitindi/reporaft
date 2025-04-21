// https://astro.build/config
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@astrojs/tailwind';
import ViteToml from '@iarna/vite-plugin-toml';
import envField from '@astrojs/env-field';

export default defineConfig({
  site: "https://reporaft.com",
  integrations: [vue(), mdx(), icon(), sitemap(), react()],
  vite: {
    plugins: [tailwindcss(), ViteToml()],
    build: {
      rollupOptions: {
        external: ['@indieboosting/react']
      }
    }
  },
  env: {
    schema: {
      POSTHOG_API_KEY: envField.string({ context: "client", access: "public", optional: true }),
      POSTHOG_API_HOST: envField.string({ context: "client", access: "public", optional: true }),
      NOTION_TOKEN: envField.string({ context: "server", access: "secret", optional: true })
    }
  }
})