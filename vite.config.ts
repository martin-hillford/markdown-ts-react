import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
    build: {
        lib: {
            entry: "./src/index.ts", // Specifies the entry point for building the library.
            name: "vite-react-ts-button", // Sets the name of the generated library.
            fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
            formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
        },
        rollupOptions: {
            external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
        },
        outDir: './lib',
        sourcemap: true, // Generates source maps for debugging.
        emptyOutDir: true, // Clears the output directory before building.
    },
    plugins: [
        dts({exclude: ['**/*.stories.tsx'] })
    ],
});
