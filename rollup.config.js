import esbuild from "rollup-plugin-esbuild";
import vueJsx from "rollup-plugin-vue-jsx-compat";
import { dts } from "rollup-plugin-dts";
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/lazy-json-ui.mjs.js",
        format: "esm",
      },
    ],
    plugins: [
      vueJsx(),
      esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/, // default
        sourceMap: true, // default
        minify: false,
        target: "es2016", // default, or 'es20XX', 'esnext'
        jsx: "transform", // default, or 'preserve'
        jsxFactory: "vueJsxCompat",
      }),
    ],
		external: ['vue', 'ant-design-vue']
  },
	{
    input: "src/index.ts",
    output: [{ file: "dist/lazy-json-ui.esm.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
