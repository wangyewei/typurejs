import { PureElement } from '@typure/core'
class MyElement extends PureElement {
  title: string

  constructor() {
    super()
    this.title = 'event called'
  }
  handleClick(e: Event) {
    // alert(`Clicked on ${this.title}`)
    console.log(e)
  }

  render() {
    return `
      <div align="center"> 
        hello, this is 
        <div align="center" @click="handleClick">typure.js</div>
      </div>
    `
  }
}
export default MyElement