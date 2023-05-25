type Listener<EventType> = (event: EventType) => void;

export class EventEmitter<EventType extends Listener<EventType>> {
  private listeners: Listener<EventType>[] = []

  on(listener: Listener<EventType>) {
    this.listeners.push(listener)
  }

  off(listener: EventType) {
    const index = this.listeners.indexOf(listener)
    if (index === -1) return
    this.listeners.slice(index, 1)
  }

  emit(event: EventType) {
    this.listeners.forEach(listener => listener(event))
  }
}