
import { isString } from '@typure/shared'
export abstract class Component extends HTMLElement {

  constructor() {
    super()
  }

  connectedCallback() {
    this.renderRoot()
  }

  private renderRoot() {
    const rendered = this.render()
    if (!rendered) return
    this.innerHTML = isString(rendered) ? rendered : rendered.outerHTML
  }

  abstract render(): HTMLElement | string
}