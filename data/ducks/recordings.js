// @flow
import { pick, values } from 'ramda'
import type { Action, Recordings, State } from '~/data/types'
import { getChantRecordingIds } from '~/data/ducks/chants'
import { getChoirRecordingIds } from '~/data/ducks/choirs'

export const mergeRecordings = (recordings: Recordings): Action => ({
  type: 'MERGE_RECORDINGS',
  recordings
})

export const setRecordings = (recordings: Recordings): Action => ({
  type: 'SET_RECORDINGS',
  recordings
})

export const getRecordings = (state: State): Recordings => (
  state.recordings
)

export const getRecordingsForChant = (
  state: State,
  chantSlug: string
): Recordings => (
  pick(
    getChantRecordingIds(state, chantSlug),
    getRecordings(state)
  )
)

export const getRecordingsForChoir = (
  state: State,
  choirSlug: string
): Recordings => (
  pick(
    getChoirRecordingIds(choirSlug, state),
    getRecordings(state)
  )
)

export const getMinimumRecordingsYear = (state: State): number => (
  values(getRecordings(state)).reduce((minYear, recording) => (
    recording.year < minYear ? recording.year : minYear
  ), 1920)
)

export const getMaximumRecordingsYear = (state: State): number => (
  values(getRecordings(state)).reduce((maxYear, recording) => (
    recording.year > maxYear ? recording.year : maxYear
  ), 2017)
)

export default (recordingsState: ?Recordings = {}, action: Action): ?Recordings => {
  switch (action.type) {
    case 'MERGE_RECORDINGS':
      return Object.assign(
        {},
        recordingsState,
        action.recordings
      )
    case 'SET_RECORDINGS':
      return action.recordings
    default:
      return recordingsState
  }
}
