import { defineConfig, UserConfig } from "vite";

export default defineConfig({
  define: {
    __DEV__: true
  }
}) as UserConfig