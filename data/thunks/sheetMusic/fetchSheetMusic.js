// @flow
import {database} from '~/data/firebase'
import type {Dispatch} from '~/data/types'
import {setSheetMusic} from '~/data/ducks/sheetMusic'

export default () => (dispatch: Dispatch) => (
  database.ref().child('sheetMusic').once('value', (snapshot) => {
    dispatch(setSheetMusic(snapshot.val()))
  })
)
