import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import Icons from "unplugin-icons/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://dao.evmavericks.xyz",
  vite: {
    resolve: {
      alias: [
        {
          find: "src",
          replacement: resolve(__dirname, "src"),
        },
      ],
    },
    plugins: [
      Icons({
        compiler: "jsx",
      }),
    ],
  },
});
