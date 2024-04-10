import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  build: {
    sourcemap: true
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@styles': resolve('./styles'),
      '@scripts': resolve('./scripts')
    }
  },
})
