import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
  build: {
    target: 'node20', // Specify the version of Node.js you are targeting
    outDir: 'dist',   // Output directory for the build
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'), // Entry point of your Node.js app
      formats: ['es'], // CommonJS format for Node.js
    },
    rollupOptions: {
      // Externalize dependencies to avoid bundling them
      external: [
        ...require('module').builtinModules, // Built-in Node.js modules
        'react',
        '@react-pdf/renderer',
      ],
      output: {
        entryFileNames: '[name].mjs',
      },
    },
  },
});