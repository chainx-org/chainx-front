import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build"
  },
<<<<<<< HEAD
  plugins: [tsConfigPaths()]
=======
  plugins: [tsConfigPaths()],
  define: {
    Buffer: require('buffer').Buffer,
  }
>>>>>>> 19796b29ea2eae440b7803c158e093ba732e0dcb
});