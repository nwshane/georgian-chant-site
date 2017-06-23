// @flow
import type { Chant, Chants, State } from '~/data/types'

const MERGE_CHANTS = 'MERGE_CHANTS'
const SET_CHANT = 'SET_CHANT'

type MergeChantsAction = {
  type: 'MERGE_CHANTS',
  chants: Chants
}

type Action = MergeChantsAction

export const mergeChants = (chants: Chants) => ({
  type: MERGE_CHANTS,
  chants
})

export const setChant = ({chant, key}: {chant: Chant, key: string}) => ({
  type: SET_CHANT,
  chant,
  key
})

export const getChants = (state: State): Chants => state.chants

export const getChantBySlug = (state: State, slug: string): Chant => (
  getChants(state)[slug]
)

export default (state: Chants = {}, action: Action) => {
  switch (action.type) {
    case MERGE_CHANTS:
      return Object.assign(
        {},
        state,
        action.chants
      )
    case SET_CHANT:
      const clone = {...state}
      clone[action.key] = action.chant
      return clone
    default:
      return state
  }
}
