import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  root: "./src",
  integrations: [tailwind(), svelte(), icon(), vue(), pagefind()],
  server: {
    port: 8080,
  },
});
