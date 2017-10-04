// @flow
import { database } from '~/data/firebase'
import type { Dispatch } from 'redux'
import { setChoirs } from '~/data/ducks/choirs'

export default () => (dispatch: Dispatch) => (
  database.ref().child('choirs').once('value', (snapshot) => {
    dispatch(setChoirs(snapshot.val()))
  })
)
