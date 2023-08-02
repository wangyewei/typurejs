import { PureElement } from "../element"

export function defineMethod<T extends Function>(
  context: PureElement,
  fnKey: string,
  fn: T
): T {
  (context as Record<string, any>)[fnKey] = fn
  return fn
}