import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  if (env.NODE_ENV == "development") {
    return {
      // vite config
      server: { host: "127.0.0.1" },
      base: "/flower-and-plant-shop/",
      plugins: [react()],
    };
  } else {
    return {
      // vite config
      base: "/flower-and-plant-shop/",
      plugins: [react()],
    };
  }
});
