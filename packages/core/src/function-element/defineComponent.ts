
import { PureElement } from "../element"
import { overwritesSetup } from '../overwrite/prototype'

export { defineScopedCss } from '../defines/defineScopedCss'

export { defineMethod } from '../defines/defineMethod'

export { defineEmit } from '../defines/defineEmit'

export function defineComponent(
  renderFn: (
    context?: PureElement
  ) => HTMLElement | string
): CustomElementConstructor {
  return class extends PureElement {

    constructor() {
      super()
    }

    render(): string | HTMLElement {
      const [overwritesArray] = overwritesSetup()
      overwritesArray()
      return renderFn(this)
    }

  }
}
