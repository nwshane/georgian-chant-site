// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'
import { setAppMessage } from '~/data/ducks/appMessage'
import getTokenCookieFromServer from '~/helpers/getTokenCookieFromServer'

export default () => (dispatch: Dispatch, getState: Function) => {
  let { currentUser: previousCurrentUser } = getState()

  return auth.onAuthStateChanged((currentUser: User) => {
    dispatch(setCurrentUser(currentUser))

    /*
    If the previous currentUser value is null, and a non-null currentUser
    has just been fetched from server, that means one of two things:
    1. User just logged in.
    2. For some reason, user is logged in with firebase, but does not
       have cookie set so that georgian chant server does not know the user
       is logged in.

    In both of the cases, the user needs to get a cookie containing
    the token from georgian chant server.
    */
    if (!previousCurrentUser && currentUser) getTokenCookieFromServer()
    previousCurrentUser = currentUser
  })
}
