// @flow
import type { Chant, Chants, State } from '~/data/types'

const SET_CHANTS = 'SET_CHANTS'
const SET_CHANT = 'SET_CHANT'

type SetChantsAction = {
  type: 'SET_CHANTS',
  chants: Chants
}

type Action = SetChantsAction

export const setChants = (chants: Chants) => ({
  type: SET_CHANTS,
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
    case SET_CHANTS:
      return action.chants
    case SET_CHANT:
      const clone = {...state}
      clone[action.key] = action.chant
      return clone
    default:
      return state
  }
}
