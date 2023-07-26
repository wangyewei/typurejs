type EventHandler = Function | ((...args: any[]) => any)

class Events {

  eventMap!: Map<string, EventHandler>

  constructor() {
    this.eventMap = new Map()
  }

  emit(key: string, val: EventHandler) {
    this.eventMap.set(key, val)
  }

  trigger(key: string, ...params: any[]) {
    if (!this.eventMap.has(key)) return
    this.eventMap.get(key)!(...params)
  }

}

const evtBus = new Events()

export { evtBus }