// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],

  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },

  adapter: cloudflare(),
});
