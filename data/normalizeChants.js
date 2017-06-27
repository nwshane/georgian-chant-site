// @flow
import type { Chants, Chant } from '~/data/types'

const flattenObjectIntoKeysArray = (recordings) => (
  recordings && !Array.isArray(recordings)
  ? Object.keys(recordings)
  : recordings
)

const normalizeChant = (chant: Chant): Chant => (
  chant ? {
    ...chant,
    recordings: flattenObjectIntoKeysArray(chant.recordings)
  } : chant
)

export default (chants: Chants): Chants => (
  Object.keys(chants).reduce((normalizedChants, key) => {
    normalizedChants[key] = normalizeChant(chants[key])
    return normalizedChants
  }, {})
)
