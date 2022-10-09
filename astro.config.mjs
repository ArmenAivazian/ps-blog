import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-taupe-one.vercel.app/',
  integrations: [mdx(), sitemap(), tailwind(), preact()],
  output: "server",
  adapter: vercel()
});