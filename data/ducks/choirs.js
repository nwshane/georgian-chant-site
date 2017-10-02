// @flow

import type { Action, Choirs, Choir, State } from '~/data/types'

export const mergeChoirs = (choirs: Choirs): Action => ({
  type: 'MERGE_CHOIRS',
  choirs
})

export const setChoirs = (choirs: Choirs): Action => ({
  type: 'SET_CHOIRS',
  choirs
})

export const getChoirs = (state: State): Choirs => (
  state.choirs
)

export const getChoir = (slug: string, state: State): Choir => (
  getChoirs(state)[slug]
)

export default (state: Choirs = {}, action: Action): Choirs => {
  switch (action.type) {
    case 'MERGE_CHOIRS':
      return Object.assign(
        {},
        state,
        action.choirs
      )
    case 'SET_CHOIRS':
      return action.choirs
    default:
      return state
  }
}
