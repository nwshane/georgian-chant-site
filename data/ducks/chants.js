// @flow
import type { Chant, Chants, State } from '~/data/types'
import find from 'lodash.find'

const SET_CHANTS = 'SET_CHANTS'
const ADD_CHANT = 'ADD_CHANT'

type SetChantsAction = {
  type: 'SET_CHANTS',
  chants: Chants
}

type Action = SetChantsAction

export const setChants = (chants: Chants) => ({
  type: SET_CHANTS,
  chants
})

export const addChant = ({chant, key}: {chant: Chant, key: string}) => ({
  type: ADD_CHANT,
  chant,
  key
})

export const getChants = (state: State): Chants => state.chants

export const getChantBySlug = (state: State, slug: string): Chant => (
  find(getChants(state), (chant) => chant && chant.slug === slug)
)

export default (state: Chants = {}, action: Action) => {
  switch (action.type) {
    case SET_CHANTS:
      return action.chants
    case ADD_CHANT:
      const clone = {...state}
      clone[action.key] = action.chant
      return clone
    default:
      return state
  }
}
