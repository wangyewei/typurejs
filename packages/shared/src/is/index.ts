export const isString = (val: unknown): val is string => typeof val === 'string'

export const isHTMLElement = (val: unknown): val is HTMLElement => val instanceof HTMLElement

export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isArray = Array.isArray

export const isBuiltInEvent = (evtName: string): boolean => {
  const el = document.createElement('div')

  return evtName in el
}