import { defineComponent, components } from '@typure/core'
import NavBar from './components/nav-bar/NavBar'
import Hero from './components/hero/Hero'
import Technology from './components/technology/Technology'
import Mind from './components/mind/Mind'

const App = defineComponent(() => {

  components({
    'nav-bar': NavBar,
    'hero-section': Hero,
    'techonology-section': Technology,
    'mind-section': Mind
  })

  return `
    <div>
      <nav-bar></nav-bar>

      <hero-section></hero-section>

      <techonology-section></techonology-section>

      <mind-section></mind-section>

    </div>
  `
})

export default App