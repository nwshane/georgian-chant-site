// @flow
import { setAppMessage } from '~/data/ducks/appMessage'
import { database } from '~/data/firebase'
import storage from '~/data/firebaseStorage'
import getUpdateRecordingObject from './getUpdateRecordingObject'

type RecordingData = {
  chantSlug: string,
  recordingFile: {
    type: string
  }
}

const uploadRecordingFile = (key, recordingFile) => (
  storage()
  .ref()
  .child('recordings')
  .child(key)
  .put(recordingFile, { contentType: recordingFile.type })
)

async function updateDatabase (dispatch, { newRecordingRef, uploadTask, chantSlug }) {
  const { downloadURL: url } = await uploadTask
  const { key: recordingKey } = newRecordingRef
  const values = { chantSlug, url }

  await database
  .ref()
  .update(getUpdateRecordingObject({ recordingKey, chantSlug }, values))

  dispatch(setAppMessage('Finished saving the recording', 'success'))
}

export default ({ chantSlug, recordingFile }: RecordingData) => async function (dispatch: Function) {
  try {
    const newRecordingRef = await database.ref().child('recordings').push()

    const uploadTask = uploadRecordingFile(newRecordingRef.key, recordingFile)

    updateDatabase(dispatch, { newRecordingRef, uploadTask, chantSlug })

    const uploadTaskObject = {}
    uploadTaskObject[newRecordingRef.key] = uploadTask
    return uploadTaskObject
  } catch (e) {
    dispatch(setAppMessage('Could not save recording', 'error'))
  }
}
