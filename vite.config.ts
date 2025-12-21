import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'COLTEK Technologies',
          favicon: './favicon.ico',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          // Keep favicon files in root
          if (assetInfo.name && /^favicon\.(ico|png|svg)$/.test(assetInfo.name)) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=0',
    },
  },
});
