import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kyle.baley.org",
  output: "static",
  integrations: [sitemap()]
});
