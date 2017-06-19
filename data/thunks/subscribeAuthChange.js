// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'
import getTokenCookieFromServer from '~/helpers/getTokenCookieFromServer'
import { eraseCookie, readCookie } from '~/helpers/cookieHelpers'
import { FIREBASE_ID_TOKEN_COOKIE } from '~/universal/constants'

export default () => (dispatch: Dispatch, getState: Function) => {
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
