import { PureElement } from "@typure/core"
import { type State, state } from "@typure/reactive";
class MyElement extends PureElement {

  counter: State<number>;

  constructor() {
    super()
    this.counter = state(0)
  }
  countAdd() {
    this.counter.value++
  }
  render() {
    return `
     <div>
      <h2 align="center">hello, this is typure.js</h2>
      <p align="center">
        <span>${this.counter.value}</span>
        <button @click="countAdd">count++</button>
      </p>
     </div>
    `
  }
}
export default MyElement