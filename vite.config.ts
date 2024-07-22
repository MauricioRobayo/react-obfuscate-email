import PluginReact from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import PluginDts from "vite-plugin-dts";
import preserveDirectives from "rollup-preserve-directives";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "React Obfuscate Email",
      fileName: "react-obfuscate-email",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [
    //
    // https://github.com/vitejs/vite/tree/main/packages/plugin-react#readme
    PluginReact({
      jsxRuntime: "classic",
    }),

    //
    // https://github.com/qmhc/vite-plugin-dts#vite-plugin-dts
    PluginDts({
      outDir: "dist/types",
    }),
    preserveDirectives(),
  ],
});
