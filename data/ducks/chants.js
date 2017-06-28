// @flow
import type { Chant, Chants, State } from '~/data/types'

const MERGE_CHANTS = 'MERGE_CHANTS'
const SET_CHANTS = 'SET_CHANTS'

type MergeChantsAction = {
  type: 'MERGE_CHANTS',
  chants: Chants
}

type Action = MergeChantsAction

export const mergeChants = (chants: Chants) => ({
  type: MERGE_CHANTS,
  chants
})

export const setChants = (chants: Chants) => ({
  type: SET_CHANTS,
  chants
})

export const getChants = (state: State): Chants => state.chants

export const getChantBySlug = (state: State, slug: string): Chant => (
  getChants(state)[slug]
)

export const getChantRecordingIds = (state: State, slug: string): Array<string> => (
  getChantBySlug(state, slug).recordings
)

export default (state: Chants = {}, action: Action) => {
  switch (action.type) {
    case MERGE_CHANTS:
      return Object.assign(
        {},
        state,
        action.chants
      )
    case SET_CHANTS:
      return action.chants
    default:
      return state
  }
}
