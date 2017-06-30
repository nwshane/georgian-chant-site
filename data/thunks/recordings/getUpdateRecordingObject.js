// @flow
import type { Recording } from '~/data/types'

type PathVariables = {
  recordingKey: string,
  chantSlug: string
}

export default ({ recordingKey, chantSlug }: PathVariables, values: ?Recording) => {
  const obj = {}
  obj[`chants/${chantSlug}/recordings/${recordingKey}`] = values ? true : null
  obj[`recordings/${recordingKey}`] = values
  return obj
}