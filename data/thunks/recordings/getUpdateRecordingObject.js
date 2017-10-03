// @flow
import type { Recording } from '~/data/types'

type PathVariables = {
  recordingKey: string,
  chantSlug: string,
  choir: string
}

export default (pathVariables: PathVariables, values: ?Recording) => {
  const { choir, recordingKey, chantSlug } = pathVariables
  const obj = {}
  obj[`chants/${chantSlug}/recordings/${recordingKey}`] = values ? true : null
  obj[`choirs/${choir}/recordings/${recordingKey}`] = values ? true : null
  obj[`recordings/${recordingKey}`] = values
  return obj
}
