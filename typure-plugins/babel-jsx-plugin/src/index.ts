import * as BabelCore from '@babel/core'
import syntaxJsx from '@babel/plugin-syntax-jsx'
import transformTypureJsx from './transform-typure-jsx'
export default ({ types }: typeof BabelCore) => ({
  name: 'babel-plugin-jsx',
  inherits: syntaxJsx,
  ...transformTypureJsx
})