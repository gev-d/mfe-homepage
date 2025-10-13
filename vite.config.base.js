import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    federation({
      name: "hompage_mf_name",
      filename: "homepage-mf-remoteEntry-filename.js",
      exposes: {
        "./Homepage": "./src/main.js",
      },
    }),
  ],
});
