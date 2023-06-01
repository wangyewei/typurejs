import { isString, isHTMLElement } from '@typure/shared'
import { warn } from '@typure/runtime'

/**
 * The core class that manages component state
 * and properties. When the state changes, the 'update'
 * function is called to update the user inerface.
 */

export class PureElement extends HTMLElement {

  constructor() {
    super()
  }


  connectedCallback() {
    this.renderElement()
  }

  renderElement() {
    const renderdContent = this.render()

    if (isString(renderdContent)) {
      this.innerHTML = renderdContent
    } else if (isHTMLElement(renderdContent)) {
      this.appendChild(renderdContent)
    } else {
      warn(`Incorrect element is being rendered`, renderdContent)
    }

  }
  /**
   * Implemented by derived subclasses, providing
   * derived subclasses, providing a description of 
   * the user interface.
   */
  render(): HTMLElement | string {
    throw Error('Must implement the render method')
  }
} 