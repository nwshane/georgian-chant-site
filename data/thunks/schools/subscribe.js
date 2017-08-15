// @flow
import { database } from '~/data/firebase'
import { setSchools } from '~/data/ducks/schools'

export default () => (dispatch: Function) => (
  database.ref().child('schools').on('value', (snapshot) => {
    dispatch(setSchools(snapshot.val()))
  })
)
