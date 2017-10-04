// @flow
import { database } from '~/data/firebase'
import type { Dispatch } from 'redux'
import { setSchools } from '~/data/ducks/schools'

export default () => (dispatch: Dispatch) => (
  database.ref().child('schools').once('value', (snapshot) => {
    dispatch(setSchools(snapshot.val()))
  })
)
