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

  render() {
    return `
      <div @click="handleClick"> 
        hello, this is 
        <div>typure.js</div>
      </div>
    `
  }
}
export default MyElement