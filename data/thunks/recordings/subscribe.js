// @flow
import { database } from '~/data/firebase'
import { setRecordings } from '~/data/ducks/recordings'

export default () => (dispatch: Function) => (
  database.ref().child('recordings').on('value', (snapshot) => {
    dispatch(setRecordings(snapshot.val()))
  })
)
