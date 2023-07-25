import { PureElement } from "../../element"

export function defineMethod(
  context: PureElement,
  fnKey: string,
  fn: Function
) {
  (context as Record<string, any>)[fnKey] = fn
  return fn
}

