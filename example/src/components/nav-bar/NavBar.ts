import {
  defineComponent,
  defineScopedCss,
  defineMethod,
} from "@typure/core"
import { state } from '@typure/reactive'

const NavBar = defineComponent((context) => {

  defineScopedCss(context, import('./index.css'))

  const name = state<string>('🌟')

  const navList: string[] = [
    'Technology',
    'State Of Mind',
    'Books Sharing',
    'About'
  ]

  let target: Element | null = null

  window.addEventListener('DOMContentLoaded', () => {
    target = context.shadowRoot.getElementById('nav-bar')
  })

  const fillNavBar = defineMethod(context, 'fillNavBar', () => {
    if (window.scrollY < 200) {
      if (target.classList.length === 2) {
        target.classList.remove('nav-bar__full')
      }
      return
    } else {
      if (target.classList.length >= 2) {
        return
      }
      target.classList.add('nav-bar__full')
    }
  })

  window.addEventListener('scroll', fillNavBar as any)

  return `
  <div class="nav-bar" id="nav-bar">
    <div class="nav-bar__left">
      ${name.value}
    </div>
    <ul class="nav-bar__right">
     ${navList.map(item => `<li>${item}</li>`)}
    </ul>
  </div>`
})

export default NavBar


