import { defineComponent } from "@typure/core"
import { state } from '@typure/reactive'



const test = [1, 2, 3]

test.map(item => item + '11')

const NavBar = defineComponent(() => {

  const name = state<string>('Yewei Wang')

  const navList: string[] = [
    'Technology',
    'State Of Mid',
    'Books Sharing',
    'About'
  ]

  return `
  <div class="nav-bar">
    <div class="nav-bar__left">
      ${name.value}
    </div>
    <ul class="nav-bar__right">
     ${navList.map(item => `<li>${item}</li>`)}
    </ul>
  </div>`
})

export default NavBar


