// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://culture-cupper.netlify.app/",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
