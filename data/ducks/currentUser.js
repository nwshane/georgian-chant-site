// @flow
import type { State, User } from '~/data/types'
const SET_CURRENT_USER = 'SET_CURRENT_USER'

type CurrentUserAction = {
  +type: 'SET_CURRENT_USER',
  +currentUser: User
}

type Action = CurrentUserAction

export const setCurrentUser = (currentUser: User): CurrentUserAction => ({
  type: SET_CURRENT_USER,
  currentUser
})

export const getCurrentUser = (state: State): User => (state.currentUser)

export default (state: User = null, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.currentUser
    default:
      return state
  }
}
