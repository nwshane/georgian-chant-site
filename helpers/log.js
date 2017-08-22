export default function log () {
  const args = Array.from(arguments)
  console.log(...args)
  return args[args.length - 1]
}
