import { defineComponent, components } from '@typure/core'
import NavBar from './components/nav-bar/NavBar'
import Hero from './components/hero/Hero'
import Technology from './components/technology/Technology'
import Mind from './components/mind/Mind'
import { defineMethod } from '@typure/core'

const App = defineComponent((context) => {

  components({
    'nav-bar': NavBar,
    'hero-section': Hero,
    'techonology-section': Technology,
    'mind-section': Mind
  })

  defineMethod(context, 'navClick', (e: string) => {
    console.log(e)
  })


  return `
    <div>
      <nav-bar @navclick="navClick"></nav-bar>

      <hero-section></hero-section>

      <techonology-section></techonology-section>

      <mind-section></mind-section>

    </div>
  `
})

export default App