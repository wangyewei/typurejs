/**
 * @author Yewei Wang
 * @license MIT
 * @copyright 2023-preset Yewei Wang
 */

import { isString, isHTMLElement, isFunction, isBuiltInEvent } from "@typure/shared"
import { warn } from "@typure/runtime"
import { parse } from '@typure/compile'
import { evtBus } from "./events"
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
    this.update(
      () => this.renderElement()
    )
  }

  /**
   * Binds event listeners to the given element and its descendants
   * based on the attributes starting with `@`
   * When an attribute starts with `@`, it is treated as an event binding
   * attribute.
   * The eventhandler function is expected to be method
   * defined in the current class.
   */
  bindEvent(element: Element | DocumentFragment): Element | DocumentFragment {
    const attributes = (element as Element).attributes
    attributes
      && attributes.length
      && Array.from(attributes).forEach(attr => {
        if (attr.name.startsWith('@')) {
          console.log(attr)
          const eventName = attr.name.slice(1)
          const eventHandler = attr.value

          if (isBuiltInEvent(eventName)) {
            element.addEventListener(eventName, (e: Event) => {
              /**
               * expected features:
               * [x]: PureEventReturnType
               */
              ; (this as Record<string, any>)[eventHandler].call(this, e)

              e.stopPropagation()
            }, false)
          } else {
            /**
             * save custom events into a map, when `defineEmits.emit` is triggerd
             * execute the matching event.
             */

            const originalFunc = new Function(eventHandler)

            const handler =
              (this as Record<string, any>)[eventHandler].bind(this)

            console.log(handler)


            evtBus.emit(eventName, handler)

            console.log(evtBus.eventMap)
          }


          (element as HTMLElement).removeAttribute(attr.name)
        }
      })
    for (let i = 0; i < element.children.length; i++) {
      const child = element.children[i];
      this.bindEvent(child);
    }
    return element;
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
      this.shadowRoot.appendChild(parsedContent)
      /**
       * start with the children[0], it's because the first child of the  
       * `shadowRoot` is fragement.
       */
      this.bindEvent(this.shadowRoot.children[0])
    } else if (isHTMLElement(renderdContent)) {
      this.shadowRoot.appendChild(
        renderdContent.cloneNode(true)
      )
    } else if (__DEV__) {
      warn(`Incorrect element is being rendered`, renderdContent)
    }
  }

  /**
   * Update the current element, creating shadowRoot if it is the first update.
   * xpected features:
   * [x] reactive element
   */
  update(fn?: () => any) {
    if (!this.shadowRoot) {
      this.shadowRoot = this.attachShadow({ mode: 'open' })
    } else {
      this.shadowRoot.innerHTML = ``
      const parsedContent = parse.call(this, this.render() as string)
      this.shadowRoot.appendChild(parsedContent)
      this.bindEvent(this.shadowRoot.children[0])
    }

    fn && isFunction(fn) && fn()
  }
  /**
   * Implemented by derived subclasses, providing derived subclasses,
   * providing a description of the user interface.
   */
  render(): HTMLElement | string {
    throw Error('Must implement the render method')
  }

  scopedCss(style: CSSStyleSheet): void {
    this.shadowRoot.adoptedStyleSheets = [style]
  }
}


/**
 * register components that imports be imported.
 */
export function components(
  components: Record<
    string,
    CustomElementConstructor
  >
) {
  Object.keys(components).forEach(
    compName => customElements.define(compName, components[compName])
  )
}
