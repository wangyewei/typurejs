declare const __DEV__: boolean;

if (typeof __DEV__ === 'undefined') {
  const isDev = true
  Object.defineProperty(globalThis, '__DEV__', {
    value: isDev,
    writable: false,
    enumerable: true,
    configurable: false,
  })
}

export * from './parse'
