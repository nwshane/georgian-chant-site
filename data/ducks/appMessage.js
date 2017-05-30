// @flow
import type { State } from '~/data/types'
const SET_APP_MESSAGE = 'SET_APP_MESSAGE'

type Action = {
  type: string,
  message: string
}

export const setAppMessage = (message: string) => ({
  type: SET_APP_MESSAGE,
  message
})

export const getAppMessage = (state: State): string => (state.appMessage)

export default (state: string = '', action: Action): string => {
  switch (action.type) {
    case SET_APP_MESSAGE:
      return action.message
    default:
      return state
  }
}
