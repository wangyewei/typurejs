import { Component, defineComponent } from '@typure/core'
import { NavBar } from '../lib/nav-bar'

defineComponent({ name: 'nav-bar', component: NavBar })
export default class App extends Component {

  constructor() {
    super()
  }

  render() {
    const props = { title: 'hello typure.js' }
    return `<nav-bar props='${JSON.stringify(props)}'></nav-bar>`
  }
}

