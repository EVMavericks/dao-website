import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: [
        {
          find: "src",
          replacement: path.join(__dirname, "src"),
        },
      ],
    },
  },
  site: "https://evmavericks.github.io",
  base: "/website-draft-RisingPaw",
});
