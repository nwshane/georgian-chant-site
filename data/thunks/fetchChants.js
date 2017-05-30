// @flow
import { database } from '~/data/firebase'
import { setChants } from '~/data/ducks/chants'

export default () => (dispatch: Function) => {
  database.ref().child('chants').once('value', (snapshot) => {
    dispatch(setChants(snapshot.val()))
  })
}
