import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the built site works on Vercel and from a sub-folder (e.g. XAMPP htdocs).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
