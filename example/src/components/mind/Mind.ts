import { defineComponent, defineScopedCss } from "@typure/core"


export default defineComponent((context) => {

  defineScopedCss(context, import('./index.css'))

  return `
    <div class="mind" id="mind">
      <h1>State Of Mind</h1>
    </div>
  `
})