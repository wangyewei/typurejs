
import { PureElement } from "typure-element/element"

export function defineComponent(renderFn: () => HTMLElement | string) {


  return class extends PureElement {

    constructor() {
      super()
    }

    render() {
      return renderFn()
    }

  }
}