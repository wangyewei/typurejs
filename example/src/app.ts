import { PureElement } from '@typure/core'
class MyElement extends PureElement {
  title: string

  constructor() {
    super()
    this.title = 'event called'
  }
  handleClick() {
    alert(`Clicked on ${this.title}`)
  }

  provideThis(): PureElement {
    return this
  }
  render() {
    return `
      <div @click="handleClick">${this.title}</div>
    `
  }
}
customElements.define('my-element', MyElement)