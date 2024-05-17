/* eslint-disable new-cap -- ignore */
import react from "@vitejs/plugin-react-swc";
import { dotenvLoad } from "dotenv-mono";
import * as path from "path";
import bundleVisualizer from "rollup-plugin-visualizer";
import { Plugin, defineConfig } from "vite";

/**
 * Because we want to use one single .env file for all projects we need to load the .env file from
 * root. Vite has a built in system for this but it assumes the .env file is at the root of the vite project
 * where as dotenv-mono deals with sharing the file across all projects and apps
 */
dotenvLoad();

// @ts-expect-error -- ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- ignore
const getBundleVisualizerPlugin: Plugin = () => ({
  ...bundleVisualizer({
    template: "treemap", // or sunburst
    open: true,
    gzipSize: true,
  }),
  apply: "build",
  enforce: "post",
});

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.riv"],
}));
