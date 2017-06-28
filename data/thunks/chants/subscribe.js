// @flow
import { database } from '~/data/firebase'
import { setChants } from '~/data/ducks/chants'
import normalizeChants from '~/data/normalizeChants'

export default () => (dispatch: Function) => {
  return database.ref().child('chants').on('value', (snapshot) => {
    dispatch(setChants(normalizeChants(snapshot.val())))
  })
}
