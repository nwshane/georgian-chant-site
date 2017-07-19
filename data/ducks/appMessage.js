// @flow
import type { AppMessage, State, Action } from '~/data/types'

export const setAppMessage = (appMessage: AppMessage): Action => ({
  type: 'SET_APP_MESSAGE',
  appMessage
})

export const clearAppMessage = (): Action => ({
  type: 'CLEAR_APP_MESSAGE'
})

export const getAppMessageText = (state: State): string => (
  state.appMessage.text
)

export const getAppMessageCategory = (state: State): string => (
  state.appMessage.category
)

const defaultAppMessage: AppMessage = {
  text: '',
  category: 'neutral'
}

export default (
  state: AppMessage = defaultAppMessage,
  action: Action
): AppMessage => {
  switch (action.type) {
    case 'SET_APP_MESSAGE':
      return action.appMessage
    case 'CLEAR_APP_MESSAGE':
      return defaultAppMessage
    default:
      return state
  }
}
