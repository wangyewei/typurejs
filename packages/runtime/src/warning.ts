
/**
 * When used in a development environment,it throws relevant errors that the framework 
 * can foresee. it is not execured in the production enviroment to from dead code and 
 * reduce the package size.
 * expected features:
 * [x] extensible error trapping
 */

export function warn(msg: string, args: any[]) {
  if (!__DEV__) return
  console.warn(`[typure warning]: ${msg}`, ...args)
}