export def main [] {
  (
    npx esbuild
    src/extension.js
    --bundle
    --format=esm
    --platform=node
    --outfile=out.js
    # --minify
  )
}
