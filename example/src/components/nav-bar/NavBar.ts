
import {
  defineComponent,
  defineScopedCss,
  defineMethod,
  defineEmit,
} from "@typure/core"

import { state } from '@typure/reactive'

type NavItem = {
  title: string,
  hash: string
}

const NavBar = defineComponent((context) => {

  defineScopedCss(context, import('./index.css'))

  const name = state<string>('🌟')


  const navList: NavItem[] = [
    {
      title: 'Technology',
      hash: 'techonology'
    },
    {
      title: 'State Of Mind',
      hash: 'mind'
    },
    {
      title: 'Books Sharing',
      hash: 'books'
    },
    {
      title: 'About',
      hash: 'about'
    }
  ]

  let target: Element | null = null

  window.addEventListener('DOMContentLoaded', () => {
    target = context.shadowRoot.getElementById('nav-bar')
  })

  defineMethod(context, 'fullwidth', () => {
    target.classList.add('nav-bar__full')
  })

  defineMethod(context, 'halfwidth', () => {
    target.classList.remove('nav-bar__full')
  })

  defineMethod(context, 'navItemClick', (e: string) => {
    defineEmit('navclick', e)
  })

  return `
  <div class="nav-bar" id="nav-bar" @fullwidth="fullwidth" @halfwidth="halfwidth">
    <div class="nav-bar__left">
      ${name.value}
    </div>
    <ul class="nav-bar__right">
     ${navList.map(item => `<li @click="navItemClick(${item.hash})">${item.title}</li>`)}
    </ul>
  </div>`
})

export default NavBar


