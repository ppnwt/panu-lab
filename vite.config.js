import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: {
        name: "PanuLab",
        short_name: "PanuLab",
        description: "PanuLab Playground",
        theme_color: "#ffffff",
        updated(registration) {
          console.log("New content is available; please refresh.");
          document.dispatchEvent(
            new CustomEvent("swUpdated", { detail: registration })
          );
        },
      },
    }),
  ],
});
