// @flow
export const funDebugger = (obj: any): any => {
  console.log(obj)
  // eslint-disable-next-line no-debugger
  debugger
  return obj
}
