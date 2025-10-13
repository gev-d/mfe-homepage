import { defineConfig, mergeConfig } from "vite";
import baseConfig from "./vite.config.base";

export default mergeConfig(
  baseConfig("development"),
  defineConfig({
    mode: "development",
  })
);
