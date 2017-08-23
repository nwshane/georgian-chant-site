// @flow

import type { Action, Choirs } from '~/data/types'

export const setChoirs = (choirs: Choirs): Action => ({
  type: 'SET_CHOIRS',
  choirs
})

export default (state: Choirs = {}, action: Action): Choirs => {
  switch (action.type) {
    case 'SET_CHOIRS':
      return action.choirs
    default:
      return state
  }
}
