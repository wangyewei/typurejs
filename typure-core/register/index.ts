import type { ComponentOptions } from '../types/components'

export function defineComponent(option: ComponentOptions): void {
  const { name, component } = option
  globalThis.customElements.define(name, component)
}