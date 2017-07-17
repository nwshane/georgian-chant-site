// @flow
import { auth } from '~/data/firebase'
import { setCurrentUser } from '~/data/ducks/currentUser'
import type { Dispatch, User } from '~/data/types'
import { eraseCookie, readCookie } from '~/helpers/cookieHelpers'
import { FIREBASE_ID_TOKEN_COOKIE } from '~/universal/constants'
import axios from 'axios'
import getParameterByName from '~/helpers/getParameterByName'

async function postNewIdToken (idToken) {
  return axios.post('/authWithIdToken', {
    idToken
  })
}

export default () => (dispatch: Dispatch, getState: Function) => {
  return auth.onIdTokenChanged(async function (currentUser: User) {
    dispatch(setCurrentUser(currentUser))

    if (!currentUser) {
      if (readCookie(FIREBASE_ID_TOKEN_COOKIE)) {
        eraseCookie(FIREBASE_ID_TOKEN_COOKIE)
      }
    } else {
      const idToken = await auth.currentUser.getIdToken(true)

      // if cookie does not exist, or the token was refreshed, get
      // a new cookie with correct token
      if (readCookie(FIREBASE_ID_TOKEN_COOKIE) !== idToken) {
        await postNewIdToken(idToken)
      }
    }

    // The server can redirect the user to a URL like /redirect?url=/ka/admin
    // if it detects an expired idToken
    if (window.location.pathname === '/redirect') {
      window.location.replace(getParameterByName('url'))
    }
  })
}
