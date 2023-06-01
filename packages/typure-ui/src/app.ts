// import { defineComponent } from '@typure/core'
import { PureElement } from '@typure/core'

class MyElement extends PureElement {

  render(): string | HTMLElement {
    return `
    <p align="center">
      <h1 onclick="alert('Button clicked!')" align="center">
        hello, Typre.js
      </h1>
    </p>
  `
  }
}

globalThis.customElements.define('my-app', MyElement)
