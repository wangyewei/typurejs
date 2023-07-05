export function state<T>(val: T): StateImpl<T> {
  return createState<T>(val)
}

function createState<T>(val: T) {
  return new StateImpl<T>(val)
}

class StateImpl<T> {
  private _value: T

  constructor(val: T) {
    this._value = val
  }

  get value() {
    return this._value
  }

  set value(val: T) {
    this._value = val
  }
}

export type State<T> = StateImpl<T>