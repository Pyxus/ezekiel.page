import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), sitemap(), image()]
});