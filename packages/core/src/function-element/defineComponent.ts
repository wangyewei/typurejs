
import { PureElement } from "../element"
import { overwritesSetup } from '../overwrite/prototype'
export function defineComponent(
  renderFn: () => HTMLElement | string
): CustomElementConstructor {


  return class extends PureElement {

    constructor() {
      super()
    }

    render() {
      return (function () {
        const [overwritesArray] = overwritesSetup()
        overwritesArray()


        return renderFn()
      })()
    }

  }
}