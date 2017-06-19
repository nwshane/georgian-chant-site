// @flow
import { auth } from '~/data/firebase'
import axios from 'axios'

export default async function getTokenCookieFromServer () {
  const idToken = await auth.currentUser.getIdToken(true)
  return axios.post('/authWithIdToken', {
    idToken
  })
}
