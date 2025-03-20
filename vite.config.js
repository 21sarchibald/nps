import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve("src/index.html"),
        conditions: resolve("src/conditions.html")
      }
    }
  }
});
