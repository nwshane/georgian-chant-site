// @flow
import pick from 'lodash/pick'
import type { Recordings, State } from '~/data/types'
import { getChantRecordingIds } from '~/data/ducks/chants'
const MERGE_RECORDINGS = 'MERGE_RECORDINGS'

type MergeRecordingsAction = {
  +type: 'MERGE_RECORDINGS',
  +recordings: Recordings
}

type Action = MergeRecordingsAction

export const mergeRecordings = (recordings: Recordings): MergeRecordingsAction => ({
  type: MERGE_RECORDINGS,
  recordings
})

export const getRecordings = (state: State): Recordings => (
  state.recordings
)

export const getRecordingsForChant = (state: State, chantSlug: string) => (
  pick(getRecordings(state), getChantRecordingIds(state, chantSlug))
)

export default (recordingsState: ?Recordings = {}, action: Action) => {
  switch (action.type) {
    case MERGE_RECORDINGS:
      return Object.assign(
        {},
        recordingsState,
        action.recordings
      )
    default:
      return recordingsState
  }
}
