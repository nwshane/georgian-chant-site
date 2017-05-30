// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'
import { setAppMessage } from '~/data/ducks/appMessage'

export default () => (dispatch: Dispatch) => {
  return auth.onAuthStateChanged((currentUser: User) => {
    dispatch(setCurrentUser(currentUser))
    if (currentUser) {
      dispatch(setAppMessage('Successfully Logged In'))
    } else {
      dispatch(setAppMessage('Successfully Logged Out'))
    }
  })
}
