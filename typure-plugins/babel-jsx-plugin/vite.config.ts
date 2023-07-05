import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@typure/babel-plugin-jsx',
      fileName: 'index'
    }
  }
})
