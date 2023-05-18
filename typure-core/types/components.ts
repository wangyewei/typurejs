type Component = {
  new(): HTMLElement
}

export type ComponentOptions = {
  name: string,
  component: Component
}