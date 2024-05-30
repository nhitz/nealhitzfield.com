import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  root: "./src",
  integrations: [tailwind(), svelte(), icon()],
  server: { port: 8080 },
});
