import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    outDir: "build",
    rollupOptions: {
      external: ['/hama.png', '/bukti_publikasi.png']
    }
  },
});
