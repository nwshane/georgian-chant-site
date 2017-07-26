export default function () {
  const args = Array.from(arguments)
  console.log(...args)
  return args[args.length - 1]
}
