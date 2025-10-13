import devConfig from "./vite.config.dev";
import prodConfig from "./vite.config.prod";

export default ({ mode }) => {
  if (mode === "production") {
    return prodConfig;
  }

  return devConfig;
};
