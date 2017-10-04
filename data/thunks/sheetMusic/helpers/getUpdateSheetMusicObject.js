// @flow

type PathVariables = {
  sheetMusicKey: string
}

type Values = {}

export default (pathVariables: PathVariables, values: Values) => {
  const {sheetMusicKey} = pathVariables
  const obj = {}
  obj[`sheetMusic/${sheetMusicKey}`] = values
  return obj
}
