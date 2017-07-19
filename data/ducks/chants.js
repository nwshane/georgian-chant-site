// @flow
import type { Action, Chant, Chants, State } from '~/data/types'

export const mergeChants = (chants: Chants): Action => ({
  type: 'MERGE_CHANTS',
  chants
})

export const setChants = (chants: Chants): Action => ({
  type: 'SET_CHANTS',
  chants
})

export const getChants = (state: State): Chants => state.chants

export const getChantBySlug = (state: State, slug: string): Chant => (
  getChants(state)[slug]
)

export const getChantRecordingIds = (state: State, slug: string): Array<string> => (
  getChantBySlug(state, slug).recordings
)

export default (state: Chants = {}, action: Action): Chants => {
  switch (action.type) {
    case 'MERGE_CHANTS':
      return Object.assign(
        {},
        state,
        action.chants
      )
    case 'SET_CHANTS':
      return action.chants
    default:
      return state
  }
}
