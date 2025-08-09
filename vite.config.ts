import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/index.tsx", "src/Email.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "ReactObfuscateEmail",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        banner: '"use client";',
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
