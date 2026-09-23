import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Custom domain (octoflashcards.com) serves the site at /. Override with
  // VITE_BASE=/octo-flashcards-site/ for project-page previews.
  base: process.env.VITE_BASE ?? "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        privacy: resolve(root, "privacy/index.html"),
        terms: resolve(root, "terms/index.html"),
        notfound: resolve(root, "404.html"),
      },
    },
  },
});
