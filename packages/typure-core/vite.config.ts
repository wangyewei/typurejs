import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: '@typure',
      fileName: 'index'
    }
  }
})
