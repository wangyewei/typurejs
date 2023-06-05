/**
 * @author Yewei Wang
 * @license MIT
 * @copyright 2023-preset Yewei Wang
 */

import { isString, isHTMLElement } from "@typure/shared"
import { warn } from '@typure/runtime'
import { parse } from '@typure/compile'
/**
 * The core class that manages component state and properties. When the
 * state changes, the 'update' function is called to update the user inerface.
 */
export class PureElement extends HTMLElement {
  shadowRoot!: ShadowRoot
  constructor() {
    super()
  }
  /**
   * The jsx-like template string returned in render implemented by the subclass is 
   * mounted when called.
   * Expected features:
   * [x] implements the h function to handle the pure-element syntax that is unique 
   * in jsx-like while this is hanging in render.
   * [x] completes the construction of responsive variable
   */
  connectedCallback() {
    this.shadowRoot = this.attachShadow({ mode: 'open' })
    this.renderElement()
  }

  /**
   * Adds the render content of the element to the Shadow DOM. It first
   * take the rendered content and the handles it diffrently depending on the
   * type of content.
   */
  renderElement() {
    const renderdContent = this.render()
    if (isString(renderdContent)) {
      const parsedContent = parse.call(this, renderdContent)
      this.shadowRoot.appendChild(parsedContent.cloneNode(true))
    } else if (isHTMLElement(renderdContent)) {
      this.shadowRoot.appendChild(renderdContent)
    } else {
      warn(`Incorrect element is being rendered`, renderdContent)
    }
  }
  /**
   * Implemented by derived subclasses, providing derived subclasses,
   * providing a description of the user interface.
   */
  render(): HTMLElement | string {
    throw Error('Must implement the render method')
  }

} 