// vite.config.js — 144Hz Performance-Optimized Build
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],

  build: {
    // Enable CSS code splitting — each lazy-loaded page gets its own CSS chunk
    cssCodeSplit: true,

    // Target modern browsers for smaller, faster bundles
    target: 'es2020',

    // Optimal chunk splitting for lazy-loaded pages
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached across all pages
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Animation libraries — only loaded when needed
          'vendor-motion': ['framer-motion'],
          // Icons — frequently used, cache separately
          'vendor-icons': ['lucide-react'],
          // 3D Engine — isolated chunk loaded only on Innovation Journey
          'vendor-three': ['three', '@react-three/fiber'],
        },
      },
    },

    // Increase chunk size warning threshold (we have large pages)
    chunkSizeWarningLimit: 800,
  },

  // Dev server optimizations for 144Hz development
  server: {
    // Pre-bundle heavy deps so they don't cause jank during HMR
    warmup: {
      clientFiles: [
        './src/pages/Overview.jsx',
        './src/components/Navbar.jsx',
      ],
    },
  },

  // Optimize dep pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion'
    ],
  },
});
