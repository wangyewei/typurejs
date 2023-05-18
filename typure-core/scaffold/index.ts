
const isString = (val: unknown): val is string => typeof val === 'string'
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