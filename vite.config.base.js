import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default (mode) => {
  const isDev = mode !== "production";

  return defineConfig({
    plugins: [
      federation({
        name: "hompage_mf_name",
        filename: "homepage-mf-remoteEntry-filename.js",
        exposes: {
          "./Homepage": "./src/main.js",
        },
      }),
    ],
    base: isDev ? "/" : "/homepage/",
  });
};
