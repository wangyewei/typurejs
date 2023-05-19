type Component<T> = {
  new(props: T): HTMLElement
}

export type ComponentOptions<T> = {
  name: string,
  component: Component<T>
}