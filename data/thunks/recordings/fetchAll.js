// @flow
import { database } from '~/data/firebase'
import { mergeRecordings } from '~/data/ducks/recordings'

export default () => (dispatch: Function) => (
  database.ref().child('recordings').once('value', (snapshot) => {
    dispatch(mergeRecordings(snapshot.val()))
  })
)
