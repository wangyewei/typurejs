import { defineComponent } from '@typure/core'

type NavBar = {
  title: string
}

defineComponent<NavBar>('nav-bar', (props: NavBar) => {
  return `<div>${props.title}</div>`
}, { title: 'hello, Typure.js' })
