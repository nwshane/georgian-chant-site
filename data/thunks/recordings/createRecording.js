// @flow
import { setAppMessage } from '~/data/ducks/appMessage'
import { database } from '~/data/firebase'
import getUpdateRecordingObject from './getUpdateRecordingObject'
import getRecordingStorageFileRef from './getRecordingStorageFileRef'

type File = {
  type: string
}

type RecordingData = {
  chantSlug: string,
  choir: string,
  school: string,
  year: number
}

const uploadRecordingFile = (key, recordingFile) => (
  getRecordingStorageFileRef(key)
  .put(recordingFile, { contentType: recordingFile.type })
)

async function updateDatabase (dispatch, uploadTask, newRecordingRef, data) {
  const { downloadURL: url } = await uploadTask

  const values = Object.assign(
    {},
    data,
    {url}
  )

  const pathVariables = {
    recordingKey: newRecordingRef.key,
    chantSlug: data.chantSlug,
    choir: data.choir
  }

  await database
  .ref()
  .update(getUpdateRecordingObject(pathVariables, values))

  dispatch(setAppMessage({
    text: 'Finished saving the recording',
    category: 'success'
  }))
}

export default (recordingFile: File, recordingData: RecordingData) => async function (dispatch: Function) {
  try {
    const newRecordingRef = await database.ref().child('recordings').push()
    const uploadTask = uploadRecordingFile(newRecordingRef.key, recordingFile)

    updateDatabase(
      dispatch,
      uploadTask,
      newRecordingRef,
      recordingData
    )

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
