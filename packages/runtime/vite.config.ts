import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    __DEV__: true,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@typure/runtime',
      fileName: 'index'
    }
  }
})
