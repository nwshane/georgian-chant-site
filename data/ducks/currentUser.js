// @flow
import type { State, User, Action } from '~/data/types'

export const setCurrentUser = (currentUser: User): Action => ({
  type: 'SET_CURRENT_USER',
  currentUser
})

export const getCurrentUser = (state: State): User => (state.currentUser)

export default (state: User = null, action: Action): ?User => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return action.currentUser
    default:
      return state
  }
}
