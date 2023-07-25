import { defineComponent, components } from '@typure/core'
import NavBar from './components/nav-bar/NavBar'
import Hero from './components/hero/Hero'
import Technology from './components/technology/Technology'
const App = defineComponent(() => {

  components({
    'nav-bar': NavBar,
    'hero-section': Hero,
    'techonology-section': Technology
  })

  return `
    <div>
      <nav-bar></nav-bar>
      <hero-section></hero-section>
      <techonology-section></technology-section>
    </div>
  `
})

export default App