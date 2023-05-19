import { Component } from '../scaffold'


type PropType = Record<string, any>
export function defineComponent<T extends PropType>(
  name: string,
  props: T = {} as T,
  renderer: (props: T) => HTMLElement | string,
) {
  const componentImpl = class extends Component<T> {
    props = props
    render(): string | HTMLElement {
      return renderer(this.props)
    }
  }

  globalThis.customElements.define(name, componentImpl);
}