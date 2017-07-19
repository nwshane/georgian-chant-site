// @flow
import pick from 'lodash/pick'
import type { Action, Recordings, State } from '~/data/types'
import { getChantRecordingIds } from '~/data/ducks/chants'

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
  pick(getRecordings(state), getChantRecordingIds(state, chantSlug))
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
