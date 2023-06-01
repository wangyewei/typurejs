export const isString = (val: unknown): val is string => typeof val === 'string'

export const isHTMLElement = (val: unknown): val is HTMLElement => val instanceof HTMLElement