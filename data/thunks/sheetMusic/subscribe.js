// @flow
import { database } from '~/data/firebase'
import { setSheetMusic } from '~/data/ducks/sheetMusic'

export default () => (dispatch: Function) => {
  return database.ref().child('sheetMusic').on('value', (snapshot) => {
    dispatch(setSheetMusic(snapshot.val()))
  })
}
