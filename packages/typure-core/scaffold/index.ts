
import { isString } from '@typure/shared'
import { EventEmitter } from '../observe'
import type { PropsType } from '../types/props'
export class Component<P extends PropsType> extends HTMLElement {
  events = new EventEmitter()
  props: P = {} as P

  constructor() {
    super()
    this.events.on(() => {
      this.update();
    })
  }

  connectedCallback() {
    this.update()
  }

  update() {
    const newProps = this.getPropsFromAttr()
    Object.assign(this.props, newProps)
    this.innerHTML = ''
    const renderdContent = this.render()

    if (isString(renderdContent)) {
      this.innerHTML = renderdContent
    } else {
      this.appendChild(renderdContent)
    }
  }

  render(): string | HTMLElement {
    throw Error('Must implement the render method')
  }


  getPropsFromAttr(): P {
    const props: Record<string, unknown> = {}

    const attributes = this.attributes

    Array.from(attributes).forEach(attr => {
      if (attr.name.startsWith('prop-')) {
        const propName = attr.name.slice(5)
        props[propName] = JSON.parse(attr.value)
      }
    })

    return Object.assign({} as P, props)
  }


}