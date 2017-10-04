// @flow
import type {Dispatch, SheetMusicScore} from '~/data/types'
import { database } from '~/data/firebase'
import { setAppMessage } from '~/data/ducks/appMessage'
import getUpdateSheetMusicObject from './helpers/getUpdateSheetMusicObject'
import getSheetMusicStorageRef from './helpers/getSheetMusicStorageRef'

export default (sheetMusicScoreId: string, sheetMusicScore: SheetMusicScore) => async function (dispatch: Dispatch) {
  try {
    await database
    .ref()
    .update(getUpdateSheetMusicObject(
      {sheetMusicKey: sheetMusicScoreId, chantSlug: sheetMusicScore.chantSlug},
      null
    ))

    await getSheetMusicStorageRef(sheetMusicScoreId).delete()

    dispatch(setAppMessage({
      text: 'Successfully deleted sheet music score',
      category: 'success'
    }))
  } catch (e) {
    dispatch(setAppMessage({
      text: 'Failed to delete sheet music score',
      category: 'error'
    }))
  }
}
