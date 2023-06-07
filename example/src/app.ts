import { PureElement } from '@typure/core'
class MyElement extends PureElement {
  count: number = 0

  constructor() {
    super()
  }
  countAdd() {
    this.count++
  }

  render() {
    return `
     <div>
      <h2 align="center">hello, this is typure.js</h2>
      <p align="center">
        <span>${this.count}</span>
        <button @click="countAdd">count++</button>
      </p>
     </div>
    `
  }
}
export default MyElement