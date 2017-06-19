// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'
import getTokenCookieFromServer from '~/helpers/getTokenCookieFromServer'
import { eraseCookie, readCookie } from '~/helpers/cookieHelpers'
import { FIREBASE_ID_TOKEN_COOKIE } from '~/universal/constants'

let subscribed = false

// Only subscribe once, even if this function is called multiple
// times on the client
export default () => (dispatch: Dispatch, getState: Function) => {
  if (subscribed) return
  subscribed = true

  return auth.onAuthStateChanged((currentUser: User) => {
    dispatch(setCurrentUser(currentUser))

    if (currentUser && !readCookie(FIREBASE_ID_TOKEN_COOKIE)) {
      getTokenCookieFromServer()
    }

    if (!currentUser && readCookie(FIREBASE_ID_TOKEN_COOKIE)) {
      eraseCookie(FIREBASE_ID_TOKEN_COOKIE)
    }
  })
}
