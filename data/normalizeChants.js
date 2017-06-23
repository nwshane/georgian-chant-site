// @flow
import type { Chants, Chant } from '~/data/types'

const normalizeChant = (chant: Chant): Chant => (
  {
    ...chant,
    recordings: Object.keys(chant.recordings)
  }
)

export default (chants: Chants): Chants => (
  Object.keys(chants).reduce((normalizedChants, key) => {
    normalizedChants[key] = normalizeChant(chants[key])
    return normalizedChants
  }, {})
)
