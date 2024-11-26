import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Changed from '/Website/' to '/' since this is the main site
  build: {
    outDir: 'dist'
  },
  assetsInclude: ['**/*.mp4', '**/*.webm'] // Add support for video files
})
