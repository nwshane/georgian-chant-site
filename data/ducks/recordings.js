// @flow
import { pick } from 'ramda'
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
