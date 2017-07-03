// @flow
import type { Recording } from '~/data/types'
import { database } from '~/data/firebase'
import { setAppMessage } from '~/data/ducks/appMessage'
import getUpdateRecordingObject from './getUpdateRecordingObject'
import getRecordingStorageFileRef from './getRecordingStorageFileRef'

export default ({chantSlug}: Recording, recordingKey: string) => async function (dispatch: Function) {
  try {
    await database
    .ref()
    .update(getUpdateRecordingObject({ recordingKey, chantSlug }, null))

    await getRecordingStorageFileRef(recordingKey)
    .delete()

    dispatch(setAppMessage('Successfully deleted recording'))
  } catch (e) {
    dispatch(setAppMessage('Failed to delete recording'))
  }
}
