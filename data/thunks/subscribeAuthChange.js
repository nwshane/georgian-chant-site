// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'

export default () => (dispatch: Dispatch) => {
  return auth.onAuthStateChanged((currentUser: User) => {
    dispatch(setCurrentUser(currentUser))
  })
}
