import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __DEV__: true,
  },
  build: {
    lib: {
      entry: 'index.ts',
      name: '@typure',
      fileName: 'index'
    }
  }
})
