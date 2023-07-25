import {
  defineComponent,
  defineScopedCss,
  defineEmit,
} from "@typure/core"

import { state } from "@typure/reactive"

export default defineComponent((context) => {

  defineScopedCss(context, import('./index.css'))

  let target = state<HTMLElement | null>(null)

  window.addEventListener('DOMContentLoaded', () => {
    target.value = context.shadowRoot.getElementById('technology')
  })

  const status = {
    full: false,
    half: true,
  }
  window.addEventListener('scroll', () => {
    const { top } = target.value.getBoundingClientRect()

    if (top < 62 && status.half) {
      defineEmit('fullwidth')


      status.half = false
      status.full = true
    }

    if (top > 62 && status.full) {
      defineEmit('halfwidth')

      status.half = true
      status.full = false
    }

    // defineEmit('', )

  })


  return `
  <div class="technology" id="technology">
    <h1>Technology</h1>
  </div>
  `
})