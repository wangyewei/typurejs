import { evtBus } from '../../events'

export function defineEmit(
  eventName: string,
) {
  evtBus.trigger(eventName)
}