// @flow
import type { AppMessage, AppMessageCategory, State, Action } from '~/data/types'

export const setAppMessage = (
  text: string,
  category: AppMessageCategory = 'neutral'
): Action => ({
  type: 'SET_APP_MESSAGE',
  appMessage: {
    text,
    category
  }
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
