import {
  defineComponent,
  defineScopedCss
} from "@typure/core";


export default defineComponent((context) => {

  defineScopedCss(context, import('./index.css'))

  return `
  <div class="technology">
    <h1>Technology</h1>
  </div>
  `
})