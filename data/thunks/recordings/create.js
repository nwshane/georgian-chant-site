// @flow
import { setAppMessage } from '~/data/ducks/appMessage'
import { database } from '~/data/firebase'
import getUpdateRecordingObject from './getUpdateRecordingObject'
import getRecordingStorageFileRef from './getRecordingStorageFileRef'

type RecordingData = {
  chantSlug: string,
  recordingFile: {
    type: string
  },
  school: string
}

const uploadRecordingFile = (key, recordingFile) => (
  getRecordingStorageFileRef(key)
  .put(recordingFile, { contentType: recordingFile.type })
)

async function updateDatabase (dispatch, data) {
  const { newRecordingRef, school, uploadTask, chantSlug } = data
  const { downloadURL: url } = await uploadTask
  const { key: recordingKey } = newRecordingRef

  const values = { chantSlug, url, school }
  const pathVariables = { recordingKey, chantSlug }

  await database
  .ref()
  .update(getUpdateRecordingObject(pathVariables, values))

  dispatch(setAppMessage({
    text: 'Finished saving the recording',
    category: 'success'
  }))
}

export default (recordingData: RecordingData) => async function (dispatch: Function) {
  const { chantSlug, recordingFile, school } = recordingData
  try {
    const newRecordingRef = await database.ref().child('recordings').push()

    const uploadTask = uploadRecordingFile(newRecordingRef.key, recordingFile)

    const data = { newRecordingRef, uploadTask, chantSlug, school }
    updateDatabase(dispatch, data)

    const uploadTaskObject = {}
    uploadTaskObject[newRecordingRef.key] = uploadTask
    return uploadTaskObject
  } catch (e) {
    dispatch(setAppMessage({
      text: 'Could not save recording',
      category: 'error'
    }))
  }
}
