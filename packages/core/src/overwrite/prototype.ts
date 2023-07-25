/**
 * overwrite api of native JavaScript
 */
import { isArray } from '@typure/shared'

export function overwritesSetup(): [typeof overwritesArray] {
  return [
    overwritesArray
  ]
}


function overwritesArray() {
  const originalMap = Array.prototype.map

  /**
   * when using the `Arrat.prototype.map` in a PureElement
   * a extra comma may appear, which is not needed.
   */

  //@ts-ignore
  Array.prototype.map = function (callback) {
    const mappredResult = originalMap.call(this, callback)

    const templateMapResult = isArray(mappredResult)
      ? mappredResult.join('\n')
      : mappredResult

    return templateMapResult
  }
}