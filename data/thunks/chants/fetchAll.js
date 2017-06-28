// @flow
import { database } from '~/data/firebase'
import { mergeChants } from '~/data/ducks/chants'
import normalizeChants from '~/data/normalizeChants'

export default () => (dispatch: Function) => (
  database.ref().child('chants').once('value', (snapshot) => {
    dispatch(mergeChants(normalizeChants(snapshot.val())))
  })
)
