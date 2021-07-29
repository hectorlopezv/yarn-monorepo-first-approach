import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import ts from "rollup-plugin-ts";
import sourcemaps from "rollup-plugin-sourcemaps";
import path from "path";
import process from "process";

const currentWorkingPath = process.cwd();

const { filename, devDependencies } = require(path.join(
  currentWorkingPath,
  "package.json"
));
console.log("filename", filename);
console.log("devDependencies", devDependencies);
const inputPath = path.join(
  currentWorkingPath,
  `lib/${filename[0]}.${filename[1]}`
);
const globals = {
  ...devDependencies,
};
const configPostCss = postcss({
  plugins: [
    cssnano({
      preset: "default",
    }),
    autoprefixer(),
  ],
  inject: {
    insertAt: "top",
  },
  extract: false,
});

export default {
  input: inputPath,
  output: [
    {
      file: `dist/${filename[0]}.cjs.js`,
      format: "cjs",
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: `dist/${filename[0]}.esm.js`,
      format: "esm",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    configPostCss,
    image(),
    commonjs({
      exclude: "node_modules",
      ignoreGlobal: true,
    }),
    ts({
      tsconfig: {
        allowJs: true,
        allowSyntheticDefaultImports: true,
        declaration: true,
        declarationDir: "dist",
        esModuleInterop: true,
        outDir: "./dist",
        jsx: "react",
        lib: ["es6", "dom"],
        module: "esnext",
        moduleResolution: "node",
        noEmit: true,
        resolveJsonModule: true,
        rootDir: "./lib",
        sourceMap: true,
        strict: true,
        target: "es6",
      },
      include: ["lib/**/*"],
      exclude: ["**/node_modules", "**/rollup.config.js"],
    }),
    nodeResolve(),
    sourcemaps(),
  ],
  external: Object.keys(globals),
};
