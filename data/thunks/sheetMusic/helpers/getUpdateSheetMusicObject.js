// @flow

type PathVariables = {
  sheetMusicKey: string,
  chantSlug: string
}

type Values = ?{}

export default (pathVariables: PathVariables, values: Values) => {
  const {chantSlug, sheetMusicKey} = pathVariables
  const obj = {}
  obj[`chants/${chantSlug}/sheetMusic/${sheetMusicKey}`] = values ? true : null
  obj[`sheetMusic/${sheetMusicKey}`] = values
  return obj
}
