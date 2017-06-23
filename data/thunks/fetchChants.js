// @flow
import { database } from '~/data/firebase'
import { mergeChants } from '~/data/ducks/chants'

export default () => (dispatch: Function) => (
  database.ref().child('chants').once('value', (snapshot) => {
    dispatch(mergeChants(snapshot.val()))
  })
)
