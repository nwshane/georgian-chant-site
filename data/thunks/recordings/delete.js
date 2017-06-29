// @flow
import type { Recording } from '~/data/types'
import { database } from '~/data/firebase'
import storage from '~/data/firebaseStorage'
import { setAppMessage } from '~/data/ducks/appMessage'
import getUpdateRecordingObject from './getUpdateRecordingObject'

export default ({chantSlug}: Recording, recordingKey: string) => async function (dispatch: Function) {
  try {
    await database
    .ref()
    .update(getUpdateRecordingObject({ recordingKey, chantSlug }, null))

    await storage()
    .ref()
    .child('recordings')
    .child(recordingKey)
    .delete()

    dispatch(setAppMessage('Successfully deleted recording'))
  } catch (e) {
    dispatch(setAppMessage('Failed to delete recording'))
  }
}
