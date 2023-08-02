import { evtBus } from '../events'

export function defineEmit(
  eventName: string,
  ...params: any[]
) {
  evtBus.trigger(eventName, ...params)
}