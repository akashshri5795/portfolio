import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: './' makes the built asset paths relative, so the site works
// whether it's served at username.github.io/ or username.github.io/repo-name/
// No config changes needed regardless of your repo name.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
