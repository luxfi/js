// Use JS for this because it's the build tooling needed to build all other TS packages

/**
 * @type {import('tsup').Options}
 */
export const baseConfig = {
  format: ["cjs", "esm"],
  entry: ["./src/index.ts"],
  sourcemap: true,
  clean: true,
  dts: true,
  splitting: true,
  minify: true,
  treeshake: true,
  tsconfig: "./tsconfig.json",
};
