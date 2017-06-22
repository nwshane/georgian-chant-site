// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'
import { eraseCookie, readCookie } from '~/helpers/cookieHelpers'
import { FIREBASE_ID_TOKEN_COOKIE } from '~/universal/constants'
import axios from 'axios'

let subscribed = false

// Only subscribe once, even if this function is called multiple
// times on the client
export default () => (dispatch: Dispatch, getState: Function) => {
  if (subscribed) return
  subscribed = true

  return auth.onIdTokenChanged(async function (currentUser: User) {
    dispatch(setCurrentUser(currentUser))

    if (!currentUser) {
      if (readCookie(FIREBASE_ID_TOKEN_COOKIE)) {
        eraseCookie(FIREBASE_ID_TOKEN_COOKIE)
      }

      return
    }

    const idToken = await auth.currentUser.getIdToken()

    // if cookie does not exist, or the token was refreshed, get
    // a new cookie with correct token
    if (readCookie(FIREBASE_ID_TOKEN_COOKIE) !== idToken) {
      axios.post('/authWithIdToken', {
        idToken
      })
    }
  })
}
