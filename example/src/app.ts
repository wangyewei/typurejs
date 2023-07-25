import { defineComponent, components } from '@typure/core'
import NavBar from './components/NavBar'

const App = defineComponent(() => {
  components({ 'nav-bar': NavBar })
  return `
    <nav-bar />
  `
})

export default App