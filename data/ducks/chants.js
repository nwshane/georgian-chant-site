// @flow
import type { Chants } from '~/data/types'

const SET_CHANTS = 'SET_CHANTS'

type SetChantsAction = {
  type: 'SET_CHANTS',
  chants: Chants
}

type Action = SetChantsAction

export const setChants = (chants: Chants) => ({
  type: SET_CHANTS,
  chants
})

export default (state: Chants = {}, action: Action) => {
  switch (action.type) {
    case SET_CHANTS:
      return action.chants
    default:
      return state
  }
}
