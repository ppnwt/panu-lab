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
        offlineReady: true,
        needRefresh: true,
        ReloadPrompt: true,
        icons: [
          {
            src: "pwa-192x192.jpg",
            sizes: "192x192",
            type: "image/jpg",
          },
          {
            src: "pwa-512x512.jpg",
            sizes: "512x512",
            type: "image/jpg",
          },
        ],
      },
    }),
  ],
});
