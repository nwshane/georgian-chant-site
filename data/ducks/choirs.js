// @flow

import type { Action, Choirs, State } from '~/data/types'

export const setChoirs = (choirs: Choirs): Action => ({
  type: 'SET_CHOIRS',
  choirs
})

export const getChoirs = (state: State): Choirs => (
  state.choirs
)

export default (state: Choirs = {}, action: Action): Choirs => {
  switch (action.type) {
    case 'SET_CHOIRS':
      return action.choirs
    default:
      return state
  }
}
