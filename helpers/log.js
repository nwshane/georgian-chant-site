export function logArgs () {
  const args = Array.from(arguments)
  console.log(...args)
  return args[args.length - 1]
}

export const log = (obj) => {
  console.log(obj)
  return obj
}
