import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');


export default [{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    scss({
      // include: ["src/assets/**/*.scss"],
      insert: true,

      // outputStyle: "compressed", // css 출력 스타일 (expanded: 압축되지 않은, compressed: 압축된, nested: 중첩된)
      include: ["src/**/*.scss"],
      // output: 'dist/bundle.css', // 번들된 CSS 파일 경로 설정
      fileName: 'assets/bundle.css'
    })
  ]
}
, {
  input: 'dist/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts()],
  external: [/\.s[ac]ss$/]
}

];
