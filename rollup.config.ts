import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import { defineConfig } from "rollup";
import manifest from "./manifest.json"

export default () => {
  return defineConfig({
    input: `src/index.tsx`,
    output: [
      {
        file: `dist/${manifest.name}.js`,
        format: "cjs",
        strict: false,
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      esbuild({ minify: true, target: "ES2020" }),
    ],
  });
};
