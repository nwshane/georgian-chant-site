// @flow
import type { AppMessage, AppMessageCategory, State } from '~/data/types'
const SET_APP_MESSAGE = 'SET_APP_MESSAGE'
const CLEAR_APP_MESSAGE = 'CLEAR_APP_MESSAGE'

type Action = {
  type: string
} & AppMessage

export const setAppMessage = (text: string, category: AppMessageCategory = 'neutral') => ({
  type: SET_APP_MESSAGE,
  text,
  category
})

export const clearAppMessage = () => ({
  type: CLEAR_APP_MESSAGE
})

export const getAppMessageText = (state: State): string => (state.appMessage.text)

export const getAppMessageCategory = (state: State): string => (state.appMessage.category)

const defaultAppMessage: AppMessage = {
  text: '',
  category: 'neutral'
}

export default (state: AppMessage = defaultAppMessage, action: Action): AppMessage => {
  switch (action.type) {
    case SET_APP_MESSAGE:
      return {
        text: action.text,
        category: action.category
      }
    case CLEAR_APP_MESSAGE:
      return defaultAppMessage
    default:
      return state
  }
}
