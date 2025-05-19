// "build": "esbuild src/index.js --bundle --outfile=out.js"

import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["./src/extension.js"],
  bundle: true,
  outfile: "extension.js",
  minify: false,
  sourcemap: false,
  platform: "node",
  target: ["node10.4"],
  format: "esm",
  external: ["./node_modules/*", "vscode", "axios"],
  chunkNames: "chunks/[name]-[hash]"
  // outExtension: { '.js': '.cjs' }
  // splitting: true
})
